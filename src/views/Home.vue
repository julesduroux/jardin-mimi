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
      grids: [
        {
          id: 1, x: 428, y: 249, rotation:-37, 
          cells: [
            [{contents: [25]},{contents: [25,26]},{contents: [25,26]},{contents: [26]},{},{},{}],
            [{contents: [25]},{contents: [25,26]},{contents: [25,26]},{contents: [26]},{},{},{}],
            [{contents: [25]},{contents: [25,26]},{contents: [25,26]},{contents: [26]},{},{},{}],
            [{},{},{},{},{},{},{}],
            [{contents: [84]},{},{},{},{},{},{}]
          ]
        }
      ],
      contents: {
        25: { startWeek: 40, lifetime: 3, codePlant: 'haricot'},
        26: { startWeek: 44, lifetime: 3, codePlant: 'haricot'},
        84: { startWeek: 39, lifetime: 3, codePlant: 'carrot'}
      },
      plants: [
        {code: 'carrot', diameter: 1, name: "carottes", imagePath: "assets/carottes.jpg"},
        {code: 'harricot', diameter: 3, name: "harricot vert", imagePath: "assets/harricot.jpg"},
        {code: 'courgebut', diameter: 16, name: "courge butternut", imagePath: "assets/courgebut.jpg"}
      ]
    }
  }
}
</script>
(428,249,128,48,-37)