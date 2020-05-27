var mongoose = require("mongoose"),
    request = require("request"),
    Film = require("./models/film"),
    User = require("./models/user"),
    FilmSchedule = require("./models/film-sched"),
    Reserved = require("./models/reserved");
 
// PRE-DEFINED IMDB IDS TO BE USED TO FETCH FILM DETAILS
var imdbIDs = [
    "tt4154796",
    "tt6751668",
    "tt7286456",
    "tt1979376",
    "tt2911666",
    "tt4154664"
];

var url = "https://omdbapi.com/?apikey=thewdb&i="
 
function seedDB(){
    Film.deleteMany({}, function(err){
		if (err) {
			console.log(err);
		} else {
            console.log("Deleted Films!");
            
            FilmSchedule.deleteMany({}, function(err){
                if (err) {
                    console.log(err);
                } else {
                    console.log("Deleted Film Schedules!");

                    User.deleteMany({}, function(err){
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("Deleted Users!");
                
                            User.create(
                                {
                                    name: "John Smith"
                
                                }, function(err, newlyCreatedUser){
                                    if(err){
                                        console.log(err);
                                    } else {
                                        console.log("NEWLY CREATED USERS: ");
                                        console.log(newlyCreatedUser);

                                        imdbIDs.forEach(function(indID, index){
                                            request(url+indID, function(error, response, body){
                                                if(!error && response.statusCode == 200){
                                                    var data = JSON.parse(body);
                                                    Film.create(
                                                        {
                                                            imdbID: data.imdbID,
                                                            title: data.Title,
                                                            description: data.Plot,
                                                            rating: data.imdbRating,
                                                            length: data.Runtime,
                                                            genre: data.Genre,
                                                            image: data.Poster
                            
                                                        }, function(err, newlyCreatedFilm){
                                                            if(err){
                                                                console.log(err);
                                                            } else {
                                                                console.log("NEWLY CREATED FILMS: ");
                                                                console.log(newlyCreatedFilm);
                    
                                                                FilmSchedule.create(
                                                                    {
                                                                        movie_id: newlyCreatedFilm._id,
                                                                        date: new Date("2020-05-22"),
                                                                        time: "9:00",
                                                                        cinema_no: index + 1
                                                                    }, function(err, newlyCreatedSched){
                                                                        if(err){
                                                                            console.log(err);
                                                                        } else {
                                                                            console.log(newlyCreatedSched);
                                                                        }
                                                                });
                                        
                                                                FilmSchedule.create(
                                                                    {
                                                                        movie_id: newlyCreatedFilm._id,
                                                                        date: new Date("2020-05-22"),
                                                                        time: "12:00",
                                                                        cinema_no: index + 1
                                                                    }, function(err, newlyCreatedSched){
                                                                        if(err){
                                                                            console.log(err);
                                                                        } else {
                                                                            console.log(newlyCreatedSched);
                                                                        }
                                                                });
                                        
                                                                FilmSchedule.create(
                                                                    {
                                                                        movie_id: newlyCreatedFilm._id,
                                                                        date: new Date("2020-05-22"),
                                                                        time: "14:00",
                                                                        cinema_no: index + 1
                                                                    }, function(err, newlyCreatedSched){
                                                                        if(err){
                                                                            console.log(err);
                                                                        } else {
                                                                            console.log(newlyCreatedSched);
                                                                        }
                                                                });
                                        
                                                                FilmSchedule.create(
                                                                    {
                                                                        movie_id: newlyCreatedFilm._id,
                                                                        date: new Date("2020-05-22"),
                                                                        time: "16:00",
                                                                        cinema_no: index + 1
                                                                    }, function(err, newlyCreatedSched){
                                                                        if(err){
                                                                            console.log(err);
                                                                        } else {
                                                                            console.log(newlyCreatedSched);
                                                                        }
                                                                });
                                        
                                                                FilmSchedule.create(
                                                                    {
                                                                        movie_id: newlyCreatedFilm._id,
                                                                        date: new Date("2020-05-23"),
                                                                        time: "9:00",
                                                                        cinema_no: index + 1
                                                                    }, function(err, newlyCreatedSched){
                                                                        if(err){
                                                                            console.log(err);
                                                                        } else {
                                                                            console.log(newlyCreatedSched);
                                                                        }
                                                                });
                                        
                                                                FilmSchedule.create(
                                                                    {
                                                                        movie_id: newlyCreatedFilm._id,
                                                                        date: new Date("2020-05-23"),
                                                                        time: "12:00",
                                                                        cinema_no: index + 1
                                                                    }, function(err, newlyCreatedSched){
                                                                        if(err){
                                                                            console.log(err);
                                                                        } else {
                                                                            console.log(newlyCreatedSched);
                                                                        }
                                                                });
                                        
                                                                FilmSchedule.create(
                                                                    {
                                                                        movie_id: newlyCreatedFilm._id,
                                                                        date: new Date("2020-05-23"),
                                                                        time: "14:00",
                                                                        cinema_no: index + 1
                                                                    }, function(err, newlyCreatedSched){
                                                                        if(err){
                                                                            console.log(err);
                                                                        } else {
                                                                            console.log(newlyCreatedSched);
                                                                        }
                                                                });
                                        
                                                                FilmSchedule.create(
                                                                    {
                                                                        movie_id: newlyCreatedFilm._id,
                                                                        date: new Date("2020-05-23"),
                                                                        time: "16:00",
                                                                        cinema_no: index + 1
                                                                    }, function(err, newlyCreatedSched){
                                                                        if(err){
                                                                            console.log(err);
                                                                        } else {
                                                                            console.log(newlyCreatedSched);
                                                                        }
                                                                });
                                                            }
                                                    });
                                                }
                                            });
                                        });
                                    }
                            });
                            Reserved.deleteMany({}, function(err){
                                if (err) {
                                    console.log(err);
                                } else {
                                    console.log("Deleted Reservations!");
                        
                                }
                            });
                        }
                    });

                }
            });

            
        }
    });
}
 
module.exports = seedDB;