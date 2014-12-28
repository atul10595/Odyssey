exports.mainPage = function ( req, res){
	res.render('mainPage', {
		title: "Odyssey'15"
	});
}
exports.lifestyle = function ( req, res){
	res.render('lifestyle', {
		title: "Odyssey'15 |Lifestyle"
	});
}
exports.finearts = function ( req, res){
	res.render('finearts', {
		title:"Odyssey'15 |Fine Arts"
	});
}
exports.theatre = function ( req, res){
	res.render('theatre', {
		title: "Odyssey'15 |Theatre"
	});
}
exports.dance = function ( req, res){
	res.render('dance', {
		title: "Odyssey'15 |Dance"
	});
}

exports.quizzing = function ( req, res){
	res.render('quizzing', {
		title: "Odyssey'15 |Quizzes"
	});
}

exports.literary = function ( req, res){
	res.render('literary', {
		title: "Odyssey'15 |Literary"
	});
}

exports.digitalarts = function ( req, res){
	res.render('digitalarts', {
		title: "Odyssey'15 |Digital Arts"
	});
}

exports.gaming = function ( req, res){
	res.render('gaming', {
		title: "Odyssey'15 |Gaming"
	});
}

exports.music = function ( req, res){
	res.render('music', {
		title: "Odyssey'15 |Music"
	});
}

exports.treasurehunt = function ( req, res){
	res.render('treasurehunt', {
		title: "Odyssey'15 |Tresure Hunt"
	});
}

exports.chess = function ( req, res){
	res.render('chess', {
		title: "Odyssey'15 |Chess"
	});
}
exports.team = function ( req, res){
	res.render('team', {
		title: "Odyssey'15 |Organising Team"
	});
}

//
//app.get('/digitalarts', routes.digitalarts);
//app.get('/gaming', routes.gaming);
//app.get('/music', routes.music);
//app.get('/chess', routes.chess);
//app.get('/treasurehunt', routes.treasurehunt);


