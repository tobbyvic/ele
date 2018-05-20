import axios from 'axios';
import Qs from 'qs'

export default {
  install(Vue, options) {
    /**
     * 传递过来的图片地址需要处理后才能正常使用
     * @param path
     * @returns {string}
     */
    Vue.prototype.$getImgPath = function (path) {
      let suffix;
      if (!path) {
        return '//elm.cangdu.org/img/default.jpg'
      }
      if (path.indexOf('jpeg') !== -1) {
        suffix = '.jpeg'
      } else {
        suffix = '.png'
      }
      let url = '/' + path.substr(0, 1) + '/' + path.substr(1, 2) + '/' + path.substr(3) + suffix;
      return 'https://fuss10.elemecdn.com' + url
    };

    /**
     * 设置一个离线存储方法的对象
     * @type {{setStore: function(*=, *=), getStore: function(*=), removeStore: function(*=)}}
     */
    Vue.prototype.$storeObject = {
      setStore: (name, content) => {
        if (!name) return;
        if (typeof content !== 'string') {
          content = JSON.stringify(content);
        }
        window.localStorage.setItem(name, content);
      },
      getStore: (name) => {
        if (!name) return;
        return window.localStorage.getItem(name);
      },
      removeStore: (name )=> {
        if (!name) return;
        window.localStorage.removeItem(name);
      }
    };
    /**
     * 将axios挂载到全局对象
     * @type {AxiosInstance}
     */
    Vue.prototype.$http = axios.create({
      baseURL: 'http://cangdu.org:8001/',
      transformRequest: [function (data) {
        return Qs.stringify(data)
      }],
      transformResponse: [(data) => {
        // let res = data.slice(1)
        return JSON.parse(data)
      }]
    });

    /**
     * 将一个数组分成几个同等长度的数组
     * array[分割的原数组]
     * size[每个子数组的长度]
     */
    Vue.prototype.sliceArray = function (array, size) {
      let result = [];
      for (let x = 0; x < Math.ceil(array.length / size); x++) {
        let start = x * size;
        let end = start + size;
        result.push(array.slice(start, end));
      }
      return result;
    };
    /**
     * 快排，返回排序后的数组
     * @param arr
     * @returns {array}
     */
    Vue.prototype.quickSort = function (arr) {
      if (arr.length <= 1) {
        return arr;
      }
      let pivotIndex = Math.floor(arr.length / 2);
      let pivot = arr.splice(pivotIndex, 1)[0];
      let left = [];
      let right = [];
      for (let i = 0; i < arr.length; i++) {
        //根据price进行快排
        if (arr[i].price < pivot.price) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      }
      return quickSort(left).concat([pivot], quickSort(right));
    };
    /**
     * 判断两个对象是否相等
     * @param a
     * @param b
     * @returns {boolean}
     */
    Vue.prototype.isObjectValueEqual = function (a, b) {
      if (typeof a == 'number' && typeof b == 'number') {
        return a == b
      }


      let aProps = Object.getOwnPropertyNames(a);
      let bProps = Object.getOwnPropertyNames(b);

      if (aProps.length != bProps.length) {
        return false;
      }

      for (let i = 0; i < aProps.length; i++) {
        let propName = aProps[i];
        if (Object.prototype.toString(a[propName]) == '[Object Object]' || Object.prototype.toString(b[propName]) == '[Object Object]') {
          isObjectValueEqual(a[propName], b[propName])
        }
        if (a[propName] !== b[propName]) {
          return false;
        }
      }
      return true;
    };
    /**
     * 将时间戳转换成正常时间格式
     * @param time
     * @returns {string}
     */
    Vue.prototype.switchTime = function (time) {
      console.log(time);
      let date = new Date(parseInt(time));
      let Y = date.getFullYear() + '-';
      let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      let D = date.getDate() + ' ';
      let H = date.getHours() + ':';
      let m = date.getMinutes() + ':';
      let s = date.getSeconds();
      return Y + M + D + H + m + s
    }

  }
}
