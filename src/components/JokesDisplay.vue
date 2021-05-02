<template>
  <div>
    <section v-if="Object.keys(joke).length" class="section">
      <div v-if="joke.error">
        {{ joke.message }}
      </div>
      <div v-else>
        <div class="columns">
          <div class="column">
            <p>Category: <span>{{ joke.category }}</span></p>
          </div>
          <div class="column flags" v-if="joke.flags.length">
            <p>Flags:
              <span v-for="(flag, index) in joke.flags" :key="index">
                {{ flag }}
              </span>
            </p>
          </div>
        </div>

        <div class="columns is-centered">
          <div v-if="joke.type == 'twopart'" class="column">
            <h3 class="is-size-5">{{ joke.setup }}</h3>
            <h3 class="is-size-5">{{ joke.delivery }}</h3>
          </div>
          <div v-else class="column">
            <h3 class="is-size-5">{{ joke.joke }}</h3>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'JokesDisplay',
  setup() {
    const store = useStore()
    return {
      joke: computed(() => store.getters.getJoke)
    }
  }
}
</script>

<style scoped>
span + span {
    margin-left: 5px;
}

.flags {
  color: red;
}
</style>