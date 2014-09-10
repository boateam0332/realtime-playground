var TestingClass = function (description) {
	this.$el = $(this.el({
		description: description
	}));
}

TestingClass.prototype = {

	timeout: 1000,

	tests: [],

	el: _.template('<div class="test-class"><h1><%= description %></h1><div class="tests"></div></div>'),

	testEl: _.template('<div class="test"><%= description %><span class="result <%= result %>"><%= result %></span></div>'),

	test: function (description, test) {

		var el = $(this.testEl({
			description: description,
			result: 'pending'
		}));

		test.selector = el;

		this.tests.push(test);

		this.$el.find('.tests').append(el);

		return this;

	},

	block: function (wait) {
		var time = new Date().getTime();
		time = time + wait;
		while(new Date().getTime() < time) {
			console.log('waiting');
		}
		return;
	},

	execute: function (lib) {
		var attemptNumber = 0;
		var retryAttempts = 5;
		for (var i = this.tests.length - 1; i >= 0; i--) {
			var success = false;
			this.tests[i].test();

			// This needs to be non blocking in order
			// for the JS to apply the changes to the other window!
			while(attemptNumber < retryAttempts){
				success = this.tests[i].expect();
				if(!success){
					this.block(this.timeout);
					attemptNumber++;
				} else {
					break;
				}
			}

			var el = $(this.tests[i].selector.find('.result'))
				.text(success ? 'passed' : 'failed')
				.removeClass('pending')
				.addClass(success ? 'passed' : 'failed');


			if(success){
				lib.testSuccess();
			} else {
				lib.testFailed();
			}
			attemptNumber = 0;
			retryAttempts = 5;
		};
	}

}