import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    update: function() {
      this.get('model').save().then(function() { alert ('saved') }, function() {alert('problem');} )
    }
  },
});
