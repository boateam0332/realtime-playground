
window.testSuite.load(new TestingClass('MultiMutation Tests')
	.setSynchronousTesting()
	.setup({
		run: function () {
			// Remove everything existing from the list
		},
		assert: function () {
			return true
		}
	})
	.test({
		description: 'All changes inside compound operation complete successfully',
		run: function () {

		},
		assert: function () {
			return true
		}
	})
	.test({
		description: 'Events for each change in a compound operation are emitted',
		run: function () {

		},
		assert: function () {
			return true
		}
	}));