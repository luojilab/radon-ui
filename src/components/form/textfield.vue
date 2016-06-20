<style>
@import '../../css/index';
.rd-textfield-input {
    font-size: 1rem;
    line-height: 1.7;
    color: #666;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    padding: .1rem .5rem;
    width: 100%;
    outline: none;
    box-sizing: border-box;
}
.rd-textfield-input:focus, .rd-textfield-input:hover {
    border-color: #57c5f7;
}
.rd-textfield-wrapper {
    position: relative;
    width: 100%;
}
@-webkit-keyframes loading {
  from {
    transform-origin: 50% 50%;
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    transform-origin: 50% 50%;
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes loading {
  from {
    transform-origin: 50% 50%;
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    transform-origin: 50% 50%;
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.rd-textfield-loading-icon,
.rd-textfield-warning-icon,
.rd-textfield-failed-icon {
    display: inline-block;
    position: absolute;
    right: .5rem;
    top: .45rem;
}
.rd-textfield-loading-icon {
    animation: loading 1s infinite linear;
    color: #797979;
}
.rd-textfield-warning .rd-textfield-input {
    border-color: #fa0;
}
.rd-textfield-warning-icon {
    color: #fa0;
}
.rd-textfield-failed .rd-textfield-input {
    border-color: #f50;
}
.rd-textfield-failed-icon {
    color: #f50;
}
.rd-textfield-tip {
    position: absolute;
    left: 0;
    bottom: -1rem;
    font-size: .8rem;
}
</style>
<template>
    <div 
        class="rd-textfield-wrapper"
        :class="{ 
        'rd-textfield-warning': textState === 'warning',
        'rd-textfield-failed': textState === 'failed'
     }"
    >
        <input 
            type="text" 
            class="rd-textfield-input" 
            v-model="textfield.value" 
            :placeholder="textfield.placeHolder"
            @input="inputing"
        >
        <span class="rd-textfield-tip" v-if="textfield.tip">{{textfield.tip}}</span>
        <i class="rd-textfield-loading-icon ion-load-a" v-if="textState === 'loading'"></i>
        <i class="rd-textfield-warning-icon ion-information-circled" v-if="textState === 'warning'"></i>
        <i class="rd-textfield-failed-icon ion-close-circled" v-if="textState === 'failed'"></i>
    </div>
</template>
<script>
export default {
    props: {
        textfield: {
            type: Object,
            required: true
        },
        input: Function
    },
    computed: {
        textState () {
            if (this.textfield.state) {
                return this.textfield.state
            }
            return 'default'
        }
    },
    methods: {
        inputing () {
            if (this.input) {
                this.input()
            }
        }
    }
}
</script>