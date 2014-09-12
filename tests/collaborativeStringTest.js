
window.testSuite.load(new TestingClass('Collaborative String')
	.setSynchronousTesting()
	.setup({
		run: function () {
			testDocument1.string.setText('');
		},
		assert: function () {
			// Do not start any tests until this passes
			return testDocument1.string.getText() == '' &&
				testDocument2.string.getText() == '';
		}
	})
	.test({
		description: 'toString()',
		run: function () {

		},
		assert: function () {
			return testDocument1.string.toString() == '' &&
				testDocument2.string.toString() == '';
		}
	})
	.test({
		description: 'getText()',
		run: function () {},
		assert: function () {
			return testDocument1.string.getText() == '' &&
				testDocument2.string.getText() == '';
		}
	})
	.test({
		description: 'setText() - local',
		run: function () {
			testDocument1.string.setText('dog');
		},
		assert: function () {
			return testDocument1.string.getText() == 'dog' &&
				testDocument2.string.getText() == 'dog';
		}
	})
	.test({
		description: 'setText() - remote',
		run: function () {
			testDocument2.string.setText('cat');
		},
		assert: function () {
			return testDocument2.string.getText() == 'cat' &&
				testDocument1.string.getText() == 'cat';
		}
	})
	.test({
		description: 'append() - local',
		run: function () {
			testDocument1.string.append('-append');
		},
		assert: function () {
			return testDocument1.string.getText() == 'cat-append' &&
				testDocument2.string.getText() == 'cat-append';
		}
	})
	.test({
		description: 'append() - remote',
		run: function () {
			testDocument2.string.append('-append');
		},
		assert: function () {
			return testDocument1.string.getText() == 'cat-append-append' &&
				testDocument2.string.getText() == 'cat-append-append';
		}
	})
	.test({
		description: 'insertString() - local',
		run: function () {
			testDocument1.string.insertString(0, 'test-')
		},
		assert: function () {
			return testDocument1.string.getText() == 'test-cat-append-append' &&
				testDocument2.string.getText() == 'test-cat-append-append';
		}
	})
	.test({
		description: 'insertString() - remote',
		run: function () {
			testDocument2.string.insertString(5, 'test-')
		},
		assert: function () {
			return testDocument1.string.getText() == 'test-test-cat-append-append' &&
				testDocument2.string.getText() == 'test-test-cat-append-append';
		}
	})
	.test({
		description: 'removeRange() - local',
		run: function () {
			testDocument1.string.removeRange(0,5);
		},
		assert: function () {
			return testDocument1.string.getText() == 'test-cat-append-append' &&
				testDocument2.string.getText() == 'test-cat-append-append';
		}
	})
	.test({
		description: 'removeRange() - remote',
		run: function () {
			testDocument1.string.removeRange(8, 22);
		},
		assert: function () {
			return testDocument1.string.getText() == 'test-cat' &&
				testDocument2.string.getText() == 'test-cat';
		}
	})
	.test({
		description: 'addEventListener() - text_inserted',
		run: function () {
			var that = this;
			this.alphaEvents = [];
			this.betaEvents = [];
			this.alpha_callback = function (evt) {
				that.alphaEvents.push(evt);
			};
			this.beta_callback = function (evt) {
				that.betaEvents.push(evt);
			}
			testDocument1.string.addEventListener(gapi.drive.realtime.EventType.TEXT_INSERTED, this.alpha_callback);
			testDocument2.string.addEventListener(gapi.drive.realtime.EventType.TEXT_INSERTED, this.beta_callback);
			testDocument1.string.append('-test');	// test-cat-test
		},
		assert: function () {
			return this.alphaEvents.length == 1 &&
				this.betaEvents.length == 1;
		}
	})
	.test({
		description: 'removeEventListener() - text_inserted',
		assertFor: 2000,
		run: function () {
			this.alphaEvents = [];
			this.betaEvents = [];
			testDocument1.string.removeEventListener(gapi.drive.realtime.EventType.TEXT_INSERTED, this.alpha_callback)
			testDocument2.string.removeEventListener(gapi.drive.realtime.EventType.TEXT_INSERTED, this.beta_callback)
			testDocument1.string.append('-test');	// test-cat-test-test
		},
		assert: function () {
			return this.alphaEvents.length == 0 &&
				this.betaEvents.length == 0;
		}
	})
	.test({
		description: 'addEventListener() - text_deleted',
		run: function () {
			var that = this;
			this.alphaEvents = [];
			this.betaEvents = [];
			this.alpha_callback = function (evt) {
				that.alphaEvents.push(evt);
			};
			this.beta_callback = function (evt) {
				that.betaEvents.push(evt);
			}
			testDocument1.string.addEventListener(gapi.drive.realtime.EventType.TEXT_DELETED, this.alpha_callback);
			testDocument2.string.addEventListener(gapi.drive.realtime.EventType.TEXT_DELETED, this.beta_callback);
			testDocument1.string.removeRange(0, 5); // cat-test
		},
		assert: function () {
			return this.alphaEvents.length == 1 &&
				this.betaEvents.length == 1;
		}
	})
	.test({
		description: 'removeEventListener() - text_deleted',
		assertFor: 2000,
		run: function () {
			this.alphaEvents = [];
			this.betaEvents = [];
			testDocument1.string.removeEventListener(gapi.drive.realtime.EventType.TEXT_DELETED, this.alpha_callback)
			testDocument2.string.removeEventListener(gapi.drive.realtime.EventType.TEXT_DELETED, this.beta_callback)
			testDocument1.string.removeRange(3, 7); // cat
		},
		assert: function () {
			return this.alphaEvents.length == 0 &&
				this.betaEvents.length == 0;
		}
	})
	.teardown({
		run: function () {
			console.log('Running post test!');
		}
	}));
