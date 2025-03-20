import { expect, test } from 'vitest'
import { calcOriginGFigure } from '../src/index.js'

test('六阳----->768', () => {
  expect(calcOriginGFigure(6)).toBe(768)
})

test('五阳一阴----->752', () => {
  expect(calcOriginGFigure(5)).toBe(752)
})

test('四阳两阴----->736', () => {
  expect(calcOriginGFigure(4)).toBe(736)
})

test('三阳三阴----->720', () => {
  expect(calcOriginGFigure(3)).toBe(720)
})

test('二阳四阴----->704', () => {
  expect(calcOriginGFigure(2)).toBe(704)
})

test('一阳五阴----->688', () => {
  expect(calcOriginGFigure(1)).toBe(688)
})

test('六阴----->672', () => {
  expect(calcOriginGFigure(0)).toBe(672)
})
