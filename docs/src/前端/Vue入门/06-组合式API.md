# Vue 3 Composition API

## 什么是 Composition API？

Composition API 是 Vue 3 中引入的一种新的 API，它提供了一种更灵活的代码组织方式，使得逻辑复用更加容易。Composition API 主要由以下几个部分组成：

-   `setup()` 函数：组件的入口点，用于定义组件的响应式数据、计算属性、方法等。
-   响应式 API：如 `ref`、`reactive`、`computed`、`watch` 等，用于创建和管理响应式数据。
-   生命周期钩子：如 `onMounted`、`onUpdated`、`onUnmounted` 等，用于在组件的不同生命周期阶段执行代码。

## `setup()` 函数

`setup()` 函数是 Composition API 的核心，它接收两个参数：

-   `props`：组件的 props。
-   `context`：一个包含 `emit`、`attrs`、`slots` 等属性的对象。

`setup()` 函数必须返回一个对象，该对象的属性可以在模板中使用。

```vue
<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);

const increment = () => {
  count.value++;
};
</script>
```

## 逻辑复用

Composition API 的一个主要优点是它可以更容易地复用逻辑。我们可以将逻辑提取到单独的函数中，然后在多个组件中复用。

例如，创建一个名为 `useCounter` 的函数：

```javascript
// useCounter.js
import { ref } from 'vue';

export function useCounter(initialCount = 0) {
  const count = ref(initialCount);

  const increment = () => {
    count.value++;
  };

  return {
    count,
    increment,
  };
}
```

然后在组件中使用 `useCounter` 函数：

```vue
<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup>
import { useCounter } from './useCounter';

const { count, increment } = useCounter(10);
</script>
```

## 生命周期钩子

Composition API 提供了新的生命周期钩子，它们都以 `on` 开头，例如：

-   `onMounted`：组件挂载后执行。
-   `onUpdated`：组件更新后执行。
-   `onUnmounted`：组件卸载前执行。

```vue
<template>
  <div>
    <p>Count: {{ count }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const count = ref(0);

onMounted(() => {
  console.log('Component mounted');
});

onUnmounted(() => {
  console.log('Component unmounted');
});
</script>
```

## 总结

Composition API 是 Vue 3 中非常重要的一个特性，它可以帮助我们更好地组织和复用代码。接下来，我们将学习 Vue 3 的其他高级特性。
