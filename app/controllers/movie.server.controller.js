//establishes that we'll have a module named MyTrello
//the array is there to hold the dependencies that MyTrello will have - to be filled in
//Stuff
var mongoose = require('mongoose'),
    Movie = mongoose.model('Movie');


var getErrorMessage = function(err) {
  if (err.errors) {
    for (var errName in err.errors) {
      if (err.errors[errName].message) return err.errors[errName].message;
    }
  } else {
    return 'Unknown server error';
  }
};

// CHECK AUTHORIZATION
exports.hasAuthorization = function(req, res, next) {
    if (req.movie.creator.id !== req.user.id) {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }
    next();
};


exports.create = function(req, res) {
  var movie = new Movie(req.body);
  movie.creator = req.user;

  movie.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      res.json(movie);
    }
  });
};

exports.list = function(req, res) {
  Movie.find().sort('-created').populate('creator', 'firstName   lastName fullName').exec(function(err, movies) {
    if (err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      res.json(movies);
    }
  });
};

exports.movieByID = function(req, res, next, id) {
  Movie.findById(id).populate('creator', 'firstName lastName fullName').exec(function(err, movie) {
    if (err) return next(err);
    if (!movie) return next(new Error('Failed to load movie ' + id));

    req.movie = movie;
    next();
  });
};

exports.read = function(req, res) {
  res.json(req.movie);
};

exports.update = function(req, res) {
  var movie = req.movie;

  movie.MovieName = req.body.MovieName;
  movie.Description = req.body.Description;
  movie.Genre = req.body.Genre;
  movie.Img = req.body.Img;

  movie.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      res.json(movie);
    }
  });
};

exports.delete = function(req, res) {
  var movie = req.movie;

  movie.remove(function(err) {
    if (err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      res.json(movie);
    }
  });
};