import Ember from 'ember'
import Model from 'ember-data/model'
import attr from 'ember-data/attr'

export default Model.extend({
  cod: attr('number'),
  main: attr('string'),
  description: attr('string'),
  icon: attr('string')
})
