jQuery(document).ready(function ($) {

	$rc = $(".round-thumb");
	$mL = $(".modalL");
	$mR = $(".modalR");
	$rb = $(".rulebook")
	$modalListOfRules = $(".orderedList");


	var eventName = '';

	var menuIn = false;

	var description = ""; // change the event wise description in the switch case at the end not this

	var s = "<h1>Singularity</h1></br><p>“All the world's a stage and most of us are desperately unrehearsed.”</br> ― Seán O'Casey</p><p>If you can mesmerise everyone by your acting prowess and if you are adaring lone wolf. Come show us your soliloquy .The stage is set and the spot lights are on.</p>";
	var h = "<h1>HASRATEIN</h1></br><p></p>";


	var srules = ["Record a monologue or any solo act of about 5 min and send it toxyz@abc.com",
"The medium of the act can be Hindi/English or both.",
"Shortlisted candidates will be contacted and will have to be present in thecampus on the day of the fest.",
"campus on the day of the fest. There will 4 rounds in the event and elimination after first 2 rounds.",
"Participants are supposed to arrange and bring props if required by them.",
"Decision of the judges will be final and irrevocable.",
"Obscenity strictly not allowed."]
		var hrules = ["Team size: 8-20(including actors and music accompanists)",
"Preliminary round",
"Shortlisted candidates will be contacted and will have to be present in thecampus on the day of the fest.",
"campus on the day of the fest. There will 4 rounds in the event and elimination after first 2 rounds.",
"Participants are supposed to arrange and bring props if required by them.",
"Decision of the judges will be final and irrevocable.",
"Obscenity strictly not allowed."]



	$cross = $(".spanExitButton");
	$cross.addClass("hideMe");

	function exitModal() {
		$cross.addClass("hideMe");
		$('body').removeClass('noscroll');
		$mR.removeClass("animR").removeClass("showMe");
		$mL.removeClass("animL").removeClass("showMe");
		$('#wrapper').removeClass("lightsDim");
		$("#wrapper").unbind("click", exitModal);
	}
	var imagePath;
	var arrayOfRules;

	function showpanel() {
		$cross.removeClass("hideMe");


		//        $('body:not("modal")')
	}

	function exitOnclickAnywhere() {
		$("#wrapper").dblclick(exitModal);
	}
	$list = $mL.find("ol");

	function fillEverything() {
		var k = 0;
		$('body').addClass('noscroll');
		console.log(++k);
		$(".bgRules").css("background", "url('')");
		console.log(++k);
		$(".bgRulesForModalR").css("background", "url('')");
		console.log(++k);
		$modalListOfRules.empty();
		console.log(++k);
		if (arrayOfRules != null) {
			$list.append("<p>" + description + "</p>" + "<strong style='font-size:20px;font-weight:300;'><br>RULES</strong>");
			console.log(++k);
		} else {
			$list.append("<p>" + description + "</p>");
			console.log(++k);
		}
		$mR.css("background", "none");
		console.log(++k);
		$(".bgRules").css({
			"background": "url('" + imagePath + "') no-repeat"

		});
		console.log(++k);
		$(".bgRulesForModalR").css({
			"background": "url('" + imagePath + "') no-repeat",
			"background-size": "80% 60%"


		});
		console.log(++k);

		if (arrayOfRules != null) {
			for (i = 0; i < arrayOfRules.length;) {
				$list.append("<li style='color:rgba(255,255,255,1);'>" + (i + 1) + ".&nbsp;&nbsp;" + arrayOfRules[i] + "</li>");
				i++;
			}
		}
		$(".nano").nanoScroller();

		setTimeout(showpanel, 1900);
		setTimeout(exitOnclickAnywhere, 2000);

		$mR.addClass("showMe").addClass("animR");
		$mL.addClass("showMe").addClass("animL");
		$('#wrapper').addClass("lightsDim");
	}

	$rc.click(function () {
		eventName = $(this).attr('id');
		switch (eventName) {
		case 'h':
			imagePath = "/page/singularityBan.png";
			arrayOfRules = srules;
			description = s;
			break;
		case 's':
			imagePath = "/page/Hasrateinfull.jpg";
			arrayOfRules = hrules;
			description = h;
			break;



		}
		fillEverything();
	});

	$cross.click(exitModal);







});
