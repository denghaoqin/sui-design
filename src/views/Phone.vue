<template>
  <div class="phone-design">
    <phone-header></phone-header>
    <div class="main">
      <phone-toolbar></phone-toolbar>
      <phone-artboard></phone-artboard>
      <phone-settings></phone-settings>
    </div>
    <drop></drop>
  </div>
</template>

<script>
import Vue from "vue";
import Vddl from "vddl";
import Drop from "../containers/drop/Drop";
import PhoneHeader from "../components/header/PhoneHeader";
import PhoneToolbar from "../components/toolbar/PhoneToolbar";
import PhoneArtboard from "../components/artboard/PhoneArtboard";
import PhoneSettings from "../components/settings/PhoneSettings";

Vue.use(Vddl);

export default {
    name: "Phone",
    components: {
        Drop,
        PhoneHeader,
        PhoneToolbar
    }
};
</script>

<style lang="scss" scoped>
.phone-design {
    position: relative;

    .main {
      display:flex;
    }
}
</style>