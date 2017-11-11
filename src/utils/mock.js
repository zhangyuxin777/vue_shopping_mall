/**
 * Created by oker on 2017/11/12.
 */
import Mock from 'mockjs';

export default Mock.mock('http://localhost:8080/v1/user/profile', {

    'name': '@name',

    'age|1-100': 100,

    'color': '@color'

});
