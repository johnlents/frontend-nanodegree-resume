var bio = {
    "name": "John Lents",
    "role": "Web Developer",
    "welcomeMessage": "Bitters mustache actually, master cleanse chia farm-to-table hashtag. Dreamcatcher craft beer lumbersexual Pinterest meh polaroid, letterpress iPhone art party paleo chambray chillwave meggings umami. Vegan freegan banjo aesthetic swag. Plaid 8-bit vegan next level tilde. Brooklyn vinyl hoodie craft beer. Mlkshk church-key mumblecore Kickstarter. Fashion axe next level Truffaut Pinterest, twee four dollar toast hashtag art party gastropub VHS four loko PBR authentic pickled.",
    "bioPic": "images/story2.jpg",
    "skills": [
            "HTML", "CSS", "Ruby", "JS"
    ],
    "contacts": {
            "email": "johnlents713@gmail.com",
            "mobile": "713-824-6190",
            "githubUsername": "dijon713",
            "twitterHandle": "@dijon713",
            "location": "Baltimore, MD"
        },
    display: function() {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);

	$("#header").prepend(formattedName, formattedRole);

	var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

	$("#header").append(formattedBioPic, formattedWelcomeMessage);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitterHandle);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.githubUsername);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	$("#topContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);
	$("#header").append(HTMLskillsStart);
	$("#footerContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);

	for(skill in bio.skills) {

		var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkills);
		}
	}
}

var education = {
	"schools": [
		{
			"name": "The Kinkaid School",
			"location": "Houston, TX",
			"dates": "2005-2009",
			"degree": "High School Diploma",
			"major": "N/A",
		},
		{
			"name": "Colorado College",
			"location": "Colorado Springs, CO",
			"dates": "2005-2009",
			"degree": "Bachelor of Arts",
			"major": ["English"],
		}
		],
	"onlineCourses": [
		{
			"title": "Financial Accounting",
			"school": "Baltimore Community College",
			"dates": 2014,
			"url": "http://www.reddit.com"
		},
		{	
			"title": "Microeconomics",
			"school": "Baltimore Community College",
			"dates": 2014,
			"url": "http://www.reddit.com"
		},
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": 2014,
			"url": "http://www.reddit.com"
		},
		{
			"title": "Javascript",
			"school": "Udacity",
			"dates": 2014,
			"url": "http://www.reddit.com"
		}
	],
	display: function() {
		for (school in education.schools) {
			$('#education').append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			$(".education-entry:last").append(formattedSchoolName, formattedSchoolDegree, formattedSchoolDates, formattedSchoolLocation, formattedSchoolMajor);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			$("#education").append(HTMLschoolStart);
			for (course in education.onlineCourses) {

				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
				var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

				$(".education-entry:last").append(formattedOnlineTitle, formattedOnlineSchool, formattedOnlineDates, formattedOnlineUrl);
			}
		}
	}
}

var work = {
	"jobs": [
	{
		"employer": "East Coast Ambulance",
		"title": "Dispach and Schedule Supervisor",
		"dates": "April 2014 - August 2014",
		"description": "In addition to the responsibilities listed below, I was in charge of taking complaints and compliments from our client base and dealing with them accordingly by speaking to the involved parties and noting the event in their employee file as well as administering any necessary disciplinary actions. I communicated with department heads on a daily basis in order to solve problems and prevent them from occurring.",
		"location": "Baltimore, MD"
	},
	{
		"employer": "East Coast Ambulance",
		"title": "Schedule Coordinator",
		"dates": "October 2013 - April 2014",
		"description": "I was responsible for evaluating weekly and monthly call volume trends and scheduling vehicles and crews accordingly. I worked in tandem with the dispatch supervisors to assess the need to hire employees and purchase vehicles. I was involved in the vetting and interviewing process and assisted with payroll duties.",
		"location": "Baltimore, MD"
	},
	{
		"employer": "East Coast Ambulance",
		"title": "EMS Dispatcher",
		"dates": "January 2012 - October 2013",
		"description": "Responsible for dispatching ambulance and wheelchair drivers throughout the Baltimore and DC areas",
		"location": "Baltimore, MD"
	},
	{
		"employer": "East Coast Ambulance",
		"title": "Emergency Medical Technician",
		"dates": "March 2011 - January 2012",
		"description": "Provided emergent and non-emergent medical care.",
		"location": "Baltimore, MD"
	},
	{
		"employer": "Maryland State Arts Council",
		"title": "Intern",
		"dates": 2011,
		"description": "Assisted with writing and editing online materials and clerical duties.",
		"location": "Baltimore, MD"
	}
	],
	display: function() {
		for(job in work.jobs) {

			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;

			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location)
			$(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedLocation, formattedDescription);
		}
	}
}

var projects = {
	"projects": [
	{
		"title": "Portfolio",
		"dates": 2014,
		"description": "My portfolio of web development projects",
		"images": "images/story1.jpg"
	},
	{
		"title": "Online Resume",
		"dates": 2015,
		"description": "My online resume",
		"images": "images/story2.jpg"
	}
	], 
	display: function(){
		for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			var formattedProjectImages = HTMLprojectImage.replace("%data%", projects.projects[project].images);
			var formattedProjectImages = HTMLprojectImage.replace("%data%", projects.projects[project].images);

			$(".project-entry:last").append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription, formattedProjectImages, formattedProjectImages);
		}
	}
}

function displayMap() {
	$("#mapDiv").append(googleMap);
}

displayMap();
bio.display();
education.display();
work.display();
projects.display();

function inName(name) {
	var name = bio.name;
	name = name.trim().split(" ");
	console.log(name);
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();

	return name[0] +" "+name[1];

}
$("#main").append(internationalizeButton);





	

