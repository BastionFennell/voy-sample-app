import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function(){
      console.log("save");
    },
    edit: function(){
      console.log("edit");
    },
    delete: function(){
      console.log("delete");
    }
  }
});
