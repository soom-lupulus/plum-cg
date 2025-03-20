
import { trigram_info } from "./trigram.js";
import { YANG_C, YIN_C, YAO_TOTAL, YANG_G, YIN_G } from "./const.js";

/**
 * 元策数计算
 * @param YangYaoCount 卦中阳爻的数量
 * @returns 元策数
 * @author YuYunhao
 */
export const calcOriginCFigure = (YangYaoCount: number) => {
  return YangYaoCount * YANG_C + (YAO_TOTAL - YangYaoCount) * YIN_C;
};

/**
 * 元轨数计算
 * @param YangYaoCount 卦中阳爻的数量
 * @returns 元轨数
 * @author YuYunhao
 */
export const calcOriginGFigure = (YangYaoCount: number) => {
  return YangYaoCount * YANG_G + (YAO_TOTAL - YangYaoCount) * YIN_G;
};

/**
 * 策数计算
 * @param formatString 计算卦的策数，如：地天泰5爻动，用卦的先天数，传递'815'
 * @returns 卦对应的策数
 * @author YuYunhao
 */
export const calcCFigure = (formatString: string): number => {
  const [externalTrigramNum, internalTrigramNum, shiftYao] = formatString
    .split("")
    .map((i) => +i);
  const externalTrigram = trigram_info.find(
    (i) => i.pre_num === externalTrigramNum
  );
  const internalTrigram = trigram_info.find(
    (i) => i.pre_num === internalTrigramNum
  );
  if (externalTrigram === undefined || internalTrigram === undefined) {
    throw new Error('invalid format string!')
  }
  const trigramYangYaoNum =
    externalTrigram.yao_yang_num + internalTrigram.yao_yang_num;
  // 元策数
  const OriginCFigure = calcOriginCFigure(trigramYangYaoNum);
  // 错综数
  const kaleidoscopeFigure =
    externalTrigram.pre_num + internalTrigram.pre_num + shiftYao;
  let CFigure = Number.MAX_SAFE_INTEGER;
  if (shiftYao > YAO_TOTAL / 2) {
    CFigure =
      shiftYao * 10 * OriginCFigure +
      externalTrigram.pre_num * 1 * OriginCFigure +
      OriginCFigure +
      kaleidoscopeFigure;
  } else {
    CFigure =
      shiftYao * 1 * OriginCFigure +
      internalTrigram.pre_num * 10 * OriginCFigure +
      OriginCFigure +
      kaleidoscopeFigure;
  }
  return CFigure;
};

/**
 * 轨数计算
 * @param formatString 计算卦的轨数，如：地天泰5爻动，用卦的先天数，传递'815'
 * @returns 卦对应的轨数
 * @author YuYunhao
 */
export const calcGFigure = (formatString: string): number => {
  const [externalTrigramNum, internalTrigramNum, shiftYao] = formatString
    .split("")
    .map((i) => +i);
  const externalTrigram = trigram_info.find(
    (i) => i.pre_num === externalTrigramNum
  );
  const internalTrigram = trigram_info.find(
    (i) => i.pre_num === internalTrigramNum
  );
  if (externalTrigram === undefined || internalTrigram === undefined) {
    throw new Error('invalid format string!')
  }
  const trigramYangYaoNum =
    externalTrigram.yao_yang_num + internalTrigram.yao_yang_num;
  // 元轨数
  const OriginGFigure = calcOriginGFigure(trigramYangYaoNum);
  // 错综数
  const kaleidoscopeFigure =
    externalTrigram.after_num + internalTrigram.after_num + shiftYao;
  let GFigure = Number.MAX_SAFE_INTEGER;
  if (shiftYao > YAO_TOTAL / 2) {
    GFigure =
      shiftYao * 10 * OriginGFigure +
      externalTrigram.after_num * 1 * OriginGFigure +
      OriginGFigure +
      kaleidoscopeFigure;
  } else {
    GFigure =
      shiftYao * 1 * OriginGFigure +
      internalTrigram.after_num * 10 * OriginGFigure +
      OriginGFigure +
      kaleidoscopeFigure;
  }
  return GFigure;
};

export function getTrigramFromCFigure(cFigure: number): string[]
export function getTrigramFromCFigure(cFigure: number, mode: 1, ganYang: boolean): string[]
/**
 * 策数配卦
 * @param cFigure 卦的策数
 * @param mode 策数5的配卦方式，默认不传递为艮，传递1会根据日干的阴阳来配，阳艮阴坤
 * @param ganYang 当日日干是否为阳干
 * @returns 策数对应的八卦
 * @author YuYunhao
 */
export function getTrigramFromCFigure(cFigure: number, mode?: 1, ganYang?: boolean): string[] {
  const cFigureToTrigramMap = ['', '坎', '离', '震', '兑', '艮坤', '坎', '离', '巽', '乾']
  return cFigure.toString().split('').map(i => {
    const j = Number(i)
    if (j !== 5) return cFigureToTrigramMap[j]
    if (typeof mode === 'undefined') return '艮'
    return ganYang ? '艮' : '坤'
  })
}

// 轨数配卦
/** @function */
export function getTrigramFromGFigure(gFigure: number): string[]
/** @function */
export function getTrigramFromGFigure(gFigure: number, mode: 1, ganYang: boolean): string[]
/**
 * 
 * @param gFigure 卦的轨数
 * @param mode 轨数5的配卦方式，默认不传递为坤，传递1会根据日干的阴阳来配，阳艮阴坤
 * @param ganYang 当日日干是否为阳干
 * @returns 轨数对应的八卦
 * @author YuYunhao
 */
export function getTrigramFromGFigure(gFigure: number, mode?: 1, ganYang?: boolean): string[] {
  const gFigureToTrigramMap = ['', '坎', '坤', '震', '巽', '艮坤', '乾', '兑', '艮', '离']
  return gFigure.toString().split('').map(i => {
    const j = Number(i)
    if (j !== 5) return gFigureToTrigramMap[j]
    if (typeof mode === 'undefined') return '坤'
    return ganYang ? '艮' : '坤'
  })
}

/**
 * 策数配五行
 * @param cFigure 卦的策数
 * @returns 策数对应的五行数组
 * @author YuYunhao
 */
export const getWuxingFromCFigure = (cFigure: number): string[] => {
  const cFigureToTrigramMap = ['', '水', '火', '木', '金', '土', '水', '火', '木', '金']
  return cFigure.toString().split('').map(i => cFigureToTrigramMap[+i])
}

/**
 * 轨数配五行
 * @param gFigure 卦的轨数
 * @returns 轨数对应的五行数组
 */
export const getWuxingFromGFigure = (gFigure: number): string[] => {
  const gFigureToTrigramMap = ['', '水', '土', '木', '木', '土', '金', '金', '土', '火']
  return gFigure.toString().split('').map(i => gFigureToTrigramMap[+i])
}
