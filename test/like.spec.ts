import { match } from 'sinon';
import { expect } from 'chai';
import '../src';

describe('like', () => {
  it('should throw error on deep inequality', () => {
    let error: any;
    try {
      expect([[[1]]]).to.be.like([[[2]]]);
    } catch (err) {
      error = err;
    }

    expect(error.message).to.match(/Value's not like the expected.+/);
  });

  it('should not fail when value is deep equal', () => {
    expect([[[1]]]).to.be.like([[[1]]]);
  });

  it('should work with match.has', () => {
    expect({ a: 1, b: 2 }).to.be.like(match.has('a', 1));
  });

  it('should print error with undefined', () => {
    let error: any;

    try {
      expect('something').to.be.like(undefined);
    } catch (err) {
      error = err;
    }

    expect(error.message).to.match(/Value's not like the expected.+/);
  });

  it('should fail when comparing a non empty object to an empty object', () => {
    let error: any;

    try {
      expect({
        info: 'value',
      }).to.be.like({});
    } catch (err) {
      error = err;
    }

    expect(error.message).to.match(/Value's not like the expected.+/);
  });
});
