/**
 * 统一URL管理
 * @author yuxin.zhang
 * @Date 2017-05-24
 */

// function getContextPath() {
//     const pathName = document.location.pathname;
//     const index = pathName.substr(1).indexOf('/');
//     const result = pathName.substr(0, index + 1);
//     return result;
// }

const PROJECT_PRXFIX_URL = 'v1'; // 用来匹配 BASE_URL 中额外加的后缀的。正常情况下可以为空字符串
// var BASE_URL = location.protocol + '//' + location.host + getContextPath() + PROJECT_PRXFIX_URL;
const BASE_URL = `${location.protocol}//${location.host}/${PROJECT_PRXFIX_URL}`;
// const BASE_URL = `http://dev.okex.com:8000/${PROJECT_PRXFIX_URL}`;

/*
* URL统一管理
*/
const URL = {
    // 用户
    'GET_USER_INFO': `${BASE_URL}/user/profile`
};
export default URL;
