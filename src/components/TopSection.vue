<template>
  <div>
    <section class="section">
      <h1 class="title">{{ api }}</h1>
      <h2 class="subtitle">
        More information about this API can be found
        <a :href="url" target="_blank">here</a>
      </h2>
    </section>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'TopSection',
  props: {
    api: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
hr {
  border: 1px solid #696969;
}
</style>
