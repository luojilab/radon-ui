<style>
.radon-btn {
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-color: #57c5f7;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: .5rem;
    font-size: 1rem;
    min-width: 5rem;
    color: #fff;
    border-radius: 4px;
    transition: background 0.2s;
}
.radon-btn-default {
    color: #666;
    background-color: #f7f7f7;
    border-color: #d9d9d9;
}
.radon-btn-primary {
    color: #fff;
    background-color: #57c5f7;
}
.radon-btn-ghost {
    color: #666;
    background-color: transparent;
    border-color: #d9d9d9;
}
.radon-btn:focus, .radon-btn:hover {
    color: #57c5f7;
    background-color: #fff;
    border-color: #57c5f7;
}
.radon-btn.radon-btn-primary:hover,
.radon-btn.radon-btn-primary:focus {
    background-color: #81d8ff;
    color: #fff;
}
.radon-btn.radon-btn-small {
    padding: .2em .4rem;
    min-width: initial;
}
.radon-btn.radon-btn-large {
    padding: .5rem 1.5rem;
    font-size: 1.4rem;
}
.radon-btn.radon-btn-icon {
    width: 2rem;
    min-width: initial;
    border-radius: 50%;
    height: 2rem;
    line-height: 2rem;
    padding: 0;
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

.radon-btn-loading {
    display: inline-block;
    animation: loading 1s infinite linear;
}
</style>
<template>
    <button 
        class="radon-btn"
        :class="{
            'radon-btn-primary' : type === 'primary',
            'radon-btn-default' : type === 'default',
            'radon-btn-ghost'   : type === 'ghost',
            'radon-btn-icon'    : type === 'icon',
            'radon-btn-small'   : size === 'small',
            'radon-btn-large'   : size === 'large'
        }"
    >
        <span class="radon-btn-loading ion-load-a" v-if="loading"></span>
        <span>
            <slot></slot>
        </span>
    </button>
</template>
<script>
export default {
    props: {
        type: {
            type: String,
            default: () => {
                return 'default'
            }
        },
        size: {
            type: String,
            default: () => {
                return 'default'
            }
        },
        loading: {
            type: Boolean,
            default () {
                return false
            }
        }
    }
}
</script>