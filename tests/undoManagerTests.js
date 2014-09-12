
window.testSuite.load(new TestingClass('Undo Manager')
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
		description: 'Send characters to a collaborative string and undo the typing',
		run: function () {

		},
		assert: function () {
			return true
		}
	})
	.test({
		description: 'Redo latest undo',
		run: function () {

		},
		assert: function () {
			return true
		}
	})
	.test({
		description: 'Attempt a redo inside of a compound operation',
		run: function () {

		},
		assert: function () {
			return true
		}
	})
	.test({
		description: 'Attempt an undo inside of a compound operation',
		run: function () {

		},
		assert: function () {
			return true
		}
	}));
