import DS from 'ember-data';

var Employment = DS.Model.extend({
  name: DS.attr(),
  salary: DS.attr()
});

Employment.reopenClass({
 FIXTURES: [
  {id: 1, name: "Undergraduate Student", salary: 10000},
  {id: 2, name: "Software Developer", salary: 12500}
  ]
});

export default Employment;
