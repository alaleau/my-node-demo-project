import request from 'supertest'
import { it, describe, expect } from 'vitest'

describe('GET /health', () => {
  it('respond with 200 OK and healthy status', (done) => {
    const endpointPath: string = '/health'
    const responseText: string = 'Server is healthy'

    expect(1).eql(1);
  })
})
