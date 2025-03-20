# plum-cg

 [理论教程](README_Tutorial.md)


### 梅花策轨法的计算工具
梅花易数中策轨法论断法中，根据主卦及动爻来自动计算先天策数与后天轨数的工具。

- 包含完整的typescript类型定义
- 单元测试用例全面覆盖

#### 功能
- 策数计算
- 轨数计算
- 元策数计算
- 元轨数计算
- 策数配八卦
- 轨数配八卦
- 策数配五行
- 轨数配五行

其中，策轨配卦法中，数字5配艮坤卦的争议，也做了可选性兼容。

## 安装

```shell
npm install plum-cg
```


## 示例
```js
import {calcCFigure, calcGFigure} from 'plum-cg'

// 计算策数
/**传递卦的字符串格式（以先天卦数），如：震为雷4爻动-->444**/
calcCFigure('444') // return 7572

// 计算轨数
/**传递卦的字符串格式（以先天卦数），如：山火贲4爻动-->734**/
calcGFigure('734') // return 35301

//计算元策数
/**传递卦中阳爻的数量**/
calcOriginCFigure(6) // return 216

// 计算元轨数
/**传递卦中阳爻的数量**/
calcOriginGFigure(6) // return 768

// 策数配卦
getTrigramFromCFigure(10634) // return ['坎', '', '坎', '震', '兑']

// 轨数配卦
getTrigramFromGFigure(35301) // return ['震', '坤', '震', '', '坎']

// 策数配五行
getWuxingFromCFigure(11970) // return ['水', '水', '金', '火', '']

// 轨数配五行
getWuxingFromGFigure(15462) // return ['水', '土', '木', '金', '土']
```
