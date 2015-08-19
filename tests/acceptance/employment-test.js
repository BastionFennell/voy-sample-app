import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'voy-sample-app/tests/helpers/start-app';

module('Acceptance | employment', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /employment', function(assert) {
  visit('/employment');

  andThen(function() {
    assert.equal(currentURL(), '/employment');
  });
});

test('It has the correct number of employments', function(assert) {
  visit('/employment');

  andThen(function() {
    var employees = $('.employment');

    assert.equal(employees.length, 2);
  });
});

test('Editing an employment', function(assert){
  visit('/employment');

  andThen(function() {
    click($(".employment .edit")[0]);

    andThen(function() {
      assert.equal($('input.name').val(), 'Undergraduate Student');

      fillIn("input.name", "Student");
      andThen(function(){
        click("button.save");

        andThen(function() {
          assert.equal($(".employment .name:first").text(), "Student");
        });
      });
    });
  });
});

test('Adding an employment', function(assert){
  visit('/employment');

  andThen(function() {
    fillIn("input.name", "Graduate Student");
    fillIn("input.salary", "120000");
    andThen(function(){
      click($(".add"));

      andThen(function() {
        assert.equal($('input.name').val(), '');

        assert.equal($('.employment').length, 3);

        assert.equal($(".employment .name:nth(2)").text(), "Graduate Student");
      });
    });
  });
});
