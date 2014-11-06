import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  startTimer: function () {
    this.notifyPropertyChange('time');
    this.scheduleStartTimer();
  },

  scheduleStartTimer: function(){
    this._timer = Ember.run.later(this, 'startTimer', 6000);
  }.on('didInsertElement'),

  killTimer: function () {
    Ember.run.cancel( this._timer  );
  }.on( 'willDestroyElement'  )
});
