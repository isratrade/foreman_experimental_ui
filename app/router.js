import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("settings", function(){
    this.route("edit", { path: "/:setting_id"  });
  });
  this.resource("puppetclasses", function(){
    this.route("show", { path: "/:puppetclass_id"  });
  });
  this.resource('smart-class-parameters', function() { });
});

export default Router;
