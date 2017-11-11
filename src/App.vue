
<template>
    <div id="app">
        <router-view></router-view>
        <FootBar></FootBar>
    </div>
</template>

<script type="text/ecmascript-6">

    import {mapState} from 'vuex'
    import storage from './js/storage'
    import Common from './js/rock'
    import $ from 'jquery'

    import FootBar from './components/footBar/FootBar'

    export default {
        name: 'app',

        components: {
            FootBar
        },

        beforeMount () {
            // 根据不同平台展示不同样式
            if (Common.system().weixin) {
                if (Common.system().android) {
                    $('body').addClass('weixin-android')
                } else if (Common.system().ios) {
                    $('body').addClass('weixin-ios')
                }
            }

            // pc 情况下显示切换背景色 突出边际
            $('html').css('background-color', (Common.system().android || Common.system().ios) ? '#f0f4f3' : '#add8e6')
        },

        mounted () {
        },

        methods: {

        },

        computed: {
        },

        watch: {

        }
    }
</script>



<style scoped>
    /*@import "css/mui/mui.min.css";*/
    @import "css/animate.css";
    @import "css/magic.css";
    @import "css/iconfont/iconfont.css";
</style>

<style lang="scss" type="text/css">
    @import "./App.scss";
</style>
