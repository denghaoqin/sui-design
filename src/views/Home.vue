<template>
  <div class="home">
    <freecontent width="80%" isempty="true" titleicon="test" showborder="true" showtitle="false" bordercolor="blue"/>
    <columnlayout isempty="true" showborder="true" showtitle="true" contentwidth="1400" bordercolor="blue"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Freecontent from '@/components/layout/Freecontent'
import Columnlayout from '@/components/layout/Columnlayout'
export default {
  name: 'home',
  components: {
    Freecontent,
    Columnlayout
  }
}
</script>

<style lang="scss" scoped>
  .home{
    margin-top: 100px;
  }
</style>

