<style>
.header {
    display: flex;
    background: #fff;
    height: 4rem;
    line-height: 4rem;
    padding: 0 2rem;
    box-shadow: 0 0 1px rgba(0,0,0,.15);
}
.header-logo {
    margin-right: 1rem;
    flex-shrink: 0;
    font-family: serif;
    font-size: 1.4rem;
    line-height: 4rem;
    color: #000000;
    text-decoration: none;
}
.header-logo-image {
    height: 1.4rem;
    vertical-align: top;
    margin: 1.4rem 0 0 0;
}
.header-logo-content {
    height: 4rem;
    vertical-align: text-bottom;
}
.header-nav {
    width: 100%;
    display: flex;
}
.header-nav-item {
    text-decoration: none;
    color: #777777;
    display: block;
    margin: 0 1rem;
}
.header-nav-item.router-link-active {
    color: #03A9F4;
}
.header-sign {
    flex-shrink: 0;
}
.header-sign .um-button {
    line-height: 1.5rem;
    min-width: 4rem;
}
.header-nav-m {
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    height: 4rem;
    width: 4rem;
    text-align: center;
    font-size: 2rem;
}
.header-nav-m-list {
    position: absolute;
    z-index: 100;
    font-size: 1rem;
    background: #ccc;
    width: 100%;
    top: 4rem;
    left: 0;
    border-top: 1px solid #f7f7f7;
}
.header-nav-item-m {
    width: 100%;
    display: block;
    text-align: center;
    line-height: 3rem;
    background: #fff;
    border-bottom: 1px solid #f7f7f7;
    text-decoration: none;
    color: #333;
}
.header-nav-enter-active {
  animation: header-nav-in .3s cubic-bezier(0.215, 0.610, 0.355, 1.000);
}
.header-nav-leave-active {
  animation: header-nav-out .3s cubic-bezier(0.215, 0.610, 0.355, 1.000);
}
@keyframes header-nav-in {
    0% {
        transform: translate3d(0,30%,0);
        opacity: 0;
    }
    100% {
        transform: translate3d(0,0,0);
        opacity: 1;
    }
}
@keyframes header-nav-out {
    0% {
        transform: translate3d(0,0,0);
        opacity: 1;
    }
    100% {
        transform: translate3d(0,30%,0);
        opacity: 0;
    }
}
@media all and (max-width: 768px) {
    .header-nav-item {
        display: none;
    }
    .header {
        padding-left: 4rem;
        padding-right: 1rem;
    }
    .header-nav-m {
        display: initial;
    }
    .header-nav-m .header-nav-item {
        display: initial;
    }
}
</style>
<template>
    <header class="header">
        <div class="header-nav-m" @click="toggleMNav">
            <div class="header-nav-m-menu ion-navicon"></div>
        </div>
        <transition name="header-nav">
            <div class="header-nav-m-list" v-show="HeaderNav.show">
                <router-link class="header-nav-item-m" :to="nav.route" v-for="nav in HeaderNav.navs">{{ nav.text }}</router-link>
            </div>
        </transition>
        <router-link class="header-logo" to="/home">
            <!-- <img src="../assets/logo.svg" class="header-logo-image"> -->
            <span class="header-logo-content">Cov-X</span>
        </router-link>
        <nav class="header-nav">
            <router-link class="header-nav-item" :to="nav.route" v-for="nav in HeaderNav.navs">{{ nav.text }}</router-link>
        </nav>
        <slot></slot>
        <router-link class="header-logo" to="/login" v-if="!User">
            <div class="header-sign">
                <button :button="button.signUp">登录</button>
                <button :button="button.signIn">注册</button>
            </div>
        </router-link>
    </header>
</template>
<script>
export default {
    data () {
        return {
            button: {
                signIn: {
                    show: true,
                    state: 'success',
                    line: false,
                    loading: false
                },
                signUp: {
                    show: true,
                    state: 'success',
                    line: true,
                    loading: false
                }
            }
        }
    },
    computed: {
        HeaderNav () {
            return this.$store.getters.HeaderNav
        },
        User () {
            return this.$store.getters.User
        }
    },
    mounted () {
        window.addEventListener('resize', this.checkMobile)
    },
    methods: {
        checkMobile () {
            if (window.innerWidth > 800) {
                this.$store.dispatch('hideHeaderNav')
            }
        },
        toggleMNav () {
            if (this.HeaderNav.show) {
                this.$store.dispatch('hideHeaderNav')
            } else {
                this.$store.dispatch('showHeaderNav')
            }
        }
    }
}
</script>