<template>
  <div>
    <div class="garden">
      <svg ref="gardenSvg" :viewBox="getViewBox()" width=1500 height=895 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <pattern :id="plant.slug" :width="getPlantSize(plant)" :height="getPlantSize(plant)" v-for="plant in plants" :key="plant.slug">
              <image :xlink:href="plant.imagePath"/>
          </pattern>
        </defs>
        <g class="svg-pan-zoom_viewport">
          <image href="/garden.png"  :width="getProcessedImageWidth()" :height="getProcessedImageHeight()"/>
          <g class="grid" v-for="grid in renderedGrid" :key="grid.id" :transform="`translate(${grid.x}, ${grid.y}) rotate(${grid.rotation})`">
            <rect :x="rect.x" :y="rect.y" :width="rect.size" :height="rect.size" :style="rect.style" v-for="(rect, index) in grid.rects" :key="index"/>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import svgPanZoom from 'svg-pan-zoom';

export default {
  name: 'garden',
  components: {
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
    this.grids[0].cells[20][20].contents.push(25);
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
      , minZoom: 1
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
  computed: {
    ...mapState(['activeWeek', 'contents', 'plants']),
    weekContent() {
      return Object.keys(this.contents)
        .filter(contentId => {
          const content = this.contents[contentId]
          return (this.activeWeek >= content.startWeek) && (this.activeWeek < (content.startWeek + content.lifetime ))
        }).reduce((acc, contentId) => {
          acc[contentId] = this.contents[contentId]
          return acc
        }, {})
    },
    weekContentIds() {
      return Object.keys(this.weekContent)
    },
    renderedGrid() {
      const renderedCells = new Set()
      return this.grids.map(grid => {
        const rects = [];
        grid.cells.forEach((row, rowIndex) => {
          row.forEach((cell, columnIndex) => {
            const contentId = this.getWeekContentId(cell);
            if(contentId && !renderedCells.has(contentId)) {
              renderedCells.add(contentId)
              const content = this.weekContent[contentId]
              const plant = this.getPlant(content)
              const size = this.getPlantSize(plant)
              const rect = {
                x: this.cellSizePx * columnIndex,
                y: this.cellSizePx * rowIndex,
                size: size,
                style: `fill:url(#${plant.slug})`
              }
              rects.push(rect);
            }
          })
        })
        return {
          ...grid,
          rects
        }
      })
    },
  },
  methods: {
    getGridPosition(grid) {
      return `translate(${grid.x}, ${grid.y}) rotate(${grid.rotation})`
    },
    getPlantSize(plant) {
      return this.cellSizePx * plant.diameter
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
    },
    getWeekContentId(cell) {
      if(cell.contents.length) {
        const contentId = cell.contents
          .find(contentId => !!this.weekContent[contentId])
        return contentId || null;
      }
      return null;
    },
    getPlant(content) {
      return this.$store.state.plants[content.codePlant]
    },
    getStyle(cell) {
      const contentId = this.getWeekContentId(cell);
      if(contentId) {
        const content = this.weekContent[contentId];
        return this.getPlant(content).color
      }
      return "rgba(0,0,0,0)";
    }
  }
}
</script>
<style scoped>
/* .garden {
  position: absolute;
} */
</style>
