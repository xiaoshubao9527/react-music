import {IMAGE_SIZE} from '@/common/constant'
// 获取指定图片的尺寸
/**
 * @url => String
 * @size => Number
 * **/
export const getImageSize = (url, size=IMAGE_SIZE) => {
    return `${url}?param=${size}y${size}`;
}
// 格式化播放数量 万和亿
/**
 * @number => Number
 * **/
export const formatePlayNumber = (number) => {
    if (number < 10000) {
        return number;
    } else if(number >= 10000 && number < 100000000) {
        number = Math.floor(number / 10000);
        return number + '万';
    } else {
        number = Math.floor(number / 100000000);
        return number + '亿';
    }
}
// 一维数组变成二维数组
/**
 * @sourceArray => Array 要分割的数组
 * @column => Number 分割成几个数组
 * @columnNumber => Number 每个数组显示多少个数据
 * 
 * **/
export const formateDimensionalArray = (sourceArray = [], column, columnNumber) => {
    let twoDimensionalArray = []
    for(let i = 0; i < column; i++) {
        sourceArray.forEach(item => {
            twoDimensionalArray[i] = sourceArray.slice(i*columnNumber, (i + 1)*columnNumber)
        })
    }
    return twoDimensionalArray;
}
// 格式化歌曲时间 毫秒变成分钟
export const formateTime = (time) => {
    if(!time) return '00:00';
    let m = Math.floor(time / 1000 / 60 % 60);
    m = (m + '').length > 1 ? m : '0' + m
    let s = Math.floor(time / 1000 % 60);
    s = (s + '').length > 1 ? s : '0' + s
    return `${m}:${s}`;
}
// 格式化格斯
export const formateLyric = (lyric) => {
    const newLyric = lyric.split(/\n/)
    const arr  = []
    newLyric.forEach(item => {
        const timeReg = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
        if (item.match(timeReg)) {
            const timeHou = item.match(timeReg)[1] * 60 * 1000
            const timeMin = item.match(timeReg)[2] * 1000
            const timeSec = item.match(timeReg)[3] * 1
            const time = timeHou + timeMin + timeSec
            const lyric = item.replace(timeReg, '').trim();
            arr.push({
                time,
                lyric
            })
        }
    })
    return arr;
}