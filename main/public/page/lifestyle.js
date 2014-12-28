jQuery(document).ready(function($) {

    $rc = $(".round-thumb");
    $mL = $(".modalL");
    $mR = $(".modalR");
    $modalListOfRules = $(".orderedList");
    
    
    var eventName = 'verve';

    var menuIn = false;
    
    var description = ""; // change the event wise description in the switch case at the end not this

    var btd = "<h1>Reverbe: The Fashion Parade</h1>“Fashion is about dressing according to what's fashionable. Style is more about being yourself. “ -Oscar de la Renta <p>A shout-out to all the designers, models and all you beautiful people out there! Pull up your socks ‘cuz Odyssey 2015 brings to you the most exciting and glamorous event of the year, Reverbe. The New York Times had very aptly quoted, “The sun never sets on the runway”. The most happening Fashion Parade of the year awaits you. If fashion is your thing, then this is the ‘IT’ place to be. We’re rolling out the red carpet for all you talented designers and super-glam models. So stop thinking and hurry up. Register now!</p>";

	var verve = "<h1>Mr. and Ms. Odyssey</h1><p>Dainty shoes and that glorious crown; classy tuxedo, shimmering gown.Ever dreamt of being the king of an event and having the spotlight on you ? Here is your chance to live your reverie, to go down in history as Mr or Ms Odyssey. So this is the time to reveal yourself to the world! Time to carry your own true 'creative' self in your oh-so-amazing attire through this glamorous journey! For any query, contact: Pavani Tripathi: pavani13147@iiitd.ac.in Saloni Kogta: saloni13155@iiitd.ac.in Nalin Gupta: nalin14065@iiitd.ac.in</p>";

    var vrules = [
   "The competition is open to all school students who are presently studying in 11th or 12th class, or to all college/university students who are either still pursuing their degree or who passed out not before 12 months at the time of registration.",

"IIIT-Delhi will not bear the cost of travel and/or accommodation.",

"Photographs must not have any watermark or text on them. It should have the candidate alone. Editing of any sort is not permitted.",

"Submission limit - 1 picture per participant.",

"Participants are expected to check their email IDs to stay updated. They are also advised to check the official Facebook page for changes in rules/regulations, and announcement of results on 21st January 2014 (by 12:00 a.m.).",

		"Contestants selected in the prelims will have to confirm their participation for the next stage within a stipulated period of time.",

"It will be the responsibility of the participant to arrange and maintain the instruments if he/she requires any for the stage performance",
"The judges' decision in relation to any aspect of the competition is final and binding.",
	]

    var rulesID523 = [
  "For the prelims, you are required to submit any two of your best designs. A panel of judges will decide the finalists based on the innovation, creativity, originality of your design.",

"For the finals, each team is free to choose their own theme and showcase a set of garments. It can range from something like a “Winter Wonderland” to as wacky as showcasing the “Gothic culture”. Our panel of judges and organisers will judge you on the basis of your innovation, creativity, originality, poise and confidence.",
		

 "For the finals, the designer must submit the music and an AV (if there is one) till 20th January. (Considering the event might be on the 24th.)",

"The Designers 'must' bring their own models. (A minimum of 3 and maximum of 10)",

"Every team will be provided with a total of 15 minutes to make the required set ups and showcase their designs. From the time your team’s name is announced to the time you finally exit.",

"The designs must be original. The designers are free to use any material of their choice. There are NO restrictions as such.",

"The team allowed should consist of a. Minimum 1 designer Maximum 2 designer b. Minimum 5 models Maximum 10 models c. Minimum 2 crew members Maximum 4 crew members who take care of the designing, ",
		

 "Teams must be well versed with their light requirements so as to be able to utilise their transition time period optimally.",

 "Vulgarity is strongly prohibited. Any form of obscenity will lead to debarring the team from the competition.",

 "Use of cigarettes, alcohol, and any unfair means is strongly prohibited.",

 "Teams will be judged on the basis of the costumes, theme, walking stance, and attitude.",

 "Decision of the judges will be final and binding.",

 "IIIT-Delhi or the organisers will not be responsible for any damage or loss of property. ",

 "The prize money is subject to change keeping in mind the quality of participation.",

 "See that your garments and accessories are in the correct order. Organize your accessories.",
" Be considerate of others. Remain as quiet as possible backstage. Do not gossip or discuss the show or circumstances that arise during the show. Discuss the experiences of the show afterward.",
    ];
    


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
var imagePath ;
    var arrayOfRules ;

    function showpanel() {
        $cross.removeClass("hideMe");
        
        //        $('body:not("modal")')
    }

    function exitOnclickAnywhere() {
        $("#wrapper").dblclick(exitModal);
    }
    $list = $mL.find("ol");
    
         function fillEverything(){
             var k =0;
            $('body').addClass('noscroll');
             console.log(++k);
            $(".bgRules").css("background","url('')");console.log(++k);
            $(".bgRulesForModalR").css("background","url('')");console.log(++k);
            $modalListOfRules.empty();console.log(++k);
            $list.append("<p>" + description + "</p>" + "<strong style='font-size:20px;font-weight:300;'><br>RULES</strong>");console.log(++k);
            $mR.css("background", "none");console.log(++k);
            $(".bgRules").css({
            "background": "url('" + imagePath + "') no-repeat"

            });console.log(++k);
            $(".bgRulesForModalR").css({
            "background": "url('" + imagePath + "') no-repeat",
            "background-size": "80% 60%"


            });console.log(++k);
           

            for (i = 0; i < arrayOfRules.length;) {
                $list.append("<li style='color:rgba(255,255,255,1);'>" + (i + 1) + ".&nbsp;&nbsp;" + arrayOfRules[i] + "</li>");
                i++;
            }
            $(".nano").nanoScroller();
            
             setTimeout(showpanel, 1900);
        setTimeout(exitOnclickAnywhere, 2000);
        
        $mR.addClass("showMe").addClass("animR");
        $mL.addClass("showMe").addClass("animL");
        $('#wrapper').addClass("lightsDim");
        }
    
    $rc.click(function() {
        eventName = $(this).attr('id');
        switch (eventName) { 
            case 'verve': 
                imagePath = "https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-xpa1/t31.0-8/10661720_975838262432050_8616186523249721988_o.jpg";
                arrayOfRules = vrules;
                description = verve;
                break;

            case 'battletroupe': 
                imagePath = "https://scontent-b-sin.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/1508623_600690736652512_1911486469_n.jpg?oh=a30215bd40ffd1ae0101ecaa69aea3c3&oe=5538209B";
                arrayOfRules = rulesID523;
                description =  btd;
                break;

        }
        fillEverything();
    });

    $cross.click(exitModal);



    
    


});