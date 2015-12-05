angular.module('movies').factory('Movies', ['$resource', function($resource) {
    return $resource('api/movies/:movieId', {
        movieId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);