<template>
  <div>
    {{cell.type}}
  </div>
</template>
<script>
import * as d3 from 'd3';
import {Cell} from './Cell.vue'
import {Grille} from '@/models/models'

export default {
  name: 'Cell',
  props: {
    cell: {
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
