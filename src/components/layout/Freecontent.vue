<template>
    <div class="container" :style="containerStyle" v-bind:class="{'hover':isHover}" v-on:mouseenter="show()" v-on:mouseleave="hide()">
        <div class="header">

        </div>
        <div class="content" ref="content">
            <div v-show="isempty=='true'" class="empty">
                <div class="add-modal-btn">
                    添加模块
                </div>
                <div class="add-modal-details">
                    容器内模块可以随意拖动
                </div>
            </div>
            <div v-show="!isempty" class="main">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "freecontent",
    data(){
        return {
            containerStyle:  {
                width: this.width+"px",
                height: (this.height || 300) + 'px'
            },
            showeditline: false,
            isHover: false
        }
    },
    props:['isempty','width'],
    methods:{   
        show(){
            this.isHover = true;
        },
        hide(){
            this.isHover = false;
        }
    }
};

</script>
<style scoped lang="scss">
    .container{
        padding: 0px;
        margin: 0 auto;
    }
    .hover:hover{
        border: 1px dotted #5874d8;
    }
    .content{
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        .empty{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            cursor: pointer;
            .add-modal-btn{
                width: 200px;
                height:50px;
                line-height: 50px;
                font-size: 18px;
                $btncolor: rgb(156, 156, 156);
                color: $btncolor;
                border:1px solid $btncolor;
                text-align: center;
            }
            .add-modal-details{
                font-size: 14px;
                line-height: 50px;
                $detailkscolor: rgb(95, 93, 93);
                color:$detailkscolor;
            }
        }
        .empty:hover{
            .add-modal-btn{
                $backcolor: #5874d8 !global;
                background-color: $backcolor;
                color: #fff;
                border:1px solid #fff;
            }
        }
        .main{
            width: 100%;
            height: 100%;
        }
        
    }
    
</style>