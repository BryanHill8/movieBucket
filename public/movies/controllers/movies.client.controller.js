// Invoke 'strict' JavaScript mode
'use strict';


angular.module('movies').controller('MoviesController', ['$scope', '$routeParams', '$location', 'Authentication', 'Movies',
    function($scope, $routeParams, $location, Authentication, Movies) {
    	// Expose the Authentication service
        $scope.authentication = Authentication;
        

       
        $scope.create = function() {
        	
            var movie = new Movies({
                title: this.title,
                Description: this.Description,
                Genre: this.Genre,
                Img: this.Img
            });
        
            
            movie.$save(function(response) {
            
                $location.path('movies/' + response._id);
            }, function(errorResponse) {
            	// Otherwise, present the user with the error message
                $scope.error = errorResponse.data.message;
            });
        };

      
        $scope.find = function() {
        
            $scope.movies = Movies.query();
        };

  
        $scope.findOne = function() {

            $scope.movie = Movies.get({
                movieId: $routeParams.movieId
            });
        };

  
        $scope.update = function() {
        	
            $scope.movie.$update(function() {
            	
                $location.path('movies/' + $scope.movie._id);
            }, function(errorResponse) {
            	// Otherwise, present the user with the error message
                $scope.error = errorResponse.data.message;
            });
        };

       
        $scope.delete = function(movie) {
        	
            if (movie) {
            
                movie.$remove(function() {
                
                    for (var i in $scope.movies) {
                        if ($scope.movies[i] === movie) {
                            $scope.movies.splice(i, 1);
                        }
                    }
                });
            } else {
            
                $scope.movie.$remove(function() {
                    $location.path('movies');
                });
            }
        };
    }
]);