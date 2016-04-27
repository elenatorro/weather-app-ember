import Ember from 'ember'
import Model from 'ember-data/model'
import attr from 'ember-data/attr'

export default Model.extend({
  name: attr('string'),
  cod: attr('number'),
  list: attr('string'),

  forecast: function () {
  	return JSON.parse(this.get('list'))
  }.property('list')
})
