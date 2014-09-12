
window.testSuite.load(new TestingClass('Collaborative Map')
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
		description: 'Insert 2 new strings into map in this tab',
		run: function () {

		},
		assert: function () {
			return true
		}
	})
	.test({
		description: 'Insert 2 new string into map in another tab',
		run: function () {

		},
		assert: function () {
			return true
		}
	})
	.test({
		description: 'Edit value of map item in this tab',
		run: function () {

		},
		assert: function () {
			return true
		}
	})
	.test({
		description: 'Edit valud of map item in other tab',
		run: function () {

		},
		assert: function () {
			return true
		}
	})
	.test({
		description: 'Remove item in map in this tab',
		run: function () {

		},
		assert: function () {
			return true
		}
	})
	.test({
		description: 'Remove item in map from another tab',
		run: function () {

		},
		assert: function () {
			return true
		}
	})
	.test({
		description: 'Clear the map',
		run: function () {

		},
		assert: function () {
			return true
		}
	}));
