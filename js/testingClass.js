var TestingClass = function (description) {
	this.$el = this.el({
		description: description
	});
}

testingClass.prototype = {

	timeout: 1000,

	retryAttempts: 5,

	attemptNumber: 0,

	tests: [],

	el: _.template('<div class="test-class"><h1>{{ description }}</h1><div class="tests"></div></div>'),

	testEl: _.template('<div class="test">{{ description }}<span class="{{ result }}">{{ result }}</span></div>'),

	test: function (description, fn) {

		var el = this.testEl({
			description: description,
			result: 'pending'
		});

		var test = {
			fn: function () {
				return fn();
			},
			selector: el
		}

		this.$el.find('.tests').append(el);

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
			var el = $(this.testEl({
				description: this.tests[i].description,
				result: success ? 'passed' : 'failed'
			}));

			if(success){
				lib.testSuccess();
			} else {
				lib.testFailed();
			}

		};
	}

}