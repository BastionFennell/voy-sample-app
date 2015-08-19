import Ember from 'ember';

export default Ember.Controller.extend({
  currentEmployment: null,
  name: "",
  salary: "",
  yearly: "",

  actions: {
    cancel: function(){
      this.set("currentEmployment", null);
      this.set("name", "");
      this.set("salary", "");
    },
    save: function(){
      var self = this;
      if(this.get("currentEmployment")){
        if(isNaN(this.get("yearly"))){
          console.log("Yearly salary is NaN");
          return;
        }
        if(this.get("name") === ""){
          return;
        }

        var currentEmployment = this.get("currentEmployment");
        currentEmployment.set("name", this.get("name"));
        currentEmployment.set("salary", this.get("salary"));
        currentEmployment.save().then(function(){
          self.set("currentEmployment", null);
          self.set("name", "");
          self.set("salary", "");
        });
      }
      else {
        if(isNaN(this.get("yearly"))){
          console.log("Yearly salary is NaN");
          return;
        }
        if(this.get("name") === ""){
          return;
        }

        var newEmployment = this.store.createRecord("employment");
        newEmployment.set("name", this.get("name"));
        newEmployment.set("salary", this.get("yearly"));
        newEmployment.save().then(function(){
          self.set("currentEmployment", null);
          self.set("name", "");
          self.set("salary", "");
        });
      }
    },
    edit: function(employment){
      this.set("currentEmployment", employment);
      this.set('name', employment.get("name"));
      this.set('salary', employment.get("salary"));
    },
    delete: function(employment){
      if(confirm("Are you sure you want to delete " + employment.get("name"))){
        employment.destroyRecord();
      }
    }
  }
});
