<style>
    .form {
        max-width: 540px;
    }
</style>
<template>
    <div>
        <radon-button @click="notificationAction">default</radon-button>
        <radon-button type="primary">primary</radon-button>
        <radon-button type="ghost" size="large">large</radon-button>
        <radon-button type="ghost">common</radon-button>
        <radon-button type="ghost" size="small">small</radon-button>
        <radon-button type="ghost" :loading="true">save</radon-button>
        <radon-button type="icon"><i class="ion-upload"></i></radon-button>
        <radon-button-group>
            <radon-button type="ghost">common</radon-button>
            <radon-button type="ghost">common</radon-button>
            <radon-button type="ghost">common</radon-button>
        </radon-button-group>
        <form class="form">
            <form-item title="2333:">
                <radon-text :textfield="form.user"></radon-text>
            </form-item>
            <form-item title="username:">
                <radon-text :textfield="form.user" :input="userInputing"></radon-text>
            </form-item>
            <form-item title="password:">
                <radon-text :textfield="form.pass" :input="passInputing"></radon-text>
            </form-item>
            <form-item title="verify:">
                <radon-text @click="failed(form.bio)" :textfield="form.bio"></radon-text>
            </form-item>
            <form-item title="agree:">
                <radon-checkbox :checkbox="checkbox"></radon-checkbox>
                <radon-checkbox :checkbox="checkbox"></radon-checkbox>
            </form-item>
            <form-item title="sex:">
                <radon-radio :radios="radios"></radon-radio>
            </form-item>
            <form-item title="load:">
                <radon-progress @click="startProgress(progressCommon)" :progress="progressCommon"></radon-progress>
            </form-item>
            <form-item title="sex:">
                <radon-progress @click="startProgress(progressSmall)" :progress="progressSmall"></radon-progress>
            </form-item>
            <div>
                <randon-progress-circle @click="startProgress(progressCircle)" :progress="progressCircle"></randon-progress-circle>
            </div>
            <div>
                <rd-select :value.sync="selectProvince.value" :options.sync="selectProvince.options"></rd-select>
                <rd-select :value.sync="selectCity.value" :options.sync="selectCityOptions"></rd-select>
                
            </div>
            <form-item title="address:">
                <radon-cascader :cascader="cascader"></radon-cascader>
            </form-item>
            <form-item title="address:">
                <radon-switch :checked.sync="switchA" size="small"></radon-switch>
                <radon-switch :checked.sync="switchA"></radon-switch>
            </form-item>
            <form-item title="price:">
                <rd-slider :value.sync="slider"></rd-slider>
                <rd-timeline :timeline="timeline"></rd-timeline>
            </form-item>
            <form-item title="出发时间:">
                <span>233333333<rd-tooltip></td-tooltip></span>
                <rd-date-picker :value.sync="datePicker.value" :options="datePicker.options"></rd-date-picker>
                <rd-alert></rd-alert>
            </form-item>
        </form>
    </div>
</template>
<script>
import {
    rdSelect,
    formItem,
    radonButton,
    radonButtonGroup,
    radonCheckbox,
    radonText,
    radonRadio,
    radonProgress,
    randonProgressCircle,
    radonCascader,
    radonSwitch,
    rdSlider,
    rdDatePicker,
    rdTooltip,
    rdTimeline,
    rdAlert
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
            datePicker: {
                value: '',
                options: {
                    format: 'YYYY-MM-DD',
                    monthList: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
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
            slider: 43,
            switchA: false,
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
                        return percent + '% off'
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
                value: {}
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
        radonButton,
        radonButtonGroup,
        radonCheckbox,
        radonText,
        radonRadio,
        radonProgress,
        randonProgressCircle,
        radonCascader,
        radonSwitch,
        rdSlider,
        rdDatePicker,
        rdTooltip,
        rdTimeline,
        rdAlert
    },
    methods: {
        notificationAction () {
            this.$Notification.success('2333', '233', 5000)
        },
        userInputing () {
            this.form.user.state = 'loading'

            setTimeout(() => {
                if (this.form.user.value.length < 6) {
                    this.form.user.state = 'failed'
                    this.form.user.tip = '该用户名已被使用'
                } else {
                    this.form.user.state = 'default'
                    this.form.user.tip = ''
                }
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
