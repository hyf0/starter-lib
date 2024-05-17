import assert from 'node:assert'
import { describe, it } from 'vitest'
import { box, map } from 'starter-libesm'

describe('should', () => {
  it('exported', () => {
    assert.equal(map(box(1), v => String(v)).value, '1')
  })
})