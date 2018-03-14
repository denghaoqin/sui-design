<template>
    <div class="layout-tools">
        <vddl-draggable class="tools-item" v-for="item in list" :key="item.id" :draggable="item" :copied="copied" effect-allowed="copy">
            <i class="item-icon" :class="item.icon"></i>
            <span class="item-title">{{item.title}}</span>
        </vddl-draggable>
    </div>
</template>

<script>
export default {
    name: "tools",
    props:{
        list:Array
    },
    methods:{
        copied:function(item){
            console.log(item);
        }
    }
};
</script>

<style lang="scss" scoped>
.layout-tools {
    display: flex;
    flex-wrap: wrap;
    flex-flow: row wrap;
    position: relative;
    overflow: hidden;
    user-select: none;

    &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 1px;
        height: 100%;
        border-left: 1px dashed #d9d9d9;
        color: #d9d9d9;
    }

    .tools-item {
        width: 25%;
        height: 0;
        padding-bottom: 25%;
        text-align: center;
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        cursor: move;

        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4) {
            border-top: 1px dashed #d9d9d9;
        }

        &:before {
            content: " ";
            position: absolute;
            top: 0px;
            width: 1px;
            height: 100%;
            border-right: 1px dashed #d9d9d9;
            color: #d9d9d9;
            right: -2px;
        }

        &:after {
            content: " ";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 1px;
            border-bottom: 1px dashed #d9d9d9;
            color: #d9d9d9;
        }

        .item-icon {
            display: block;
            margin-top: 15%;
            font-size: 22px;
        }

        .item-title {
            color: #000;
        }
    }
}
</style>
