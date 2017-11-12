import Vue from 'vue'
import $ from 'jquery'

export function get(url) {
    return new Promise((resolve, reject) => {
        $.ajax({
            async: true,
            url: url,
            type: 'get',
            dataType: 'json'
        }).done(function (res, status, xhr) {
            resolve(res);
        }).catch(function (res, status, xhr) {
            reject(res);
        });
    });
}

export function post(url, params) {
    return new Promise((resolve, reject) => {
        $.ajax({
            async: true,
            data: params,
            url: url,
            type: 'post',
            dataType: 'json'
        }).done(function (res) {
            resolve(res);
        }).catch(function (res, status, xhr) {
            reject(res);
        });
    });
}
