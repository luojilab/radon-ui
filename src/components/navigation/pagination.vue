<style>
@import '../../css/index';

</style>
<template>
    <div class="rd-pagination">
        <div class="rd-info" v-if="showInfo"></div>
        <div class="rd-jump" v-if="showJump">
            <input type="text" v-model="pageJump" /><span>search</span>
        </div>
        <ul class="rd-page" v-if="showList">
            <li @click="first" v-show="pageStart != 1">
                <span>first</span>
            </li>
            <li @click="prev" v-show="pageStart != 1" class="button">
                <span>Prev</span>
            </li>
            <li :class="{'active': el == pageStart}" @click="pagePath(el)" v-for="el in pageList">
                <span>{{el}}</span>
            </li>
            <li @click="next" v-show="pageStart != pageLimit.max" class="button">
                <span>Next</span>
            </li>
            <li @click="last" v-show="pageStart != pageLimit.max">
                <span>Last</span>
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
    listNumber: 7
}
let vueObj = {
    length: 0
}

function getData (pageIndex) {
    let params = {
        [this.$optionsDefault.remote.pageIndexName]: pageIndex + this.$optionsDefault.remote.offset,
        [this.$optionsDefault.remote.pageSizeName]: this.$optionsDefault.pageSize
    }
    Object.assign(params, this.$optionsDefault.remote.params)
    let ajax = this.$ajax || this.$http
    ajax.get(this.$optionsDefault.remote.url, params).then((res) => {
        var resData = res.data
        this.pageData = this.$optionsDefault.remote.dataKey ? resData[this.$optionsDefault.remote.dataKey] : resData
        this.pageLimit.total = resData[this.$optionsDefault.remote.totalName]
        if (this.pageLimit.total % this.$optionsDefault.pageSize === 0) {
            this.pageLimit.max = Math.floor(this.pageLimit.total / this.$optionsDefault.pageSize) || 5
        } else {
            this.pageLimit.max = Math.floor(this.pageLimit.total / this.$optionsDefault.pageSize + 1) || 5
        }
        pageListInit.call(this, pageIndex)
    }, function (error) {
        console.error(error)
    })
};

function pageListInit (now) {
    let arr = []
    for (let i = 1; i <= this.pageLimit.max; i++) {
        arr.push(i)
    }
    if (now < this.$optionsDefault.listNumber) {
        this.pageList = arr.slice(0, 9)
    } else if (now > this.pageLimit.max - optionsDefault.listNumber + 1) {
        this.pageList = arr.slice(-9)
    } else {
        let start = now - 1 - Math.floor(optionsDefault.listNumber / 2)
        this.pageList = arr.slice(start, start + optionsDefault.listNumber)
    }
};

let pagination = {
    replace: true,
    inherit: false,
    props: ['pageData', 'url', 'name'],
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
        Object.assign(this.$optionsDefault, optionsDefault, this.$ajaxOptionsDefault)
        if (this.url) {
            this.$optionsDefault.remote.url = this.url
        }
        if (this.name) {
            vueObj[this.name] = this
            vueObj.length++
        } else {
            vueObj[vueObj.length] = this
            vueObj.length++
        }
        getData.call(this, 1, 10)
    },
    methods: {
        pagePath (pageNumber) {
            this.pageStart = pageNumber
            getData.call(this, this.pageStart)
        },
        first () {
            this.pageStart = 1
            getData.call(this, this.pageStart)
        },
        last () {
            this.pageStart = this.pageLimit.max
            getData.call(this, this.pageStart)
        },
        prev () {
            this.pageStart > this.pageLimit.min ? this.pageStart-- : this.pageStart = 1
            getData.call(this, this.pageStart)
        },
        next () {
            this.pageStart < this.pageLimit.max ? this.pageStart++ : this.pageStart = this.max
            getData.call(this, this.pageStart, optionsDefault.pageSize)
        }
    }
}

export default pagination
</script>
