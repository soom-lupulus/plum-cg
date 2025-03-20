import { expect, test } from 'vitest'
import { getWuxingFromGFigure } from '../src/index.js'

test('15462----->水土木金土，【坎（艮坤）巽乾坤】 ', () => {
  expect(getWuxingFromGFigure(15462)).toStrictEqual(['水', '土', '木', '金', '土'])
})

test('47391----->木金木火水 ，【巽兑震离坎】 ', () => {
  expect(getWuxingFromGFigure(47391)).toStrictEqual(['木', '金', '木', '火', '水'])
})

test('53004----->土木  木 ，【（艮坤）震  巽 】 ', () => {
  expect(getWuxingFromGFigure(53004)).toStrictEqual(['土', '木', '', '', '木'])
})

test('35784----->木土金土木，【震（艮坤）兑艮巽】 ', () => {
  expect(getWuxingFromGFigure(35784)).toStrictEqual(['木', '土', '金', '土', '木'])
})
