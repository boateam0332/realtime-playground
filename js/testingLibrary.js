FunctionalTesting = function () {
	this.$el = $(this.container);
	this.$results = $(this.results);
	this.$el.append(this.$results);

}

FunctionalTesting.prototype = {

	container: '<div class="test-library-container"></div>',

	results: '<div class="results"></div>',

	passedClassName: 'passed',

	failedClassName: 'failed',

	testingClasses: [],

	load: function (testingClass) {
		this.$results.append(testingClass.$el);
		this.testingClasses.push(testingClass);
	},

	execute: function () {
		for (var i = this.testingClasses.length - 1; i >= 0; i--) {
			this.testingClasses[i].execute(this);
		};
	},

	testSuccess: function () {

	},

	testFailed: function () {

	}

}

