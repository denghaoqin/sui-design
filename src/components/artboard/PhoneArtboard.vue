<template>
    <div class="phone-artboard">
        <div class="main" :style="{background:`url(${phoneBg}) no-repeat 0 0`,backgroundSize:'contain'}">
            <div class="phone-view">
                <div v-for="(list, zone) in dropzones" class="v-col--40" :key="zone">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3>Dropzone {{zone}}</h3>
                        </div>
                        <list>
                            <p>asdsad<list></list></p>
                        </list>
                        <div class="panel-body">
                            <vddl-list class="panel__body--list" :list="list" :inserted="inserted" effect-allowed="move" :external-sources="true">
                                <list v-for="(item, index) in list" :key="item.id" :item="item" :list="list" :index="index">
                                </list>
                                <vddl-placeholder class="red">Custom placeholder</vddl-placeholder>
                            </vddl-list>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import phoneBg from "../../assets/images/phone-bg.png";
import "element-ui/lib/theme-chalk/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import EmptyHint from "./EmptyHint";
import List from "./List";

export default {
    name: "phone-artboard",
    components: {
        EmptyHint,
        List
    },
    data() {
        return {
            phoneBg: phoneBg,
            dropzones: {
                A: [
                    {
                        type: "container",
                        id: 1,
                        columns: [
                            {
                                type: "item",
                                id: "1"
                            },
                            {
                                type: "item",
                                id: "2"
                            },
                            {
                                type: "item",
                                id: "3"
                            }
                        ]
                    },
                    {
                        type: "item",
                        id: "4"
                    },
                    {
                        type: "item",
                        id: "5"
                    },
                    {
                        type: "item",
                        id: "6"
                    }
                ],
                B: [
                    {
                        type: "item",
                        id: 7
                    },
                    {
                        type: "item",
                        id: "8"
                    },
                    {
                        type: "container",
                        id: "2",
                        columns: [
                            {
                                type: "item",
                                id: "9"
                            },
                            {
                                type: "item",
                                id: "10"
                            },
                            {
                                type: "container",
                                id: "3",
                                columns: [
                                    {
                                        type: "item",
                                        id: "13"
                                    },
                                    {
                                        type: "item",
                                        id: "14"
                                    }
                                ]
                            },
                            {
                                type: "item",
                                id: "15"
                            }
                        ]
                    }
                ]
            }
        };
    },
    computed: {
        isEmpty: function() {
            return this.list.length === 0;
        }
    },
    methods: {
        inserted: function(data) {
            console.log(data);
        }
    }
};
</script>

<style lang="scss" scoped>
.phone-artboard {
    padding-top: 20px;
    padding-bottom: 20px;
    flex: 1;

    .main {
        width: 292px;
        margin: 0 auto;
        z-index: 1;
        position: relative;
        height: 600px;
        padding: 74px 22px 82px 22px;

        .phone-view {
            width: 100%;
            height: 100%;
            border: 0;
            overflow-x: hidden;
            overflow-y: auto;

            .drop-container {
                width: 100%;
                height: 100%;
                border: 0;
                overflow-x: hidden;
                overflow-y: auto;

                .vddl-placeholder {
                    height: 30px;
                    background-color: #ccc;
                }

                .vddl-dragging-source {
                    display: none;
                }
            }
        }
    }
}
</style>
