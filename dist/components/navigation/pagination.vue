
<template>
    <div class="rd-pagination">
        <div class="rd-info" v-if="showInfo"></div>
        <div class="rd-jump" v-if="showJump">
            <input type="text" v-model="pageJump" /><span>search</span>
        </div>
        <ul class="rd-page" v-if="showList && pageList.length > 0">
            <li class="item" @click="prev" :class="{'disabled': pageStart == 1}" >
                <span class="ion-ios-arrow-left"></span>
            </li>
            <li class="item" :class="{'active': 1 == pageStart}" @click="first">
                <span>1</span>
            </li>
            <li class="jump-prev" @click="jump(-5)"  v-show="pageLimit.max > 10 && pageStart > 4">
                <span></span>
            </li>
            <li class="item" :class="{'active': el == pageStart}" @click="pagePath(el)" v-for="el in pageList" v-show="el">
                <span>{{el}}</span>
            </li>
            <li class="jump-next" @click="jump(5)" v-show="pageLimit.max > 10 && pageStart <= pageLimit.max - 4">
                <span></span>
            </li>
            <li class="item" @click="last" :class="{'active': pageLimit.max == pageStart}" >
                <span>{{pageLimit.max}}</span>
            </li>
            <li class="item" @click="next" :class="{'disabled': pageStart == pageLimit.max}" >
                <span class="ion-ios-arrow-right"></span>
            </li>
        </ul>
    </div>
</template>
<script>
let optionsDefault = {
    pageSize: 10,
    remote: {
        pageIndexName: 'pageIndex',
        pageSizeName: 'pageSize',
        params: {},
        url: '',
        totalName: 'total',
        offset: 0
    },
    showInfo: false,
    showJump: false,
    listNumber: 5
}

export default {
    props: {
        options: Object,
        total: Number,
        currentPage: Number
    },
    data () {
        return {
            showJump: false,
            showInfo: false,
            pageJump: '',
            pageList: [1],
            pageStart: 1,
            showList: true,
            pageLimit: {
                min: 1,
                max: 10,
                total: 1
            }
        }
    },
    ready () {
        this.$optionsDefault = {}
        Object.assign(this.$optionsDefault, optionsDefault, this.options)
        if (this.url) {
            this.$optionsDefault.remote.url = this.url
        }
        if (this.total !== 0) {
            this.initPageList(this.total)
            this.getData(1)
            this.$on('currentPageChange', this.currentPageChange)
        }
    },
    mounted () {
        this.$optionsDefault = {}
        Object.assign(this.$optionsDefault, optionsDefault, this.options)
        if (this.url) {
            this.$optionsDefault.remote.url = this.url
        }
        if (this.total !== 0) {
            this.initPageList(this.total)
            this.getData(1)
        }
    },
    watch: {
        total (val) {
            this.initPageList(val)
        }
    },
    methods: {
        pagePath (pageNumber) {
            this.pageStart = pageNumber
            this.getData()
        },
        currentPageChange (val) {
            this.pageStart = val
            this.pageListRefresh()
        },
        first () {
            if (this.pageStart !== 1) {
                this.pageStart = 1
                this.getData()
            }
        },
        last () {
            if (this.pageStart !== this.pageLimit.max) {
                this.pageStart = this.pageLimit.max
                this.getData()
            }
        },
        prev () {
            if (this.pageStart === 1) {
                return
            }
            this.pageStart > this.pageLimit.min ? this.pageStart-- : this.pageStart = 1
            this.getData()
        },
        next () {
            if (this.pageStart === this.pageLimit.max) {
                return
            }
            this.pageStart < this.pageLimit.max ? this.pageStart++ : this.pageStart = this.max
            this.getData()
        },
        jump (pageNumber) {
            this.pageStart = this.pageStart + pageNumber > 1 ? (this.pageStart + pageNumber) : 1
            if (this.pageStart > this.pageLimit.max) {
                this.pageStart = this.pageLimit.max
            }
            this.getData()
        },
        initPageList (total) {
            this.pageLimit.max = Math.ceil(total / this.$optionsDefault.pageSize)
            this.pageListRefresh()
        },
        getData () {
            let params = {
                [this.$optionsDefault.remote.pageIndexName]: this.pageStart + this.$optionsDefault.remote.offset,
                [this.$optionsDefault.remote.pageSizeName]: this.$optionsDefault.pageSize
            }
            Object.assign(params, this.$optionsDefault.remote.params)
            this.$emit('change', params)
            this.pageListRefresh()
        },
        pageListRefresh () {
            let arr = []
            for (let i = 2; i <= this.pageLimit.max - 1; i++) {
                arr.push(i)
            }
            if (this.pageLimit.max === 2) {
                arr.length = 1
                this.pageList = arr
                return
            }
            if (this.pageLimit.max < 10) {
                this.pageList = arr.slice(0, this.pageLimit.max)
                return
            }
            if (this.pageStart < 4) {
                this.pageList = arr.slice(0, 4)
            } else if (this.pageStart > this.pageLimit.max - optionsDefault.listNumber + 2) {
                this.pageList = arr.slice(-4)
            } else {
                let start = this.pageStart - 2 - Math.floor(optionsDefault.listNumber / 2)
                this.pageList = arr.slice(start, start + optionsDefault.listNumber)
            }
        }
    }
}
</script>
