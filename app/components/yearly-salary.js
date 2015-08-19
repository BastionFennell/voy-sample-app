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

    var yearly = cleanMonthly * 12;
    yearly = yearly.toFixed(2);

    this.set("output", yearly);

    //Courtesy of Elias Zamaria
    function numberWithCommas(x) {
      var parts = x.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }

    return numberWithCommas(yearly);
  }.property("monthly")
});
