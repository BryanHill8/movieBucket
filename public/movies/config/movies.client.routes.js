angular.module('movies').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/movies', {
            templateUrl: 'movies/views/list-movies.client.view.html'
        }).
        when('/movies/create', {
            templateUrl: 'movies/views/create-movie.client.view.html'
        }).
        when('/movies/:movieId', {
            templateUrl: 'movies/views/view-movie.client.view.html'
        }).
        when('/movies/:movieId/edit', {
            templateUrl: 'movies/views/edit-movie.client.view.html'
        });
    }
]);