<template>
    <div class="main-view-container">
        <div class="content" id="mainContent">
            adfsdfsadasffafs
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import API from '../js/api'
    import Common from '../js/rock'
    import $ from 'jquery'
    import {mapState} from 'vuex'
    export default{
        data () {
            return {
                isLoading: false,
                isSwitching: false
            }
        },
        computed: {
            ...mapState({
                barStatus: state => state.barStatus,
                singerList: state => state.list.singer,
                albumList: state => state.list.album,
                mvList: state => state.list.mv,
                page: state => state.page
            })
        },
        methods: {

        },
        beforeMount () {

        },
        mounted () {

        }
    }
</script>

<style scoped lang="scss" type="text/css">
    @import "./mainView.scss";
</style>
