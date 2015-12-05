var users = require('../../app/controllers/users.server.controller'),
    movies = require('../../app/controllers/movie.server.controller');

module.exports = function(app) {
  app.route('/api/movies')
     .get(movies.list)
     .post(users.requiresLogin, movies.create);
  
  app.route('/api/movies/:movieId')
     .get(movies.read)
     .put(users.requiresLogin, movies.hasAuthorization, movies.update)
     .delete(users.requiresLogin, movies.hasAuthorization, movies.delete);

  app.param('movieId', movies.movieByID);
};
