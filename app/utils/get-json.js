import Ember from 'ember';

export default function getJSON (url) {
  return new Ember.RSVP.Promise(function(resolve, reject) {
    Ember.$.ajax({
      type: 'GET',
      url: url,
      success: function(data) {
        Ember.run(null, resolve, data);
      },
      error: function(err) {
        Ember.run(null, reject, err);
      }
    });
  });
}