<template>
    <div class="foot-bar-container">
        <ul class="foot-bar-box">
            <li class="item" v-for="(item,index) in list"
                @click="click"
                :id="index"
                :class="{'checked':index == checkedId}">
                <i class="iconfont icon" :class="item.icon"></i>
                <span class="text">{{item.text}}</span>
            </li>
        </ul>
    </div>
</template>
<script type="text/ecmascript-6">
    import {mapState} from 'vuex'
    export default {
        data () {
            return {
                list: [
                    {
                        text: '外卖',
                        icon: 'icon-product'
                    },
                    {
                        text: '订单',
                        icon: 'icon-order'
                    },
                    {
                        text: '个人',
                        icon: 'icon-personal'
                    }
                ],
                checkedId: 0
            }
        },
        computed: {
            ...mapState({
                progress: state => (state.play.status.position / parseFloat(state.play.status.total) * 100)
            })
        },
        methods: {
            click (e) {
                this.checkedId = e.target.id;
            }
        },
        mounted () {
            let _this = this

        },
        watch: {}
    }
</script>

<style scoped lang="scss" type="text/css">
    @import "FootBar.scss";
</style>

