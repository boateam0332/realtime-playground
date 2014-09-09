var TestingClass = function (description) {
	this.$el = $(this.el({
		description: description
	}));
}

TestingClass.prototype = {

	timeout: 1000,

	retryAttempts: 5,

	attemptNumber: 0,

	tests: [],

	el: _.template('<div class="test-class"><h1><%= description %></h1><div class="tests"></div></div>'),

	testEl: _.template('<div class="test"><%= description %><span class="result"><%= result %></span></div>'),

	test: function (description, fn) {

		var el = $(this.testEl({
			description: description,
			result: 'pending'
		}));

		var test = {
			fn: function () {
				return fn();
			},
			$el: el
		}

		this.tests.push(test);

		this.$el.find('.tests').append(el);

		return this;

	},

	block: function (wait) {
		var time = new Date();
		time = time + wait;
		while(new Date() < time) {
			console.log('waiting');
		}
		return;
	},

	execute: function (lib) {
		for (var i = this.tests.length - 1; i >= 0; i--) {
			var success = false;
			while(this.attemptNumber < this.retryAttempts){
				success = this.tests[i].fn();
				if(!success){
					this.block(this.timeout);
					this.attemptNumber++;
				} else {
					break;
				}
			}
			this.tests[i].$el.find('.result').removeClass('pending').addClass(success ? 'passed' : 'failed').text(success ? 'passed' : 'failed');

			if(success){
				lib.testSuccess();
			} else {
				lib.testFailed();
			}

		};
	}

}