var bio = {
	"name": "Gregory Mendoza",
	"role": "Front-End Developer",
	"contact": {
		"mobile" : "+58 (412) 977-7343",
		"email" : "gregmendgreg@gmail.com",
		"github" : "gregorymendoza",
		"twitter" : "@gregormendoza",
		"location" : "Zona F, 23 de Enero, Caracas, Venezuela"
	},
	"welcomeMessage" : "",
	"skills" : ["determination", "fast learner", "hardcore gamer", "multitasking"],
	"bioPic" : "images/me.png",
	display: function(){
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
		var formattedGitHub = HTMLgithub.replace("%data%", bio.contact.github);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#header").append(formattedWelcomeMsg);
		$("#header").append(formattedPic);

		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedGitHub);
		$("#topContacts").append(formattedTwitter);
		$("#topContacts").append(formattedLocation);
		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedGitHub);
		$("#footerContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedLocation);

		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);

			for (i=0;i<bio.skills.length;i++) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
				$("#skills").append(formattedSkill);
			}
		}
	}
};

var education = {
	"schools" : [
		{
			"name": "Jesus Obrero Technical Institute",
			"location": "Instituto Tecnico Jesus Obrero, Los Flores de Catia, Caracas, Venezuela",
			"degree": "Administration",
			"majors": ["Data Processing"],
			"dates": "1997-2008",
			"url": "http://www.itjo.edu.ve/index.html"
		}
	],
	"onlineCourses": [
		{
			"title": "Professional Web Developer",
			"school": "Udemy",
			"dates": "2016",
			"url": "https://www.udemy.com/desarrollador-web-profesional/"
		},
		{
			"title": "Web Development with Bootstrap 3",
			"school": "Video2Brain",
			"dates": "2016",
			"url": "https://www.video2brain.com/mx/cursos/desarrollo-web-con-bootstrap-3"
		},
		{
			"title": "Responsive Web Design Fundamentals",
			"school": "Udacity",
			"dates": "2016",
			"url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
		},
		{
			"title": "Responsive Images",
			"school": "Udacity",
			"dates": "2016",
			"url": "https://www.udacity.com/course/responsive-images--ud882"
		},
		{
			"title": "How to Use Git and GitHub",
			"school": "Udacity",
			"dates": "2015",
			"url": "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
		}
	]
};

var work = {
	"jobs" : [
		{
			"employer" : "Experimental National University of Arts",
			"title" : "Web Developer",
			"location" : "Instituto de las Artes de la Imagen y el Espacio, Bellas Artes, La Candelaria, Caracas, Venezuela",
			"dates" : "in progress",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident aperiam ipsam fugit itaque illum suscipit vitae esse dicta sed, inventore nam dignissimos commodi consequatur, asperiores quasi aut, maxime expedita vel."
		}
	]
};

var projects = {
	"projects" : [
		{
			"title" : "Build a Portfolio",
			"dates" : "September 2016",
			"description" : "Udacity Front-End Web Developer Nanodegree Project 1",
			"images" : ["images/portfolio_screenshot2.jpg", "images/portfolio_screenshot.jpg"]
		}
	]
};

bio.display();

education.display = function () {
	$("#education").append(HTMLschoolStart);

	education.schools.forEach(function(school){

		var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);

		if (school.majors.length > 0) {
			school.majors.forEach(function(major){
				var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);
				$(".education-entry").append(formattedSchoolMajor);
			});
		}else{
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
			$(".education-entry").append(formattedSchoolMajor);
		}

		$(".education-entry").append(formattedSchoolName);
		$(".education-entry").append(formattedSchoolLocation);
		$(".education-entry").append(formattedSchoolDegree);
		$(".education-entry").append(formattedSchoolDates);
	});

	$(".education-entry").append(HTMLonlineClasses);

	education.onlineCourses.forEach(function(onlineCourse){
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url);

		$(".education-entry").append(formattedOnlineTitle);
		$(".education-entry").append(formattedOnlineSchool);
		$(".education-entry").append(formattedOnlineDates);
		$(".education-entry").append(formattedOnlineURL);
	});
};

education.display();

work.display = function () {
	$("#workExperience").append(HTMLworkStart);

	for (i=0;i<work.jobs.length;i++) {
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

		$(".work-entry").append(formattedEmployerTitle);
		$(".work-entry").append(formattedLocation);
		$(".work-entry").append(formattedDates);
		$(".work-entry").append(formattedDescription);
	};
};

work.display();
projects.display = function() {
	$("#projects").append(HTMLprojectStart);

	for (i=0;i<projects.projects.length;i++) {
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[i].images.length > 0) {
			projects.projects[i].images.forEach(function(image){
				var formattedImage = HTMLprojectImage.replace("%data%", image);
				$(".project-entry:last").append(formattedImage);
			});
		}else{
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images);
			$(".project-entry:last").append(formattedImage);
		}
	}
}

projects.display();

function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}

	return locationArray;
}

console.log(locationizer(work));

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] +" "+ name[1];
}
$("#mapDiv").append(googleMap);