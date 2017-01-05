<style src="radon-ui-css/store/orderList.css"></style>
<template>
    <ul class="rd-order-list">
        <li class="rd-order-list-content" v-for="items in orders">
            <div class="rd-order-list-head">
                <div v-if="items.titles.left.show" class="rd-order-title-left">
                    <p v-for="title in items.titles.left.datas">{{title.key}}: {{title.value}}</p>
                </div>
                <div v-if="items.titles.center.show" class="rd-order-title-center">
                    <p v-for="title in items.titles.center.datas">{{title.key}}:{{title.value}}</p>
                </div>
                <div v-if="items.titles.right.show" class="rd-order-title-right">
                    <p v-for="title in items.titles.right.datas">{{title.key}}:{{title.value}}</p>
                </div>
            </div>
            <div class="rd-order-list-body">
                <table class="rd-order-product">
                    <tr class="rd-order-product-item" v-for="(products, index) in items.details">
                        <td>
                            <div class="rd-order-product-pic">
                                <img :src="products.picture_url" alt="">
                            </div>
                            <dl class="rd-order-baseinfo">
                                <dt>{{products.sku_name}}</dt>
                                <dd>SKU: {{products.sku_code}}</dd>
                            </dl>
                        </td>
                        <td>
                            <div class="rd-order-col">价格：<span>{{products.price}}</span></div>
                        </td>
                        <td>
                            <div class="rd-order-col">数量：<span>{{products.qty}}</span></div>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="rd-order-list-foot"></div>
        </li>
    </ul>
</template>
<script>
import {
    rdTable
} from 'radon-ui'

export default {
    props: {
        orders: {
            type: Array,
            default: () => {
                return [{
                    titles: {
                        left: {
                            show: true,
                            datas: [{
                                key: '订单号',
                                value: 'H105085427598439'
                            }, {
                                key: '流水号',
                                value: '12912017010517290264798028'
                            }]
                        },
                        center: {
                            show: false,
                            datas: []
                        },
                        right: {
                            show: true,
                            datas: [{
                                key: '实付',
                                value: '0.00'
                            }]
                        }
                    },
                    details: [{
                        id: 115477,
                        sku_code: "LJATS1608032WYM01",
                        sku_name: "《王阳明》：一切都是你和自己的战斗【1月14日发货】",
                        qty: 1,
                        price: "84.00",
                        picture_url: "https://piccdn.luojilab.com/store-pc/image/201609/1474519348399.jpg",
                        order: 111469
                    }, {
                        id: 115338,
                        sku_code: "LJATS1608032WYM01",
                        sku_name: "[预售1.14发货]罗辑思维 王阳明:一切心法（2册） 熊逸最新作品 现代思想解读传统文化 宋明心学 国学 中国古代",
                        qty: 1,
                        price: "84.00",
                        picture_url: "https://img.alicdn.com/bao/uploaded/i3/TB1631DNpXXXXczXVXXXXXXXXXX_!!0-item_pic.jpg",
                        order: 111332
                    }, {
                        id: 115337,
                        sku_code: "XLJD0X161206000465",
                        sku_name: "疯狂人类进化史(得到电子书) 史钧最新力作 让你瞠目结舌的“人”的真相",
                        qty: 1,
                        price: "17.90",
                        picture_url: "https://img.alicdn.com/bao/uploaded/i1/TB15qOWOFXXXXaFXVXXXXXXXXXX_!!2-item_pic.png",
                        order: 111332
                    }]
                }]
            }
        }
    },
    components: {
        rdTable
    }
}
</script>