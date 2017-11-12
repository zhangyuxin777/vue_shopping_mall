<template>
    <div class="address-container">
        <ul class="address-list">

        </ul>

        <div class="add-address">
            <i class="iconfont icon-add"></i>
            <span class="text">新增收货地址</span>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapState} from 'vuex'
    import * as req from '../../../utils/req';

    export default{
        data () {
            return {}
        },
        computed: {
            ...mapState({
                page: state => state.page
            })
        },
        methods: {},
        beforeMount () {

            req.get(this.$URL.GET_ADDRESS_LIST).then((res) => {
                console.log(res)
            }).catch(res => {
                console.log(res)
            });
        },
        mounted () {
        }
    }
</script>

<style scoped lang="scss" type="text/css">
    @import "Address.scss";
</style>
