
/*
var awesomeThoughts = "I am Toan Truong and I am AWESOME!";
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
console.log(awesomeThoughts);
console.log(funThoughts);
$("#main").append(funThoughts);
*/
function displayHeader(){
	var name = "Toan Truong";
	var role = "Computer Engineering Student";
	var formattedName = HTMLheaderName.replace( "%data%", name);
	var formattedRole = HTMLheaderRole.replace("%data%", role);
	$("#header").append(formattedName);
	$("#header").append(formattedRole);
};


displayHeader();
var bio = {
	"name" : "Toan Truong",
	"role" : "Computer Engineering Student",
	"contacts" : {
		"mobile" : "(647)-987-8184", 
		"email" : "toan.truong25@gmail.com",
		"location" : "Mississauga",
		"github" : "https://github.com/truong25/",
	},
	"welcomeMessage" : "Welcome to my profile!",
	//include image -- "image" : "",
	
	"skills" : ["JavaScript", "HTML & CSS", "Java", "C"],
	"bioPic" : "https://scontent.fyqm1-1.fna.fbcdn.net/v/t1.0-9/12805980_10154832710993018_1387936092652587143_n.jpg?oh=8b690834a056978779ca0bd23c7396f7&oe=5A52899A"
};




var work = {
	"jobs": [
	{
		"title" : "Meat Associate",
		"employer" : "Walmart",
		"dates" : "3 years",
		"location" : "Mississauga",
		"description" : "Stocked meat-related products"
	},
	{
		"title" : "Cooker",
		"employer" : "Crepe-Delicious",
		"dates" : "2 years",
		"location" : "Mississauga",
		"description" : "Take orders, cook them and serve customers simutaneously"
	}]
};

var education = 
{
	"schools": [{
			"name": "York University",
			"years": "2014-Present",
			"major" : "Computer Engineering",
			"location": "Toronto"
		},
		{
			"name": "George Brown College",
			"years": "2011-2012",
			"major" : "Early Childhood Education",
			"location": "Toronto"
		}
	],
	"onlineCourses": [
	{
		"name" : "CodeAcademy",
		"course" : "HTML & CSS",
		"date" : "2017",
		"url" : "https://www.codecademy.com/learn/learn-html-css"
	},
	{
		"name" : "Udacity",
		"course" : "JavaScript Basics",
		"date" : "2017",
		"url" : "https://classroom.udacity.com/courses/ud804"
	}
	]

};

var projects = {
	"projects": [
	{
		"title" : "Crash Fever",
		"dates" : "July 2017",
		"description": "A website that I created to utilize my knowledge gained from learning HTML & CSS.",
		"images" : ["https://i.imgur.com/gMdDxgL.png"]
	},
	{
		"title" : "Udacity Online Resume",
		"dates" : "July 2017",
		   //, "https://truong25.github.io/"
		"description": "Creating a Resume through the use of JavaScript!",
		//"images" : ["https://i.imgur.com/zipdoRn.png"]
	}]	
};

	




function displayBio() {
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
	 $("#header").append(formattedMobile);
	 var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	 $("#header").append(formattedEmail);
	 var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	 $("#header").append(formattedGithub);
	 var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	 $("#header").append(formattedLocation);
	 var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	 $("#header").append(formattedWelcomeMessage);
	 var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBioPic);
	 
	if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
		for ( skill in bio.skills)
		{	
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	
	};
}

function displayWork() {
	
	for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);
	
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
	
}

};



$("#main").append(internationalizeButton);

function inName(string){
	var newString = string.split(" ");
	
	newString[0] = newString[0].charAt(0).toUpperCase() + newString[0].slice(1).toLowerCase();
	newString[1] = newString[1].toUpperCase();
	
	var finalString = newString[0] + " " + newString[1];
	console.log(newString);
};

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		
		if (projects.projects[project].images.length >0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
		
	}
}

displayBio();

displayWork();
$("#mapDiv").append(googleMap);
projects.display();



//$("#main").append(bio.name);
//$("#main").append(education.name);