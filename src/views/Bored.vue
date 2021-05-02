<template>
  <div class="container">
    <TopSection api="Bored API" url="http://www.boredapi.com/" />
    <div class="columns">
      <div class="column">
        <BoredSearch />
      </div>
      <div class="column">
        <BoredDisplay />
      </div>
    </div>
  </div>
</template>

<script>
import TopSection from '../components/TopSection.vue'
import BoredSearch from '@/components/BoredSearch.vue'
import BoredDisplay from '../components/BoredDisplay'

export default {
  name: 'Bored',
  components: { BoredSearch, BoredDisplay, TopSection },
}
</script>
