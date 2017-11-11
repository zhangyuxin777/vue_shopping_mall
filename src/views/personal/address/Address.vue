<template>
    <div class="personal-container">
        <div class="header">
            <img v-if="header.length > 0" class="header-img" :src="header"/>
            <i v-else class="iconfont icon-personal header-icon"></i>
            <div class="name">{{name}}</div>
        </div>
        <div class="item">
            <i class="iconfont icon-order item-icon"></i>
            <span class="text">我的订单</span>
            <i class="iconfont icon-right"></i>
        </div>
        <div class="item">
            <i class="iconfont icon-address item-icon"></i>
            <span class="text">我的地址</span>
            <i class="iconfont icon-right"></i>
        </div>
        <div class="item">
            <i class="iconfont icon-info item-icon"></i>
            <span class="text">我的信息</span>
            <i class="iconfont icon-right"></i>
        </div>
        <div class="item">
            <i class="iconfont icon-collection item-icon"></i>
            <span class="text">我的收藏</span>
            <i class="iconfont icon-right"></i>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import API from '../../js/api'
    import Common from '../../js/rock'
    import $ from 'jquery'
    import {mapState} from 'vuex'
    export default{
        data () {
            return {
                header: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511023438&di=175028159501de8a1ef91fc68c339069&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.zbjdyw.com%2Fqqwebhimgs%2Fuploads%2Fbd24187499.jpg',
                name: '哼哼哈嘿'
            }
        },
        computed: {
            ...mapState({
                page: state => state.page
            })
        },
        methods: {},
        beforeMount () {

        },
        mounted () {
            this.$store.dispatch('playSong', 'ss')
        }
    }
</script>

<style scoped lang="scss" type="text/css">
    @import "Personal.scss";
</style>
