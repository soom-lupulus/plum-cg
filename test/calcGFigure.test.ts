import { expect, test } from 'vitest'
import { calcGFigure } from '../src/index.js'

test('山火贲4爻动----->35301', () => {
  expect(calcGFigure('734')).toBe(35301)
})

test('震为雷4爻动----->30986', () => {
  expect(calcGFigure('444')).toBe(30986)
})

test('天火同人2爻动----->69953', () => {
  expect(calcGFigure('132')).toBe(69953)
})
