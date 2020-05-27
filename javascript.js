/*JS FILE FOR CLIENT SIDE SCRIPTING PROJECT*/

const backToTopButton = document.querySelector("#back-to-top-btn");

let ScoresArray = [];
ScoresArray[0] = 0;
ScoresArray[1] = 0;
ScoresArray[2] = 0;
ScoresArray[3] = 0;
ScoresArray[4] = 0;
ScoresArray[5] = 0;
ScoresArray[6] = 0;
ScoresArray[7] = 0;
ScoresArray[8] = 0;
ScoresArray[9] = 0;
ScoresArray[10] = 0;

//timeout for 10 minutes
window.onload = function () {
    this.pageTimer();
};

function pageTimer() {
    timerControl = setTimeout(function() { window.location.replace("timeout.html") }, 600000);
}

/*Fill the second selectbox based on the selected item in the first one*/
function fillCountries() {

    let continents = document.introForm.continentSelect.value;
    let countries = document.introForm.countrySelect.value;

    if(continents == "Asia") {
        var countryArray = [
            "Japan",
            "China",
            "Taiwan",
            "Turkey",
            "Vietnam",
            "North Korea",
            "Saudi Arabia",
        ];
    }
    else if(continents == "Africa"){
        var countryArray = [
            "Angola",
            "Botswana",
            "Liberia",
            "Egypt",
            "Nigeria",
            "Sudan",
        ];
    }
    else if(continents == "Oceania") {
        var countryArray = [
            "Australia",
            "New Zealand",
            "Fijii",
            "Marshall Islands",
            "Tonga",
        ];
    }
    else if(continents == "Europe"){
        var countryArray = [
            "Ireland",
            "Germany",
            "Sweden",
            "The Netherlands",
            "Denmark",
            "France",
            "Italy",
            "Russia",
            "Spain",
            "Romania",
        ];
    }
    else if(continents == "North_America"){
        var countryArray = [
            "USA",
            "Mexico",
            "Cuba",
            "Canada",
            "Panama",
            "Grenada",
            "Haiti",
        ];
    }
    else if(continents == "South_America"){
        var countryArray = [
            "Argentina",
            "Brazil",
            "Peru",
            "Chile",
            "Uruguay",
        ];
    }
    else {
        var countryArray = ["Please Make Selection"]
    }

    let countrySelectBox = document.getElementById("countrySelect");
        if (countrySelectBox.selectedIndex >= 0) {
          document.getElementById(countrySelectBox.innerText=null);
          for(let i=0; i < countryArray.length; i++){
            let option = document.createElement("option");
            option.text = countries.value=countryArray[i];
            let sel = countrySelectBox.options[countrySelectBox.selectedIndex];
            countrySelectBox.add(option, sel);
          }
        }
      }

function section4Check() {
    if(document.getElementById("section4q1_yes").checked == true)
    {
        document.getElementById("sec4check1").disabled = false;
        document.getElementById("sec4check2").disabled = false;
        document.getElementById("sec4check3").disabled = false;
    }
    
    if(document.getElementById("section4q1_no").checked == true)
    {
        document.getElementById("sec4check1").disabled = true;
        document.getElementById("sec4check2").disabled = true;
        document.getElementById("sec4check3").disabled = true;
    }
}

function section8Q1Check() {

    if(document.getElementById("sec8q1_yes").checked == true)
    {
        document.getElementById("section8q1check1").disabled = false;
        document.getElementById("section8q1check2").disabled = false;
        document.getElementById("section8q1check3").disabled = false;
        document.getElementById("section8q1check4").disabled = false;
    }

    if(document.getElementById("sec8q1_no").checked == true)
    {
        document.getElementById("section8q1check1").disabled = true;
        document.getElementById("section8q1check2").disabled = true;
        document.getElementById("section8q1check3").disabled = true;
        document.getElementById("section8q1check4").disabled = true;
    }

}

function section8Q2Check() {

    if(document.getElementById("sec8q2_yes").checked == true)
    {
        document.getElementById("section8q2check1").disabled = false;
        document.getElementById("section8q2check2").disabled = false;
        document.getElementById("section8q2check3").disabled = false;
        document.getElementById("section8q2check4").disabled = false;
    }

    if(document.getElementById("sec8q2_no").checked == true)
    {
        document.getElementById("section8q2check1").disabled = true;
        document.getElementById("section8q2check2").disabled = true;
        document.getElementById("section8q2check3").disabled = true;
        document.getElementById("section8q2check4").disabled = true;
    }

}


/*Any HTML, CSS or JS code related to this Back to Top button 
was influenced by this video https://www.youtube.com/watch?v=gphMli74Chk.
Cannot use the scroll-behavior property in CSS because of IE*/

/*Show / Hide Back to Top Button when the page is scrolled down more than 300px*/
window.addEventListener("scroll", scrollFunction)

function scrollFunction() {

    if(window.pageYOffset > 600)
    {
        backToTopButton.style.display = "block";
    }
    else {
        backToTopButton.style.display = "none";
    }

}

/*Check if Back to Top Button is clicked and run smoothScrollBackToTop()*/
backToTopButton.addEventListener("click", smoothScrollBackToTop);

function backToTop() {
    window.scrollTo(0, 0);
}

/*Code needed purely because IE does not like the aformentioned CSS property*/
function smoothScrollBackToTop() {
    const targetPosition = 0;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 750;
    let start = null;
    
    window.requestAnimationFrame(step);
  
    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
      if (progress < duration) window.requestAnimationFrame(step);
    }
  }
  
  function easeInOutCubic(t, b, c, d) {
      t /= d/2;
      if (t < 1) return c/2*t*t*t + b;
      t -= 2;
      return c/2*(t*t*t + 2) + b;
  };

/*CALCULATE SECTION SCORES*/

function getSection1Results() {

    let sec1Score = 0;
    
    document.getElementById("section1Result").innerText = "";
   
    for (let i = 0; i < document.getElementsByClassName("sec1q1").length; i++) {
        sec1Score += Number(document.querySelector('input[name="section1q1"]:checked').value);
    }

    for (let i = 0; i < document.getElementsByClassName("sec1q2").length; i++) {
        sec1Score += Number(document.querySelector('input[name="section1q2"]:checked').value);
    }

    for (let i = 0; i < document.getElementsByClassName("sec1q3").length; i++) {
        sec1Score += Number(document.querySelector('input[name="section1q3"]:checked').value);
    }

    for (let i = 0; i < document.getElementsByClassName("sec1q4").length; i++) {
        sec1Score += Number(document.querySelector('input[name="section1q4"]:checked').value);
    }

    /*Display Appropriate Message*/
    if(sec1Score >= 4 && sec1Score <= 9)
    {
        document.getElementById("section1Result").innerHTML += "The face to face training session will be a great opportunity for you to get guidance on progressing the universability of your organisation";
    }
    else if(sec1Score >= 10 && sec1Score <= 15)
    {
        document.getElementById("section1Result").innerHTML += "With a little more thought you will see more opportunities for increasing the universability of your services";
    }
    else if(sec1Score >= 16 && sec1Score <= 20)
    {
        document.getElementById("section1Result").innerHTML += "Well done you are clearly being proactive in considering making your services more universal";
    }
    else
    {
        alert("Please choose an answer for all questions in Section 1");
        sec1Score = 0;
    }

    ScoresArray[0] = sec1Score;
    console.log("Sec 1 " + ScoresArray[0]);

}

function getSection2Results()
{

    let sec2Score = 0;

    document.getElementById("section2Result").innerText = "";
   
    for (let i = 0; i < document.getElementsByClassName("sec2q1").length; i++) {
        sec2Score += Number(document.querySelector('input[name="section2q1"]:checked').value);
    }

    for (let i = 0; i < document.getElementsByClassName("sec2q2").length; i++) {
        sec2Score += Number(document.querySelector('input[name="section2q2"]:checked').value);
    }

    for (let i = 0; i < document.getElementsByClassName("sec2q3").length; i++) {
        sec2Score += Number(document.querySelector('input[name="section2q3"]:checked').value);
    }

    for (let i = 0; i < document.getElementsByClassName("sec2q4").length; i++) {
        sec2Score += Number(document.querySelector('input[name="section2q4"]:checked').value);
    }

    for (let i = 0; i < document.getElementsByClassName("sec2q5").length; i++) {
        sec2Score += Number(document.querySelector('input[name="section2q5"]:checked').value);
    }

    /*Display Appropriate Message*/
    if(sec2Score >= 5 && sec2Score <= 11)
    {
        document.getElementById("section2Result").innerHTML += "The face to face training session will be a great opportunity for you to gain some perspective of the benefits of universability to your organisation and its members";
    }
    else if(sec2Score >= 12 && sec2Score <= 19)
    {
        document.getElementById("section2Result").innerHTML += "You have some sense of the benefits of a universal organisation";
    }
    else if(sec2Score >= 20 && sec2Score <= 25)
    {
        document.getElementById("section2Result").innerHTML += "You have a very high level of appreciation of the mutual benefits for all stakeholders in an inclusive organisation";
    }
    else
    {
        sec2Score = 0;
    }

    ScoresArray[1] = sec2Score;
    console.log("Sec 2 " + ScoresArray[1]);

}

function getSection3Results() {

    let sec3Score = 0;

    document.getElementById("section3Result").innerText = "";

    for (let i = 0; i < document.getElementsByClassName("sec3q1").length; i++) {
        sec3Score += Number(document.querySelector('input[name="section3q1"]:checked').value);
    }

    for (let i = 0; i < document.getElementsByClassName("sec3q2").length; i++) {
        sec3Score += Number(document.querySelector('input[name="section3q2"]:checked').value);
    }

    /*Display Appropriate Message*/
    if(sec3Score >= 2 && sec3Score <= 5) {
        document.getElementById("section3Result").innerHTML += "The face to face session has great scope to convince you of the feasibility of promoting inclusion - just keep your mind open to the possibility";
    }
    else if(sec3Score >= 6 && sec3Score <= 10)
    {
        document.getElementById("section3Result").innerHTML += "You can see an inclusive future for your organisation and its members, the challenge is now to ensure that your decisions and resource allocations make this happen";
    }
    else
    {
        sec3Score = 0;
    }

    ScoresArray[2] = sec3Score;
    console.log("Sec 3 " + ScoresArray[2]);
}


function getSection4Results() {

    let sec4Score = 0;

    document.getElementById("section4Result").innerText = "";

    for(let i = 0; i < document.getElementsByClassName("sec4q1").length; i++) {
        sec4Score += Number(document.querySelector('input[name="section4q1"]:checked').value);
    }

    if(document.getElementById("section4q1_yes").checked == true) {
        for(let i = 0; i < document.getElementsByClassName("sec4q2").length; i++) {
            sec4Score += Number(document.querySelector('input[name="section4q2"]:checked').value);
        }
    }
    

    /*Display Appropriate Message*/
    if(sec4Score >= 0 && sec4Score <= 10)
    {
        document.getElementById("section4Result").innerHTML += "The face to face training session will only be of value to progressing your universability if you are willing to challenge your belief system about access to fitness services being a fundamental ";
    }
    else if(sec4Score == 20)
    {
        document.getElementById("section4Result").innerHTML += "While there is some openness to equity in your organisation, the commitment is not yet wholly embraced by all. Belief systems within the organisation may be confused and possibly conflicting. It would be desirable to promote dialogue amongst your stakeholders around the topic of inclusion";
    }
    else if(sec4Score >= 30 && sec4Score <= 40)
    {
        document.getElementById("section4Result").innerHTML += "Your organisation’s value system is an inclusive one. Your challenge will be to safeguard this and promote this philosophy within the wider fitness sector";
    }
    else
    {
        sec4Score = 0;
    }

    ScoresArray[3] = sec4Score;
    console.log("Sec 4 " + ScoresArray[3]);

}

function getSection5Results() {

    let sec5Score = 0;

    document.getElementById("section5Result").innerText = "";

    for(let i = 0; i < document.getElementsByClassName("sec5q1").length; i++) {
        sec5Score += Number(document.querySelector('input[name="section5q1"]:checked').value);
    }

    for(let i = 0; i < document.getElementsByClassName("sec5q2").length; i++) {
        sec5Score += Number(document.querySelector('input[name="section5q2"]:checked').value);
    }

    for(let i = 0; i < document.getElementsByClassName("sec5q3A").length; i++) {
        sec5Score += Number(document.querySelector('input[name="section5q3A"]:checked').value);
    }

    for(let i = 0; i < document.getElementsByClassName("sec5q3B").length; i++) {
        sec5Score += Number(document.querySelector('input[name="section5q3B"]:checked').value);
    }

    for(let i = 0; i < document.getElementsByClassName("sec5q4").length; i++) {
        sec5Score += Number(document.querySelector('input[name="section5q4"]:checked').value);
    }


    /*Display Appropriate Message*/
    if(sec5Score == 0)
    {
        document.getElementById("section5Result").innerHTML += "Universability is not something with which you have yet engaged, so the face to face training session will be an opportunity for significant learning in this respect";
    }
    else if(sec5Score == 10)
    {
        document.getElementById("section5Result").innerHTML += "Your policies are confused and possibly conflicting. Some guidance will be needed to bring greater coherency to your efforts to date";
    }
    else if(sec5Score >= 20 && sec5Score <= 30)
    {
        document.getElementById("section5Result").innerHTML += "Your journey of making organisational policies inclusive has started well and this may be the catalyst for enhanced universability – if you are open to progressive change";
    }
    else if(sec5Score >= 40 && sec5Score <= 50)
    {
        document.getElementById("section5Result").innerHTML += "Your intentions are very sound in respect of inclusion and you have the potential to be a high achiever in this respect";
    }
    else
    {
        sec5Score = 0;
    }

    ScoresArray[4] = sec5Score;
    console.log("Sec 5 " + ScoresArray[4]);

}

function getSection6Results()
{
    
    let sec6Score = 0;

    document.getElementById("section6Result").innerText = "";

    for(let i = 0; i < document.getElementsByClassName("sec6q1").length; i++) {
        sec6Score += Number(document.querySelector('input[name="section6q1"]:checked').value);
    }

    for(let i = 0; i < document.getElementsByClassName("sec6q2").length; i++) {
        sec6Score += Number(document.querySelector('input[name="section6q2"]:checked').value);
    }

    for(let i = 0; i < document.getElementsByClassName("sec6q3").length; i++) {
        sec6Score += Number(document.querySelector('input[name="section6q3"]:checked').value);
    }

    for(let i = 0; i < document.getElementsByClassName("sec6q4").length; i++) {
        sec6Score += Number(document.querySelector('input[name="section6q4"]:checked').value);
    }

    for(let i = 0; i < document.getElementsByClassName("sec6q5").length; i++) {
        sec6Score += Number(document.querySelector('input[name="section6q5"]:checked').value);
    }


    /*Display Appropriate Message*/
    if(sec6Score == 0)
    {
        document.getElementById("section6Result").innerHTML += "You have great scope for learning during the face to face training session, once you have an open mind to the possibilities that an inclusive approach can offer";
    }
    else if(sec6Score >= 10 && sec6Score <= 20)
    {
        document.getElementById("section6Result").innerHTML += "You have made a positive start upon which your organisation can build sound relationships with people with disabilities. Unit three will offer you more ideas in respect of forging alliances with people with disabilities";
    }
    else if(sec6Score >= 30 && sec6Score <= 50)
    {
        document.getElementById("section6Result").innerHTML += "You are already a potential resource for people with disabilities in your community, as your networks are an essential element in the UFIT approach";
    }
    else
    {
        sec6Score = 0;
    }

    ScoresArray[5] = sec6Score;
    console.log("Sec 6 " + ScoresArray[5]);

}

function getSection7Results()
{
    
    let sec7Score = 0;

    document.getElementById("section7Result").innerText = "";

    for(let i = 0; i < document.getElementsByClassName("sec7q1").length; i++) {
        sec7Score += Number(document.querySelector('input[name="section7q1"]:checked').value);
    }

    for(let i = 0; i < document.getElementsByClassName("sec7q2").length; i++) {
        sec7Score += Number(document.querySelector('input[name="section7q2"]:checked').value);
    }

    /*Display Appropriate Message*/
    if(sec7Score == 0)
    {
        document.getElementById("section7Result").innerHTML += "Your organisation has yet to learn the power of dialogue as a means of providing desirable fitness services to all members of the community";
    }
    else if(sec7Score >= 10 && sec7Score <= 20)
    {
        document.getElementById("section7Result").innerHTML += "As a listening organisation you have important information that can guide your journey towards universability. Your challenge is to interpret what is being said and to translate it into inclusive actions";
    }
    else
    {
        sec7Score = 0;
    }

    ScoresArray[6] = sec7Score;
    console.log("Sec 7 " + ScoresArray[6]);

}

function getSection8Results()
{

    let sec8Score = 0;

    document.getElementById("section8Result").innerText = "";

    for(let i = 0; i < document.getElementsByClassName("sec8q1").length; i++) {
        sec8Score += Number(document.querySelector('input[name="section8q1"]:checked').value);
    }

    if(document.getElementById("sec8q1_yes").checked == true)
    {
        for(let i = 0; i < document.getElementsByClassName("sec8q1A").length; i++) {
            sec8Score += Number(document.querySelector('input[name="sec8q1check"]:checked').value);
        }
    }

    for(let i = 0; i < document.getElementsByClassName("sec8q1").length; i++) {
        sec8Score += Number(document.querySelector('input[name="section8q2"]:checked').value);
    }

    if(document.getElementById("sec8q2_yes").checked == true)
    {
        for(let i = 0; i < document.getElementsByClassName("sec8q2A").length; i++) {
            sec8Score += Number($(":checkbox:checked").value);
        }
    }

    ScoresArray[7] = sec8Score;
    console.log("Sec 8 " + ScoresArray[7]);

}

function getSection9Results() {

    let sec9Score = 0;

    document.getElementById("section9Result").innerText = "";

    for(let i = 0; i < document.getElementsByClassName("sec9q1").length; i++) {
        sec9Score += Number(document.querySelector('input[name="s9q1pa"]:checked').value);
    }

    for(let i = 0; i < document.getElementsByClassName("sec9q1").length; i++) {
        sec9Score += Number(document.querySelector('input[name="s9q1pb"]:checked').value);
    }

    for(let i = 0; i < document.getElementsByClassName("sec9q1").length; i++) {
        sec9Score += Number(document.querySelector('input[name="s9q1pc"]:checked').value);
    }

    for(let i = 0; i < document.getElementsByClassName("sec9q1").length; i++) {
        sec9Score += Number(document.querySelector('input[name="s9q1pd"]:checked').value);
    }

    for(let i = 0; i < document.getElementsByClassName("sec9q2").length; i++) {
        sec9Score += Number(document.querySelector('input[name="section9q2"]:checked').value);
    }

    for(let i = 0; i < document.getElementsByClassName("sec9q3").length; i++) {
        sec9Score += Number(document.querySelector('input[name="section9q3"]:checked').value);
    }


    /*Display Appropriate Message*/
    if(sec9Score == 0)
    {
        document.getElementById("section9Result").innerHTML += "Universability is not something with which you have engaged so the face to face training session will be an opportunity for significant learning in this respect";
    }
    else if(sec9Score == 10)
    {
        document.getElementById("section9Result").innerHTML += "Depending on the strength of influence of those with some perspective on inclusion, you may have scope to drive improvements from within. Consider the scope for repositioning those with training and knowledge in the area of inclusion to optimise their influence";
    }
    else if(sec9Score >= 20 && sec9Score <= 30)
    {
        document.getElementById("section9Result").innerHTML += "There is some scope within your organisation to promote universability principles and broaden your organisation’s relevance in the wider community";
    }
    else if(sec9Score >= 40 && sec9Score <= 60)
    {
        document.getElementById("section9Result").innerHTML += "You have invested in your organisation’s most important asset. Your potential to offer inclusive services is vast. The challenge is to make sure that you optimally deploy this wisdom to make all aspects of your service provision truly inclusive";
    }
    else
    {
        sec9Score = 0;
    }

    ScoresArray[8] = sec9Score;
    console.log("Sec 9 " + ScoresArray[8]);

}

function getSection10Results() {

    let sec10Score = 0;

    document.getElementById("section10Result").innerText = "";

    for(let i = 0; i < document.getElementsByClassName("sec10q1").length; i++) {
        sec10Score += Number(document.querySelector('input[name="section10q1"]:checked').value);
    }

    if(document.getElementsByClassName("sec10q1").length != 0) {
        for(let i = 0; i < document.getElementsByClassName("sec10q2").length; i++) {
            sec10Score += Number(document.querySelector('input[type="checkbox"]:checked').value);
        }
    }
    else {
        sec10Score += 0;
    }

    /*Display Appropriate Message*/
    if(sec10Score == 0)
    {
        document.getElementById("section10Result").innerHTML += "Universability is not something with which you have engaged so the face to face training session will be an opportunity for significant learning in this respect";
    }
    else if(sec10Score == 10)
    {
        document.getElementById("section10Result").innerHTML += "Depending on the strength of influence of those with some perspective on inclusion, you may have scope to drive improvements from within. Consider the scope for repositioning those with training and knowledge in the area of inclusion to optimise their influence";
    }
    else if(sec10Score >= 20 && sec10Score <= 30)
    {
        document.getElementById("section10Result").innerHTML += "While some aspects of your facility are accessible there is scope for enhancement. The face to face training session will offer you some suggestions for improvement here.";
    }
    else if(sec10Score >= 40 && sec10Score <= 50)
    {
        document.getElementById("section10Result").innerHTML += "The facility is largely accessible and hence there is significant scope for promoting universability.";
    }
    else
    {
        sec10Score = 0;
    }
    
    
    ScoresArray[9] = sec10Score;
    console.log("Sec 10 " + ScoresArray[9]);
   
}

function getSection11Score() {

    let sec11Score = 0;

    document.getElementById("section11Result").innerText = "";

    for(let i = 0; i < document.getElementsByClassName("sec11q1").length; i++) {
        sec11Score += Number(document.querySelector('input[name="section11q1"]:checked').value);
    }

    for(let i = 0; i < document.getElementsByClassName("sec11q2").length; i++) {
        sec11Score += Number(document.querySelector('input[name="section11q2"]:checked').value);
    }

    /*Display Appropriate Message*/
    if(sec11Score == 0)
    {
        document.getElementById("section11Result").innerHTML += "The face to face training session will offer you many ideas for inclusivizing your promotion materials";
    }
    else if(sec11Score == 10)
    {
        document.getElementById("section11Result").innerHTML += "Your organisation has some appreciation of the need for have diversity to be represented in your promotional materials. With a little more thoughtfulness your promotional campaigns will speak louder to a wider audience";
    }
    else if(sec11Score == 20)
    {
        document.getElementById("section11Result").innerHTML += "You clearly understand the power of imagery and language and your materials may be potential templates for others in the promotion of fitness services";
    }
    else
    {
        sec11Score = 0;
    }
    
    ScoresArray[10] = sec11Score;
    console.log("Sec 11 " + ScoresArray[10]);
    

}

function getFinalScore() {

    /*Cancel 10 minute timeout*/
    clearTimeout(timerControl);

    let totalScore = 0;

    let arrayLength = ScoresArray.length;

    for(let i = 0; i < arrayLength; i++)
    {
        console.log(ScoresArray[i]);
        totalScore = totalScore + Number(ScoresArray[i]);
    }


    if(totalScore < 150)
    {
        window.open().document.write("Score < 150. The face to face training session will be of immense value to your organisation. An exciting challenge awaits as you move towards universability. It will take some time but the secret is to keep doing what you are doing well and gradually add other initiatives to make your services more inclusive. The face to face training session will lead to significant learning for your organisation.");
    }
    else if(totalScore >= 150 && totalScore <= 244)
    {
        window.open().document.write("Score: 150 - 244. While some work is being done to enhance inclusive provision, there is scope for significant gains in this aspect. Building on what you are doing well and embracing new ideas will see your organisation make the transitions to inclusivity with some ease. The face to face training session will be a unique opportunity to learn from others in your sector.");
    }
    else if(totalScore >= 245 && totalScore <= 339)
    {
        window.open().document.write("Score: 245 - 339. Your organisation is making genuine and meaningful efforts in the direction of universability.  However provision is probably patchy and inconsistent, which may cause some confusion among members and potential members. Promotion of inclusive opportunities as an organisational priority has the potential to broaden your relevance to an even greater number of community members. ");
    }
    else if(totalScore >= 340 && totalScore <= 425)
    {
        window.open(null,"Final Survey Score", []).document.write("Score: 340 - 425. Your organisation is evidently committed to inclusion.  Your perspective will be most valuable at the face to face training session as both an advocate and a guide for inclusive fitness service provision. You are highly relevant in your community and hence the organisation is sustainable and will remain so once your current commitment is supported and enhanced over time.");
    }
    
    document.getElementById("finalH4").innerHTML = "Thanks for taking this Survey! This was an important step for your company and I hope you take value from what you learned with your result."

    console.log("Total Score: " + totalScore);

}