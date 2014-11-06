import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("settings", function(){
    this.route("edit", { path: "/:setting_id"  });
  });
});

export default Router;
