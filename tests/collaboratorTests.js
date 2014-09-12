
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
		description: 'Another tab closes, collaborator leaves',
		run: function () {

		},
		assert: function () {
			return true
		}
	})
	.test({
		description: 'Another tab opens, a new collaborator joins',
		run: function () {

		},
		assert: function () {
			return true
		}
	}));