<style>
@import '../../css/index';
.rd-tree li ul{
    padding: 0 0 0 18px;
}
</style>
<template>
    <section class="rd-tree">
        <ul class="rd-tree-node">
            <tree-node :tree-data="treeData"></tree-node>
        </ul>    
    </section>
</template>
<script>
import treeNode from './treeNode'

export default {
    props: {
        treeData: Array
    },
    components: {
        treeNode
    }
}
</script>