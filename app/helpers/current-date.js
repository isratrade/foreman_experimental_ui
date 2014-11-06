import Ember from 'ember';

export function currentDate(input) {
  return moment(input).format('LL');
}

export default Ember.Handlebars.makeBoundHelper(currentDate);
