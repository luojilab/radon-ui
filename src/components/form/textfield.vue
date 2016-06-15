<style>
.radon-textfield-input {
    font-size: 1rem;
    line-height: 1.7;
    color: #666;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    padding: 0 .5rem;
}
.radon-textfield-input:focus, .radon-textfield-input:hover {
    border-color: #57c5f7;
}
.radon-textfield-label {
    color: #666;
    text-align: right;
    vertical-align: middle;
    padding: 7px 0;
}
.radon-textfield-wrapper {
    position: relative;
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
.radon-textfield-loading-icon,
.radon-textfield-warning-icon,
.radon-textfield-failed-icon {
    display: inline-block;
    position: absolute;
    right: .5rem;
    top: .03rem;
}
.radon-textfield-loading-icon {
    animation: loading 1s infinite linear;
    color: #797979;
}
.radon-textfield-warning .radon-textfield-input {
    border-color: #fa0;
}
.radon-textfield-warning-icon {
    color: #fa0;
}
.radon-textfield-failed .radon-textfield-input {
    border-color: #f50;
}
.radon-textfield-failed-icon {
    color: #f50;
}
</style>
<template>
    <div 
        class="radon-textfield-container"
        :class="{ 
            'radon-textfield-warning': textState === 'warning',
            'radon-textfield-failed': textState === 'failed'
         }"
    >
        <label class="radon-textfield-label">{{textfield.title}}</label>
        <span class="radon-textfield-wrapper">
            <input 
                type="text" 
                class="radon-textfield-input" 
                v-model="textfield.value" 
                :placeholder="textfield.placeHolder"
            >
            <i class="radon-textfield-loading-icon ion-load-a" v-if="textState === 'loading'"></i>
            <i class="radon-textfield-warning-icon ion-information-circled" v-if="textState === 'warning'"></i>
            <i class="radon-textfield-failed-icon ion-close-circled" v-if="textState === 'failed'"></i>
        </span>
    </div>
</template>
<script>
export default {
    props: {
        textfield: {
            type: Object,
            required: true
        }
    },
    computed: {
        textState () {
            if (this.textfield.state) {
                return this.textfield.state
            }
            return 'default'
        }
    }
}
</script>