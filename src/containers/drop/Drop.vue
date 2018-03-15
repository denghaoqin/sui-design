<template>
  <div class="v-row">
      <div v-for="(list, listName) in lists" :key="listName" class="v-col--auto">
        <div class="panel">
            <div class="panel__heading">
              <h3>List {{listName}}</h3>
            </div>
            <div class="panel__body">
              <vddl-list class="panel__body--list"
                  :list="list"
                  :inserted="handleInserted"
                  :dragover="handleDragover"
                  :drop="handleDrop"
                  :horizontal="false">
                  <vddl-draggable class="panel__body--item" v-for="(item, index) in list" :key="item.label"
                    :draggable="item"
                    :index="index"
                    :wrapper="list"
                    effect-allowed="move"
                    :selected="selectedEvent"
                    :dragstart="handleDragstart"
                    :dragend="handleDragend"
                    :canceled="handleCanceled"
                    :moved="handleMoved"
                    v-bind:class="{'selected': selected === item}">
                    {{item.label}}
                  </vddl-draggable>
                  <vddl-placeholder class="red">Custom placeholder</vddl-placeholder>
              </vddl-list>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: "drop",
    data() {
        return {
            selected: null,
            lists: {
                A: [
                    {
                        label: "Item A1"
                    },
                    {
                        label: "Item A2"
                    },
                    {
                        label: "Item A3"
                    },
                    {
                        label: "Item A4"
                    },
                    {
                        label: "Item A5"
                    }
                ],
                B: [
                    {
                        label: "Item B1"
                    },
                    {
                        label: "Item B2"
                    },
                    {
                        label: "Item B3"
                    },
                    {
                        label: "Item B4"
                    },
                    {
                        label: "Item B5"
                    }
                ]
            }
        };
    },
    methods: {
        selectedEvent: function(item) {
            this.selected = item;
        },
        handleDragstart() {},
        handleDragend() {
            console.log(":v-dragend");
        },
        handleDragover() {
        },
        handleCanceled() {
            console.log(":v-draggable: canceled");
        },
        handleInserted() {
            console.log(":v-list: inserted");
        },
        handleDrop(targetDraggable) {
            console.info(":v-list: drop",targetDraggable);

            this.moveDraggable = targetDraggable;
        },
        handleMoved(sourceDraggable) {
            console.log(":v-draggable: moved",sourceDraggable);
            let { index, list } = sourceDraggable;

            list.splice(index,1);

            this.moveDraggable.list.splice(this.moveDraggable.index,0,this.moveDraggable.item);
        }
    }
};
</script>

<style lang="scss" scoped>
    .vddl-draggable, .vddl-list {
        position: relative;
    }
    .vddl-dragging-source{
        display:none;
    }
    .red {
        color: red;
    }
</style>

