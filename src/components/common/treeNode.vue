<style>
@import '../../css/index';
.rd-tree-ion{
    width: .8rem;
    cursor: pointer;
}
.rd-ion-hidden{
    display: none;
}
</style>
<template>
        <li v-for="treeNode in treeData">
            <span class="rd-tree-ion" :class="{'ion-arrow-down-b': treeNode.expand, 'ion-arrow-right-b': !treeNode.expand, 'rd-ion-hidden': treeNode.children.length == 0}" @click.stop="expandChild(treeNode)"></span>
            <rd-checkbox :checkbox="treeNode.checkbox"></rd-checkbox>
            <a>{{treeNode.title}}</a>
            <ul class="rd-tree-child-node" v-if="treeNode.expand && treeNode.children.length > 0">
                <tree-node :tree-data="treeNode.children"></tree-node>
            </ul>
        </li>
</template>
<script>
import rdCheckbox from '../form/checkbox'

export default {
    name: 'tree-node',
    props: {
        treeData: Array
    },
    methods: {
        expandChild (treeNode) {
            treeNode.expand = !treeNode.expand
        }
    },
    components: {
        rdCheckbox
    }
}
</script>