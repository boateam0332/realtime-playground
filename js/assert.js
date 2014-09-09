var Assert = function () {}

assert.prototype = {

	that: function (selector) {
		this.el = $(selector);
		return this;
	},

	is: function (fn) {



	}

}