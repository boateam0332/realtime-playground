
window.testSuite.load(new TestingClass('Collaborative Custom Objects')
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
		description: 'Edit custom object in this window',
		run: function () {

		},
		assert: function () {
			return true
		}
	})
	.test({
		description: 'Edit custom object in another window',
		run: function () {

		},
		assert: function () {
			return true
		}
	}));