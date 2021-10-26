<template>
  <div>
    <webapp-content />
  </div>
</template>

<script>
import content from './views/content.vue'

export default {
  name: 'App',
  components: {
    'webapp-content':content,
  },

  data(){
    return{
      
    }
  }
}
</script>

<style scoped>
  @import url("./assets/style.css");
</style>