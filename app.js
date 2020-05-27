var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    methodOverride  = require("method-override"),
    FilmSchedule    = require("./models/film-sched"),
    Film            = require("./models/film"),
    User            = require("./models/user"),
    Reserved        = require("./models/reserved"),
    seedDB          = require("./seeds");

mongoose.connect("mongodb://localhost/webindproj", {useNewUrlParser: true, useUnifiedTopology: true});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

seedDB();



// INDEX ROUTE
app.get("/", function(req, res){
    res.render("index");
});

// VIEW FILMS ROUTE
app.get("/films", function(req, res){
    Film.find({}, function(err, films){
        if(err){
            console.log("ERROR!");
        } else {
            res.render("films", {films: films});
        }
    });
});

// VIEW FILM TO RESERVE ROUTE
app.get("/film/:id", function(req, res){
    // res.send(req.params.movieID)
    Film.findOne({_id: req.params.id}, function(err, foundFilm){
        if(err){
            console.log(err);
        } else {
            // res.render("film", {film: foundFilm});
            FilmSchedule.find({movie_id: req.params.id}, function(err, foundFilmSched){
                if(err){
                    console.log(err);
                } else {
                    // res.send(foundFilm, foundFilmSched);
                    // res.render("film", {film: foundFilm, sched: foundFilmSched});
                    res.render('film', {
                        film: foundFilm,
                        scheds: foundFilmSched
                    });
                }
            });
        }
    });
});

// ORDER ROUTE
app.get("/order/:id", function(req, res){
    // res.render("order");

    User.findOne({name: "John Smith"}, function(err, foundUser){
        if(err){
            console.log(err);
        } else {
            FilmSchedule.findOne({_id: req.params.id}).populate("reserved").exec(function(err, foundFilmSched){
                if(err){
                    console.log(err);
                } else {
                    // res.render("film", {film: foundFilm});
                    Film.findOne({_id: foundFilmSched.movie_id}, function(err, foundFilm){
                        if(err){
                            console.log(err);
                        } else {
                            var seatsArr = [];
                            if(foundFilmSched.reserved.length > 0){
                                for(var x in foundFilmSched.reserved){
                                    seatsArr.push(foundFilmSched.reserved[x].seat);
                                }
                                // res.send(seatsArr);
                                console.log("FOUND FILM SCHED !!!!!!!!!!!!!!!!!!!!! " + foundFilmSched);
                                res.render('order', {
                                    user: foundUser,
                                    film: foundFilm,
                                    sched: foundFilmSched,
                                    seats: seatsArr
                                });
                            } else {
                                console.log("FOUND FILM SCHED !!!!!!!!!!!!!!!!!!!!! " + foundFilmSched);
                                res.render('order', {
                                    user: foundUser,
                                    film: foundFilm,
                                    sched: foundFilmSched,
                                    seats: seatsArr
                                });
                            }
                        }
                    });
                }
            });
        }
    });
});

// CHECKOUT ROUTE
app.post("/checkout/:user/:film/:sched", function(req, res){
    console.log(req.body);
    console.log(req.params.user);
    var regularSeats = Number(req.body.noOfRegulars);
    var kidSeats = Number(req.body.noOfKids);
    var seniorSeats = Number(req.body.noOfSeniors);
    var totalSeats = Number(req.body.noOfRegulars) + Number(req.body.noOfKids) + Number(req.body.noOfSeniors);

    if(totalSeats != req.body.seat.length || req.body.seat.length == null){
        // alert("The number of seats selected and inputted do not match. Please try again!");
        res.redirect("/film/" + req.params.film);
    } else {
        User.findById(req.params.user, function(err, foundUser){
            if(err){
                console.log(err);
            } else {
                console.log("FOUND USER: " + foundUser);

                for(var i = totalSeats ; i > 0 ; i--){
                    if(regularSeats > 0){
                        regularSeats--;
                        Reserved.create({
                            seat: req.body.seat[i-1],
                            price: 150
                        }, function(err, reserved){
                            if(err){
                                console.log(err);
                            } else {
                                reserved.owner_id = foundUser;
                                reserved.save(function(err, data){
                                    if(err){
                                        console.log(err);
                                    } else {
                                        console.log(data);
                                    }
                                });
                                FilmSchedule.findById(req.params.sched, function(err, foundSched){
                                    if(err){
                                        console.log(err);
                                    } else {
                                        foundSched.reserved.push(reserved);
                                        foundSched.save(function(err, data){
                                            if(err){
                                                console.log(err);
                                            } else {
                                                console.log(data);
                                            }
                                        });
                                    }
                                });
                            }
                        }); 
                    } else if(kidSeats > 0){
                        kidSeats--;
                        Reserved.create({
                            seat: req.body.seat[i-1],
                            price: 100
                        }, function(err, reserved){
                            if(err){
                                console.log(err);
                            } else {
                                reserved.owner_id = foundUser;
                                reserved.save(function(err, data){
                                    if(err){
                                        console.log(err);
                                    } else {
                                        console.log(data);
                                    }
                                });
                                FilmSchedule.findById(req.params.sched, function(err, foundSched){
                                    if(err){
                                        console.log(err);
                                    } else {
                                        foundSched.reserved.push(reserved);
                                        foundSched.save(function(err, data){
                                            if(err){
                                                console.log(err);
                                            } else {
                                                // res.redirect("/reservedSeats");
                                                console.log(data);
                                            }
                                        });
                                    }
                                });
                            }
                        }); 
                    } else if(seniorSeats > 0){
                        seniorSeats--;
                        Reserved.create({
                            seat: req.body.seat[i-1],
                            price: 120
                        }, function(err, reserved){
                            if(err){
                                console.log(err);
                            } else {
                                reserved.owner_id = foundUser;
                                reserved.save(function(err, data){
                                    if(err){
                                        console.log(err);
                                    } else {
                                        console.log(data);
                                    }
                                });
                                FilmSchedule.findById(req.params.sched, function(err, foundSched){
                                    if(err){
                                        console.log(err);
                                    } else {
                                        foundSched.reserved.push(reserved);
                                        foundSched.save(function(err, data){
                                            if(err){
                                                console.log(err);
                                            } else {
                                                // res.redirect("/reservedSeats");
                                                console.log(data);
                                            }
                                        });
                                    }
                                });
                            }
                        }); 
                    }
                    
                } 
                res.redirect("/reservedSeats");
            }
        });
    }
});

// VIEW RESERVED SEATS ROUTE
app.get("/reservedSeats", function(req, res){
    User.findOne({name: "John Smith"}, function(err, foundUser){
        if(err){
            console.log(err);
        } else {
            console.log(foundUser);
            FilmSchedule.find().populate({
                path: "reserved",
                populate: { path: "owner_id" }}).exec(function(err, foundSched){
                if(err){
                    console.log(err);
                } else {
                    console.log("SCHED !" + foundSched);
                    Film.find({}, function(err, foundFilm){
                        if(err){
                            console.log(err);
                        } else {
                            console.log("FILM! " + foundFilm);
                            res.render("reserved-seats", {user: foundUser, scheds: foundSched, films: foundFilm});
                        }
                    });
                }
            });
        }
    });
});

// UPDATE RESERVATION ROUTE
app.get("/editReservation/:user/:film/:sched", function(req, res){
    res.send(req.params.user);
});

// DELETE RESERVATION ROUTE
app.get("/cancelReservation/:user/:film/:sched", function(req, res){
    res.send(req.params.user);
});


// ADD FILM SCHEDULE ROUTE
app.get("/addFilmSchedule", function(req, res){
    res.render("addFilmSchedule");
});

// POST - ADD FILM SCHEDULE ROUT
app.post("/addFilmSchedule", function(req, res){

    Film.findOne({imdbID: req.body.sched.movie_id}, function(err, foundFilm){
        if(err){
            console.log(err);
        } else {
            var filmSched = req.body.sched;
            filmSched['movie_id'] = foundFilm._id;
            FilmSchedule.create(req.body.sched, function(err, newSched){
                if(err){
                    res.render("addFilmSchedule");
                } else {
                    res.redirect("/films");
                }
            });
        }
    });
});



// VIEW FILM SCHED ROUTE
// app.get("/film", function(req, res){
//     FilmSchedule.find({}, function(err, scheds){
//         if(err){
//             console.log("ERROR!");
//         } else {
//             res.render("film", {scheds: scheds});
//         }
//     });
// });


app.listen(3000, function(){
    console.log("WEB INDIVIDUAL MINI PROJECT SERVER HAS STARTED!");
});
