import Ember from 'ember';
import MetaMixin from 'foreman-experimental-ui/mixins/meta';

module('MetaMixin');

// Replace this with your real tests.
test('it works', function() {
  var MetaObject = Ember.Object.extend(MetaMixin);
  var subject = MetaObject.create();
  ok(subject);
});
