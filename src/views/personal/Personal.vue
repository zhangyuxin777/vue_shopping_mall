<template>
    <div class="personal-container">
        <div class="header">
            <img v-if="headerUrl.length > 0" class="header-img" :src="headerUrl"/>
            <i v-else class="iconfont icon-personal header-icon"></i>
            <div class="name">{{userName}}</div>
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
    import $ from 'jquery'
    import {mapState} from 'vuex';

    import Common from '../../js/rock';
    import * as req from '../../utils/req';

    export default{
        data () {
            return {
                headerUrl: '',
                userName: ''
            }
        },
        computed: {
            ...mapState({
                page: state => state.page
            })
        },
        methods: {},
        beforeMount () {

            req.get(this.$URL.GET_USER_INFO).then((res) => {
                this.headerUrl = res.content.headUrl;
                this.userName = res.content.userName;
            });
        },
        mounted () {
        }
    }
</script>

<style scoped lang="scss" type="text/css">
    @import "Personal.scss";
</style>
