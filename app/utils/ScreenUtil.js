/**
 * Created by jason.gong on 2018/09/10.
 */
/*
 设备的像素密度，例如：
 PixelRatio.get() === 1          mdpi Android 设备 (160 dpi)
 PixelRatio.get() === 1.5        hdpi Android 设备 (240 dpi)
 PixelRatio.get() === 2          iPhone 4, 4S,iPhone 5, 5c, 5s,iPhone 6,xhdpi Android 设备 (320 dpi)
 PixelRatio.get() === 3          iPhone 6 plus , xxhdpi Android 设备 (480 dpi)
 PixelRatio.get() === 3.5        Nexus 6       */

import {
    Dimensions,
    PixelRatio,
} from 'react-native';


export const deviceWidth = Dimensions.get('window').width;      //设备的宽度
export const deviceHeight = Dimensions.get('window').height;    //设备的高度
let fontScale = PixelRatio.getFontScale();                      //返回字体大小缩放比例

let pixelRatio = PixelRatio.get();      //当前设备的像素密度
const defaultPixel = 2;                           //iphone6的像素密度
//px转换成dp
const w2 = 750 / defaultPixel;
const h2 = 1334 / defaultPixel;
const scale = Math.min(deviceHeight / h2, deviceWidth / w2);   //获取缩放比例

export default class ScreenUtil {
    /**
     * 设置text为sp
     * @param size sp
     * return number dp
     */

    static setSpText(size) {
        size = 3 * size;
        size = Math.round(size * scale + 0.5);
        return size / defaultPixel;
    }


    static scaleSize(size) {
        if (size == 0) {
            return 0;
        }
        size = Math.round(size * scale + 0.5);
        return size / defaultPixel;
    }

    static scaleSizeNew(size) {
        if (size == 0) {
            return 0;
        }
        size = Math.round(size * scale + 0.5);
        return Math.round(size / defaultPixel + 0.5);
    }

    static pixelRatio(size) {
        return size / PixelRatio.get();
    }
}
