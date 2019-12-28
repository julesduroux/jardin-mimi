<template>
  <div>
    {{content}}
  </div>
</template>
<script>
import {Cell} from './Cell.vue'
import {Grille} from '@/models/models'

export default {
  name: 'Cell',
  props: {
    week: {
      type: Number,
      required: true
    },
    cell: {
      type: Object,
      required: true
    },
  },
  data() {
  },
  created () {
  },
  computed: {
    content() {
      return this.cell.contents
      .map(contentId => this.$store.state.contents[contentId])
      .find(content => ((content.startWeek > this.week) && ((content.startWeek + content.lifetime ) < this.week)));
    }
  }
}
</script>
