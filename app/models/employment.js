import DS from 'ember-data';

var Employment = DS.Model.extend({
  name: DS.attr(),
  monthlySalary: DS.attr()
});

Employment.reopenClass({
 FIXTURES: [
  {id: 1, name: "Undergraduate Student", monthlySalary: 10000},
  {id: 2, name: "Software Developer", monthlySalary: 12500}
  ]
});

export default Employment;
