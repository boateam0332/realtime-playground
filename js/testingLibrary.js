var FunctionalTesting = function () {
	console.log('Initializing test suite');
	this.$results = $(this.results);
	this.$el = $(this.container).append(this.$results);
}

FunctionalTesting.prototype = {

	container: '<div class="container"></div>',

	results: '<div class="results"></div>',

	passedClassName: 'passed',

	failedClassName: 'failed',

	testingClasses: [],

	load: function (testingClass) {
		this.testingClasses.push(testingClass);
		this.$results.append(testingClass.$el);
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

