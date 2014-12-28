jQuery(document).ready(function($) {

    $rc = $(".round-thumb");
    $mL = $(".modalL");
    $mR = $(".modalR");
    $rb = $(".rulebook")
    $modalListOfRules = $(".orderedList");
    
    
    var eventName = '';

    var menuIn = false;
    
    var description = ""; // change the event wise description in the switch case at the end not this

    var byb = "<h1>Build Your Brand</h1></br><p>“Creativity involves breaking out of established patterns in order to look at things in a different way.”</br> - Edward de Bono</p><p>Build Your Brand is an initiative to bring out the graphical artist in you. It focuses on your creativity, originality and art work. This is also an event that gives wings to the ideas that participants have in mind for the different sectors in market such as Travel Agency, Automobile industry, Fast food industry, etc. This year, we bring back to you “Build Your Brand”, but with a new twist. We will have two rounds for this event. Apart from this, school students and college students both are allowed either in teams or individual.<b>Round 1:</b> This round is an online round, you can mail your entries to any of the event heads (Details listed in the rules for the event). There will be an online evaluation of the entries by our judges and the final results will be announced on the facebook page along with a mail to selected teams. The entries will be posted on the facebook page and the entry with the maximum likes gets a direct entry in the final round.</br><b>Round 2:</b> This round is the new twist, a new beginning of something extraordinary, and way to help bring about a change. This round will take place in the campus, on 23rd January 2015.</br> So, brush up your skills, bring out the artist in you. Think with all your creativity and create your own BRAND!</br> The online round will start in the first week of January 2015. </br> The last date of submission of online entries is 15th January 2015.</br> So, BUILD YOUR BRAND!</p>";
    var drk = "<p>“Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.”<br/>- Antoine de Saint-Exupe</p> <p>Neither too much salt, nor a pinch less of sugar, Do you think you’ve the perfect recipe for a mindboggling poster with the least possible ingredients? Do you think you can fathom your ideas and express them loudly through a poster ? If yes, then DRISHTIKON is just for you. Mail us your entries and show us that you’ve the talent to express a lot with the least.</p>";
    var ph = "<div><p>\"In photography, there is a reality so subtle that it becomes more real than reality\"~Alfred </p><p>Odyssey '15 presents to you its photography event CAPTCHA, where you can participate and show off your photography skills! </p><h2>Schedule:</h2><li>25th Dec '14- 15th Jan '15->Prelims</li><li>18th Jan- Announcement of the shortlisted participants</li><li>23rd Jan- 10.30am-> reporting time</li><li>11.00-12.00am-> Round-A</li><li>1.00pm-> Announcement of the top 10 finalists and briefing for round-B</li><li>24th Jan->2-4pm exhibition and judgement of the photographs of Round-B </li><h2>Prelims:</h2><p>The Prelims will be held through an online event. The themes for the prelims are as follows:</p><ul><li>Silhouette it</li><li>Through the reflection</li><li>Colour me India</li><li>People who need people</li><li>Stand out of the crowd</li><li>Motion and blur</li><li>Love me \x93mostest\x94</li></ul><p>Themes are open to interpretation, and no clarifications will be entertained regarding the same.<b> Registrations for the preliminary round will take place online, on the Odyssey,IIIT-D website. Any submissions without registration will not be accepted. </b> </p><h2> Rules:</h2><ul><li> Every picture should have a suitable caption pertaining to the theme</li><li> Maximum 3 entries per participant</li><li> Marks will also be awarded for originality and creativity</li><li> Submissions are open till 11.59pm on 15th January 2015</li><li> Participants need to send in their photographs at captcha.odyssey@gmail.com.</li><li> Clearly mention your name & the name of your college/school.</li></ul><p> Selected participants would qualify to the on campus round-A which will be held on 23rd January.</p><h2>Round-A</h2><p>This will be a speed photography round happening in the campus of IIIT-D. The participants will be given a set of hints/questions, the answers to which will be hidden across the festival and the institute. Designated points will be awarded based on each correct answer (clicked photograph) and a time bonus will also be awarded if submitted before time. Top 10 participants with the highest points will move on to the last leg of the competition </p><h2>Round-B</h2> <p>The top 10 finalists will be announced on the same day as Round-A. They will be given three themes, out of which they can choose a theme. The themes will be based on alternate realities. They will have exactly 24 hours to click photos and email them to us (captcha.odyssey@gmail.com).Each participant will send-in two photos. Cumulative scores of both the photos will be added to decide the winners of the round. (if more than two photos are sent, the first two will be counted). The pictures will be printed and an exhibition will be held on campus, on 24th January from 2-4pm. The pictures will be judged on originality, creativity and of course, the photograph itself. </p><h2>General Guidelines:</h2><ul><li> Camera resolution should be at least 5 mega pixels.(DSLRs will have a lens limit of 15-55mm lens for the prelims)</li><li>Basic editing (Lighting fixes, changes to hue/saturation) is allowed.</li><li>Morphing, stitching pictures or using multiple pictures to create one image in any way is not allowed.</li><li> Photographs must not have any watermark or text on them. </li><li> Submission limit - 3 pictures per participant(prelims) and round-B: 2 pictures</li><li> Decision of judges is final and binding.</li><li> The competition is open for all students with a valid ID card of their school/college/university but IIIT-D will not bear the cost of travel and/or accommodation.</li><li> Contestants selected in the prelims will have to confirm their participation in the finals.</li><li> Plagiarism is strictly prohibited and any such entries will disqualify the participant </li></ul><p>For more information, email us at captcha.odyssey@gmail.com or contact us </p><li>Vahini- 8800914949</li><li> Agam Singh Bajaj- 9711155430</li><li> Siddhant Verma- 9711013103</li>";
    var ve = "<p>The event is about blending your thoughts, ideas, creativity and into the form of an impressive video. And it is not as simple as clicking and dragging templates.</p>"
    
    var verules = ["1.The event would take place in two rounds : preliminary and final round.",
"A team of up to 4 are allowed to participate as a team. Lonewolves are also allowed.","Every team needs to submit one video for preliminary round and if they qualify then another video for the final round.",
"The preliminary round will be online. Final round will be on the campus of IIIT Delhi. The teams selected for final round need to submit their videos on the day of final round. There would be a screening of all the videos and judging on that day.",
"The video entry for the preliminary round needs to be a video uploaded to YouTube. Only a link to the video will be required to be submitted for participation.",
"For the preliminary round there’s no restriction on the choice of topic. However, for the final round, teams will be given a topic beforehand.",
"The maximum length of video is 5 minutes for each round",
"Only one entry per team is allowed. Multiple entries would lead to disqualification.",
"Be sure that any music, animation or any other media in your video is original. All entries would be tested for plagiarism. Any plagiarised content would lead to disqualification."]

    var bybrules = ["You can participate as individual or team, but the limit of team members is four.",
"You can use any form of digital designing.",
"Submissions should be done by the given deadlines, no entries will be entertained after the deadline.",
"Themes:<br/><b>(i) Automobile Industry</b></br><b>(ii) Fast Food Industry</b></br><b>(iii) Travel Agency</b></br><b>(iv) Online Shopping</b></br><b>(v) Cosmetic Industry</b>",
"The first round submission should be mailed to either<br> amya13012@iiitd.ac.in or <br> atulya13026@iiitd.ac.in within the given deadline. The submission should contain a jpeg/jpg/png format file of your logo and a pdf file stating the name of the brand and listing down all the participants in the team along with their details (Name, Contact Number, Email ID, University/College/School) and explaining their logo or brand in less than 150 words. This submission should be done by the leader of the team (In case of team entry, the team member 1 while registering is considered the leader of the team) or the individual participant (In case of single member entry). Multiple teams from the same college or school are allowed.",
"The deadline for online submission is 15th January 2015, 11:59 pm.",
"Selected participants should be present in the campus on the 23rd of January 2015, the further details will be mailed.",
"The work of the participant or the participating team should be original and not copied from any source.",
"You should be ready for a 2-5 minutes presentation of your work in front of the judges, and the question-answer round by the judges and the audience.",
"The organisers have the right to disqualify any team that violates the rules and regulations."]

var dkrules = ["No copyrighted, animated, or team-created work will be accepted. Entries",
"All decisions made by sponsor and judges are final and may not be disputed in all levels of the competition",
"Artists retain ownership of their work, but IIIT Delhi reserves the right to display the artist's work on our website, blog, social media feeds, and related promotional materials.",
"All entries to be mailed to: protichi13075@iiitd.ac.in and chanchal13030@iiitd.ac.in",
"Keep the subject of the mail as : <ODYSSEY15 DRISHTIKON>",
"Mention the following details in your mail:<br/>NAME<br/>COLLEGE<br/>CONTACT NUMBER<br/> EMAIL ID<br/>CONTESTANT ID(to be provided by us after you fill in the registration form: <link>)<br/>",
"<h2>Round I (Online round)</h2>",
"Entries to be mailed to the mentioned ids by <expected deadline>",
"This event would be judged based on the number of likes received on Facebook ",
"5 participants wouldl qualify as Judges’ Favourites(irrespective of number of Facebook likes)",
"Further Rounds to be declared within a week after the first round goes online.",
"Entries must be submitted in a 3-4 aspect ratio (width x height). They should be, at a minimum, 600 pixels by 800 pixels.",
"<h2>Round II (On - Campus Round)</h2>",
"<h3>2 parts<h3>",
"Draw a minimalist poster on the given topic and submit within the deadline.",
"After the submissions are done, participants are required to mark the work of their fellow contestants on a range from 1-10.",
"Scores shall be calculated based on the marks awarded by participants and the judges."]
    var prules = [
    "Only college students are allowed.",
"Last date of online registration is 15th January 2015. On the spot registrations will also be open but priority will be given to online registrations.",
"Incorporating the theme of the fest - ‘Alternate Reality’ will fetch the participant bonus marks.",
"Any props/costumes if to be used should be arranged by the participants. Use of fire or any other inflammable object is restricted and accounts for negative marking.",
"Qualified participants have to ensure that one copy of their edited song is with the event head and one copy they should carry with them. Song should be in .mp3 format. Also, it is the contestant’s duty to be careful and aware of the order of performance and should be present 15 mins before the allotted time.",
"All the participants are required to carry their identity cards to the campus on the day of the event.",
"The organizing committee reserves the right to change the venue, time and rules, if required.",
"The decision of the judges will be final and binding."]

    var ve = [
    "There is no restriction on the theme. It’s an Open theme Group Dance Competition.",
    "Maximum 2 teams per college allowed.",
    "Cross-college teams are not allowed.",
    "Only college students are allowed to participate.",
    "Teams have to submit a 3-5 minute video of their performance for prelims.",
"Incase of multiple video submissions,only the first one will be considered for evaluation.",
"No late entries shall be tolerated.",
"On clearing the preliminary round, further details will be provided to the selected teams about the finals via mail/phone.",
"Decision of the judges and the Organising Committee will be final and binding.",
"No responsibility will be held by Odyssey’15, IIITD for any late or lost entries or any such events.",
"Time limit per team : 4-6 minutes. (+1 for setting up and clearance). Teams will be penalized in case the time limit is exceeded.",
"Team size should not be more than 20. However there must be at least 4 members on stage at any point during the performance.",
"It is mandatory for all the team members to carry their college ID cards to the final event.",
"Usage of props is allowed and should be consulted with any of the event heads in advance. PS it does not carry extra credit.",
"Use of fire or any other inflammable object is restricted and accounts for negative marking.",
"No lead dancer or solo performance is allowed at any point of time during the performance.",
"The selected teams must send their final song track 2 days before the final event and also bring the same in a pendrive/CD on the day of the final event.",
"The selected teams must report at the registration desk two hours before the event.",
"Decision of the judges and the Organising Committee will be final and binding.The college reserves the right, in its sole discretion, to disqualify any entry at any time in the event if it is determined that the entrant has not complied with these rules or has acted in an unsportsmanlike or disruptive manner.",
"The prizes are subject to change on the basis of quality of participation.",
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
            if (arrayOfRules != null) {
                $list.append("<p>" + description + "</p>" + "<strong style='font-size:20px;font-weight:300;'><br>RULES</strong>");console.log(++k);
             } else {
                $list.append("<p>" + description + "</p>");console.log(++k); }
            $mR.css("background", "none");console.log(++k);
            $(".bgRules").css({
            "background": "url('" + imagePath + "') no-repeat"

            });console.log(++k);
            $(".bgRulesForModalR").css({
            "background": "url('" + imagePath + "') no-repeat",
            "background-size": "80% 60%"


            });console.log(++k);
           
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
    
    $rc.click(function() {
        eventName = $(this).attr('id');
        switch (eventName) { 
            case 'byb': 
                imagePath = "https://drive.google.com/a/iiitd.ac.in/uc?export=view&id=0BxM10NrmUxTdWDhQQkRoTGdSMWc";
                arrayOfRules = bybrules;
                description = byb;
                break;

            case 'drk': 
                imagePath = "https://drive.google.com/a/iiitd.ac.in/uc?export=view&id=0BxM10NrmUxTdUnQ5MFhOa1c1LTg";
                arrayOfRules = dkrules;
                description =  drk;
                break;

            case 'ph':
                imagePath = "https://drive.google.com/a/iiitd.ac.in/uc?export=view&id=0BxM10NrmUxTdRlN6dG1jSS1IaG8";
                arrayOfRules = null;
                description =  ph;
                break;
            case 've':
                imagePath = "/https://drive.google.com/a/iiitd.ac.in/uc?export=view&id=0BxM10NrmUxTdU3FNS3Zyd3NhOVU";
                arrayOfRules = verules;
                description =  ve;
                break;


        }
        fillEverything();
    });

    $cross.click(exitModal);



    
    


});