import Ember from 'ember'

export default Ember.Route.extend({
  model: function (params) {
  	return this.get('store').findRecord('city', params.city_name)
  }

  //Old: get directly using jquery
  // model: function (params) {
  // 	return $.getJSON(`http://api.openweathermap.org/data/2.5/forecast?q=${params.city_name}&appid=3a70647bcee22eb97a54ab5a1b3c48c3`, function(result) {
  //     return {
  //       city: result
  //     }
  //   })
  // }
})