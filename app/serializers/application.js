import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	normalizeResponse: function(store, type, payload, id, requestType) {
	var city = {
		id: payload.city.id,
		list: JSON.stringify(payload.list),
		name: payload.city.name
	}

    payload = {
      city: city
    }

    return this._super(store, type, payload, id, requestType);
  }
});