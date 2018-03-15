<template lang="html">
  <vddl-draggable class="panel__body--item"
    :draggable="item"
    :index="index"
    :selected="selectedEvent"
    :wrapper="list">
    <div class="panel panel-default" v-if="item.type === 'container'">
      <div class="panel-heading">
        <h3>Container {{item.id}}</h3>
      </div>
      <vddl-list class="panel-body"
        :list="item.columns"
        :external-sources="true">
        <list v-for="(col, number) in item.columns"
          :key="col.id" :item="col"
          :list="item.columns"
          :index="number">
        </list>
        <vddl-placeholder>Custom placeholder</vddl-placeholder>
      </vddl-list>
    </div>
    <p v-else>
      {{item.type}} {{item.id}}
    </p>
  </vddl-draggable>
</template>

<script>
export default {
    name: "list",
    props: ["item", "list", "index", "selected", "selectedItem", "disable"],
    methods: {
        selectedEvent(item) {
            if (typeof this.selected === "function") {
                this.selected(item);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.vddl-placeholder {
    height: 30px;
    background-color: #ccc;
}

.vddl-dragging-source {
    display: none;
}
</style>
