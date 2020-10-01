// Initialize variables.
var bio ={
     "name":"Inga Kokarovtseva",
     "role": "Full Stack Developer",
     "contacts":{
        "mobile": "+7 9992182116",
        "email":"agnidasein@gmail.com",
        "github":"AgniDasein",
        "location": "Graz, Austria"

      },
     "welcomeMessage": "I am glad collaborate with you and encreace potential of efficiency.",
     "skills":[
     "Python","JavaScript","programming","communication"
      ],
     "bioPic":"images/me.jpg"
};

var education={
     "schools":[
     {
      "name":"Ural Federal University",
      "location": "Ekaterinburg, Russia ",
      "degree":"S.",
      "majors":["Economics"],
      "dates": "Sep 2005 to June 2010",
      "description":"Focus of studies was primarily mathematical analysis, linear algebra,\
       modern monetary and non-monetary theory of the international economy.",
      "url":"https://urfu.ru/en/"
      },
      {
      "name":"Ural State Academy of Architecture and Arts",
      "location": "Ekaterinburg, Russia ",
      "degree":"BA.",
      "majors":["Architecture"],
      "dates": "Sep 2007 to Dec 2011",
      "description":"Primary courses included descriptive geometry, theoretical mechanics\
       and computer design in architecture.",
      "url":"http://english.usaaa.ru/"
       }
    ],
    "onlineCourses":[
    {
    "title":"Full Stack Web Developer Nanodegree",
    "school":"Udacity",
    "dates": 2017,
    "description":"Learned JavaScript syntax, which includes manipulating data types (like JSON),\
     building loops and creating functions, jQuery DOM manipulation methods.",
    "url":"https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004"
     }
     ]
};

var work={
  "jobs":[
   {
    "employer": "3DCLUB",
    "title": "Art director ",
    "location": "St.Petersburg, Russia",
    "dates":"Feb 2016 to Present",
    "description":"B2B advertising, social marketing, public relations, and organization of events.\
     Designed interiors of public spaces, residential apartments, organized art space for the school\
      of architectural visualization and arts.",
    "url":""
    },
    {
    "employer": "Lenproject",
    "title": "Architect & interior designer  ",
    "location": "St.Petersburg, Russia",
    "dates":"Apr 2015 to Jan 2016",
    "description":"Lead technical CAD drawings, 3d modeling, visualization, concept design,\
     project proposals development, layout, presentation and book preparation.",
     "url":""
    }
  ]
};

var projects={
    "projects":[
   {
    "title":"Web site",
    "dates":2017,
    "description":"Site of the place your dreams. Project was made by course Udacity CCS HTML.",
    "url":"https://agnidasein.github.io/spirit.site/",
    "images":[
    "images/site1.jpg","images/site2.jpg"
        ],
    "images_enlarge": ["images/site1_enlarge.jpg", "images/site2_enlarge.jpg"
    ]
  },
]
};

// Formatted variables.
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));


if(bio.skills.length > 0){
$("#header").append(HTMLskillsStart);

var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
$("#skills").append(formattedSkill);
formattedSkill=HTMLskills.replace("%data%",bio.skills[1]);
$("#skills").append(formattedSkill);
formattedSkill=HTMLskills.replace("%data%",bio.skills[2]);
$("#skills").append(formattedSkill);
formattedSkill=HTMLskills.replace("%data%",bio.skills[3]);
$("#skills").append(formattedSkill);
}

function displayWork() {
    for(var i in work.jobs) {
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer).replace("#", work.jobs[i].url);
      var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
      var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
      var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].dates);
      var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
      var formattedWorkURL = HTMWorkURL.replace("%data%", work.jobs[i].url).replace("#", work.jobs[i].url);
      var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;
      $(".work-entry:last").append(formattedEmployerWorkTitle);
      $(".work-entry:last").append(formattedWorkLocation);
      $(".work-entry:last").append(formattedDatesWorked);
      $(".work-entry:last").append(formattedWorkDescription);
      }
}
if(work.jobs.length > 0) {
    $("#workExperience").append(HTMLworkStart);
    displayWork();
}



projects.display = function() {
  for(var index1 in projects.projects) {
    var project = projects.projects[index1];
    var formatedtitle = HTMLprojectTitle.replace("%data%", project.title).replace("#", projects.projects[index1].url);
    var formateddates = HTMLprojectDates.replace("%data%", project.dates);
    var formattedURL = HTMLprojectURL.replace("%data%", projects.projects[index1].url).replace("#", projects.projects[index1].url);
    var formateddescription = HTMLprojectDescription.replace("%data%", project.description);

    $("#projects").append(HTMLprojectStart);
    $('.project-entry:last').append(formatedtitle)
    .append(formateddates)
    .append(formateddescription)
    .append(formattedURL);

 for(var index2 in project.images) {
      var image = project.images[index2];
      var image_enlarge = project.images_enlarge[index2];
      var formatedimage = HTMLprojectImage.replace("%data%", image);
      var formatedimage_enlarge = HTMLprojectImage.replace("%data%", image_enlarge);
      var formatedmodal1 = HTMLmodal1.replace("%data%", "enlarge" + index1 + index2);

      $('.project-entry:last').append(formatedimage);
      $('.project-entry:last').children('img')
      .addClass("img-spesial")
      .last()
      .attr({
        "data-toggle": "modal",
        "data-target": "#enlarge" + index1 + index2
      });
      $(formatedmodal1).insertAfter('#main');
      $('#enlarge' + index1 + index2).append(HTMLmodal2)
      .children('.modal-lg')
      .append(HTMLmodal3)
      .find('.modal-content')
      .append(formatedimage_enlarge)
      .find('img')
      .addClass("img-responsive");
    }
  }
};


projects.display();

education.display = function() {
  if(education.schools.length > 0 || education.onlineCourses.length > 0) {
    for(i in education.schools) {
      $("#education").append(HTMLschoolStart);

      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
      var formattedSchoolDescription = HTMLschoolDescription.replace("%data%", education.schools[i].description);
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
      var formattedSchoolURL = HTMSchoolURL.replace("%data%", education.schools[i].url).replace("#", education.schools[i].url);

      $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
      $(".education-entry:last").append(formattedSchoolDates);
      $(".education-entry:last").append(formattedSchoolLocation);
      $(".education-entry:last").append(formattedSchoolDescription);
      $(".education-entry:last").append(formattedSchoolMajor);
      $(".education-entry:last").append(formattedSchoolURL);
    }

    if(education.onlineCourses.length > 0) {
      $("#education").append(HTMLonlineClasses);
      for(i in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        var formattedonlineDescription = HTMLonlineDescription.replace("%data%", education.onlineCourses[i].description);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedonlineDescription);
        $(".education-entry:last").append(formattedOnlineURL);
      }
    }

  }
}

education.display();



function inName(name){
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " "+name[1];
}
$('#main').append(internationalizeButton);
$("#mapDiv").append(googleMap);

