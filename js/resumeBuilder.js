/*
bio object declaration
*/
var bio = {
    "name": "Gregory Mendoza",
    "role": "Front-End Developer",
    "contact": {
        "mobile": "555-555-5555",
        "email": "gregmendgreg@gmail.com",
        "github": "gregorymendoza",
        "twitter": "@gregormendoza",
        "location": "Zona F, 23 de Enero, Caracas, Venezuela"
    },
    "welcomeMessage": "The Web With Ethics",
    "skills": ["determination", "fast learner", "hardcore gamer", "multitasking"],
    "bioPic": "images/me.png",
    display: function() {
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

            for (i = 0; i < bio.skills.length; i++) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkill);
            }
        }
    }
};

bio.display();

/*
education object declaration
*/
var education = {
    "schools": [{
        "name": "Jesus Obrero Technical Institute",
        "location": "Instituto Tecnico Jesus Obrero, Los Flores de Catia, Caracas, Venezuela",
        "degree": "Administration",
        "majors": ["Data Processing"],
        "dates": "1997-2008",
        "url": "http://www.itjo.edu.ve/index.html"
    }],
    "onlineCourses": [{
        "title": "Professional Web Developer",
        "school": "Udemy",
        "dates": "2016",
        "url": "http://ude.my/UC-8LQ04WA2"
    }, {
        "title": "Web Development with Bootstrap 3",
        "school": "Video2Brain",
        "dates": "2016",
        "url": "https://www.video2brain.com/mx/cursos/desarrollo-web-con-bootstrap-3"
    }, {
        "title": "Responsive Web Design Fundamentals",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
    }, {
        "title": "Responsive Images",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/responsive-images--ud882"
    }, {
        "title": "How to Use Git and GitHub",
        "school": "Udacity",
        "dates": "2015",
        "url": "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
    }]
};


/*
work object declaration
*/
var work = {
    "jobs": [{
        "employer": "Experimental National University of Arts",
        "title": "Web Developer/Computer Operator",
        "location": "Instituto de las Artes de la Imagen y el Espacio, Bellas Artes, La Candelaria, Caracas, Venezuela",
        "dates": "2016-Present",
        "description": "Design and Development of UNEARTE Official Website"
    }, {
        "employer": "Central Bank of Venezuela",
        "title": "Trainee",
        "location": "Banco Central de Venezuela, Piso 16 Av. Nte. 2 Caracas, Venezuela",
        "dates": "2008",
        "description": "Document Digitalization and Database Handling in Excel"
    }]
};

/*
projects object declaration
*/
var projects = {
    "projects": [{
        "title": "Build a Portfolio",
        "dates": "September 2016",
        "description": "Udacity Front-End Web Developer Nanodegree Project 1",
        "images": ["images/portfolio_screenshot.jpg"]
    }]
};

/*
Adding a display property which encapsulates (contains) a function that displays all the properties of education object in the resume using dot notation
*/
education.display = function() {
    $("#education").append(HTMLschoolStart);

    education.schools.forEach(function(school) {

        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);

        if (school.majors.length > 0) {
            school.majors.forEach(function(major) {
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);
                $(".education-entry").append(formattedSchoolMajor);
            });
        } else {
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
            $(".education-entry").append(formattedSchoolMajor);
        }

        $(".education-entry").append(formattedSchoolName);
        $(".education-entry").append(formattedSchoolLocation);
        $(".education-entry").append(formattedSchoolDegree);
        $(".education-entry").append(formattedSchoolDates);
    });

    $(".education-entry").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(onlineCourse) {
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url).replace("#", onlineCourse.url);

        $(".education-entry").append(formattedOnlineTitle);
        $(".education-entry").append(formattedOnlineSchool);
        $(".education-entry").append(formattedOnlineDates);
        $(".education-entry").append(formattedOnlineURL);
    });
};

education.display();

/*
Adding a display property which encapsulates (contains) a function that displays all the properties of work object in the resume using dot notation
*/
work.display = function() {
    $("#workExperience").append(HTMLworkStart);

    for (i = 0; i < work.jobs.length; i++) {
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
    }
};

work.display();

/*
Adding a display property which encapsulates (contains) a function that displays all the properties of projects object in the resume using dot notation
*/
projects.display = function() {

    for (i = 0; i < projects.projects.length; i++) {
    	$("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[i].images.length > 0) {
            projects.projects[i].images.forEach(function(image) {
                var formattedImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedImage);
            });
        } else {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images);
            $(".project-entry:last").append(formattedImage);
        }
    }
};

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
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$("#mapDiv").append(googleMap);