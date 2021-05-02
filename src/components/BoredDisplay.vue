<template>
  <div>
    <section v-if="Object.keys(activity).length" class="section">
      <div class="columns">
        <div class="column">
          <p class="response">
            <span class="descrip">Activity:</span> {{ activity.activity }}
          </p>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <p v-if="activity.link">
            <span class="descrip">Link:</span>
            <a :href="activity.link" target="_blank">{{ activity.link }}</a>
          </p>
          <p v-else>No link avalable</p>
        </div>
      </div>
      <div class="columns details">
        <div class="column">
          <p><span class="descrip">Category:</span> {{ activity.type }}</p>
        </div>
        <div class="column">
          <p><span class="descrip">Accessibility: </span> 
            <span v-if="activity.accessibility > 0.75"> Diffucult </span>
            <span v-else-if="activity.accessibility > 0.5"> Intermediate </span>
            <span v-else-if="activity.accessibility > 0.25"> Easy </span>
            <span v-else> Very Easy </span>
          </p>
        </div>
      </div>
      <div class="columns details">
        <div class="column">
          <p>
            <span class="descrip">Participants:</span> {{ activity.participants }}
          </p>
        </div>
        <div class="column">
          <p><span class="descrip">Price: </span> 
            <span v-if="activity.price > 0.75"> Expensive </span>
            <span v-else-if="activity.price > 0.5"> Pricey </span>
            <span v-else-if="activity.price > 0.25"> Affordable </span>
            <span v-else-if="activity.price > 0"> Cheap </span>
            <span v-else>Free</span>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'BoredDisplay',
  setup() {
    const store = useStore()
    return {
      activity: computed(() => store.getters.getActivity)
    }
  }
}
</script>

<style scoped>
.response {
  font-size: 20px;
}

.descrip {
  font-style: italic;
}
</style>
