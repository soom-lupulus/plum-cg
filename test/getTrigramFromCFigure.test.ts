import { expect, test } from 'vitest'
import { getTrigramFromCFigure } from '../src/index.js'

test('10634----->坎 坎震兑', () => {
    expect(getTrigramFromCFigure(10634)).toStrictEqual(['坎', '', '坎', '震', '兑'])
})

test('12657----->坎离坎艮离', () => {
    expect(getTrigramFromCFigure(12657)).toStrictEqual(['坎', '离', '坎', '艮', '离'])
})

test('12657----->坎离坎艮离', () => {
    expect(getTrigramFromCFigure(12657, 1, true)).toStrictEqual(['坎', '离', '坎', '艮', '离'])
})

test('12657----->坎离坎坤离', () => {
    expect(getTrigramFromCFigure(12657, 1, false)).toStrictEqual(['坎', '离', '坎', '坤', '离'])
})
