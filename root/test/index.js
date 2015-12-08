import example from '../lib/example'

describe('example', () => {

  it('exports correctly', () => {
    example.should.be.a('string')
    example.should.eql('wow es6!')
  })

})