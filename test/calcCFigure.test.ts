import { expect, test } from 'vitest'
import { calcCFigure } from '../src/index.js'

test('震为雷4爻动----->7572', () => {
  expect(calcCFigure('444')).toBe(7572)
})

test('水地比2爻动----->12964', () => {
  expect(calcCFigure('682')).toBe(12964)
})

test('雷泽归妹6爻动----->11712', () => {
  expect(calcCFigure('426')).toBe(11712)
})

test('地天泰5爻动----->10634', () => {
  expect(calcCFigure('815')).toBe(10634)
})
