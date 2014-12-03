
angular.module('services').factory('background', function($q, $http) {
  return function() {
    // The forecast.io API is not CORS enabled, so we need to proxy the all through
    // the Aerobatic proxy.
    var url = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=seattle&callback=JSON_CALLBACK';
//    return $http.jsonp(url);
    return $http({
      method: 'jsonp',
      url: url,
      responseType: 'json'
    });
  };
});
