<style>
    .form {
        max-width: 540px;
    }
    .img-min {
        width: 10rem;
    }
</style>
<template>
    <div>
        <rd-button @click="notificationAction"><rd-tooltip>点我触发notification</rd-tooltip>默认按钮</rd-button>
        <rd-button type="primary">按钮</rd-button>
        <rd-button type="ghost" size="large">large</rd-button>
        <rd-button type="ghost">common</rd-button>
        <rd-button type="ghost" size="small">small</rd-button>
        <rd-button type="ghost" :loading="true">save</rd-button>
        <rd-button type="icon"><i class="ion-upload"></i></rd-button>
        <rd-button-group>
            <rd-button type="ghost">common</rd-button>
            <rd-button type="ghost">common</rd-button>
            <rd-button type="ghost">common</rd-button>
        </rd-button-group>
        <rd-drop-button text="2333">
            <rd-button type="ghost" @click="notificationAction">common</rd-button>
            <rd-button type="ghost" @click="notificationAction">common</rd-button>
        </rd-drop-button>
        <rd-drop-button text="2333">
            <rd-button type="ghost" @click="notificationAction">common</rd-button>
            <rd-button type="ghost" @click="notificationAction">common</rd-button>
        </rd-drop-button>
        <rd-drop-button text="2333" type="primary">
            <rd-button type="ghost" @click="notificationAction">common</rd-button>
            <rd-button type="ghost" @click="notificationAction">common</rd-button>
        </rd-drop-button>
        <p>
            <rd-upload></rd-upload>
        </p>
        <p>
            <!-- <rd-text-select></rd-text-select> -->
        </p>
        <p>
            相信大多数前端开发人员，都使用过Angular、<rd-edit-text :value="textEditReact"></rd-edit-text>或者<rd-edit-text :value="textEditVue"></rd-edit-text>。他们都通过数据绑定的方法，提升了开发效率。
        </p>
        <form class="form">
            <form-item title="2333:">
                <rd-text :textfield="form.user"></rd-text>
            </form-item>
            <form-item title="username:">
                <rd-text :textfield="form.user" :input="userInputing"></rd-text>
            </form-item>
            <form-item title="password:">
                <rd-text :textfield="form.pass" :input="passInputing" type="password"></rd-text>
            </form-item>
            <form-item title="verify:">
                <rd-text @click="failed(form.bio)" :textfield="form.bio"></rd-text>
            </form-item>
            <form-item title="agree:">
                <rd-checkbox :checkbox="checkbox"></rd-checkbox>
                <rd-checkbox :checkbox="checkbox"></rd-checkbox>
            </form-item>
            <form-item title="sex:">
                <rd-radio-group :radios="radios"></rd-radio-group>
            </form-item>
            <form-item title="load:">
                <rd-progress @click="startProgress(progressCommon)" :progress="progressCommon"></rd-progress>
            </form-item>
            <form-item title="sex:">
                <rd-progress @click="startProgress(progressSmall)" :progress="progressSmall"></rd-progress>
            </form-item>
            <div>
                <rd-progress-circle @click="startProgress(progressCircle)" :progress="progressCircle"></rd-progress-circle>
            </div>
            <div>
                <rd-select :select="selectProvince"></rd-select>
                <rd-select :select="selectCity"></rd-select>

            </div>
            <form-item title="address:">
                <rd-cascader :cascader="cascader"></rd-cascader>
            </form-item>
            <form-item title="address:">
                <rd-switch :value="switchA"></rd-switch>
                <rd-switch :value="switchB"></rd-switch>
            </form-item>
            <form-item title="price:">
                <rd-slider :slider="slider"></rd-slider>
                <rd-timeline :timeline="timeline"></rd-timeline>
            </form-item>
            <form-item title="出发时间:">
                <rd-datepicker :date="datePicker"></rd-datepicker>
                <rd-timepicker :time-picker="timePicker"></rd-timepicker>
                <rd-alert></rd-alert>
            </form-item>
            <div>
                <!-- <rd-table :table="TableData"></rd-table> -->
            </div>
            <p>
                <rd-spin></rd-spin>
                <rd-spin color="red"></rd-spin>
            </p>
            <p>
                <span>233333333<rd-tooltip>这里是tooltip</rd-tooltip></span>
                <span>啊啊啊<rd-tooltip>这里是tooltip</rd-tooltip></span>
                <span>按时打算发生的<rd-tooltip>这里是tooltip</td-tooltip></span>
                <span>啊啊<rd-tooltip>这里是tooltip</rd-tooltip></span>
            </p>
            <p>
                <rd-breadcrumb :breadcrumb="breadcrumb.list" separator="/"></rd-breadcrumb>
            </p>

        </form>
        <p>
            <rd-number :number="number"></rd-number>
        </p>
        <p>
            <rd-audio :audio="audio"></rd-audio>
        </p>
        <p>
            <rd-textarea
                :textfield="textArea"
            ></rd-textarea>
        </p>
        <p>
            <img class="img-min" v-preview="'http:\/\/covteam.u.qiniudn.com/ka2.jpg'" src="http://covteam.u.qiniudn.com/ka2.jpg" alt="">
        </p>
        <p>
            <img class="img-min" v-preview="'http:\/\/covteam.u.qiniudn.com/poster.png'" src="http://covteam.u.qiniudn.com/poster.png" alt="">
        </p>
    </div>
</template>
<script>
import {
    rdSelect,
    formItem,
    rdButton,
    rdButtonGroup,
    rdDropButton,
    rdUpload,
    rdCheckbox,
    rdText,
    rdTextarea,
    rdEditText,
    rdTextSelect,
    rdRadioGroup,
    rdProgress,
    rdProgressCircle,
    rdCascader,
    rdSwitch,
    rdSlider,
    rdDatepicker,
    rdTooltip,
    rdTimeline,
    rdAlert,
    rdTable,
    rdTimepicker,
    rdSpin,
    rdBreadcrumb,
    rdAudio,
    rdNumber,
    rdAutoSearch
} from '../../src/components/index'

const options = [{
    value: 'china',
    label: '中国',
    children: [{
        value: 'sichuan',
        label: '四川',
        children: [{
            value: 'chegndu',
            label: '成都'
        }, {
            value: 'deyang',
            label: '德阳'
        }]
    }]
}, {
    value: 'America',
    label: '美国',
    children: [{
        value: 'California',
        label: '加利福尼亚',
        children: [{
            value: 'lake',
            label: '湖'
        }, {
            value: 'Los Angeles',
            label: '洛杉矶'
        }]
    }, {
        value: 'Delaware',
        label: '特拉华',
        children: [{
            value: 'Dover',
            label: '多佛'
        }]
    }]
}, {
    value: 'china',
    label: '中国',
    children: [{
        value: 'sichuan',
        label: '四川',
        children: [{
            value: 'chegndu',
            label: '成都'
        }, {
            value: 'deyang',
            label: '德阳'
        }]
    }]
}, {
    value: 'America',
    label: '美国',
    children: [{
        value: 'California',
        label: '加利福尼亚',
        children: [{
            value: 'lake',
            label: '湖'
        }, {
            value: 'Los Angeles',
            label: '洛杉矶'
        }]
    }, {
        value: 'Delaware',
        label: '特拉华',
        children: [{
            value: 'Dover',
            label: '多佛'
        }]
    }]
}, {
    value: 'china',
    label: '中国',
    children: [{
        value: 'sichuan',
        label: '四川',
        children: [{
            value: 'chegndu',
            label: '成都'
        }, {
            value: 'deyang',
            label: '德阳'
        }]
    }]
}, {
    value: 'America',
    label: '美国',
    children: [{
        value: 'California',
        label: '加利福尼亚',
        children: [{
            value: 'lake',
            label: '湖'
        }, {
            value: 'Los Angeles',
            label: '洛杉矶'
        }]
    }, {
        value: 'Delaware',
        label: '特拉华',
        children: [{
            value: 'Dover',
            label: '多佛'
        }]
    }]
}]

export default {
    data () {
        return {
            textEditVue: {
                value: 'Vuejs',
                tip: true
            },
            textEditReact: {
                value: 'React',
                tip: false
            },
            textArea: {
                value: '',
                minHeight: 100,
                autoResize: true,
                lineHeight: 14,
                input () {
                    console.log('textarea is inputing')
                },
                change () {
                    console.log('textarea is changed')
                }
            },
            number: {
                value: 0,
                step: 0.1,
                format: 2,
                min: -5,
                max: 10
            },
            audio: {
                title: 'ninelie-Aimer',
                src: 'http://covteam.u.qiniudn.com/test2.mp3',
                poster: 'http://covteam.u.qiniudn.com/ka2.jpg',
                options: {
                    preload: false,
                    autoplay: false,
                    rate: 1,
                    loop: false,
                    volume: 0.5
                }
            },
            breadcrumb: {
                separator: '/',
                list: [{
                    icon: 'ion-home',
                    value: '首页',
                    route: {
                        path: '/'
                    }
                }, {
                    icon: 'ion-document',
                    value: '订单',
                    route: {
                        path: '/button'
                    }
                }, {
                    value: '订单查询',
                    route: {
                        path: '/form'
                    }
                }]
            },
            TableData: {
                options: {
                    select: true,
                    state: true,
                    editable: true
                },
                columns: [{
                    index: 0,
                    key: 'id',
                    value: 'ID',
                    sort: {
                        state: false,
                        func: (e, col) => {
                            this.sortBy(col)
                        }
                    }
                }, {
                    index: 1,
                    key: 'name',
                    value: '姓名'
                }, {
                    index: 2,
                    key: 'age',
                    value: '年龄',
                    sort: {
                        state: false,
                        func: (e, col) => {
                            this.sortBy(col)
                        }
                    }
                }, {
                    index: 3,
                    key: 'wechat',
                    value: '微信'
                }],
                actions: [{
                    type: 'button',
                    text: '删除',
                    func: (e, row) => {
                        console.log(row)
                        this.removeTableItem(row)
                    }
                }],
                tableData: [{
                    id: {
                        value: 1,
                        type: 'number',
                        editable: false
                    },
                    name: {
                        value: '王尼玛',
                        type: 'text',
                        editable: true
                    },
                    age: {
                        value: '26',
                        type: 'number',
                        editable: true
                    },
                    wechat: {
                        value: 'wangnima',
                        type: 'text',
                        editable: true
                    },
                    state: {
                        type: 'success',
                        value: '批准'
                    },
                    checkbox: {
                        disabled: false,
                        checked: false,
                        text: ''
                    }
                }, {
                    id: {
                        value: 2,
                        type: 'number',
                        editable: false
                    },
                    name: {
                        value: '赵铁柱',
                        type: 'text',
                        editable: true
                    },
                    age: {
                        value: '26',
                        type: 'number',
                        editable: true
                    },
                    wechat: {
                        value: 'Iron-column-zhao',
                        type: 'text',
                        editable: true
                    },
                    state: {
                        type: 'info',
                        value: '待审'
                    },
                    checkbox: {
                        disabled: false,
                        checked: false,
                        text: ''
                    }
                }, {
                    id: {
                        value: 3,
                        type: 'number',
                        editable: false
                    },
                    name: {
                        value: '张全蛋',
                        type: 'text',
                        editable: true
                    },
                    age: {
                        value: '27',
                        type: 'number',
                        editable: true
                    },
                    wechat: {
                        value: 'Michael Jack',
                        type: 'text',
                        editable: true
                    },
                    state: {
                        type: 'failed',
                        value: '拒绝'
                    },
                    checkbox: {
                        disabled: false,
                        checked: false,
                        text: ''
                    }
                }]
            },
            cascader: {
                options: options,
                valueArr: []
            },
            timeline: [{
                icon: 'ion-alert-circled',
                color: '#2db7f5',
                text: '创建服务现场 2015-09-01'
            },
            {
                color: '#2db7f5',
                text: '创建服务现场 2015-09-01'
            },
            {
                color: 'red',
                text: '创建服务现场 2015-09-01'
            }],
            timePicker: {
                value: ''
            },
            datePicker: {
                value: '',
                options: {
                    timePicker: true,
                    format: 'YYYY-MM-DD',
                    monthList: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                    weekList: ['一', '二', '三', '四', '五', '六', '日'],
                    limit: {
                        weekDay: {
                            availables: [1, 2, 3, 4, 5, 6, 0]
                        },
                        customerLimit: function (day) {
                            return Math.random() * 2 > 1
                        }
                    }
                }
            },
            slider: {
                value: 43
            },
            switchA: {
                checked: false
            },
            switchB: {
                checked: false,
                size: 'small'
            },
            progressCommon: {
                percent: 50,
                options: {
                    color: '#2db7f5',
                    size: 'common',
                    state: 'loading'
                }
            },
            progressSmall: {
                percent: 50,
                options: {
                    color: '#2db7f5',
                    size: 'small',
                    state: 'loading'
                }
            },
            progressCircle: {
                percent: 50,
                options: {
                    color: '#2db7f5',
                    size: 'small',
                    state: '',
                    format: function (percent) {
                        return percent + '% '
                    }
                }
            },
            radios: [{
                checked: false,
                value: 'A'
            }, {
                checked: false,
                value: 'B'
            }, {
                checked: false,
                value: 'C'
            }, {
                checked: false,
                value: 'aa'
            }],
            selectCity: {
                value: {},
                options: []
            },
            selectProvince: {
                value: {},
                options: [{
                    selected: false,
                    disabled: false,
                    value: '四川',
                    id: 1
                }, {
                    selected: false,
                    disabled: false,
                    value: '北京',
                    id: 2
                }, {
                    selected: false,
                    disabled: false,
                    value: '广东',
                    id: 3
                }]
            },
            checkbox: {
                checked: false,
                text: '我已阅读用户协议'
            },
            form: {
                user: {
                    value: '',
                    placeHolder: 'input here',
                    title: '用户名:',
                    state: 'loading',
                    tip: ''
                },
                pass: {
                    value: '',
                    placeHolder: 'input here',
                    title: '密码:',
                    state: 'default',
                    tip: ''
                },
                bio: {
                    value: '',
                    placeHolder: 'input here',
                    title: '验证码:',
                    state: 'failed'
                }
            }
        }
    },
    computed: {
        selectCityOptions () {
            let CITY_DATA = {
                1: [{
                    selected: false,
                    disabled: false,
                    value: '成都',
                    id: 1
                }, {
                    selected: false,
                    disabled: false,
                    value: '德阳',
                    id: 2
                }],
                2: [{
                    selected: false,
                    disabled: false,
                    value: '海淀',
                    id: 2
                }, {
                    selected: false,
                    disabled: false,
                    value: '朝阳',
                    id: 1
                }],
                3: [{
                    selected: false,
                    disabled: false,
                    value: '广州',
                    id: 2
                }, {
                    selected: false,
                    disabled: false,
                    value: '深圳',
                    id: 1
                }]
            }
            if (this.selectProvince.value.id) {
                return CITY_DATA[this.selectProvince.value.id].slice()
            }
            return []
        }
    },
    components: {
        formItem,
        rdSelect,
        rdButton,
        rdButtonGroup,
        rdDropButton,
        rdUpload,
        rdCheckbox,
        rdText,
        rdTextarea,
        rdEditText,
        rdTextSelect,
        rdRadioGroup,
        rdProgress,
        rdProgressCircle,
        rdCascader,
        rdSwitch,
        rdSlider,
        rdDatepicker,
        rdTooltip,
        rdTimeline,
        rdAlert,
        rdTable,
        rdTimepicker,
        rdSpin,
        rdBreadcrumb,
        rdAudio,
        rdNumber,
        rdAutoSearch
    },
    methods: {
        editTable (row) {
            this.$Notification.success('正在编辑' + row._value[0], '', 5000)
        },
        removeTableItem (row) {
            this.TableData.tableData.forEach(item => {
                if (item.id === row.id) {
                    this.TableData.tableData.$remove(item)
                }
            })
            this.$Notification.success('删除' + row._value[0] + '成功', '', 5000)
        },
        notificationAction () {
            this.$Notification.success('2333', '233', 5000)
        },
        userInputing () {
            this.form.user.state = 'loading'
            const MAP = {
                0: {
                    state: 'loading',
                    tip: 'loading?!'
                },
                1: {
                    state: 'failed',
                    tip: '该用户名已被使用'
                },
                2: {
                    state: 'success',
                    tip: '该用户名似乎没有被使用'
                },
                3: {
                    state: 'info',
                    tip: '该用户名已被使用'
                },
                4: {
                    state: 'warning',
                    tip: '该用户名已被使用'
                }
            }
            setTimeout(() => {
                let i = Math.floor(Math.random() * 4.9)
                this.form.user.state = MAP[i].state
                this.form.user.tip = MAP[i].tip
            }, 2000)
        },
        passInputing () {
            if (this.form.pass.value.length < 6) {
                this.form.pass.state = 'warning'
                this.form.pass.tip = '请输入数字和字母'
            } else {
                this.form.pass.state = 'default'
                this.form.pass.tip = ''
            }
        },
        failed (input) {
            this.$Modal.create('网络错误', '无法连接到服务器', () => {
                input.state = 'default'
                console.log('confirmed')
            }, () => {
                console.log('canceled')
            })
        },
        startProgress (progress) {
            progress.percent = 0
            progress.options.state = ''
            let timer = setInterval(() => {
                if (progress.percent < 100) {
                    progress.percent++
                } else {
                    if (Math.random() * 2 < 1) {
                        progress.options.state = 'failed'
                    } else {
                        progress.options.state = 'success'
                    }
                    clearInterval(timer)
                }
            }, 50)
        }
    }
}
</script>
