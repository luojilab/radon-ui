
<template>
        <li v-for="treeNode in treeData">
            <span class="rd-tree-ion" :class="{'ion-arrow-down-b': treeNode.expand, 'ion-arrow-right-b': !treeNode.expand, 'rd-ion-hidden': (!treeNode.children || treeNode.children.length == 0)}" @click.stop="expandChild(treeNode)"></span>
            <label class="rd-checkbox-wrapper">
                <div class="rd-checkbox">
                    <span 
                        class="rd-checkbox-inner"
                        :class="{
                            'selected': treeNode.checked,
                            'disabled': treeNode.checkDisabled
                        }"
                    >
                        <i class="rd-checkbox-inner-icon ion-checkmark-round"></i>
                        <input 
                            type="checkbox" 
                            :value="treeNode.checked"
                            class="rd-checkbox-input"
                            @change="changeAction(treeNode)"
                        >
                    </span>
                </div>
            </label>
            <a>{{treeNode.title}}</a>
            <ul class="rd-tree-child-node" v-if="treeNode.expand && treeNode.children && treeNode.children.length > 0">
                <tree-node :tree-data="treeNode.children"></tree-node>
            </ul>
        </li>
</template>
<script>
export default {
    name: 'tree-node',
    props: {
        treeData: Array
    },
    methods: {
        expandChild (treeNode) {
            treeNode.expand = !treeNode.expand
        },
        changeAction (treeNodeObj, checkState) {
            treeNodeObj.checked = checkState || !treeNodeObj.checked
            if (treeNodeObj.children) {
                treeNodeObj.children.forEach((el) => {
                    treeNodeObj.checked ? el.expand = true : el.expand = false
                    this.changeAction(el, treeNodeObj.checked)
                })
            }
        }
    }
}
</script>