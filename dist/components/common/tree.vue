
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