import Ember from 'ember';

export default Ember.Component.extend({
  monthly: 0,
  salary: function(){
    var cleanMonthly = this.get("monthly") || '0';
    var monthlyInt;
    if(cleanMonthly.charAt(0) == '$'){
      cleanMonthly = cleanMonthly.substring(1);
    }

    cleanMonthly = cleanMonthly.replace(/,/,'');

    monthlyInt = parseInt(cleanMonthly);

    if(isNaN(monthlyInt)){
      return "Please put in a valid monthly salary";
    }

    return cleanMonthly * 12;
  }.property("monthly")
});
