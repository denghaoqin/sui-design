<template>
    <div class="leftPanel">
        <div class="main">
            <el-tabs class="tab" type="border-card">
                <el-tab-pane label="新建模块">
                    <el-collapse v-model="activeName" accordion>
                        <el-collapse-item title="布局" name="layout">
                            <tools :list="layoutList"></tools>
                        </el-collapse-item>
                        <el-collapse-item title="基础" name="base">
                            <tools :list="baseList"></tools>
                        </el-collapse-item>
                        <el-collapse-item title="复合" name="compound">
                            <div>简化流程：设计简洁直观的操作流程；</div>
                            <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                            <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                        </el-collapse-item>
                        <el-collapse-item title="高级(portlet)" name="portlet">
                            <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                            <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                        </el-collapse-item>
                    </el-collapse>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
import Tools from "../tools/Tools";

export default {
    name: "phone-toolbar",
    components: {
        Tools
    },
    data() {
        return {
            activeName: "layout",
            layoutList: [
                {
                    id: "tool-01",
                    title: "自由容器",
                    icon: "glyphicon glyphicon-th-large",
                    component: "",
                    type: "freeLayout"
                },
                {
                    id: "tool-02",
                    title: "通栏容器",
                    icon: "glyphicon glyphicon-folder-close",
                    component: "",
                    type: "banner"
                },
                {
                    id: "tool-03",
                    title: "多列容器",
                    icon: "glyphicon glyphicon-th",
                    component: "",
                    type: "multipleColumns"
                }
            ],
            baseList: [
                {
                    id: "tool-04",
                    title: "文本",
                    icon: "glyphicon glyphicon-font",
                    component: "",
                    type: "text"
                }
            ]
        };
    },
    methods: {}
};
</script>

<style lang="scss" scoped>
.leftPanel {
    width: 290px;
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
        }
    }
}
</style>