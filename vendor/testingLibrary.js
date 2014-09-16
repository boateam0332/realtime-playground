FunctionalTesting = function (title) {
	console.log('Initializing test suite');
	this.$results = $(this.results);
	this.$progress = this.$results.find('progress');
	this.$completed = this.$results.find('.completed');
	this.$failed = this.$results.find('.failed');
	this.$succeeded = this.$results.find('.succeeded');
	this.$el = $(this.container).append(this.$results);
	this.$el.find('h1').text(title);
	this.testClassCompleted = _.bind(this.testClassCompleted, this);

	hljs.configure({
	  tabReplace: '    ', // 4 spaces
	  classPrefix: ''     // don't append class prefix
	});

}

FunctionalTesting.prototype = {

	container: '<div class="testing-container">' +
					'<h1></h1>' +
				'</div>',

	results: 	'<div class="results">' +
					'<span class="completed"></span><span class="failed"></span><span class="succeeded"></span>' +
					'<progress max="1"></progress>' +
				'</div>',

	passedClassName: 'passed',

	failedClassName: 'failed',

	totalTests: 0,

	testingClasses: [],

	load: function (testingClass) {
		this.testingClasses.push(testingClass);
		this.totalTests += testingClass.getTestCount();
		this.$results.append(testingClass.$el);
	},

	execute: function () {
		this.index = -1;
		this.testsCompleted = 0;
		this.successfulTests = 0;
		this.failedTests = 0;
		this.next();
	},

	next: function () {
		this.index++;
		if(this.testingClasses[this.index]){
			this.testingClasses[this.index].execute(this);
		}
	},

	testCompleted: function (success) {
		this.testsCompleted++;
		if(success){
			this.successfulTests++;
		} else {
			this.failedTests++;
		}
		this.updateUI();
	},

	testClassCompleted: function () {
		this.next();
	},

	updateUI: function () {
		this.$progress.attr('value', this.testsCompleted/this.totalTests);
		this.$completed.text('Total Tests: ' + this.testsCompleted + '/' + this.totalTests);
		this.$failed.text('Failed: ' + this.failedTests);
		this.$succeeded.text('Succeeded: ' + this.successfulTests);
		if (this.failedTests) {
			this.$el.addClass('failed');
		} else if (this.totalTests == this.successfulTests){
			this.$el.addClass('success');
		}
	}

}

