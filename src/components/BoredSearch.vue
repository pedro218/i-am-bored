<template>
  <div>
    <section class="section">
      <h3 class="is-size-5">Press search activity to get a random activity.</h3>

      <div class="toolbar">
        <p>You can modify the 'category' of the activiy you want with the options below</p>
        <label class="radio" :class="{'checked': state.type == selected}" v-for="(selected, index) in state.types" :key="index">
          <input type="radio" name="type" :value="selected" v-model="state.type">
          {{ selected }}
        </label>
      </div>

      <button v-if="state.type" class="button is-warning" v-on:click="clear">Clear</button> <br>
      <button class="button" :class="{'is-loading': state.isSearching}" v-on:click="search">Search Activity</button>
    </section>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'BoredSearch',
  setup() {
    const store = useStore()
    const state = reactive ({
      type: '',
      types: ['education', 'recreational', 'social', 'diy', 
            'charity', 'cooking', 'relaxation', 'music', 'busywork'],
      isSearching: false
    })

    async function search() {
      state.isSearching = true
      await store.dispatch('fetchAction', state.type)
      state.isSearching = false
    }

    const clear = () => state.type = ''
    return { state, search, clear }
  }
}
</script>

<style scoped>
.toolbar {
  justify-content: center;
}

.toolbar input {
  opacity: 0;
  position: fixed;
  width: 0;
}

.toolbar label {
    display: inline-block;
    margin-left: 0;
    margin-right: 10px;
    margin-bottom: 4px;
    background-color: rgb(255, 255, 255);
    padding: 5px 10px;
    border: 2px solid rgb(46, 46, 46);
    border-radius: 15px;
}

.toolbar .checked {
    background-color: rgb(88, 88, 88);
    color: white;
}

button, h3 {
  margin-bottom: 5px;
}
</style>