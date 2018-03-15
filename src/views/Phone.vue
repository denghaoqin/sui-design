<template>
    <div class="phone-design">
        <phone-header></phone-header>
        <div class="container main">
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
        PhoneToolbar,
        PhoneArtboard,
        PhoneSettings
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utils/_mixins.scss";

.phone-design {
    position: relative;
    box-sizing: border-box;
    @include respond-to("medium") {
        height: auto;
    }

    .main {
        display: flex;
        flex-wrap: wrap;
        max-height: 820px;
        @include respond-to("medium") {
            height: 628px;
        }
        @include respond-to(large) {
            height: 755px
        }
    }
}
</style>