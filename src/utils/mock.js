/**
 * Created by oker on 2017/11/12.
 */
// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
const host = 'http://localhost:8080';

const userInfo = function () {
    return {
        'code': 0,
        'content': {
            'headUrl': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511023438&di=175028159501de8a1ef91fc68c339069&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.zbjdyw.com%2Fqqwebhimgs%2Fuploads%2Fbd24187499.jpg',
            'userName': '哼哼哈嘿'
        }
    }
};

// let obj = {
//     title: Random.csentence(5, 30), //  Random.csentence( min, max )
//     thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
//     author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
//     date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
// }

const addressList = function () {

    let list = [];
    for (let i = 0; i < 10; i++) {
        let obj = {
            userName: Random.cname(),
            gender: Random.natural(0, 1),
            phone: Random.natural(13012345678, 18812345678)
        }
        list.push(obj);
    }

    return {
        'code': 0,
        'content': {
            'list': list
        }
    }
};

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock(host + '/v1/user/profile', 'get', userInfo);
Mock.mock(host + '/v1/user/addressList', 'get', addressList);
