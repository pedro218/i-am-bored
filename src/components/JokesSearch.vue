<template>
  <div>
    <section class="section">
      <h3 class="is-size-5">Click button to get a joke.</h3>
      <p>
        You can select the categories you want and any item you want to
        blacklist.
      </p>
      <p>Category Selection</p>
      <div class="toolbar" id="type">
        <label :class="{'checked': state.cat == 'any' }" >
          <input type="radio" name="cat" value="any" v-model="state.cat">
          Any
        </label>
        <label :class="{'checked': state.cat == 'custom' }" >
          <input type="radio" name="cat" value="custom" v-model="state.cat">
          Custom
        </label>
      </div>
      <div v-if="state.cat == 'custom'" class="toolbar">
        <label
          :class="{'checked': state.category.includes(categ)}"
          v-for="(categ, index) in state.categories" :key="index">
          <input
          type="checkbox"
          name="catego"
          :value="categ"
          v-model="state.category">
          {{ categ }}
        </label>
      </div>
      <br>
      <p>Check the content you want to blacklist.</p>
      <div class="toolbar">
        <label
          :class="{'checked': state.blacklist.includes(flag)}"
          v-for="(flag, index) in state.blacklistItem" :key="index">
          <input
            type="checkbox"
            name="flags"
            :value="flag" v-model="state.blacklist">
            {{ flag }}
        </label>
      </div>

      <button
        class="button"
        :class="{'is-loading': state.isSearching}"
        v-on:click="search">
        Get Joke
      </button>
    </section>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'JokesSearch',
  setup() {
    const store = useStore()
    const state = reactive({
      cat: 'any',
      category: [],
      categories: ['Programming', 'Misc', 'Dark', 'Pun', 'Spooky', 'Christmas'],
      blacklist: [],
      blacklistItem: ['nsfw', 'religious', 'political', 'racist', 'explicit'],
      isSearching: false,
    })
    async function search() {
      state.isSearching = true
      if (state.cat == 'any') {
        state.category = []
      }
      await store.dispatch('fetchJoke', {
        category: state.category,
        blacklist: state.blacklist,
      })
      state.isSearching = false
    }
    return { state, search }
  },
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
  background-color: rgb(94, 91, 91);
  color: white;
}

#type .checked {
  background-color: rgb(130, 215, 230);
  color: black;
}

p {
  margin-top: 5px;
}

button {
  margin-top: 5px;
}
</style>
