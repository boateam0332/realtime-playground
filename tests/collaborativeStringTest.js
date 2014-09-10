
$(function(){
	window.testSuite = new FunctionalTesting();
	$('body').append(testSuite.$el);

	var collaborativeStringTest = new TestingClass('Collaborative String Tests');

	// Make changes in our window, test the output in the childwindow

	collaborativeStringTest
		.test('Receive changes from another browser', {
			test: function () {

			},
			expect: function () {
				return true;
			}
		})
		.test('Changes here are reflected in another browser', {
			test: function () {
				$('#demoStringInput').val('cat').keyup()
			},
			expect: function () {
				return $(window.childWindow.document).find('#demoStringInput').val() == 'cat';
			}
		})

	window.testSuite.load(collaborativeStringTest);
});

