<template>
    <div class="rightPanel">
        <div class="main">
            <el-tabs class="tab" type="border-card">
                <el-tab-pane label="风格">
                    <el-tabs v-model="activeName">
                        <el-tab-pane label="主题" name="first">
                            <el-radio-group v-model="subjectList" size="mini" style="margin-bottom: 10px;">
                                <el-radio-button label="colorfulTheme">炫彩主题</el-radio-button>
                                <el-radio-button label="shoppingTheme">商城主题</el-radio-button>
                            </el-radio-group>
                            <div class="subjectColor">
                                <span v-for="item in subjectColorList" :key="item.className" :class="[item.className,{subjectColorActive: (subjectColorActive == item.className)}]" @click="subjectcolor(item)"></span>
                            </div>
                            <div v-show="subjectList == 'colorfulTheme'" class="colorfulTheme">
                                
                            </div>
                            <div v-show="subjectList == 'shoppingTheme'" class="shoppingTheme">
                                
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="背景" name="third">
                            
                        </el-tab-pane>
                        <el-tab-pane label="欢迎页" name="fourth">
                            
                        </el-tab-pane>
                    </el-tabs>
                </el-tab-pane>
                <el-tab-pane label="系统">
                    <el-tabs>
                        <el-tab-pane label="基本设置" name="first">
                            <div class="browserTitle settinglist">
                                <div class="settingLabel"> 浏览器标题：</div>
                                <div class="setting-content">
                                    <el-input v-model="browserTitle" placeholder="" size="mini"></el-input>
                                </div>
                            </div>
                            <div class="websiteTitleList settinglist">
                                <div class="settingLabel"> 网站标题栏：</div>
                                <div class="setting-content">
                                    <el-radio v-model="websiteTitleList" label="1">显示</el-radio>
                                    <el-radio v-model="websiteTitleList" label="2">隐藏</el-radio>
                                </div>
                            </div>
                            <div class="websiteTitle settinglist">
                                <div class="settingLabel"> 网站标题：</div>
                                <div class="setting-content">
                                    <el-input v-model="websiteTitle" placeholder="" size="mini"></el-input>
                                </div>
                            </div>
                            <div class="websiteLogo settinglist">
                                <div class="settingLabel"> 网站LOGO：</div>
                                <div class="setting-content">
                                    <el-radio v-model="websiteLogo" label="1">显示</el-radio>
                                    <el-radio v-model="websiteLogo" label="2">隐藏</el-radio>
                                </div>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="高级设置" name="second">
                            <el-checkbox v-model="isShowWebsiteIcon">开启网站图标</el-checkbox>
                        </el-tab-pane>
                    </el-tabs>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>


<script>
export default {
    name: "phone-settings",
    data(){
        return {
            browserTitle: '',
            websiteTitleList: '1',
            websiteTitle: '',
            websiteLogo: '1',
            activeName: 'first',
            subjectList: 'colorfulTheme',
            isShowWebsiteIcon: false,
            subjectColorList: [
                {
                    className: "subject-jdred" 
                },
                {
                    className: "subject-mgred"
                },
                {
                    className: "subject-trred"  
                },
                {
                    className: "subject-tbOrange" 
                },
                {
                    className: "subject-slYellow"  
                },
                {
                    className: "subject-cGreen" 
                },
                {
                    className: "subject-qGreen"  
                },
                {
                    className: "subject-wBule"  
                },
                {
                    className: "subject-bBule"  
                }
            ],
            subjectColorActive: '',
        }
    },
    methods:{
        subjectcolor: function(item){
            this.subjectColorActive = item.className;
        }
    }
};
</script>

<style lang="scss" scoped>
.rightPanel {
    width: 400px;
    margin: 0;
    flex: none;
    max-width: 100%;
    padding: 0;
    padding-top: 20px;
    padding-bottom: 20px;

    .main {
        border: 1px solid #c5ccd4;
        box-shadow: 0 0 5px #c5c5c5;
        box-sizing: border-box;
        height: 100%;
        background: #fff;

        .tab {
            border: 0px;
            box-shadow: none;
            .subjectColor{
                padding: 0 10px;
                margin-bottom: 11px;
                & span{
                    display: inline-block;
                    background-color: blue;
                    width: 18px;
                    height: 18px;
                    margin-right: 11px;
                    border-radius: 18px;
                    &:hover{
                        cursor: pointer;
                        border-radius: 5px;
                        transform: rotate(45deg);
                    }
                }
                .subjectColorActive{
                    border-radius: 5px;
                    transform: rotate(45deg);
                }
                .subject-jdred{
                    background: #f23030;
                }
                .subject-mgred{
                    background-color: #ff478d;
                }
                .subject-trred{
                    background-color: #ff7214;
                }
                .subject-tbOrange{
                    background-color: #fcc601;
                }
                .subject-slYellow{
                    background-color: #42bd56;
                }
                .subject-cGreen{
                    background-color: #06c1ae;
                }
                .subject-wBule{
                    background-color: #6e41c9;
                }
                .subject-bBule{
                    background-color: #4c4c4c;
                }
            }
            .settinglist{
                display: flex;
                align-items: center;
                margin-bottom: 10px;
                .settingLabel{
                    width: 90px;
                    height: 30px;
                    line-height: 30px;
                    text-align: right;
                }
                .setting-content{
                    width: 140px;
                    display: flex;
                }
            }
        }
    }
}
</style>
