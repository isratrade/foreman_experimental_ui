import Ember from 'ember';

export default Ember.Controller.extend({
  meta: function() {
    return this.store.metadataFor("setting");
  }.property()
});
