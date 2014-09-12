
window.testSuite.load(new TestingClass('Events')
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
		description: 'Collaborative string event has correct properties',
		run: function () {

		},
		assert: function () {
			return true
		}
	})
	.test({
		description: 'Collaborative list insert has correct properties',
		run: function () {

		},
		assert: function () {
			return true
		}
	})
	.test({
		description: 'Index reference event has correct properties',
		run: function () {

		},
		assert: function () {
			return true
		}
	})
	.test({
		description: 'Collaborative map event has correct properties',
		run: function () {

		},
		assert: function () {
			return true
		}
	})
	.test({
		description: 'Event caused by undo has correct properties',
		run: function () {

		},
		assert: function () {
			return true
		}
	})
	.test({
		description: 'Event caused by redo has correct properties',
		run: function () {

		},
		assert: function () {
			return true
		}
	})
	.test({
		description: 'Compound operation name is preserved in event',
		run: function () {

		},
		assert: function () {
			return true
		}
	}));