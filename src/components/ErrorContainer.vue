<template>
  <div class="error-container">
    <ErrorBar v-for="error in errors" :key="error.id" :error="error" />
  </div>
</template>

<script>
import ErrorBar from '../components/ErrorBar.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'ErrorContainer',
  components: { ErrorBar },
  setup() {
    const store = useStore()
    return {
      errors: computed(() => store.getters.getErrors)
    }
  }
}
</script>

<style scoped>
.error-container {
  position: fixed;
  bottom: 0;
  right: 0;
  padding-right: 40px;
}
</style>