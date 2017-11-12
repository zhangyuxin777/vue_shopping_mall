<template>
    <div class="address-container">
        <ul class="address-list">
            <li class="item" v-for="(item,index) in list" :id="index" >
                <div class="info">
                    <span class="user-name">{{item.userName}}</span>
                    <span class="text">{{item.gender===1?'女士':'先生'}}</span>
                    <span class="address">{{item.phone}}</span>
                </div>

            </li>
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
            return {
                list: []
            }
        },
        computed: {
            ...mapState({
                page: state => state.page
            })
        },
        methods: {},
        beforeMount () {

            req.get(this.$URL.GET_ADDRESS_LIST).then((res) => {
                this.list = res.content.list;
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
