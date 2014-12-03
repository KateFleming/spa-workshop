
angular.module('services').factory('background', function($q, $http) {
  return function() {
    // The forecast.io API is not CORS enabled, so we need to proxy the all through
    // the Aerobatic proxy.
    return $http({
      method: 'GET',
      url: '/proxy',
      headers: {
        'format': 'json',
        'tags': 'seattle, rain'
      },
      params: {
        url: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=seattle, rain',
        cache: 1,
        ttl: 1 // cache for 5 minutes
      }
    });
  };
});
