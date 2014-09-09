
$(function(){
	window.testSuite = new FunctionalTesting();

	$('body').append(testSuite.$el);

	testSuite.$el.addClass('active');

	var collaborativeStringTest = new TestingClass('Collaborative String Tests');

	collaborativeStringTest
		.test('Receive changes from another browser', function () {
			return true;
		})
		.test('Changes here are reflected in another browser', function () {
			return true;
		})

	testSuite.load(collaborativeStringTest);
});


