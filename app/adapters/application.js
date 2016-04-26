import DS from 'ember-data'

export default DS.Adapter.extend({
	findRecord: function(store, type, id) {
  	return $.getJSON(`http://api.openweathermap.org/data/2.5/forecast?q=${id}&appid=3a70647bcee22eb97a54ab5a1b3c48c3`, function(data) {
      return {
        id: data.city.id,
        city: data.city
      }
    })
  }
})