import Ember from 'ember';

export default Ember.Controller.extend({
  employmentSum: function(){
    var sum = this.get("model").toArray().reduce(function(previousItem, currentItem){
      if(previousItem.get){
        return parseInt(previousItem.get("salary")) + parseInt(currentItem.get("salary"));
      }
      else {
        return previousItem + parseInt(currentItem.get("salary"));
      }
    });

    //Courtesy of Elias Zamaria
    function numberWithCommas(x) {
      var parts = x.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }

    return "$" + numberWithCommas(sum);
  }.property("model.@each")
});
