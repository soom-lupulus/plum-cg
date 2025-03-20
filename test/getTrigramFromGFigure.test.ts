import { expect, test } from 'vitest'
import { getTrigramFromGFigure } from '../src/index.js'

test('35301----->震坤震 坎', () => {
    expect(getTrigramFromGFigure(35301)).toStrictEqual(['震', '坤', '震', '', '坎'])
})

test('47391----->坎离坎艮离', () => {
    expect(getTrigramFromGFigure(47391)).toStrictEqual(['巽', '兑', '震', '离', '坎'])
})

test('15462----->坎坤巽乾坤', () => {
    expect(getTrigramFromGFigure(15462)).toStrictEqual(['坎', '坤', '巽', '乾', '坤'])
})

test('15462----->坎艮巽乾坤', () => {
    expect(getTrigramFromGFigure(15462, 1, true)).toStrictEqual(['坎', '艮', '巽', '乾', '坤'])
})

test('15462----->坎坤巽乾坤', () => {
    expect(getTrigramFromGFigure(15462, 1, false)).toStrictEqual(['坎', '坤', '巽', '乾', '坤'])
})

