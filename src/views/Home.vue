<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div v-for="grid in grids" :key="grid.id">
      <Grid :grid="grid"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Grid from '@/components/Grid.vue'

export default {
  name: 'home',
  components: {
    Grid
  },
  data () {
    return {
      grids: [{id: 1, cells: [[{type: 'courge'}]]}]
    }
  }
}
</script>
