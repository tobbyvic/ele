import axios from 'axios';
import Qs from 'qs'

export default {
  install(Vue, options) {
    /**
     * 将一个数组分成几个同等长度的数组
     * @param array[分割的原数组]
     * @param size[每个子数组的长度]
     * @returns {Array}
     */
    Vue.prototype.sliceArray = function(array, size) {
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
    Vue.prototype.quickSort = function(arr) {
      if (arr.length <= 1) {
        return arr;
      }
      var pivotIndex = Math.floor(arr.length / 2);
      var pivot = arr.splice(pivotIndex, 1)[0];
      var left = [];
      var right = [];
      for (var i = 0; i < arr.length; i++) {
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
    Vue.prototype.isObjectValueEqual = function(a, b) {
      if (typeof a == 'number' && typeof b == 'number') {
        return a == b
      }


      var aProps = Object.getOwnPropertyNames(a);
      var bProps = Object.getOwnPropertyNames(b);

      if (aProps.length != bProps.length) {
        return false;
      }

      for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
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
      let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
      let D = date.getDate() + ' ';
      let H = date.getHours() + ':';
      let m = date.getMinutes() + ':';
      let s = date.getSeconds();
      return Y+M+D+H+m+s
    }

  }
}
