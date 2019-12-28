<template>
  <div class="home">
    <Garden/>
    <v-select :options="weekOptions"></v-select>
  </div>
</template>

<script>
// @ is an alias to /src
import Garden from '@/components/Garden.vue'

export default {
  name: 'home',
  components: {
    Garden
  },
  data () {
    return {
      weekOptions: []
    }
  },
  created () {
    this.weekOptions = this.$store.state.weekOptions;
  }
}
</script>
