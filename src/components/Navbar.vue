<script setup>

const props = defineProps({
  title: {
    type: String,
    default: 'Xayr'
  }
})

console.log(props.title)

const emit = defineEmits(['test', 'boshqa', 'ok'])

const handleClick = () => {
  emit('test', 'boladan otaga salom')
}
</script>
<template>
  <div>
    <h1>121</h1>
    <h1>{{ title }}</h1>

    <button @click="handleClick">button</button>

  </div>
</template>



<style lang="scss" scoped></style>