<template>
  <div class="cell" :style="style">
  </div>
</template>
<script>
import {Cell} from './Cell.vue'
import { mapState } from 'vuex'

export default {
  name: 'Cell',
  props: {
    cell: {
      type: Object,
      required: true
    },
  },
  computed: {
    ...mapState(['activeWeek']),
    content() {
      return this.cell.contents && this.cell.contents
        .map(contentId => this.$store.state.contents[contentId])
        .find(content => ((this.activeWeek >= content.startWeek) && (this.activeWeek < (content.startWeek + content.lifetime ))));
    },
    style () {
      if(this.content) {
        return {
          backgroundColor: this.$store.state.plants[this.content.codePlant].color
        }
      }
      return null;
    }
  }
}
</script>
<style scoped>
.cell {
  height: 100%;
  width: 100%;
}
</style>
