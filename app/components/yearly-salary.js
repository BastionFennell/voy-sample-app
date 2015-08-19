import Ember from 'ember';

export default Ember.Component.extend({
  monthly: 0,
  output: 0,
  salary: function(){
    var cleanMonthly = this.get("monthly") || '0';
    if(isNaN(parseInt(cleanMonthly))){

      var monthlyInt;
      if(cleanMonthly.charAt(0) === '$'){
        cleanMonthly = cleanMonthly.substring(1);
      }

      cleanMonthly = cleanMonthly.replace(/,/,'');

      monthlyInt = parseInt(cleanMonthly);

      if(isNaN(monthlyInt)){
        this.set('output', NaN);
        return "Please put in a valid monthly salary";
      }
    }

    this.set("output", cleanMonthly * 12);
    return cleanMonthly * 12;
  }.property("monthly")
});
