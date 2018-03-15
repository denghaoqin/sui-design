<template>
    <div class="phone-artboard">
        <div class="main" :style="{background:`url(${phoneBg}) no-repeat 0 0`,backgroundSize:'contain'}">
            <iframe :src="iframeSrc" class="phone-view">
                <div>这是iframe内容</div>
            </iframe>
        </div>
    </div>
</template>


<script>
import phoneBg from "../../assets/images/phone-bg.png";
import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
    name: "phone-artboard",
    data() {
        return {
            phoneBg: phoneBg
        };
    },
    computed:{
        iframeSrc:function(){
            return 'http://'+window.location.host+window.location.pathname+"#/phone-design"
        }
    }
};
</script>

<style lang="scss" scoped>
.phone-artboard {
    padding-top: 20px;
    padding-bottom: 20px;
    flex:1;

    .main {
        width: 292px;
        margin: 0 auto;
        z-index: 1;
        position: relative;
        height: 600px;
        padding:74px 22px 82px 22px;

        .phone-view {
            width: 100%;
            height: 100%;
            border: 0;
            overflow-x: hidden;
            overflow-y: auto;
        }
    }
}
</style>
