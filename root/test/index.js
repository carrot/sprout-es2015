import example from '../lib/example'
import test from 'ava'

test('example exports correctly', (t) => {
  t.eql(example, 'wow es6!')
})
