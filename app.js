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
    Film.findOne({_id: req.params.id}, function(err, foundFilm){
        if(err){
            console.log(err);
        } else {
            FilmSchedule.find({movie_id: req.params.id}, function(err, foundFilmSched){
                if(err){
                    console.log(err);
                } else {
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

    User.findOne({name: "John Smith"}, function(err, foundUser){
        if(err){
            console.log(err);
        } else {
            FilmSchedule.findOne({_id: req.params.id}).populate("reserved").exec(function(err, foundFilmSched){
                if(err){
                    console.log(err);
                } else {
                    Film.findOne({_id: foundFilmSched.movie_id}, function(err, foundFilm){
                        if(err){
                            console.log(err);
                        } else {
                            var seatsArr = [];
                            if(foundFilmSched.reserved.length > 0){
                                for(var x in foundFilmSched.reserved){
                                    seatsArr.push(foundFilmSched.reserved[x].seat);
                                }
                                res.render('order', {
                                    user: foundUser,
                                    film: foundFilm,
                                    sched: foundFilmSched,
                                    seats: seatsArr
                                });
                            } else {
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

// CONFIRMATION ROUTE
app.post("/confirmation/:user/:film/:sched", function(req, res){
    var regularSeats = Number(req.body.noOfRegulars);
    var kidSeats = Number(req.body.noOfKids);
    var seniorSeats = Number(req.body.noOfSeniors);
    var totalSeats = Number(req.body.noOfRegulars) + Number(req.body.noOfKids) + Number(req.body.noOfSeniors);
    var seatsArr = {
        "regularSeats": regularSeats,
        "kidSeats": kidSeats,
        "seniorSeats": seniorSeats,
        "totalSeats": totalSeats
    }

    if(totalSeats != req.body.seat.length || req.body.seat.length == null){
        res.redirect("/film/" + req.params.film);
    } else {
        User.findById(req.params.user, function(err, foundUser){
            if(err){
                console.log(err);
            } else {
                FilmSchedule.findById(req.params.sched, function(err, foundFilmSched){
                    if(err){
                        console.log(err);
                    } else {
                        Film.findById(req.params.film, function(err, foundFilm){
                            if(err){
                                console.log(err);
                            } else {
                                res.render('confirmation', {
                                    user: foundUser,
                                    film: foundFilm,
                                    sched: foundFilmSched,
                                    seats: seatsArr,
                                    seatSelected: req.body.seat
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});

// CHECKOUT ROUTE
app.post("/checkout/:user/:film/:sched", function(req, res){
    var regularSeats = Number(req.body.noOfRegulars);
    var kidSeats = Number(req.body.noOfKids);
    var seniorSeats = Number(req.body.noOfSeniors);
    var totalSeats = Number(req.body.noOfRegulars) + Number(req.body.noOfKids) + Number(req.body.noOfSeniors);
    var seat = req.body.seatSel;
    seat.split(" ");
    var seatArray = new Array();
    var xx = "";
    for(var i = 0; i < seat.length; i++){
        if(seat[i] == " "){
            seatArray.push(xx);
            xx = "";
        } else {
            xx += seat[i];
        }
    }

    if(totalSeats != seatArray.length || seatArray.length == null){
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
                            seat: seatArray[i-1],
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
                            seat: seatArray[i-1],
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
                            seat: seatArray[i-1],
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
            FilmSchedule.find().populate({
                path: "reserved",
                populate: { path: "owner_id" }}).exec(function(err, foundSched){
                if(err){
                    console.log(err);
                } else {
                    Film.find({}, function(err, foundFilm){
                        if(err){
                            console.log(err);
                        } else {
                            res.render("reserved-seats", {user: foundUser, scheds: foundSched, films: foundFilm});
                        }
                    });
                }
            });
        }
    });
});

// DELETE RESERVATION ROUTE
app.delete("/cancelReservation/:userID/:filmID/:schedID", function(req, res){
    FilmSchedule.findOne({_id: req.params.schedID}).populate("reserved").exec(function(err, foundFilmSched){
        if(err){
            console.log(err);
        } else {   
            if(foundFilmSched.reserved.length > 1){
                for(var x in foundFilmSched.reserved){
                    if(foundFilmSched.reserved[x].owner_id == req.params.userID){
                        FilmSchedule.update(
                            { _id: req.params.schedID },
                            { "$pull": { "reserved": foundFilmSched.reserved[x]._id }},
                            { safe: true, multi: true }).populate({path:'reserved', select:'_id', model: 'Reserved' }).exec(function(err, obj){
                                if(err){

                                } else {
                                    
                                }
                        });
                        
                        Reserved.findByIdAndRemove(foundFilmSched.reserved[x]._id, function(err){
                            if(err){
                                console.log(err);
                            } else {

                            }
                        });
                    }
                }
                res.redirect("/reservedSeats");
            } else {
                foundFilmSched.reserved.forEach(function(reservation){
                    if(reservation.owner_id == req.params.userID){
                        FilmSchedule.update(
                            { _id: req.params.schedID },
                            { "$pull": { "reserved": reservation._id }},
                            { safe: true, multi: true }).populate({path:'reserved', select:'_id', model: 'Reserved' }).exec(function(err, obj){
                                Reserved.findByIdAndRemove(reservation._id, function(err){
                                    if(err){
                                        console.log(err);
                                    } else {
                                        res.redirect("/reservedSeats");
                                    }
                                });                
                        });
                    }
                });
            }
        }
    });
});




// UPDATE RESERVATION ROUTE
app.get("/editReservation/:user/:film/:sched", function(req, res){
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

app.listen(3000, function(){
    console.log("WEB INDIVIDUAL MINI PROJECT SERVER HAS STARTED!");
});
