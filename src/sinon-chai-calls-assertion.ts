import 'chai';

export { callsLike } from './calls-like';
export { stubSuperConstructor } from './stub-super-constructor';
declare global {

    export namespace Chai {
        interface Assertion {
            /**
             * true if the spy was called at least once.
             */
			callsLike(...parameters: unknown[][]): Assertion;
		}
	}
}