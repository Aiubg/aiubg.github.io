# 组合式 API 与响应式进阶

## 3.1 为什么需要组合式 API？

### 选项式 API 的局限性

```javascript
// 选项式API示例
export default {
  data() {
    return { count: 0 }
  },
  methods: {
    increment() {
      this.count++
    },
  },
  computed: {
    double() {
      return this.count * 2
    },
  },
  mounted() {
    console.log("组件已挂载")
  },
}
```

**存在的问题**：

- 功能逻辑分散在不同选项中
- 大型组件难以维护（"碎片化代码"）
- 类型推导困难
- 逻辑复用局限（mixins 的缺陷）

### 组合式 API 的优势

```javascript
// 组合式API示例
import { ref, computed, onMounted } from "vue"

export default {
  setup() {
    const count = ref(0)
    const double = computed(() => count.value * 2)

    function increment() {
      count.value++
    }

    onMounted(() => {
      console.log("组件已挂载")
    })

    return { count, double, increment }
  },
}
```

**核心改进**：

1. 逻辑关注点集中
2. 更好的类型支持
3. 灵活的逻辑复用
4. 更清晰的代码组织

## 3.2 setup 函数详解

### 基本结构

```javascript
export default {
  setup(props, context) {
    // 1. 接收props（响应式，不可解构）
    console.log(props.title)

    // 2. 访问上下文
    console.log(context.attrs)
    console.log(context.emit)

    // 3. 定义响应式数据
    const state = reactive({ count: 0 })

    // 4. 返回模板可用内容
    return { state }
  },
}
```

### 重要规则

1. **`this`不可用**：setup 中无法访问组件实例
2. **参数解构处理**：

```javascript
import { toRefs } from "vue"

export default {
  setup(props) {
    // 正确解构方式
    const { title } = toRefs(props)
    return { title }
  },
}
```

3. **异步限制**：setup 不能是 async 函数

## 3.3 响应式核心：ref vs reactive

### ref 的使用

```javascript
import { ref } from "vue"

// 基本类型
const count = ref(0) // { value: 0 }

// 引用类型
const user = ref({
  name: "Alice",
  age: 25,
})

// 模板中自动解包
// <div>{{ count }}</div> 无需.value
```

### reactive 的使用

```javascript
import { reactive } from "vue"

const state = reactive({
  count: 0,
  user: {
    name: "Bob",
    skills: ["JS", "Vue"],
  },
})

// 修改方式
state.count++
state.user.skills.push("React")
```

### 对比选择

| 特性     | ref             | reactive                 |
| -------- | --------------- | ------------------------ |
| 基本类型 | 推荐            | 需要对象包装             |
| 引用类型 | 使用.value 访问 | 直接访问                 |
| 模板使用 | 自动解包        | 直接访问属性             |
| 类型支持 | 明确类型        | 需要接口定义             |
| 解构     | 需要.value      | 需使用 toRefs 保持响应式 |

## 3.4 组合式生命周期

### 新旧生命周期对比

```javascript
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue"

export default {
  setup() {
    onBeforeMount(() => {
      console.log("挂载前")
    })

    onMounted(() => {
      console.log("挂载完成")
    })

    // 其他生命周期同理...
  },
}
```

### 执行顺序演示

```javascript
// 选项式API
export default {
  beforeCreate() { console.log(1) },
  created() { console.log(2) },
  beforeMount() { console.log(3) },
  mounted() { console.log(4) }
}

// 组合式API
setup() {
  console.log('等同于created: 1')
  onBeforeMount(() => { console.log(2) })
  onMounted(() => { console.log(3) })
}
```

## 3.5 计算属性与侦听器

### computed 使用

```javascript
import { ref, computed } from "vue"

const count = ref(0)
const double = computed({
  get: () => count.value * 2,
  set: (val) => {
    count.value = val / 2
  },
})

console.log(double.value) // 0
double.value = 8
console.log(count.value) // 4
```

### watch 全家桶

```javascript
import { watch, watchEffect } from "vue"

// 侦听单个ref
watch(count, (newVal, oldVal) => {
  console.log(`count变化: ${oldVal} → ${newVal}`)
})

// 侦听多个源
watch([count, name], ([newCount, newName]) => {
  console.log(`count或name变化`)
})

// 立即执行+深度监听
watch(
  () => state.user,
  (user) => {
    console.log("user变化:", user)
  },
  { immediate: true, deep: true }
)

// 副作用监听
const stop = watchEffect((onInvalidate) => {
  console.log("count值:", count.value)
  onInvalidate(() => {
    // 清理副作用
    clearTimeout(timer)
  })
})

// 停止监听
stop()
```

## 3.6 自定义组合函数

### 创建 useMouseTracker

```javascript
// useMouse.js
import { ref, onMounted, onUnmounted } from "vue"

export function useMouse() {
  const x = ref(0)
  const y = ref(0)

  function update(e) {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    window.addEventListener("mousemove", update)
  })

  onUnmounted(() => {
    window.removeEventListener("mousemove", update)
  })

  return { x, y }
}
```

### 在组件中使用

```javascript
import { useMouse } from "./useMouse"

export default {
  setup() {
    const { x, y } = useMouse()
    return { x, y }
  },
}
```

## 3.7 实战：重构 TodoList

```vue
<script setup>
import { ref, computed } from "vue"

const newTodo = ref("")
const todos = ref([])
const filter = ref("all")

const filteredTodos = computed(() => {
  switch (filter.value) {
    case "done":
      return todos.value.filter((t) => t.done)
    case "pending":
      return todos.value.filter((t) => !t.done)
    default:
      return todos.value
  }
})

function addTodo() {
  if (newTodo.value.trim()) {
    todos.value.push({
      id: Date.now(),
      text: newTodo.value,
      done: false,
    })
    newTodo.value = ""
  }
}

function removeTodo(id) {
  todos.value = todos.value.filter((t) => t.id !== id)
}
</script>

<template>
  <input v-model="newTodo" @keyup.enter="addTodo" />
  <select v-model="filter">
    <option value="all">全部</option>
    <option value="done">已完成</option>
    <option value="pending">未完成</option>
  </select>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.done" />
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="removeTodo(todo.id)">删除</button>
    </li>
  </ul>
</template>
```

**新增功能**：

- 使用`<script setup>`语法糖
- 添加任务完成状态
- 实现过滤功能
- 持久化存储（可结合 localStorage）

## 本章总结

通过本章学习，你已经能够：
✅ 使用组合式 API 组织代码  
✅ 合理选择 ref 与 reactive  
✅ 创建计算属性和侦听器  
✅ 封装自定义组合函数  
✅ 重构复杂组件

**常见问题解答**：

Q：什么时候应该使用组合式 API？  
A：当组件逻辑复杂需要更好组织时，或需要逻辑复用时推荐使用。

Q：ref 和 reactive 如何选择？  
A：基本类型用 ref，对象类型根据是否需要解构决定，推荐优先使用 ref。

Q：组合式 API 会影响性能吗？  
A：不会，组合式 API 是代码组织方式，不影响运行时性能。

**扩展挑战**：

1. 为 TodoList 添加分类标签功能
2. 实现数据持久化存储
3. 添加动画过渡效果
4. 实现批量操作功能

下一章我们将深入 Vue3 的生态系统，学习路由管理(Vue Router)和状态管理(Pinia)！
