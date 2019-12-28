<template>
  <div>
    <table class="grid">
      <tr class="row" v-for="(raw, index) in grid.cells" :key="index">
        <td class="cell" v-for="(cell, index) in raw" :key="index">
          <div class="cell-content">
            <Cell :cell="cell"></Cell>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import Cell from './Cell.vue'
import {Grille} from '@/models/models'

export default {
  name: 'grid',
  components: {
    Cell
  },
  props: {
    grid: {
      type: Object,
      required: true
    },
  },
}
</script>
<style scoped>
.grid {
  border: 1px solid black;
  border-collapse: collapse;
  table-layout: fixed;
}
.row {
  margin: 0px;
  padding: 0px;
}
.cell {
  margin: 0px;
  padding: 0px;
}
.cell-content {
  border: 1px solid black;
  overflow: hidden;
  height: 10px;
  width: 10px;
}
</style>
