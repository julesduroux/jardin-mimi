<template>
  <div>
    <div class="garden">
        <img class="garden-img" alt="garden" src="../assets/garden.png">
    </div>
    <div class="grid" v-for="grid in grids" :key="grid.id" :style="getGridPosition(grid)">
      <Grid :grid="grid"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Grid from '@/components/Grid.vue'

export default {
  name: 'garden',
  components: {
    Grid
  },
  data () {
    return {
      grids: []
    }
  },
  created () {
    this.grids = this.$store.state.grids;
  },
  methods: {
    getGridPosition(grid) {
      return {
        transform: 'rotate(' + grid.rotation + 'deg)',
        transformOrigin: '0px 0px',
        top: grid.y + 'px',
        left: grid.x + 'px'
      }
    }
  }
}
</script>
<style scoped>
.garden {
  position: absolute;
}
.garden-img {
  width: 7500px;
  height: auto;
}
.grid {
  position: absolute;
}
</style>
