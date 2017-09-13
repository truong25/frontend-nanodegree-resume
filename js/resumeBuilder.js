
/*
var awesomeThoughts = "I am Toan Truong and I am AWESOME!";
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
console.log(awesomeThoughts);
console.log(funThoughts);
$("#main").append(funThoughts);
*/


var name = "Toan Truong";
var role = "Computer Engineering Student";
var formattedName = HTMLheaderName.replace( "%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").append(formattedName);
$("#header").append(formattedRole);


var bio = {
	"name" : "Toan Truong",
	"role" : "Computer Engineering Student",
	"contact" : ["(647)-987-8184", "toan.truong25@gmail.com"],
	//include image -- "image" : "",
	"location" : "Mississauga, ON",
	"github" : "https://github.com/truong25/",
	"skills" : ["JavaScript", "HTML & CSS", "Java", "C"]
	
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
		"images" : ["https://truong25.github.io/"],
		"description": "A website that I created to utilize my knowledge gained from learning HTML & CSS."
	}]	
};

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
};

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
displayWork();


$("#main").append(internationalizeButton);

function inName(string){
	var newString = string.split(" ");
	
	newString[0] = newString[0].charAt(0).toUpperCase() + newString[0].slice(1).toLowerCase();
	newString[1] = newString[1].toUpperCase();
	
	var finalString = newString[0] + " " + newString[1];
	console.log(newString);
};

//$("#main").append(bio.name);
//$("#main").append(education.name);