<template>
  <div>
    <table>
      <tr v-for="(raw, index) in grid.cells" :key="index">
        <td v-for="(cell, index) in raw" :key="index">
          <Cell :cell="cell"></Cell>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import * as d3 from 'd3';
import Cell from './Cell.vue'
import {Grille} from '@/models/models'

export default {
  name: 'grid',
  components: {
    Cell
  },
  data() {
    return {
    }
  },
  props: {
    grid: {
      type: Object,
      required: true
    },
  },
  mounted () {
  },
  methods: {
  }
}
</script>
