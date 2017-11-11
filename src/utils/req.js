import Vue from 'vue'

export function getRequest(url, params) {
    return new Promise((resolve, reject) => {
        Vue.http.get(
            url,
            {
                params: params
            },
            {emulateJSON: true}
        )
            .then((res) => {
                resolve(res);
            })
            .catch((res) => {
                reject(res);
            });
    });
}

export function postRequest(url, params) {
    return new Promise((resolve, reject) => {
        Vue.http.post(
            url,
            {
                params
            },
            {emulateJSON: true}
        )
            .then((res) => {
                resolve(res.body);
            })
            .catch((res) => {
                reject(res.body);
            });
    });
}
