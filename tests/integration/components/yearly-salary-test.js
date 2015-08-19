import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('yearly-salary', 'Integration | Component | yearly salary', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{yearly-salary}}`);

  assert.equal(this.$().text().trim(), 'Yearly Salary: 0');
});

test('it correctly converts to yearly salary if it is an integer', function(assert) {
  this.render(hbs`{{yearly-salary monthly=10}}`);

  assert.equal(this.$().text().trim(), 'Yearly Salary: 120');
});

test('it correctly converts to yearly salary if it is a string', function(assert) {
  this.render(hbs`{{yearly-salary monthly="10"}}`);

  assert.equal(this.$().text().trim(), 'Yearly Salary: 120');
});

test('it displays an error if the yearly salary is not a number', function(assert) {
  this.render(hbs`{{yearly-salary monthly="doot"}}`);

  assert.equal(this.$().text().trim(), 'Yearly Salary: Please put in a valid monthly salary');
});

test('it correctly converts to yearly salary if it has a dollar sign', function(assert) {
  this.render(hbs`{{yearly-salary monthly="$10"}}`);

  assert.equal(this.$().text().trim(), 'Yearly Salary: 120');
});

test('it correctly converts to yearly salary if it has a dollar sign and commas', function(assert) {
  this.render(hbs`{{yearly-salary monthly="$10,000"}}`);

  assert.equal(this.$().text().trim(), 'Yearly Salary: 120000');
});
