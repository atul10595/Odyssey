jQuery(document).ready(function ($) {

    $rc = $(".round-thumb");
    $mL = $(".modalL");
    $mR = $(".modalR");
    $modalListOfRules = $(".orderedList");
    var j;

    var eventName = 'verve';

    var menuIn = false;
    var desc,eventHead;


    var rulebook = {
        "aH": {
"eventName": "Acoustic Hymns",
"eventShortDescription": "If jamming away your blues or singing to celebrate is your thing, then no look further! We present to you Acoustic hymns, the acoustic music event of Odyssey’15 wherein you can turn on the Mozart in you and compose music that touches the soul. Compete in this heated acoustic performance rivalry and win the crowd over!<br>This time the strings are attached!",
"rules": [
"Team Composition: minimum-3 and maximum-8",
"Teams per College: Unlimited",
"Registration: Online, Pre-Registration must",
"Pre Final Round: Each team has to upload a video (not more than 7-8 minutes) performing any song of their choice",
"Final Round: Top teams will qualify based on their performance in pre final round",
"Final Round Duration: 10 minutes per team [includes setup time / sound check] : ",
"The participants have to perform acoustic renditions of Hindi or English songs of any genre or their original compositions. At-least one performance with innovation is highly expected.",
"There is no constraint on the Theme. The event is open for both Western and Indian compositions.",
" A minimum of one vocalist is compulsory.",
"No constraint on number of songs to be performed. The only constraint is the Time Limit.",
"There should be a minimum of three performing members on the stage at any particular point of time.",
" Beat boxing, clapping and other physical sound effects in the performances are allowed.",
" Every extra minute taken beyond specified time limit will lead to reduction in the total marks scored.",
"Only acoustic instruments are allowed. ( No Drums, Electric Guitar )",
" Availability of the following instruments (if required) is assured:An Electric Bass + Amp, Keyboard, Microphone/ Mics, A Sound System and Mixer",
"Usage of keyboard only in piano tone is allowed. No other electronic instruments are allowed.",
"Judging criteria:Musical ability, originality and stage presence",
"Judges’ decision is final and binding."
],
"facebookLink": " ",
            "eventHeads": ["Ankush Jolly : 9873289569", "Sankalp Mehar : 9582810052", "Siddhant Verma : 7838138148"]
},

        "bob": {
            "eventName": "Battle Of Bands",
            "eventShortDescription": "<h1>Rules will be here soon !</h1>",
            "rules": [],
            "facebookLink": "your facebook link without any space",
            "eventHeads" :["Kushagra singh : 8130962007","Gurshabad Grover : +919873686518", "Puneet Jain : 9717037957"]
        },

        "uml": {
            "eventName": "Two Tones",
            "eventShortDescription": "Draw a bi-chromatic painting i.e. by using only two colours of your choice on the given theme",
            "rules": [
        "This event is open to both school and college students",
        "Team size of maximum 2 is allowed.",
        "Participants will be allowed to use only two colours which they have to specify at the start of the competition.Theme will be given on the spot",
        "Participants will be provided with A4 size sheet for the first round and A3 sheets for the second round .",
        "5: In the first round participants have to draw a part of the painting they want to draw in the final round .",
        "Teams selected in the first round will take part in the second round. ",
        "All the paintings of the second round will be judged at the end of the second day .",
        "Decision of judges will be final"
      ],
            "facebookLink": "your facebook link without any space",
            "eventHeads" :["Kunal Sharma : 9711442853", "Divay Prakash : 9650016622", "Pulkit : 7838613665"]
        },
        
        "encore": {
"eventName": "Encore",
"eventShortDescription": ["‘Without music, life would be an error.’","<br>Do you have a penchant for singing or an instrument and think you are skilled enough to beat the best? Is music an escape from the reality you live in? Then Encore, Odyssey’15 is the platform you’ve been looking for! Compete with the best singers / instrumentalists and show your talent to the world. Exciting prizes up for grabs!"],
"rules": [
"All those in the age group 17-25 years are eligible.",
"Vocals will be held on the first day and Instrumentals on the second day of the fest",
"The event is an offline event. However, there will be 3 wild card entries from online submissions both for vocals and instrumentals. Wild card entries directly enter the finals. Others have to qualify the offline prelims in campus.",
"1 wild card entry each for vocals and instrumentals will be of the maximum number of likes when we upload your video on our facebook page.",
"The chosen song can be of any western genre.",
"Online submissions can be done by adding your video link in the online registration form. Registrations are bound to close depending on the number of entries with time.",
"Time limit for online submissions is 2.5 minutes.",
"You can participate in the offline prelims too, if you don’t qualify in the online wild card round.",
"To participate in the offline prelims, you need to register online. Although we will allow on spot registrations, preference will be given to online registered candidates in case of high participation.",
" For vocals, you are allowed to accompany two instrumentalists at most, or play yourself. No instruments will be provided on site. You will have to bring your own. Mikes and amplifier will be provided.",
"Time limit for offline prelims in vocals is 3.5 minutes and in instrumentals is 5 minutes including the instruments setup and sound check.",
"The prelims will be immediately followed by the finale on the same day.",
"Around 10 candidates in total will be selected for the finals in both vocals and intrumentals.",
"Time limit for finals is 6 minutes for vocals and 8 minutes for instrumentals, including the instruments setup and sound check.",
"If the participant chooses to sing an original composition, he/she should provide lyrics of the song to the judges.",
],
"facebookLink": "",
    "eventHeads" : ["Apurba Mondal : 8826358908", "Arushi Jain : 9650732552", "Pulkit Kumar Gupta : 9818753076"]
},
        "swa":{
"eventName": "Swaraanchal: Solo Indian music ",
"eventShortDescription": "For all those musical enthusiasts who love Indian music it’s an event where they can bring out the soulful music within and create a melodious atmosphere with their performance. You just don’t have to sing or play, you have to feel it and make others not just only love it but also live it.",
"rules": [
"You should be a college student.",
"There will be two separate categories for vocal and instrumental rounds. Each participant is allowed to participate in both.",
"Only one entry in each category will be accepted. ",
"Participants can perform on any Hindi classical or Bollywood composition.",
"Vocals will be held on the first day and Instrumentals on the second day of the fest. The prelims will be immediately followed by the further rounds on the same day.",
"Round 1(Prelims): You can either opt for online or on-campus prelim rounds. Fill your choice carefully in registration form.People opting for online prelims will get preference.",
"Online Prelims: Participants are required to sing/play any 1 song of their choice for 2 minutes .Only video clips allowed for instrumental round. But for vocal both audio and video clips are allowed.No audio editing is allowed. Doing so will lead to straight disqualification.Karaoke tracks and accompaniments(not more than 2) are allowed.",
"Offline Prelims: Participants are required to sing/play any 1 song of their choice for 1.5 minutes.Karaoke needs to be sent to us beforehand.Accompaniments are allowed but not more than 2.",
"Only one entry in each category (singing/Instrumental) should be submitted. Multiple entries will lead to disqualification.",
"Note: One can only apply for either online or offline prelims. Applying for both will lead to disqualification. ",
"Round 2(On-Campus Knockouts) for Instrumental only: 10 participants will be shortlisted(9+1(Wildcard entry)). Only 2 accompaniments are allowed . Participants will play any composition in jugalbandi round (pair of 2) for 5 minutes. Participants need to bring their instruments along. Please ensure that your instruments are well tuned before your performance. No time will be given for tuning.",
"Round 3(Finals) for Vocal: 10 participants will be shortlisted (9+1(Wildcard entry)).Only 2 accompaniments are allowed with the participant. If no accompaniments ,karaoke tracks are allowed. Tracks need to be submitted beforehand. Each participant has to sing two songs in 4 minutes. One song for 2 minutes from a list of songs that will be posted on website and one song of their choice for next 2 minutes.",
"Round 3(Finals) for Instrumental:No. of participants shortlisted will be 5. Participants have to play on any composition of their choice in 4 minutes.",
" Wildcard Round: Apart from all this procedure there also a wildcard entry to final round on the basis of maximum facebook likes. The video or their link need to be sent to us on “swaraanchal@gmail.com” with subject “WILDCARD”. ",
"Karaoke tracks should be sent to us on “swaraanchal@gmail.com” with subject “PRELIM KARAOKE” for prelim's karaoke and “FINALE KARAOKE” for finale's karaoke.",
" Background tracks and accompaniments are allowed. Make sure that it is your talent that shows not of your mates.",
"Last date of registration: Registrations are bound to close depending on the number of entries with time.",
"Link to registration form : https://docs.google.com/forms/d/1L5IoKlTgNpuDc7k_jcVJo2faeEdpEeKBFaPpX736_j8/viewform?usp=send_form",
"The organisers have the right to disqualify any participant that violates the rules and regulations."
],
"facebookLink": "https://www.facebook.com/events/584442228324400/",
            "eventHeads":["Nikhil singhal : 8527470596", "Devyani Rohilla : 8587094431", "Harsh Vardhan Jaiswal	: +91-9953630355"]
}


    };



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
        //console.log(++k);
        $(".bgRules").css("background", "url('')");
        //console.log(++k);
        $(".bgRulesForModalR").css("background", "url('')");
        //console.log(++k);
        $modalListOfRules.empty();
        //console.log(++k);
        $list.append("<strong style='font-size:20px;font-weight:300;'><br>RULES</strong>");
        //console.log(++k);
        $mR.css("background", "none");
        //console.log(++k);
        $(".bgRules").css({
            "background": "url('" + imagePath + "') no-repeat"

        });
        //console.log(++k);
        $(".bgRulesForModalR").css({
            "background": "url('" + imagePath + "') no-repeat",
            "background-size": "80% 60%"


        });
        //console.log(++k);

        if (desc.constructor === Array) {
            for (j = desc.length - 1; j > 0;) {
                $list.prepend("<li style='color:rgba(255,255,255,1);'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8227;" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + desc[j] + "</li>");
                j--;
            }
            //                    $list.append("<li style='color:rgba(255,255,255,1);'>" + (i + 1) + ".&nbsp;&nbsp;" + arrayOfRules[i][1] + "</li>");
            $list.prepend("<p>" + desc[0] + "</p><br>");

        } else
            $list.prepend("<p style='text-align:left;'>" + desc + "</p><br><br>");

        for (i = 0; i < arrayOfRules.length;) {

            if (arrayOfRules[i].constructor === Array) {

                for (j = 0; j < arrayOfRules[i].length;) {
                    $list.append("<li style='color:rgba(255,255,255,1);'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8227;" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + arrayOfRules[i][j] + "</li>");
                    j++;
                }
                //                    $list.append("<li style='color:rgba(255,255,255,1);'>" + (i + 1) + ".&nbsp;&nbsp;" + arrayOfRules[i][1] + "</li>");
            } else
                $list.append("<li style='color:rgba(255,255,255,1);'>" + (i + 1) + ".&nbsp;&nbsp;" + arrayOfRules[i] + "</li>");
            i++;
            //                }
        }
          $list.append("<br>-----------------------CONTACT-----------------------<br>  ");
        for(i=0;i<eventHead.length && eventHead != 'undefined' ;++i)
        {
            $list.append("<br>"+(eventHead[i]));
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
        case 'bob':
            imagePath = "/page/music/bobBan.png";
            desc = rulebook.bob.eventShortDescription;
            arrayOfRules = rulebook.bob.rules;
            eventHead = rulebook.bob.eventHeads;
            break;
        case 'encore':
            imagePath = "/page/music/encoreBan.png";
            desc = rulebook.encore.eventShortDescription;
            arrayOfRules = rulebook.encore.rules;
                eventHead = rulebook.encore.eventHeads;
            break;
        case 'aH':
            imagePath = "/page/music/ahBan.png";
            desc = rulebook.aH.eventShortDescription;
            arrayOfRules = rulebook.aH.rules;
                eventHead = rulebook.aH.eventHeads;
            break;
        case 'uml':
            imagePath = "/page/music/umlBan.png";
            desc = rulebook.uml.eventShortDescription;
            arrayOfRules = rulebook.uml.rules;
                eventHead = rulebook.uml.eventHeads;
            break;
        case 'swa':
            imagePath = "/page/music/swaraanchalBan.png";
            desc = rulebook.swa.eventShortDescription;
            arrayOfRules = rulebook.swa.rules;
                eventHead = rulebook.swa.eventHeads;
            break;

        }
        fillEverything();
    });

    $cross.click(exitModal);







});

/*


"1.Arty Graffiti",
           "2.MASK-ermind",
           "3.OEKAKI - The Sketching Contest",
           "4.Cartoonista- Cartoon Strip",
           "5.Paper-o-Mosaic",
*/