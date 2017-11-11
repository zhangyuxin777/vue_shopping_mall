/**
 * 工具方法模块
 * @author  zhengchao
 * @Date 2017-05-09
 */

export default {
    // 科学计数表示
    getScienceForm (num) {
        const pattern = /(?=(?!\b)(\d{3})+$)/g;
        const str = `${num}`;
        return str.replace(pattern, ',');
    },
    lessThanIE10() {
        const UA = navigator.userAgent;
        const isIE = UA.indexOf('MSIE') > -1;
        const v = isIE ? /\d+/.exec(UA.split(';')[1]) : 11;
        return v < 10;
    },
    timeFormat(seconds, showHour) {
        const hour = Math.floor(seconds / 3600);
        const other = seconds % 3600;
        const minute = Math.floor(other / 60);
        const second = other % 60;

        const addZero = (num) => num < 10 ? `0${num}` : num;
        let timeString = `${addZero(minute)}:${addZero(second)}`;
        if (hour || showHour) {
            timeString = `${addZero(hour)}:${timeString}`;
        }
        return timeString;
    },
    timeFormatReverse(string) {
        const arr = string.split(':');
        let total = 0;
        if (arr.length === 2) {
            total = arr[0] * 60 + arr[1];
        }
        else {
            total = arr[0] * 3600 + arr[1] * 60 + arr[1];
        }
        return +total;
    },
    moneyFormat(num) {
        if (+num >= 10000) {
            return `${(num / 10000).toFixed(1)}w`;
        }
        return num;
    },
    objToQueryString(obj) {
        if (!obj) {
            return '';
        }
        const str = [];
        for (const p in obj) {
            if (obj.hasOwnProperty(p)) {
                str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`);
            }
        }
        return str.join('&');
    },
    timeFormate(time) {
        const T = new Date(time);
        return `${T.getFullYear()}-${(T.getMonth() + 1)}-${T.getDate()} ${T.getHours()}:${T.getMinutes()}`;
    },
    timeDateFormate(time) {
        const T = new Date(time);
        return `${T.getFullYear()}-${(T.getMonth() + 1)}-${T.getDate()}`;
    },
    /**
     * 格式化timestamp
     * @param  {integer} timestamp
     * @param  {string} format    格式字符串, 如 yyyy-MM-dd, yyyy-MM-dd hh:mm:ss
     * @return {string}           格式化后的字符串
     */
    formatTimestamp(timestamp, format) {
        const inputDate = new Date(timestamp);
        const date = {
            'M+': inputDate.getMonth() + 1,
            'd+': inputDate.getDate(),
            'h+': inputDate.getHours(),
            'm+': inputDate.getMinutes(),
            's+': inputDate.getSeconds(),
            'q+': Math.floor((inputDate.getMonth() + 3) / 3),
            'S+': inputDate.getMilliseconds()
        };
        if (/(y+)/i.test(format)) {
            format = format.replace(RegExp.$1, inputDate.getFullYear().toString().substr(4 - RegExp.$1.length));
        }
        for (const k in date) {
            if (new RegExp(`(${k})`).test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length === 1
                    ? date[k] : `00${date[k]}`.substr(date[k]).length);
            }
        }
        return format;
    }
};
