import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
})

Router.map(function() {
  this.route('cities', {path: '/cities/:city_name'})
})

export default Router;
