<template>
  <div class="home">
    <freecontent width="80%" isempty="true" titleicon="test" showtitle="false" height="300" titleheight="0"/>
    <multiseriatelayout width="80%" height="300" titleheight="48" isempty="true" showtitle="true" freecontentnum="3" freecontentspace="10"/>
    <columnlayout isempty="true" contentwidth="1400"  height="300" titleheight="0"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Freecontent from '@/components/layout/Freecontent'
import Columnlayout from '@/components/layout/Columnlayout'
import Multiseriatelayout from '@/components/layout/Multiseriatelayout'
export default {
  name: 'home',
  components: {
    Freecontent,
    Columnlayout,
    Multiseriatelayout
  }
}
</script>

<style lang="scss" scoped>
  .home{
    margin-top: 100px;
  }
</style>

