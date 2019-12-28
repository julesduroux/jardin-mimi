<template>
  <div class="home">
    <Garden/>
  </div>
</template>

<script>
// @ is an alias to /src
import Garden from '@/components/Garden.vue'

export default {
  name: 'home',
  components: {
    Garden
  },
}
</script>
