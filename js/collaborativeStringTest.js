
var collaborativeStringTest = new TestingClass('Collaborative String Tests');

collaborativeStringTest
	.test('Receive changes from another browser', function () {
		return true;
	})
	.test('Changes here are reflected in another browser', function () {
		return true;
	})

window.functionalTesting.load(collaborativeStringTest);

window.functionalTesting.execute();
