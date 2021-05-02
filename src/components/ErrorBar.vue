<template>
  <div class="error-bar">
    <p>{{ error.message }}</p>
  </div>
</template>

<script>
import { reactive, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'ErrorBar',
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const store = useStore()
    onMounted(setTimeLimit)
    const state = reactive({
      timeout: null,
    })

    function setTimeLimit() {
      state.timeout = setTimeout(() => store.dispatch('remove', props.error.id), 5000)
    }

    onUnmounted(() => clearTimeout(state.timeout))
    return { state }
  }
  // data() {
  //   return {
  //     timeout: null
  //   }
  // },
  // mounted() {
  //   this.timeout = setTimeout(() => this.remove(this.error))
  // },
  // beforeUnmount() {
  //   clearTimeout(this.timeout)
  // },
  // methods: mapActions('errors')
}
</script>

<style scoped>
.error-bar {
  margin: 1em 0 1em;
}

p {
  color: red;
}
</style>