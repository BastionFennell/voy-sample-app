import DS from 'ember-data';

var Employment = DS.Model.extend({
  name: DS.attr(),
  salary: DS.attr(),

  readableSalary: function(){
    //Courtesy of Elias Zamaria
    function numberWithCommas(x) {
      var parts = x.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }

    return "$" + numberWithCommas(this.get("salary"));
  }.property("salary")

});

Employment.reopenClass({
 FIXTURES: [
  {id: 1, name: "Undergraduate Student", salary: 10000},
  {id: 2, name: "Software Developer", salary: 12500}
  ]
});

export default Employment;
