'use strict'

const zero = function(f) {
	return function(x) {
		return x;
	}
}

const one = function(f) {
	return function(y) {
		return y;
	}
}

const add = function(m, n) {
	return function(f) {
		return function(x) {
			return m(f(n(f)(x)))
		}
	}
}

console.log(add(one, one))