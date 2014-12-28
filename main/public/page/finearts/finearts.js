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
        "artival": {
            "eventName": "Artival- Carnival of Art",
            "eventShortDescription": ["The two day art marathon.",
           "Sub Events:",
           "<a href='https://www.facebook.com/events/755963587817648/' id='sub11'>1. Arty Graffiti</a>",
           "<a href='https://www.facebook.com/events/651609038291557/?context=create&previousaction=create&source=49&sid_create=2577524534' id='sub12'>2. MASK-ermind</a>",
           "<a href='#' id='sub13'>3. OEKAKI - The Sketching Contest</a>",
           "<a href='https://www.facebook.com/events/723983697671160/' id='sub14'>4. Cartoonista- Cartoon Strip</a>",
           "<a href='#' id='sub15'>5. Paper-o-Mosaic</a>",
           "<br>(All the above are individual events. Prizes will be awarded to the top three teams in each of the above. Participants can choose to participate in them separately or take part in artival)"],
            "rules": [
"Maximum team size allowed: 4",
"Only 2 team members are allowed to participate in any sub event and earn points for the team.",
"Rest of the team members may participate in the said event but won’t be representing their team and hence will not be eligible for any points.",
"Each team needs to take part in minimum 3 events to qualify for Artival",
"If you register for Artival via the registration tab, you need not register for the sub-events again.",
"Teams earn following points for each sub-event as follows:",
 ["1st position: 100 points",
"2nd position: 80 points",
"3rd position: 60 points",
"4th position: 40 points",
"5th position: 25 points",
"Participating: 10 points",
"Not Participating: 0 point"],
"Top 2 teams will be the art category winners!!<br>",
"<span style='text-decoration: underline; color:red;font-size:20px;'>Arty Graffiti:-</span>",
                [
                    "People say graffiti is ugly, irresponsible and childish...but that’s only if it’s done properly.”-Bansky. Did you ever fancy the spray paintings on wall shown in movies ? Ever had the dream of painting your imagination and thoughts on the wall ? Well then this is a golden chance to turn the wall into your canvas. Graffiti is itself an alternate reality, a utopia.There are no hard and fast rules for the graffiti art so get street smart and come out with your funky side. Just let your imagination run wild and let the things flow...",
                    "<strong>More Rules :</strong>",
                    "The theme is “Alternate Reality”. Every team needs to incorporate this theme and explain the drawing in round 1 to the judges. Based on the idea and theme portrayed in the drawing, judges will decide who will go into the next round.",
                    "The event consists of 2 rounds:<br>", "Max Team size 4 (min size 2)", "Age Limit: 18-25 yrs",
                    "Round 1 (Duration 20 minutes):", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Every group will be given a chart paper for drawing the idea for the graffiti.", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Based on the drawing the judges will decide the teams for the next round", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- The top 10 teams will go into the next round.",
                    "Round 2 (Duration 90 minutes):<br>", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- In this round the top 10 teams will compete against each other to be the final winner.", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- The teams will be provided with an equal area and spray paints.",
                    "A team should consist of 2-4 people.",
                    "The participants should be between 18-25 yrs.",
                    "10 teams shall be selected for the second round i.e final round.<br>"
                ],
                "<span style='text-decoration: underline; color:red;font-size:20px;'>MASK-ermind</span><p><br>Remember the iconic mask of Darth Vadar ?Charmed to death by V ? They say give a man a mask,and he’ll show you his true self. Well, Odyssey’s tagline ‘Reality is an illusion’ cannot be anymore suited for this! We hereby present to you our mask making event - MASK-ermind! Get those creative juices flowing and prove the artistic flair in you, by unveiling the disparity between the mask,and what it is obscuring beneath. Because ofcourse, there’s always more to that encounter than meets the eye ;) </p>", ["Everything has to be made on the spot-no prior preparations allowed.", " Use of cellphones or other such reference material is strictly prohibited.", "Any medium of colour can be used. ", " A3 size chart paper and extra chart paper ,glue will be provided.", "Other required stationery has to be brought by the participants. It will not be provided.", "Podium Finish- 1st , 2nd and 3rd. <br><br>"],

                "<span style='text-decoration:underline; color:red;font-size:20px;'>Cartoonista : escape into your own reality!</span>",
            [
                "A chance to show the cartoonist in you. Remember the back of your notebooks.. All those random scribbles.. Your dream guy/girl character.. Now it’s your chance to showcase your creation to the world. Participate in cartoonista and win exciting prizes.",
                "<strong>More Rules :</strong>",
                "No internet access allowed.",
                "Round 1 themes will be declared on our fb page 2-3 days before the     fest",
                "Themes for round 2 will be given on the spot.",
                "Participants will have to get their own stationary. Only sheets will be provided",
                "Only original work will be accepted.",
                "Decision of judges and event head will be final and binding."

            ],
                     "<span style='text-decoration:underline; color:red;font-size:20px;'>Paper-o-Mosaic</span>",
            [
                "In a way we all are a small fragment of a bigger picture that is life just like a mosaic. The takeaway is not to look too closely. If you want to have some fun with paper and play with the magic of perspective, then mosaic art is for you. ",
                "<strong>More Rules :</strong>",
                "A team should be of 1-2 people.",
                "The participants will only be given old newspapers and chart paper",
                "Materials like glue stick, coloured paper, scissors etc have to be bought by the participants.",
                "The theme for the event will be declared on spot",
                "The use of internet is strictly prohibited.",
                "Any indiscretion will lead to disqualification"

            ],
                "<span style='text-decoration:underline; color:red;font-size:20px;'>OEKAKI - The Sketching Contest</span>",
            [
                "SET FREE THE GREAT CREATOR INSIDE YOU, UNLEASH YOURSELF ON TO THE CANVAS, AND RENDER THAT CANNOT BE EXPRESSED IN WORDS. THEY SAY A PICTURE PAINTS A THOUSAND WORDS; WE ARE ALL SET TO WRITE AN EPIC STORY! IF YOU CAN ACCURATELY PORTRAY WHAT HAS BEEN GIVEN TO YOU,THEN HERE’S THE CHANCE TO EXHIBIT YOUR SKILLS AND WOW US ALL !",
                "<strong>More Rules :</strong>",
                "A team should be of 1-2 people.",
                "No prior sketches can be used.",
                "Any medium of colour can be used.",
                "A3 size chart paper and extra chart paper (for embossing) will be provided.",
                "Other required stationery has to be brought by the participants. It will not be provided.",
                "The use of internet is strictly prohibited.",
                "Podium Finish- 1st , 2nd and 3rd."

            ]
],
            "facebookLink": "your facebook link without any space",
            "eventHeads" :["Nikita Singh (Mask Making) : 9654448350","Masroor Ahmad (Graffiti) : 9650073818","Aarushi (Cartoon Strip) : 9711187857"]
        },

        "paintOdyssey": {
            "eventName": "Paint Odyssey",
            "eventShortDescription": "In this event, the participants will be required to paint a live scene at Odyssey. Competition will be held on both the days, Participants can participate on either days according to their convenience.",
            "rules": [
"Participant must register for the event.",
"One odyssey volunteer will be there with you during the event for your help.",
"It’s an individual event",
"Sheets will be provided by the odyssey team. But if you have additional requirements, please bring it yourself.",
"Prizes will be awarded to the top 2.",
"Results will be out on the final day.",
"Participants can participate on either days but only once."
],
            "facebookLink": "your facebook link without any space",
            "eventHeads" :["Jyotsana : 9716521106","Mehak : 9818727400"]
        },

        "biChromaticPainting": {
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
            "eventHeads" :["Shambhavi Singh : 8010159531"]
        },
        "imaginacia": {
            "eventName": "Imaginacia",
            "eventShortDescription": "<br>'The world of reality has its limits; the world of imagination is boundless'<br><br>Do you like to put down your thoughts beautifully on the canvas? If yes, its time to wake up the painter inside you and paint the town red. Odyssey’15 presents to you an event - Imaginacia - which lets you bring out the best of your imagination. You will be rendezvoused with a classic painting event that lets you showcase your talent and paint your hearts out. Wear your painting gloves, stuff some brushes and head towards IIITD for an imaginative outburst of colors.",
            "rules": [
"2 members per team. Lone wolves are also allowed.",
"Cross college teams allowed",
"Themes would be announced on the spot",
"Teams to bring in materials they require for painting (poster colors, charcoal, oil paints ,etc)",
"Participants would be required to create a piece of art in a timespan of 2 hours.",
"Any technique of painting can be used",
"Organizers reserves the right to change the venue, time and rules, if required.",
"Judges decision would be considered final"
],
            "facebookLink": "your facebook link without any space",
            "eventHeads" :["Rachna : 8010173355"]
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
        case 'artival':
            imagePath = "https://drive.google.com/uc?export=view&id=0BxM10NrmUxTdcThDcE1jWlktZDQ";
            desc = rulebook.artival.eventShortDescription;
            arrayOfRules = rulebook.artival.rules;
            eventHead = rulebook.artival.eventHeads;
            break;
        case 'paintOdyssey':
            imagePath = "https://drive.google.com/uc?export=view&id=0BxM10NrmUxTdeTZVelJjWldfRWM";
            desc = rulebook.paintOdyssey.eventShortDescription;
            arrayOfRules = rulebook.paintOdyssey.rules;
                eventHead = rulebook.paintOdyssey.eventHeads;
            break;
        case 'biChromaticPainting':
            imagePath = "https://drive.google.com/uc?export=view&id=0BxM10NrmUxTdeTZVelJjWldfRWM";
            desc = rulebook.biChromaticPainting.eventShortDescription;
            arrayOfRules = rulebook.biChromaticPainting.rules;
                eventHead = rulebook.biChromaticPainting.eventHeads;
            break;
        case 'imaginacia':
            imagePath = "https://drive.google.com/uc?export=view&id=0BxM10NrmUxTdUmN5OHpCUHhTNTQ";
            desc = rulebook.imaginacia.eventShortDescription;
            arrayOfRules = rulebook.imaginacia.rules;
                eventHead = rulebook.imaginacia.eventHeads;
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