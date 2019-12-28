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
    return {
      content: {}
    }
  },
  created () {
    this.content = null;
  },
  methods: {
  }
}
</script>
