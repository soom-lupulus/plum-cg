/**
 * 元策数计算
 * @param YangYaoCount 卦中阳爻的数量
 * @returns 元策数
 * @author YuYunhao
 */
export declare const calcOriginCFigure: (YangYaoCount: number) => number;
/**
 * 元轨数计算
 * @param YangYaoCount 卦中阳爻的数量
 * @returns 元轨数
 * @author YuYunhao
 */
export declare const calcOriginGFigure: (YangYaoCount: number) => number;
/**
 * 策数计算
 * @param formatString 计算卦的策数，如：地天泰5爻动，用卦的先天数，传递'815'
 * @returns 卦对应的策数
 * @author YuYunhao
 */
export declare const calcCFigure: (formatString: string) => number;
/**
 * 轨数计算
 * @param formatString 计算卦的轨数，如：地天泰5爻动，用卦的先天数，传递'815'
 * @returns 卦对应的轨数
 * @author YuYunhao
 */
export declare const calcGFigure: (formatString: string) => number;
export declare function getTrigramFromCFigure(cFigure: number): string[];
export declare function getTrigramFromCFigure(cFigure: number, mode: 1, ganYang: boolean): string[];
/** @function */
export declare function getTrigramFromGFigure(gFigure: number): string[];
/** @function */
export declare function getTrigramFromGFigure(gFigure: number, mode: 1, ganYang: boolean): string[];
/**
 * 策数配五行
 * @param cFigure 卦的策数
 * @returns 策数对应的五行数组
 * @author YuYunhao
 */
export declare const getWuxingFromCFigure: (cFigure: number) => string[];
/**
 * 轨数配五行
 * @param gFigure 卦的轨数
 * @returns 轨数对应的五行数组
 */
export declare const getWuxingFromGFigure: (gFigure: number) => string[];
//# sourceMappingURL=index.d.ts.map