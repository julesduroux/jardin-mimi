<template>
  <div>
    <div class="garden">
      <svg ref="gardenSvg" viewBox="0 0 7500 4475" width="7500" height="4475" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g class="svg-pan-zoom_viewport">
          <image href="../assets/garden.png"  width="7500" height="4475"/>
          <g class="grid" v-for="grid in grids" :key="grid.id" :transform="getGridPosition(grid)">
            <g v-for="(raw, rawIndex) in grid.cells" :key="rawIndex">
              <rect :x="cellSize * index" :y="cellSize * rawIndex" :width="cellSize" :height="cellSize" style="fill:rgba(0,0,0,0);stroke-width:1;stroke:rgb(0,0,0)" v-for="(cell, index) in raw" :key="index"/>
            </g>
          </g>
        </g>
          <!-- <Grid :grid="grid"/> -->
      </svg>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Grid from '@/components/Grid.vue'
import svgPanZoom from 'svg-pan-zoom';

export default {
  name: 'garden',
  components: {
    // Grid
  },
  data () {
    return {
      grids: [],
      cellSize: 10,
    }
  },
  created () {
    this.grids = this.$store.state.grids;
  },
  mounted() {
    svgPanZoom(this.$refs.gardenSvg, {
      viewportSelector: '.svg-pan-zoom_viewport'
      , panEnabled: true
      , controlIconsEnabled: false
      , zoomEnabled: true
      , dblClickZoomEnabled: true
      , mouseWheelZoomEnabled: true
      , preventMouseEventsDefault: true
      , zoomScaleSensitivity: 0.2
      , minZoom: 0.1
      , maxZoom: 10
      , fit: true
      , contain: false
      , center: true
      , refreshRate: 'auto'
      , beforeZoom: function(){}
      , onZoom: function(){}
      , beforePan: function(){}
      , onPan: function(){}
      , onUpdatedCTM: function(){}
      , eventsListenerElement: null
    });
  },
  methods: {
    getGridPosition(grid) {
      return `translate(${grid.x}, ${grid.y}) rotate(${grid.rotation})`
      // return {
      //   transform: `translate(${grid.x}, ${grid.y}) rotate(${grid.rotation} deg)`,
      //   transformOrigin: '0px 0px',
      //   // top: grid.y + 'px',
      //   // left: grid.x + 'px'
      // }
    }
  }
}
</script>
<style scoped>
.garden {
  position: absolute;

}
/* .garden-img {
  width: 7500px;
  height: auto;
}
.grid {
  position: absolute;
} */
</style>
