import { expect, test } from 'vitest'
import { calcOriginCFigure } from '../src/index.js'

test('六阳----->216', () => {
  expect(calcOriginCFigure(6)).toBe(216)
})

test('五阳一阴----->204', () => {
  expect(calcOriginCFigure(5)).toBe(204)
})

test('四阳两阴----->192', () => {
  expect(calcOriginCFigure(4)).toBe(192)
})

test('三阳三阴----->180', () => {
  expect(calcOriginCFigure(3)).toBe(180)
})

test('二阳四阴----->168', () => {
  expect(calcOriginCFigure(2)).toBe(168)
})

test('一阳五阴----->156', () => {
  expect(calcOriginCFigure(1)).toBe(156)
})

test('六阴----->144', () => {
  expect(calcOriginCFigure(0)).toBe(144)
})
