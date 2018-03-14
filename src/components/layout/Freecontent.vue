<template>
    <div class="container" :style="containerStyle" v-bind:class="{'hover':isHover}" v-on:mouseover="show()" v-on:mouseout="hide()">
        <!-- 标题栏 -->
        <div v-show="showtitle == 'true'" class="header" :style="titleStyle">
            <div class="header-content">
                <!-- 标题栏图标 -->
                <div v-show="showtitleicon == 'true'" class="header-content-icon">
                    <span :class="titleicon"></span>
                </div>
                <!-- 主标题名称 -->
                <div class="header-content-maintitle">
                    {{maintitle}}
                </div>
                <!-- 副标题名称 -->
                <div class="header-content-subtitle">
                    {{subtitle}}
                </div>
            </div>
        </div>
        <!-- 内容区 -->
        <div class="content">
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
        <!-- 设置图标 -->
        <div class="set" v-show="isHover">
            <div class="seticon" v-on:mouseover="showsetconfig()" v-on:mouseout="hidesetconfig()">

            </div>
        </div>
        <div class="setconfig" v-show="showsetconfigflag" v-on:mouseover="showsetconfigcontent()" v-on:mouseout="hidesetconfigcontent()">
            <div class="setconfigcontent">
                <div class="setbtn">设置自由容器</div>
                <div class="settitle"></div>
                <div class="deletemodule"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isHover: false, //判断鼠标是否移入，显示边框
            showsetconfigflag: false, //判断鼠标是否移入，显示设置自由容器
            containerStyle:{     //组件样式
                width:this.width,
                height:this.height+'px',
                marginTop:this.top+'px',
                marginBottom:this.bottom+'px',
                marginLeft:this.left+'px',
                marginRight:this.right+'px',
                border: this.showborder == "true" ? (this.borderwidth+'px '+this.borderstyle+' '+this.bordercolor) : "1px dotted #fff",
                borderTop: this.bordertop == "true" ? (this.borderwidth+'px '+this.borderstyle+' '+this.bordercolor): "1px dotted #fff",
                borderBottom: this.borderbottom == "true" ? (this.borderwidth+'px '+this.borderstyle+' '+this.bordercolor): "1px dotted #fff",
                borderLeft: this.borderleft == "true" ? (this.borderwidth+'px '+this.borderstyle+' '+this.bordercolor): "1px dotted #fff",
                borderRight: this.borderright == "true" ? (this.borderwidth+'px '+this.borderstyle+' '+this.bordercolor): "1px dotted #fff",
                backgroundColor: this.showcontentbg == "true" ? this.contentbgcolor : "#fff",
                backgroundImage: this.showcontentbg == "true" ? ('url('+this.contentbgphoto+') no-repeat') : "none",
                opacity: this.showcontentbg == "true" ? this.contentbgopacity : "1"
            },
            titleStyle:{     //组件内标题样式
               height: this.titleheight+'px',
               background: this.titlebg == "true" ? this.titlebgcolor : "#fff",
               backgroundImage: this.titlebg == "true" ? ('url('+this.titlebgpic+') no-repeat') : "#fff",
            }
        }
    },
    props:{
        width:{
            type: String,      //组件宽度
            default: '100%'
        },
        isempty:{
            type: String,     //组件内是否有内容
            default: 'true'
        },
        height:{
            type: String,     //组件高度
            default: '300'
        },
        showtitle:{
            type: String,     //是否显示标题
            default: 'false'
        },
        top:{
            type: String,     //组件上外边距
            default: '0'
        },
        bottom:{
            type: String,     //组件下外边距
            default: '0'
        },
        left:{
            type: String,     //组件左外边距
            default: '0'
        },
        right:{
            type: String,     //组件右外边距
            default: '0'
        },
        showborder:{
            type: String,     //组件是否显示边框
            default: 'false'
        },
        bordercolor:{
            type: String,     //边框颜色
            default: "#000"
        },
        borderwidth:{
            type: String,     //边框宽度
            default: "1"
        },
        borderstyle:{
            type: String,    //边框样式
            default: "solid"
        },
        bordertop:{
            type: String,    //上边框
            default: "false"
        },
        borderbottom:{
            type: String,    //下边框
            default: "false"
        },
        borderleft:{
            type: String,     //左边框
            default: "false"
        },
        borderright:{
            type: String,     //右边框
            default: "false" 
        },
        showcontentbg:{
            type: String,     //是否显示内容区背景
            default: "false"
        },
        contentbgopacity:{
            type: String,      //内容区背景透明度
            default: "1"
        },
        contentbgphoto:{
            type: String,      //内容区背景图片
            default: ""
        },
        contentbgcolor:{
            type: String,     //内容区背景颜色
            default: "#000"
        },
        maintitle:{
            type: String,     //主标题
            default: "自由容器"
        },
        subtitle:{
            type: String,    //副标题
            default: ""
        },
        titleheight:{
            type: String,    //标题栏高度
            default: "48"
        },
        titlebg:{
            type: String,    //标题栏是否显示背景
            default: "false"
        },
        titlebgcolor:{
            type: String,     //标题栏 背景颜色
            default: "#fff"
        },
        titlebgpic:{
            type: String,      //标题栏背景图片
            default: ""
        },
        showtitleicon:{
            type: String,      //标题图标
            default: ""
        },
        titleicon:{
            type: String,      //标题图标
            default: ""
        }
    },
    watch:{
        width(val){
            this.containerStyle.width = val;
        },
        height(val){
            this.containerStyle.height = val;
        },
        marginTop(val){
            this.containerStyle.marginTop = val;
        },
        marginBottom(val){
            this.containerStyle.marginBottom = val;
        },
        marginLeft(val){
            this.containerStyle.marginLeft = val;
        },
        marginRight(val){
            this.containerStyle.marginRight = val;
        },
        titleheight(val){
            this.titleStyle.height = val;
        },
        showborder(val){
            this.containerStyle.border = (val == "true" ? (this.borderwidth+'px '+this.borderstyle+' '+this.bordercolor) : "1px dotted #fff");
        },
        bordertop(val){
            this.containerStyle.borderTop = (val == "true" ? (this.borderwidth+'px '+this.borderstyle+' '+this.bordercolor) : "1px dotted #fff");
        },
        borderbottom(val){
            this.containerStyle.borderBottom = (val == "true" ? (this.borderwidth+'px '+this.borderstyle+' '+this.bordercolor) : "1px dotted #fff");
        },
        borderleft(val){
            this.containerStyle.borderLeft = (val == "true" ? (this.borderwidth+'px '+this.borderstyle+' '+this.bordercolor) : "1px dotted #fff");
        },
        borderright(val){
            this.containerStyle.borderRight = (val == "true" ? (this.borderwidth+'px '+this.borderstyle+' '+this.bordercolor) : "1px dotted #fff");
        },
        showcontentbg(val){
            this.containerStyle.backgroundColor = (val == "true" ? this.contentbgcolor : "#fff");
        },
        contentbgphoto(val){
            this.containerStyle.backgroundImage = (this.showcontentbg == "true" ? ('url('+this.contentbgphoto+') no-repeat') : "none");
        },
        contentbgopacity(val){
            this.containerStyle.opacity = (this.showcontentbg == "true" ? this.contentbgopacity : "0");
        },
        titlebg(val){
            this.titleStyle.backgroundColor = (val == "true" ? this.titlebgcolor : "#fff");
        },
        titlebgpic(val){
            this.containerStyle.backgroundImage = (this.titlebg == "true" ? ('url('+this.titlebgpic+') no-repeat') : "none");
        }
    },
    methods:{   
        show(){
            console.log(1)
            this.isHover = true;
        },
        hide(){
            this.isHover = false;
        },
        showsetconfig(){
            this.showsetconfigflag = true;
        },
        hidesetconfig(){
            this.showsetconfigflag = false;  
        },
        showsetconfigcontent(){
            this.showsetconfigflag = true;
            this.isHover = true;
        },
        hidesetconfigcontent(){
            this.showsetconfigflag = false; 
            this.isHover = false; 
        }
    }
};

</script>
<style scoped lang="scss">
    .container{
        padding: 0px;
        margin: 0 auto;
        position: relative;
    }
    .hover:hover{
        border: 1px dotted #5874d8!important;
    }
    // 内容区样式
    .content{
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .empty{
            width: 200px;
            height: 100px;
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
    // 标题栏样式
    .header{
        width: 100%;
        border-bottom: 1px solid #ccc;
        .header-content{
            height: 100%;
            border-bottom: 3px solid #009fe9;
            display: table;
            .header-content-maintitle{
                height: 100%;
                line-height: 100%;
                display: table-cell;
                vertical-align: middle;
                font-size: 20px;
                color: #009fe9;
            }
            .header-content-subtitle{
                font-size: 16px;
                height: 100%;
                padding-left: 10px;
                display: table-cell;
                vertical-align: middle;
                line-height: 100%;
                color: #737373;
            }
            .header-content-icon{
                width: 30px;
                height: 100%;
                float: left;
            }
        }
    } 
    //设置样式
    .set{
        position: absolute;
        top: 0;
        right: 0;
        .seticon{
            width: 34px;
            height: 34px;
            border-radius: 0 0 0 34px;
            z-index: 99;
            opacity: 1;
            background-color: #dddee2;
        }
        .seticon:hover{
            background-color: #5874d8;
            cursor: all-scroll;
        }
    }
    .setconfig{
        position: absolute;
        top: -40px;
        right: 0;
        height: 40px;
        width: 200px;
        .setconfigcontent{
            border-radius: 8px;
            box-shadow: 0 0 15px 0 rgba(0,0,0,0.20);
            height: 36px;
            position: absolute;
            top:0;
            .setbtn{
                padding: 0 15px;
                float: left;
                line-height: 36px;
                position: relative;
                margin-right: 8px;
            }
            .setbtn:after{
                content: "";
                position: absolute;
                top: 12px;
                right: 0;
                width: 1px;
                height: 24px;
                color: #eee;
            }
            .settitle{
                width: 38px;
                height: 100%;
                display: inline-block;
                line-height: 36px;
            }
            .deletemodule{
                width: 38px;
                height: 100%;
                display: inline-block;
                line-height: 36px;
            }
        }
    }
</style>