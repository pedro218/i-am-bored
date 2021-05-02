<template>
  <div class="container">
    <TopSection api="Jokes API" url="https://sv443.net/jokeapi/v2/" />
    <div class="columns">
      <div class="column">
        <JokesSearch />
      </div>
      <div class="column">
        <JokesDisplay />
      </div>
    </div>
  </div>
</template>

<script>
import TopSection from '../components/TopSection.vue'
import JokesSearch from '../components/JokesSearch.vue'
import JokesDisplay from '../components/JokesDisplay.vue'

export default {
  name: 'Jokes',
  components: { TopSection, JokesSearch, JokesDisplay },
}
</script>
