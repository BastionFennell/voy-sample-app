import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'voy-sample-app/tests/helpers/start-app';

module('Acceptance | dashboard', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /dashboard', function(assert) {
  visit('/dashboard');

  andThen(function() {
    assert.equal(currentURL(), '/dashboard');
  });
});

test('employment exists', function(assert) {
  visit('/dashboard');

  andThen(function() {
    var employment = $(".employment");
    assert.equal(employment.length, 1);
    click(employment);

    andThen(function(){
      assert.equal(currentURL(), '/employment');
    });
  });
});
