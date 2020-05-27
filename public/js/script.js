$(document).ready(function(){
	//localStorage.removeItem("mrs-data");

	if (localStorage.getItem("mrs-data") === null) {

		let initial_data = {
			"films":
				[{
					"id" : 0,
					"hash_code": "d155a20f3e281399966bbe0f2a9b7568",
					"title": "Harry Potter and the Deathly Hallows - Part 1",
					"description": "As Harry, Ron, and Hermione race against time and evil to destroy the Horcruxes, they uncover the existence of the three most powerful objects in the wizarding world: the Deathly Hallows.",
					"rating": 4.5,
					"length": 146,
					"genre" : ["fantasy", "drama", "action"],
					"sm_pic": "dh/dh1-sm.jfif",
					"lg_pic": "dh/dh1-lg.jfif",
					"lo_pic": "dh/dh1-lo.jfif"
				}, {
					"id" : 1,
					"hash_code": "ea0039c94a8e5c399136fb53ef667fbe",
					"title": "On Vodka, Beer and Regrets",
					"description": "(no description)",
					"rating": 3.8,
					"length": 94,
					"genre" : ["drama", "romance"],
					"sm_pic": "vbr/vbr-sm.png",
					"lg_pic": "vbr/vbr-lg.png",
					"lo_pic": "vbr/vbr-lo.jpeg"
				}, {
					"id" : 2,
					"hash_code": "5482dbff97af995c574927a4c3e9cc3a",
					"title": "La Famille Belier",
					"description": "A girl, who lives with her deaf parents, discovers that she has the gift of singing.",
					"rating": 3.5,
					"length": 106,
					"genre" : ["family"],
					"sm_pic": "lfb/lfb-sm.jpg",
					"lg_pic": "lfb/lfb-lg.jpeg",
					"lo_pic": "lfb/lfb-lo.jpg"
				}, {
					"id" : 3,
					"hash_code": "aa649334c24f3954c2dd6d9602459bf9",
					"title": "Avengers: Endgame",
					"description": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
					"rating": 4.6,
					"length": 181,
					"genre" : ["scifi", "fantasy", "action"],
					"sm_pic": "ae/ae-sm.jpg",
					"lg_pic": "ae/ae-lg.jpeg",
					"lo_pic": "ae/ae-lo.jpg"
				}, {
					"id" : 4,
					"hash_code": "89b8e6dcea0b9a4ef24304c33f35911c",
					"title": "Harry Potter and the Deathly Hallows - Part 2",
					"description": "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
					"rating": 4.2,
					"length": 130,
					"genre" : ["fantasy", "drama", "action"],
					"sm_pic": "dh/dh2-sm.jpg",
					"lg_pic": "dh/dh2-lg.jpg",
					"lo_pic": "dh/dh2-lo.jpg"
				}, {
					"id" : 5,
					"hash_code": "3870e1e46a68667857120bde8736f2c1",
					"title": "Argo",
					"description": "Acting under the cover of a Hollywood producer scouting a location for a science fiction film, a CIA agent launches a dangerous operation to rescue six Americans in Tehran during the U.S. hostage crisis in Iran in 1979.",
					"rating": 4.2,
					"length": 130,
					"genre" : ["action", "thriller"],
					"sm_pic": "ar/ar-sm.jpeg",
					"lg_pic": "ar/ar-lg.jpg",
					"lo_pic": "ar/ar-lo.jpg"
				}, {
					"id" : 6,
					"hash_code": "3ccb9602c00bf09bd53318e7e4cec584",
					"title": "100 Tula Para Kay Stella",
					"description": "Throughout his four years in college, Fidel, a stuttering student, tries to finish 100 poems dedicated to Stella, an aspiring but frustrated rock star, to win her heart.",
					"rating": 4.1,
					"length": 123,
					"genre" : ["drama", "romance"],
					"sm_pic": "tpks/tpks-sm.jpg",
					"lg_pic": "tpks/tpks-lg.jpg",
					"lo_pic": "tpks/tpks-lo.jpg"
				}],

			"film_schedules":

				[{
					"sched_id": 0,
					"movie_id": 6,
					"date": "2020-04-30",
					"time": "12:00",
					"cinema_no": 1,
					"reserved": [{
									"seat" : "b4",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "b5",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "a1",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120002,
								   	"price" : 100
								},{
									"seat" : "a3",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120003,
								   	"price" : 120}]
				},{
					"sched_id": 1,
					"movie_id": 5,
					"date": "2020-04-30",
					"time": "09:00",
					"cinema_no": 4,
					"reserved": []
				},{
					"sched_id": 2,
					"movie_id": 1,
					"date": "2020-04-30",
					"time": "11:00",
					"cinema_no": 1,
					"reserved": []
				},{
					"sched_id": 3,
					"movie_id": 6,
					"date": "2020-04-30",
					"time": "13:00",
					"cinema_no": 4,
					"reserved": [{
									"seat" : "b4",
								   	"owner_id": 120003,
								   	"price" : 150
								},{
									"seat" : "b5",
								   	"owner_id": 120003,
								   	"price" : 150
								},{
									"seat" : "a1",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120001,
								   	"price" : 100
								},{
									"seat" : "a3",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120002,
								   	"price" : 120}]
				},{
					"sched_id": 4,
					"movie_id": 5,
					"date": "2020-04-30",
					"time": "15:00",
					"cinema_no": 1,
					"reserved": []
				},{
					"sched_id": 5,
					"movie_id": 5,
					"date": "2020-04-30",
					"time": "09:00",
					"cinema_no": 2,
					"reserved": [{
									"seat" : "b4",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "b5",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "e5",
								   	"owner_id": 120001,
								   	"price" : 120
								},{
									"seat" : "e6",
								   	"owner_id": 120001,
								   	"price" : 120
								},{
									"seat" : "a1",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "a3",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120003,
								   	"price" : 150}]
				},{
					"sched_id": 6,
					"movie_id": 2,
					"date": "2020-04-30",
					"time": "11:00",
					"cinema_no": 4,
					"reserved": [{
									"seat" : "b4",
								   	"owner_id": 120003,
								   	"price" : 150
								},{
									"seat" : "b5",
								   	"owner_id": 120003,
								   	"price" : 150
								},{
									"seat" : "a1",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120002,
								   	"price" : 100
								},{
									"seat" : "a3",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120003,
								   	"price" : 120}]
				},{
					"sched_id": 7,
					"movie_id": 1,
					"date": "2020-04-30",
					"time": "13:00",
					"cinema_no": 2,
					"reserved": [{
									"seat" : "b4",
								   	"owner_id": 120003,
								   	"price" : 150
								},{
									"seat" : "b5",
								   	"owner_id": 120003,
								   	"price" : 150
								},{
									"seat" : "a1",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120001,
								   	"price" : 100
								},{
									"seat" : "a3",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120002,
								   	"price" : 120}]
				},{
					"sched_id": 8,
					"movie_id": 2,
					"date": "2020-04-30",
					"time": "15:00",
					"cinema_no": 3,
					"reserved": [{
									"seat" : "b4",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "b5",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "a1",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120002,
								   	"price" : 100
								}]
				},{
					"sched_id": 9,
					"movie_id": 3,
					"date": "2020-04-30",
					"time": "09:00",
					"cinema_no": 1,
					"reserved": [{
									"seat" : "b4",
								   	"owner_id": 120003,
								   	"price" : 150
								},{
									"seat" : "b5",
								   	"owner_id": 120003,
								   	"price" : 150
								},{
									"seat" : "a1",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120001,
								   	"price" : 100
								},{
									"seat" : "a3",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120002,
								   	"price" : 120}]
				},{
					"sched_id": 10,
					"movie_id": 3,
					"date": "2020-04-30",
					"time": "11:00",
					"cinema_no": 1,
					"reserved": [{
									"seat" : "b4",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "b5",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "a1",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120002,
								   	"price" : 100
								},{
									"seat" : "a3",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120003,
								   	"price" : 120}]
				},{
					"sched_id": 11,
					"movie_id": 3,
					"date": "2020-04-30",
					"time": "13:00",
					"cinema_no": 2,
					"reserved": [{
									"seat" : "b4",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "b5",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "a1",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120002,
								   	"price" : 100
								}]
				},{
					"sched_id": 12,
					"movie_id": 3,
					"date": "2020-04-30",
					"time": "15:00",
					"cinema_no": 4,
					"reserved": [{
									"seat" : "b4",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "b5",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "a1",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120002,
								   	"price" : 100
								}]
				},{
					"sched_id": 13,
					"movie_id": 1,
					"date": "2020-05-05",
					"time": "09:00",
					"cinema_no": 3,
					"reserved": []
				},{
					"sched_id": 14,
					"movie_id": 5,
					"date": "2020-05-05",
					"time": "11:00",
					"cinema_no": 1,
					"reserved": []
				},{
					"sched_id": 15,
					"movie_id": 6,
					"date": "2020-05-05",
					"time": "13:00",
					"cinema_no": 1,
					"reserved": []
				},{
					"sched_id": 16,
					"movie_id": 1,
					"date": "2020-05-05",
					"time": "15:00",
					"cinema_no": 4,
					"reserved": []
				},{
					"sched_id": 17,
					"movie_id": 0,
					"date": "2020-05-05",
					"time": "09:00",
					"cinema_no": 1,
					"reserved": [{
									"seat" : "a1",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120002,
								   	"price" : 100
								},{
									"seat" : "a3",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120003,
								   	"price" : 120}]
				},{
					"sched_id": 18,
					"movie_id": 3,
					"date": "2020-05-05",
					"time": "11:00",
					"cinema_no": 2,
					"reserved": [{
									"seat" : "a1",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120002,
								   	"price" : 100
								},{
									"seat" : "a3",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120003,
								   	"price" : 120}]
				},{
					"sched_id": 19,
					"movie_id": 4,
					"date": "2020-05-05",
					"time": "13:00",
					"cinema_no": 2,
					"reserved": [{
									"seat" : "a1",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120003,
								   	"price" : 100
								},{
									"seat" : "a3",
								   	"owner_id": 120003,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120003,
								   	"price" : 120}]
				},{
					"sched_id": 20,
					"movie_id": 2,
					"date": "2020-05-05",
					"time": "15:00",
					"cinema_no": 2,
					"reserved": []
				},{
					"sched_id": 21,
					"movie_id": 0,
					"date": "2020-05-05",
					"time": "09:00",
					"cinema_no": 1,
					"reserved": []
				},{
					"sched_id": 22,
					"movie_id": 3,
					"date": "2020-05-05",
					"time": "11:00",
					"cinema_no": 3,
					"reserved": [{
									"seat" : "b4",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "b5",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "a1",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120002,
								   	"price" : 100
								},{
									"seat" : "a3",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120003,
								   	"price" : 120}]
				},{
					"sched_id": 23,
					"movie_id": 4,
					"date": "2020-05-05",
					"time": "13:00",
					"cinema_no": 3,
					"reserved": []
				},{
					"sched_id": 24,
					"movie_id": 3,
					"date": "2020-05-05",
					"time": "15:00",
					"cinema_no": 4,
					"reserved": [{
									"seat" : "a1",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120003,
								   	"price" : 100
								},{
									"seat" : "a3",
								   	"owner_id": 120003,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120003,
								   	"price" : 120}]
				},{
					"sched_id": 25,
					"movie_id": 0,
					"date": "2020-05-05",
					"time": "09:00",
					"cinema_no": 4,
					"reserved": [{
									"seat" : "b4",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "b5",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "a1",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120002,
								   	"price" : 100
								},{
									"seat" : "a3",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120003,
								   	"price" : 120}]
				},{
					"sched_id": 26,
					"movie_id": 1,
					"date": "2020-05-05",
					"time": "11:00",
					"cinema_no": 4,
					"reserved": []
				},{
					"sched_id": 27,
					"movie_id": 4,
					"date": "2020-05-05",
					"time": "13:00",
					"cinema_no": 4,
					"reserved": [{
									"seat" : "b4",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "b5",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "a1",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120002,
								   	"price" : 100
								},{
									"seat" : "a3",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120003,
								   	"price" : 120}]
				},{
					"sched_id": 28,
					"movie_id": 2,
					"date": "2020-05-05",
					"time": "15:00",
					"cinema_no": 4,
					"reserved": [{
									"seat" : "b4",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "b5",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "a1",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120002,
								   	"price" : 100
								},{
									"seat" : "a3",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120003,
								   	"price" : 120}]
				},{
					"sched_id": 37,
					"movie_id": 5,
					"date": "2020-05-06",
					"time": "09:00",
					"cinema_no": 1,
					"reserved": [{
									"seat" : "a1",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120003,
								   	"price" : 100
								},{
									"seat" : "a3",
								   	"owner_id": 120003,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120003,
								   	"price" : 120}]
				},{
					"sched_id": 38,
					"movie_id": 6,
					"date": "2020-05-06",
					"time": "11:00",
					"cinema_no": 1,
					"reserved": [{
									"seat" : "b4",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "b5",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "d1",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "d2",
								   	"owner_id": 120002,
								   	"price" : 100
								},{
									"seat" : "d3",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120003,
								   	"price" : 120}]
				},{
					"sched_id": 39,
					"movie_id": 1,
					"date": "2020-05-06",
					"time": "13:00",
					"cinema_no": 1,
					"reserved": []
				},{
					"sched_id": 40,
					"movie_id": 1,
					"date": "2020-05-06",
					"time": "15:00",
					"cinema_no": 1,
					"reserved": [{
									"seat" : "a1",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120002,
								   	"price" : 100
								},{
									"seat" : "a3",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120003,
								   	"price" : 120}]
				},{
					"sched_id": 41,
					"movie_id": 0,
					"date": "2020-05-06",
					"time": "09:00",
					"cinema_no": 2,
					"reserved": []
				},{
					"sched_id": 42,
					"movie_id": 2,
					"date": "2020-05-06",
					"time": "11:00",
					"cinema_no": 2,
					"reserved": [{
									"seat" : "b4",
								   	"owner_id": 120003,
								   	"price" : 150
								},{
									"seat" : "b5",
								   	"owner_id": 120003,
								   	"price" : 150
								},{
									"seat" : "a1",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120001,
								   	"price" : 100
								},{
									"seat" : "a3",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120002,
								   	"price" : 120}]
				},{
					"sched_id": 43,
					"movie_id": 2,
					"date": "2020-05-06",
					"time": "13:00",
					"cinema_no": 2,
					"reserved": []
				},{
					"sched_id": 44,
					"movie_id": 0,
					"date": "2020-05-06",
					"time": "15:00",
					"cinema_no": 2,
					"reserved": []
				},{
					"sched_id": 45,
					"movie_id": 6,
					"date": "2020-05-06",
					"time": "09:00",
					"cinema_no": 2,
					"reserved": [{
									"seat" : "b4",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "b5",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "a1",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120002,
								   	"price" : 100
								},{
									"seat" : "a3",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120003,
								   	"price" : 120
								},{
									"seat" : "e5",
								   	"owner_id": 120003,
								   	"price" : 120
								},{
									"seat" : "e6",
								   	"owner_id": 120003,
								   	"price" : 120
								},{
									"seat" : "e7",
								   	"owner_id": 120003,
								   	"price" : 120}]
				},{
					"sched_id": 47,
					"movie_id": 0,
					"date": "2020-05-06",
					"time": "11:00",
					"cinema_no": 3,
					"reserved": []
				},{
					"sched_id": 48,
					"movie_id": 2,
					"date": "2020-05-06",
					"time": "13:00",
					"cinema_no": 3,
					"reserved": []
				},{
					"sched_id": 49,
					"movie_id": 5,
					"date": "2020-05-06",
					"time": "15:00",
					"cinema_no": 3,
					"reserved": []
				},{
					"sched_id": 50,
					"movie_id": 6,
					"date": "2020-05-06",
					"time": "09:00",
					"cinema_no": 4,
					"reserved": []
				},{
					"sched_id": 51,
					"movie_id": 2,
					"date": "2020-05-06",
					"time": "11:00",
					"cinema_no": 4,
					"reserved": [{
									"seat" : "b4",
								   	"owner_id": 120003,
								   	"price" : 150
								},{
									"seat" : "b5",
								   	"owner_id": 120003,
								   	"price" : 150
								},{
									"seat" : "a1",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120001,
								   	"price" : 100
								},{
									"seat" : "a3",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120002,
								   	"price" : 120}]
				},{
					"sched_id": 52,
					"movie_id": 4,
					"date": "2020-05-06",
					"time": "13:00",
					"cinema_no":1,
					"reserved": []
				},{
					"sched_id": 53,
					"movie_id": 4,
					"date": "2020-05-06",
					"time": "15:00",
					"cinema_no": 2,
					"reserved": []
				}],

			"users" : 
				[{
					"id" : 120001,
					"name" : "John Smith"
				},{
					"id" : 120002,
					"name" : "Jalane Rivera"
				},{
					"id" : 120003,
					"name" : "Mary Aranas"
				}]

			}

		if(localStorage.getItem("mrs-data")===null){
			localStorage.setItem("mrs-data", JSON.stringify(initial_data));
		}
	
	}

	var data = JSON.parse(localStorage.getItem("mrs-data"));

	const ROWS = 9;
	const COLUMNS = 8;
	const CAPACITY = 72;
	const SEATS = ["mrs-seats-a1", "mrs-seats-a2", "mrs-seats-a3", "mrs-seats-a4", "mrs-seats-a5", "mrs-seats-a6", "mrs-seats-a7", "mrs-seats-a8",
				   "mrs-seats-b1", "mrs-seats-b2", "mrs-seats-b3", "mrs-seats-b4", "mrs-seats-b5", "mrs-seats-b6", "mrs-seats-b7", "mrs-seats-b8",
				   "mrs-seats-c1", "mrs-seats-c2", "mrs-seats-c3", "mrs-seats-c4", "mrs-seats-c5", "mrs-seats-c6", "mrs-seats-c7", "mrs-seats-c8",
				   "mrs-seats-d1", "mrs-seats-d2", "mrs-seats-d3", "mrs-seats-d4", "mrs-seats-d5", "mrs-seats-d6", "mrs-seats-d7", "mrs-seats-d8",
				   "mrs-seats-e1", "mrs-seats-e2", "mrs-seats-e3", "mrs-seats-e4", "mrs-seats-e5", "mrs-seats-e6", "mrs-seats-e7", "mrs-seats-e8",
				   "mrs-seats-f1", "mrs-seats-f2", "mrs-seats-f3", "mrs-seats-f4", "mrs-seats-f5", "mrs-seats-f6", "mrs-seats-f7", "mrs-seats-f8",
				   "mrs-seats-g1", "mrs-seats-g2", "mrs-seats-g3", "mrs-seats-g4", "mrs-seats-g5", "mrs-seats-g6", "mrs-seats-g7", "mrs-seats-g8",
				   "mrs-seats-h1", "mrs-seats-h2", "mrs-seats-h3", "mrs-seats-h4", "mrs-seats-h5", "mrs-seats-h6", "mrs-seats-h7", "mrs-seats-h8",
				   "mrs-seats-i1", "mrs-seats-i2", "mrs-seats-i3", "mrs-seats-i4", "mrs-seats-i5", "mrs-seats-i6", "mrs-seats-i7", "mrs-seats-i8"];

	const MRS_GENRE = [{"code" : "family",
						"text" : "Family"},
					   {"code" : "action",
						"text" : "Action"},
					   {"code" : "romance",
						"text" : "Romance"},
					   {"code" : "drama",
						"text" : "Drama"},
					   {"code" : "scifi",
						"text" : "Sci-Fi"},
					   {"code" : "fantasy",
						"text" : "Fantasy"},
					   {"code" : "comedy",
						"text" : "Comedy"},
					   {"code" : "thriller",
						"text" : "Thriller"}];

	var sPath = window.location.pathname;
	var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
	console.log(sPage);	

	var films = data.films;
	var scheds = data.film_schedules;
	var users = data.users;


	// FUNCTIONS

	function getVideoById(id){
		let result;
		for(let v of films){
			if(v.id == id){
				result = v;
			}
		}
		return result;
	}

	function getAvailableSeatCount(taken){
		return CAPACITY - taken;
	}

	function generatePriceList(regularNum, seniorNum, kidNum){
		let priceList = [];
		for(let i = 0; i < regularNum; i++){
			priceList.push(150);
		}

		for(let i = 0; i < seniorNum; i++){
			priceList.push(120);
		}

		for(let i = 0; i < kidNum; i++){
			priceList.push(100);
		}
		return priceList;
	}


	function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

	// While there are elements in the array
	    while (ctr > 0) {
	// Pick a random index
	        index = Math.floor(Math.random() * ctr);
	// Decrease ctr by 1
	        ctr--;
	// And swap the last element with it
	        temp = arra1[ctr];
	        arra1[ctr] = arra1[index];
	        arra1[index] = temp;
	    }
	    return arra1;
	}


	if(sPage == "index.html"){
		var result = "";
		var shuffleFilms = shuffle(films);

		var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		var yyyy = today.getFullYear();

		today = yyyy + '-' + mm + '-' + dd;
		console.log(today);

		for(var i = 0 ; i < 3 ; i++){
			var hash_code = shuffleFilms[i].hash_code;
			var title = shuffleFilms[i].title;
			var description = shuffleFilms[i].description;
			var image = shuffleFilms[i].sm_pic;

			result += String.raw`
								<div class="mrs-featured-film card col-sm bg-dark">
				                    <img src="img/${image}" class="card-img-top" alt="...">
				                    <div class="card-body">
				                        <h5 class="card-title">${title}</h5>
				                        <p class="card-text">${description}</p>
				                        <a class="mrs-film-reserve mrs-rounded-btn" href="film.html?v=${hash_code}">View Details</a>
				                    </div>
				                </div>`;
		}

		document.getElementById("featured-films-section").innerHTML = result;

		result = "";
		var now_showing_movies = [];
		for(var i in scheds){
			var dateShowing = scheds[i].date;

			if(dateShowing == today){
				var todayMovieID = scheds[i].movie_id;
				for(var j in films){
					if(films[j].id == todayMovieID){
						if(now_showing_movies.length == 0){
							now_showing_movies.push(films[j].id);
							var hash_code = films[j].hash_code;
							var image = films[j].lg_pic;
							var nTitle = films[j].title;
							result += String.raw`
												<div class="carousel-item">
						                            <img src="img/${image}" class="d-block w-100" alt="...">
						                            <div class="carousel-caption d-none d-md-block">
													    <h2>${nTitle}</h2>
													</div>
						                        </div>`;
						} else {
							if(!now_showing_movies.includes(films[j].id)){
								now_showing_movies.push(films[j].id);
								var hash_code = films[j].hash_code;
								var image = films[j].lg_pic;
								var nTitle = films[j].title;
								result += String.raw`
													<div class="carousel-item">
							                            <img src="img/${image}" class="d-block w-100" alt="...">
								                            <div class="carousel-caption d-none d-md-block">
														    <h2>${nTitle}</h2>
														</div>
							                        </div>`;
							}
						}
					}
				}
			}
		}

		document.getElementById("now-showing-container").innerHTML += result;

	}else if(sPage  == "films.html"){
		var result = "";
		for(var i in films){
			var hash_code = films[i].hash_code;
			var title = films[i].title;
			var description = films[i].description;
			var image = films[i].lo_pic;
			var rating = "";
			var tags = "";

			for(let counter = 1; counter <= films[i].rating; counter++){
				rating += String.raw`
                            <span class="full"></span>`;
			}
			if((films[i].rating % 1) != 0){
				rating += String.raw`
                            <span class="half"></span>`;
			}
			rating += String.raw`
                            <span class="numeric">${films[i].rating}</span>`;

			for(let film_genre of films[i].genre){				
				for(let genre of MRS_GENRE){
					if(genre.code == film_genre){
						tags += String.raw`
	                        <span class="${genre.code}">${genre.text}</span>`;
					}
				}
			}

			result += String.raw`
			<div class="mrs-film card col-lg-3 col-md-6">
                <div class="mrs-film-img"><img class="mrs-film-img" src="img/${image}"></div>
                <div class="mrs-film-details container mx-1">
                    <h3 class="mrs-film-title">${title}</h3>
                        <div class="mrs-rating">
                            ${rating}
                        </div>
                    <div class="mrs-film-tags">
                        ${tags}
                    </div>
                    <div class="mrs-film-info mrs-paragraph">
                        <p>${description}</p>
                    </div>
                    <a class="mrs-film-reserve mrs-rounded-btn" href="film.html?v=${hash_code}">Reserve</a>
                </div>
            </div>`;
		}
		document.getElementById("mrs-films-list").innerHTML = result;
	   
	}else if(sPage  == "reserve.html"){
		let params = new URLSearchParams(location.search);
		try{
			let query = new RegExp(params.get("search").toLowerCase());
			if(query != null && params.get("search") !== ""){
				//console.log(query);
				var result_counter = 0;
				var result = "";
				for(var i = 0; i < films.length; i++){
					if(query.test(films[i].title.toLowerCase())){
						var hash_code = films[i].hash_code;
						var title = films[i].title;
						var description = films[i].description;
						var image = films[i].lo_pic;
						result_counter++;
						var rating = "";
						var tags = "";

						for(let counter = 1; counter <= films[i].rating; counter++){
							rating += String.raw`
			                            <span class="full"></span>`;
						}
						if((films[i].rating % 1) != 0){
							rating += String.raw`
			                            <span class="half"></span>`;
						}
						rating += String.raw`
			                            <span class="numeric">${films[i].rating}</span>`;

						for(let film_genre of films[i].genre){				
							for(let genre of MRS_GENRE){
								if(genre.code == film_genre){
									tags += String.raw`
				                        <span class="${genre.code}">${genre.text}</span>`;
								}
							}
						}

						result += String.raw`
						<div class="mrs-film card col-lg-3 col-md-6">
			                <div class="mrs-film-img"><img class="mrs-film-img" src="img/${image}"></div>
			                <div class="mrs-film-details container mx-1">
			                    <h3 class="mrs-film-title">${title}</h3>
			                        <div class="mrs-rating">
			                            ${rating}
			                        </div>
			                    <div class="mrs-film-tags">
			                        ${tags}
			                    </div>
			                    <div class="mrs-film-info mrs-paragraph">
			                        <p>${description}</p>
			                    </div>
			                    <a class="mrs-film-reserve mrs-rounded-btn" href="film.html?v=${hash_code}">Reserve</a>
			                </div>
			            </div>`;
					}
				}

				if(result_counter == 0){
					document.getElementById("mrs-result-counter").innerHTML = '<span class="mrs-no-result">No result for \"' + params.get("search") + '\"</span>';
				}else{
					document.getElementById("mrs-search-results").innerHTML = result;
					document.getElementById("mrs-result-counter").innerHTML = "You got " + result_counter + " result(s) for \"" + params.get("search") + "\"";
				}
			}else{
				document.getElementById("mrs-result-counter").innerHTML = '<span class="mrs-no-result">No result</span>';
			}
		}catch(e){
			console.log(e);
		}
	   
	}else if(sPage  == "film.html"){
	   
		let params = new URLSearchParams(location.search);
		try{
			var hash_code = params.get("v");
			if(hash_code != null){;
				var isExisting = false;
				var result = "";
				for(var i = 0; i < films.length; i++){
					if(hash_code == films[i].hash_code){
						var id = films[i].id;
						var title = films[i].title;
						var description = films[i].description;
						var image = films[i].sm_pic;
						var rating = "";
						var tags = "";

						for(let counter = 1; counter <= films[i].rating; counter++){
							rating += String.raw`
			                            <span class="full"></span>`;
						}
						if((films[i].rating % 1) != 0){
							rating += String.raw`
			                            <span class="half"></span>`;
						}
						rating += String.raw`
			                            <span class="numeric">${films[i].rating}</span>`;

						for(let film_genre of films[i].genre){				
							for(let genre of MRS_GENRE){
								if(genre.code == film_genre){
									tags += String.raw`
				                        <span class="${genre.code}">${genre.text}</span>`;
								}
							}
						}

						result = String.raw`<img src="img/${image}" class="card-img-top" alt="...">
						                    <div class="card-body">
						                        <h4 class="mrs-film-title card-title">${title}</h4>
						                        <div class="mrs-rating">
						                            ${rating}
						                        </div>
						                        <div class="mrs-film-tags">
						                            ${tags}
						                        </div>
						                        <p class="card-text mrs-paragraph">${description}</p>
						                    </div>`;
						isExisting = true;

						// FOR THE SCHEDS

						var film_scheds = "";
								console.log(scheds);

						for(let s of scheds){
								console.log(s);
							if(s.movie_id == id){
								let freeCount = CAPACITY - s.reserved.length;

								film_scheds += String.raw`
                            <tr>
                                <th scope="row">${s.cinema_no}</th>
                                <td>${s.time}</td>
                                <td>${s.date}</td>
                                <td>${freeCount}/${CAPACITY}</td>
                                <td><a href="order.html?schedule=${s.sched_id}">Reserve</a></td>
                            </tr>`;

							}
						}

						break;
					}
				}

				if(isExisting){
					document.getElementById("mrs-current-film-info").innerHTML = result;
					document.getElementById("mrs-film-scheds").innerHTML = film_scheds;
				}else{
					document.getElementById("mrs-current-film-info").innerHTML = '<span class="mrs-no-result">Error: We do not have that film</span>';
				}
			}else{
				document.getElementById("mrs-current-film-info").innerHTML = '<span class="mrs-no-result">Error: We do not have that film</span>';
			}
		}catch(e){
			console.log(e);
		}
	}else if(sPage  == "order.html"){
		let current_sched;
		let current_film;

		let params = new URLSearchParams(location.search);
		try{
			var sched_id = parseInt(params.get("schedule"));
			if(sched_id != null){;
				var isExisting = false;
				let movie

				for(var s of scheds){
					if(s.sched_id == sched_id){
						current_sched = s;
						current_film = getVideoById(s.movie_id);

						isExisting = true;
						break;
					}
				}

				if(isExisting){
					document.getElementById("mrs-order-film").value = current_film.title;
					document.getElementById("mrs-order-cinema").value = current_sched.cinema_no;
					document.getElementById("mrs-order-time").value = current_sched.time;
					document.getElementById("mrs-order-date").value = current_sched.date;
					for(let current_seat of current_sched.reserved){
						let seatName = "mrs-seat-"+ current_seat.seat;
						document.getElementById(seatName).disabled = true;
						$("#" + seatName).addClass("mrs-seat-taken");
						$("#" + seatName).removeClass("mrs-seat-available");
					}

					let availableSeatCount = getAvailableSeatCount(current_sched.reserved.length);				

					var regulars = document.getElementById("mrs-order-regulars");
					regulars.max = availableSeatCount; 

					var kids = document.getElementById("mrs-order-kids");
					kids.max = availableSeatCount; 

					var seniors = document.getElementById("mrs-order-seniors");
					seniors.max = availableSeatCount;
				}else{
					//document.getElementById("mrs-current-film-info").innerHTML = '<span class="mrs-no-result">Error: We do not have that film</span>';
				}
			}else{
				//document.getElementById("mrs-current-film-info").innerHTML = '<span class="mrs-no-result">Error: We do not have that film</span>';
			}
		}catch(e){
			console.log(e);
		}


		let selectedSeatCount = 0; 
	   	$(".mrs-seat").click(function(){
			if($(this).hasClass("mrs-seat-available")){
			    $(this).removeClass("mrs-seat-available");
			    $(this).addClass("mrs-seat-selected");
			    selectedSeatCount++;
				//console.log(selectedSeatCount);
			}else if($(this).hasClass("mrs-seat-selected")){			
			    $(this).removeClass("mrs-seat-selected");
			    $(this).addClass("mrs-seat-available");
			    selectedSeatCount--;
				//console.log(selectedSeatCount);
			}
		});

		function gotToReservedSeats() {

			window.location.replace("reserved-seats.html");
			//window.location.reload();
			//window.open("reserved-seats.html");
			//close();
		}

		function goExit() {
			window.location.replace("film.html?v=" + current_film.hash_code);
			//window.location.reload();
			//window.open("film.html?v=" + current_film.hash_code);
			//close();
		}


		let selectedSeatsText = "";
		let selectedSeats = [];

		$("#mrs-order-proceed").click(function(){
			let isValid = false;


			let title = "";
			let content = "";
			let successLabel = "";
			let cancelLabel = "";

			let regularCount = parseInt(document.getElementById("mrs-order-regulars").value);
			let seniorCount = parseInt(document.getElementById("mrs-order-seniors").value);
			let kidCount = parseInt(document.getElementById("mrs-order-kids").value);
			let totalCount = regularCount + seniorCount + kidCount;

			let regularAmount = "₱ " + (regularCount * 150);
			let seniorAmount = "₱ " + (seniorCount * 120);
			let kidAmount = "₱ " + (kidCount * 100);
			let totalAmount = "₱ " + ((regularCount * 150) + (seniorCount * 120) + (kidCount * 100));

			$(".mrs-seat-selected").each(function() {
				let seatCode = $(this).find("span").text()
		        selectedSeatsText += seatCode + " ";
		        selectedSeats.push(seatCode.toLowerCase());
		        console.log(selectedSeats);

		    });


			document.getElementById("mrs-order-modal-btn-success").href = "#";

			if(totalCount == selectedSeatCount && selectedSeatCount > 0){
				isValid = true;
				successLabel = "Proceed";
				cancelLabel = "Cancel";

				title = "Reservation Order Summary";
				content = String.raw`<div class="form-group row">
                                <label for="mrs-summary-name" class="col-sm-2 col-form-label">Name</label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" id="mrs-summary-name" value="John Smith" disabled>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="mrs-summary-film" class="col-sm-2 col-form-label">Film</label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" id="mrs-summary-film" value="${current_film.title}" disabled>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="mrs-summary-cinema" class="col-sm-2 col-form-label">Cinema</label>
                                <div class="col-sm-2">
                                    <input type="text" class="form-control" id="mrs-summary-cinema" value="${current_sched.cinema_no}" disabled>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="mrs-summary-datetime" class="col-sm-2 col-form-label">Time/Date</label>
                                <div class="col-sm-3">
                                    <input type="time" class="form-control" id="mrs-summary-time" value="${current_sched.time}" disabled>
                                </div>
                                <div class="col-sm-3">
                                    <input type="date" class="form-control" id="mrs-summary-date" value="${current_sched.date}" disabled>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="mrs-summary-seats" class="col-sm-2 col-form-label">Seats</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="mrs-summary-seats" value="${selectedSeatsText}" disabled>
                                </div>
                            </div>
                            
							<table class="table">
                                <thead class="thead">
                                    <tr>
                                        <th scope="col">Type</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Unit Price</th>
                                        <th scope="col">Amount</th>
                                    </tr>
                                </thead>
                                <tbody id="mrs-summary-price">
                                    <tr>
                                        <td>Regular</td>
                                        <td>${regularCount}</td>
                                        <td>₱ 150</td>
                                        <td>${regularAmount}</td>
                                    </tr>
                                    <tr>
                                        <td>Senior</td>
                                        <td>${seniorCount}</td>
                                        <td>₱ 120</td>
                                        <td>${seniorAmount}</td>
                                    </tr>
                                    <tr>
                                        <td>Kid</td>
                                        <td>${kidCount}</td>
                                        <td>₱ 100</td>
                                        <td>${kidAmount}</td>
                                    </tr>
                                    <tr>
                                        <td>Total</td>
                                        <td>${totalCount}</td>
                                        <td></td>
                                        <td>${totalAmount}</td>
                                    </tr>
                                    
                                </tbody>
                            </table>`;
			}else if(selectedSeatCount == 0 || totalCount == 0){
				successLabel = "Ok";
				cancelLabel = "Try Again";

				title = "Error";
				content = "<p>Make sure you entered at least 1 valid for any of the guest type and/or selected at least one seat to reserve.</p>";
			}
			else{
				successLabel = "Ok";
				cancelLabel = "Try Again";

				title = "Error";
				content = "<p>The number of to reserve seats and the number of selected seats does NOT match</p>";
			}

			document.getElementById("mrs-order-modal-title").innerHTML = title;
			document.getElementById("mrs-order-modal-body").innerHTML = content;
			document.getElementById("mrs-order-modal-btn-success").innerHTML = successLabel;
			document.getElementById("mrs-order-modal-btn-cancel").innerHTML = cancelLabel;

			$("#mrs-order-modal-btn-success").click(function() {
				if(isValid){
					let priceList = generatePriceList(regularCount, seniorCount, kidCount);

						console.log(selectedSeats.length);
					for(let i = 0;  i < selectedSeats.length; i++){
						console.log(selectedSeats.length);
						current_sched.reserved.push({
							"seat" : selectedSeats[i],
							"owner_id": 120001,
							"price" : priceList[i]
						})
					}

					console.log(current_sched.reserved);

					localStorage.setItem("mrs-data", JSON.stringify(data));

					document.getElementById("mrs-order-modal-title").innerHTML = "Success";
					document.getElementById("mrs-order-modal-body").innerHTML = "You have sucessfully reserved " + selectedSeatCount + " seat(s).";
					document.getElementById("mrs-order-modal-btn-success").innerHTML = "See Reservations";
					document.getElementById("mrs-order-modal-btn-success").onclick = gotToReservedSeats;
					document.getElementById("mrs-order-modal-btn-cancel").innerHTML = "Exit";
					document.getElementById("mrs-order-modal-btn-cancel").onclick = goExit;
				}
				isValid = false;
		    });

		});
	}else if(sPage == "reserved-seats.html"){
		var result;
		var qty;
		var isExisting;
		var hasReservation = false;

		for(var i = 0; i < data.film_schedules.length; i++){
			qty = 0;
			isExisting = false;
			result = "";
			for(var j in data.film_schedules[i].reserved){
				if(data.film_schedules[i].reserved[j].owner_id == 120001){
					isExisting = true;
					hasReservation = true;
					for(var x in films){
						if(films[x].id == data.film_schedules[i].movie_id){
							result = String.raw`<tr id="${data.film_schedules[i].sched_id}">
                                					<th scope="row">${films[x].title}</th>`;
						}
					}
					qty++;
				} else {

				}
			}
			if(isExisting){
				console.log(data.film_schedules[i].sched_id);
				result += String.raw`<td>${data.film_schedules[i].date}</td>
	                                <td>${data.film_schedules[i].time}</td>
	                                <td>${data.film_schedules[i].cinema_no}</td>
	                                <td>${qty}</td>
	                                <td class="reservation-list-button">
	                                    <button class="edit-reservation edit-list-button edit-reservation-btn">Edit</button>
	                                </td>
	                                <td class="reservation-list-button">
	                                    <button class="cancel-reservation cancel-list-button cancel-reservation-btn">Cancel</button>
	                                </td>
	                            </tr>`;
	            document.getElementById("reserved-movie-list").innerHTML += result;
				
			}

		}

		if(hasReservation){

		} else {
			document.getElementById("reserved-movie-list").innerHTML = '<span class="mrs-no-result">You have no reserved seats..</span>';
		}

		$(".cancel-reservation-btn").click(function(){
			var tr = $(this).parent().parent();
			var schedID = tr.attr("id");
			

			for(var i = 0; i < data.film_schedules.length; i++){
				if(data.film_schedules[i].sched_id == schedID) {
					for(var j = 0; j < data.film_schedules[i].reserved.length; j++){
						if(data.film_schedules[i].reserved[j].owner_id == 120001){
							data.film_schedules[i].reserved.splice(j,1);
							j--;
							console.log(data.film_schedules[i]);
						}
					}
				}
			}

			localStorage.setItem("mrs-data", JSON.stringify(data));

			tr.remove();
		});

	}
	/****/


	



	//alert("success...");

});