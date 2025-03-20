import { expect, test } from 'vitest'
import { getWuxingFromCFigure } from '../src/index.js'

test('11970----->水水金火 ，【坎坎乾离 】 ', () => {
  expect(getWuxingFromCFigure(11970)).toStrictEqual(['水', '水', '金', '火', ''])
})

test('11350----->水水木土 ，【坎坎震（艮坤） 】 ', () => {
  expect(getWuxingFromCFigure(11350)).toStrictEqual(['水', '水', '木', '土', ''])
})

test('4232----->金火木火 ，【兑离震离】 ', () => {
  expect(getWuxingFromCFigure(4232)).toStrictEqual(['金', '火', '木', '火'])
})

test('6565----->水土水土 ，【坎（艮坤）坎（艮坤）】 ', () => {
  expect(getWuxingFromCFigure(6565)).toStrictEqual(['水', '土', '水', '土'])
})

test('8911----->木金水水 ，【巽乾坎坎】 ', () => {
  expect(getWuxingFromCFigure(8911)).toStrictEqual(['木', '金', '水', '水'])
})
