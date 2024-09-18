import {test, expect} from 'vitest'
import getNoteFromKey from './noteUtils'

test('Si le paso la letra a devolverá C4', () => {
    let note = getNoteFromKey('a')
    expect(note).toBe('C4')
})

test('Si le paso la letra A devolverá C4', () => {
    let note = getNoteFromKey('A')
    expect(note).toBe('C4')
})

test('Si no le paso una letra devolverá undefined', () => {
    let note = getNoteFromKey(null)
    expect(note).toBeUndefined()
})

test('Si no le paso nada devolverá undefined', () => {
    let note = getNoteFromKey()
    expect(note).toBeUndefined()
})

test('Si no le paso nada devolverá undefined', () => {
    let note = getNoteFromKey(undefined)
    expect(note).toBeUndefined()
})