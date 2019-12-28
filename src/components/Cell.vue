<template>
  <div>
    {{cell.type}}
  </div>
</template>
<script>
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
