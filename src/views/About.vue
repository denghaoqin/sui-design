<template>
  <div class="demo-content simple">
    <drop></drop>
  </div>
</template>

<script>
import Vue from "vue";
import Vddl from "vddl";
import Drop from "../containers/drop/Drop";

Vue.use(Vddl);

export default {
    name: "about",
    components:{
      Drop
    }
};
</script>