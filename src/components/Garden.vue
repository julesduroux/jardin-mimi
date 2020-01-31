<template>
  <div>
    <div class="garden">
      <svg ref="gardenSvg" :viewBox="getViewBox()" width=1500 height=895 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g class="svg-pan-zoom_viewport">
          <image href="../assets/garden.png"  :width="getProcessedImageWidth()" :height="getProcessedImageHeight()"/>
          <g class="grid" v-for="grid in grids" :key="grid.id" :transform="getGridPosition(grid)">
            <g v-for="(raw, rawIndex) in grid.cells" :key="rawIndex">
              <rect :x="cellSizePx * index" :y="cellSizePx * rawIndex" :width="cellSizePx" :height="cellSizePx" style="fill:rgba(0,0,0,0);stroke-width:1;stroke:rgb(0,0,0)" v-for="(cell, index) in raw" :key="index"/>
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
      cellSizePx: 10,
      cellSizeCm: 5,
      distanceMesuredOnImagePx: 740,
      distanceMesuredOnImageCm: 1800,
      ImageNaturalHeight: 895,
      ImageNaturalWidth: 1500
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
    },
    getImageRatio()
    {
      return (this.distanceMesuredOnImageCm/this.distanceMesuredOnImagePx)/(this.cellSizeCm/this.cellSizePx);
    },
    getProcessedImageHeight()
    {
      return `${this.getImageRatio() * this.ImageNaturalHeight}`;
    },
    getProcessedImageWidth()
    {
      return this.getImageRatio() * this.ImageNaturalWidth;
    },
    getViewBox()
    {
      return `0 0 ${this.getProcessedImageWidth()} ${this.getProcessedImageHeight()}`;
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
