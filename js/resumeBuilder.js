/*
This is empty on purpose! Your code to build the resume will go here.
 */

$(function() { 

/* ======= Personal Information ======= */  
const model = {
  bio : {
    name : 'Tang Sing Lun',
    role : 'Front-End Web Developer',
    contacts : {
      mobile : '852-66966379',
      email : 'cokelight@gmail.com',
      github : 'https://github.com/singlun',
      twitter : '',
      location : 'Rm 2409, Mui Yuen Hse, Chuk Yuen North Estate, Wong Tai Sin, Kwoloon, HKSAR'
    },
    welcomeMessage : 'Hi, Everyone I am readily available anytime',   
    skills : ['Java', 'HTML 5', 'PHP', 'JavaScript', 'Android', 'Jquery', 'CSS', 'Web/Image Responsive', 'database'] ,
    biopic  : 'images/profile.jpg',
    display : function() {
        octopus.viewRender();
    }
  },

  education : {
    schools : [
      {
        name : 'The Hong Kong Polytechnic University',
        location : 'Polytechnic University , Hung Hum, Kowloon',
        degree : 'Ba Hon(s) in Computing',
        majors : 'Computing',
        dates : '2000 - 2003',
        url : 'https://www.polyu.edu.hk'
      },
      {
        name : 'Chai Wan Technical College',
        location : 'Chai Wan Hong Kong',
        degree : 'Higher Diploma In Information Systems',
        majors : 'Information Systems',
        dates : '1997 - 2000',
        url : '#'
      }
    ],    

    onlineCourses : [
      {
        title : 'Udacity Front-End Developer Nanodegree Course (graduated)',
        school : 'Udacity',
        dates : '2018',
        courseUrl : 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001',
        url : 'https://confirm.udacity.com/3USDQQL'
      }
    ],
    display : function() {
      octopus.viewRender();
    }        
  },

  work : {
    jobs : [
      {
        employer : 'Defender Braces',
        title : 'Dental Technician',
        location : 'Rm F, 3/F, International Industrial Center, Kwei Tei street, Fo Tan , Sha Tin , NT, Hong Kong',
        dates : '2006 - present',
        description : 'Home business - fabrication of Dental appliance, Develop an Online Wine Shop',
        url : 'https://github.com/singlun'
      },
      {
        employer : 'The HKSAR Electrical And Mechanical Services Department',
        title : 'Information Technology Specialist',
        location : 'EMSD Kwoloon Bay',
        dates : '2001 - 2006',
        description : 'Developed various web and client application, Technology Used: Perl, Javascript SQL Server 7.0 as the backend, ASP, Visual Basic, Oracle database',
        url : 'https://www.emsd.gov.hk/'
      },
      {
        employer : 'TechXpert',
        title : 'IT Specialists',
        location : 'ChinaChem Tower, Quarry Bay, Hong Kong',
        dates : 'July 2000 - Jan 2001',
        description : 'Developed server client based application for the Construction Industry Training Authority, Technology Used: Visual Basic 6.0 and SQL Server 7.0. Crystal Reports',
        url : '#'
      }      
    ],
    display : function() {
      octopus.viewRender();
    }    
  },

  projects : {
    projects : [
      {
        title : 'Frogger Arcade',
        dates : '2018',
        description : 'The Frogger arcade game is completely well written in JavaScript, which demonstrates the use of Object Oriented JavaScript.',
        images : ['images/frogger.png', 'images/frogger2.png'],
        url : 'https://github.com/singlun/Frogger_Arcade'
      },
      {
        title : 'Memory Game',
        dates : '2018',
        description : 'This is a complete browser-based JavaScript card matching game (also known as Concentration). This demonstrate the complete mastery of JavaScript.',
        images : ['images/memory.png','images/memory2.png'],
        url : 'https://github.com/singlun/memory_game'
      },
      {
        title : 'feedreader Test from Jasmine Test Framework',
        dates : '2018',
        description : 'This project is a web-based application that reads RSS feeds. The aim of this project is to test the application by using Jasmine JavaScript Testing Tool.',
        images : ['images/feedreader.png'],
        url : 'https://github.com/singlun/feedreader'
      },   
    ],
    display : function() {
      octopus.viewRender();
    }    
  }
}

/* ======= Octopus ======= */

var octopus = {
  init: function() {
      // tell our views to initialize
      resumeView.init();
  },
  
  // appendBio: function(htmlString) {
  //   $("#header").append(htmlString);
  // }, 

  appendSkills: function(htmlString) {
    $("#skills").append(htmlString);
  }, 
  
  appendHeader: function(htmlString) {
    $("#header").append(htmlString);
  }, 

  prependHeader: function(htmlString) {
    $("#header").prepend(htmlString);
  }, 
  
  appendTopContact: function(htmlString) {
    $("#topContacts").append(htmlString);
  },  
  
  appendWork: function(htmlString) {
    $("#workExperience").append(htmlString);
  },   

  appendProject: function(htmlString) {
    $("#projects").append(htmlString);
  },   
  
  appendEducation: function(htmlString) {
    $("#education").append(htmlString);
  },  
  
  appendOnline: function(htmlString) {
    $("#online").append(htmlString);
  },   

  appendSalary: function(htmlString) {
    $("#salary").append(htmlString);
  }, 
  
  // prependBio: function(htmlString) {
  //   $("#header").prepend(htmlString);
  // },

  viewRender: function() {
    resumeView.render();
  }
};    

/* ======= View ======= */

var resumeView = {
  init: function() {
    var formattedheaderName = HTMLheaderName.replace("%data%", model.bio.name);
    var formattedheaderRole = HTMLheaderRole.replace("%data%", model.bio.role);
    formattedheaderName = formattedheaderName + formattedheaderRole;
    octopus.prependHeader(formattedheaderName);

    // var formattedcontactGeneric = HTMLcontactGeneric.replace("%data%", work.jobs[job].location);
    var formattedHTMLmobile = HTMLmobile.replace("%data%", model.bio.contacts.mobile);
    octopus.appendTopContact(formattedHTMLmobile);
    var formattedHTMLemail = HTMLemail.replace("%data%", model.bio.contacts.email);
    octopus.appendTopContact(formattedHTMLemail);
    var formattedHTMLtwitter = HTMLtwitter.replace("%data%", model.bio.contacts.twitter);
    // octopus.appendTopContact(formattedHTMLtwitter);
    var formattedHTMLgithub = HTMLgithub.replace("%data%", model.bio.contacts.github);
    octopus.appendTopContact(formattedHTMLgithub);
    // var formattedHTMLblog = HTMLblog.replace("%data%", model.bio.contacts.mobile);
    var formattedHTMLlocation = HTMLlocation.replace("%data%", model.bio.contacts.location);
    octopus.appendTopContact(formattedHTMLlocation);


    var formattedHTMLbioPic= HTMLbioPic.replace("%data%", model.bio.biopic);
    octopus.appendHeader(formattedHTMLbioPic);
    var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", model.bio.welcomeMessage);
    octopus.appendHeader(formattedHTMLwelcomeMsg);

     octopus.appendHeader(HTMLskillsStart);
     
     var formattedHTMLskills = '';

     model.bio.skills.forEach(function(skill){
      formattedHTMLskills = HTMLskills.replace("%data%", skill);
      octopus.appendSkills(formattedHTMLskills);
     });
    
    octopus.appendHeader(HTMLworkStart);
    var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%url%", model.work.jobs[0].url);
    var formattedHTMLworkEmployer = formattedHTMLworkEmployer.replace("%data%", model.work.jobs[0].employer);
    var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", model.work.jobs[0].title);
    octopus.appendWork(formattedHTMLworkEmployer + formattedHTMLworkTitle); 
    var formattedHTMLworkDates = HTMLworkDates.replace("%data%", model.work.jobs[0].dates);
    octopus.appendWork(formattedHTMLworkDates); 
    var formattedHTMLworkLocation = HTMLworkLocation.replace("%data%", model.work.jobs[0].location);
    octopus.appendWork(formattedHTMLworkLocation); 
    var formattedHTMLworkDescription = HTMLworkDescription.replace("%data%", model.work.jobs[0].description);
    octopus.appendWork(formattedHTMLworkDescription);


    octopus.appendHeader(HTMLworkStart);
    var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%url%", model.work.jobs[1].url);
    var formattedHTMLworkEmployer = formattedHTMLworkEmployer.replace("%data%", model.work.jobs[1].employer);
    var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", model.work.jobs[1].title);
    octopus.appendWork(formattedHTMLworkEmployer + formattedHTMLworkTitle); 
    var formattedHTMLworkDates = HTMLworkDates.replace("%data%", model.work.jobs[1].dates);
    octopus.appendWork(formattedHTMLworkDates); 
    var formattedHTMLworkLocation = HTMLworkLocation.replace("%data%", model.work.jobs[1].location);
    octopus.appendWork(formattedHTMLworkLocation); 
    var formattedHTMLworkDescription = HTMLworkDescription.replace("%data%", model.work.jobs[1].description);
    octopus.appendWork(formattedHTMLworkDescription);


    octopus.appendHeader(HTMLworkStart);
    var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%url%", model.work.jobs[2].url);
    var formattedHTMLworkEmployer = formattedHTMLworkEmployer.replace("%data%", model.work.jobs[2].employer);
    var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", model.work.jobs[2].title);
    octopus.appendWork(formattedHTMLworkEmployer + formattedHTMLworkTitle); 
    var formattedHTMLworkDates = HTMLworkDates.replace("%data%", model.work.jobs[2].dates);
    octopus.appendWork(formattedHTMLworkDates); 
    var formattedHTMLworkLocation = HTMLworkLocation.replace("%data%", model.work.jobs[2].location);
    octopus.appendWork(formattedHTMLworkLocation); 
    var formattedHTMLworkDescription = HTMLworkDescription.replace("%data%", model.work.jobs[2].description);
    octopus.appendWork(formattedHTMLworkDescription);    

    octopus.appendHeader(HTMLprojectStart);
    var formattedHTMLprojectTitle = HTMLprojectTitle.replace("%url%", model.projects.projects[0].url);
    var formattedHTMLprojectTitle = formattedHTMLprojectTitle.replace("%data%", model.projects.projects[0].title);
    octopus.appendProject(formattedHTMLprojectTitle);  
    var formattedHTMLprojectDates = HTMLprojectDates.replace("%data%", model.projects.projects[0].dates);
    octopus.appendProject(formattedHTMLprojectDates);  
    var formattedHTMLprojectDescription = HTMLprojectDescription.replace("%data%", model.projects.projects[0].description);
    octopus.appendProject(formattedHTMLprojectDescription); 
    // var formattedHTMLprojectImage = HTMLprojectImage.replace("%data%", work.jobs[job].location);
    var formattedHTMLprojectImage = '';

    model.projects.projects[0].images.forEach(function(projectImg){
      formattedHTMLprojectImage = HTMLprojectImage.replace("%data%", projectImg);
      octopus.appendProject(formattedHTMLprojectImage);
    });  
    
    
    octopus.appendHeader(HTMLprojectStart);
    var formattedHTMLprojectTitle = HTMLprojectTitle.replace("%url%", model.projects.projects[1].url);
    var formattedHTMLprojectTitle = formattedHTMLprojectTitle.replace("%data%", model.projects.projects[1].title);
    octopus.appendProject(formattedHTMLprojectTitle);  
    var formattedHTMLprojectDates = HTMLprojectDates.replace("%data%", model.projects.projects[1].dates);
    octopus.appendProject(formattedHTMLprojectDates);  
    var formattedHTMLprojectDescription = HTMLprojectDescription.replace("%data%", model.projects.projects[1].description);
    octopus.appendProject(formattedHTMLprojectDescription); 
    // var formattedHTMLprojectImage = HTMLprojectImage.replace("%data%", work.jobs[job].location);
    var formattedHTMLprojectImage = '';

    model.projects.projects[1].images.forEach(function(projectImg){
      formattedHTMLprojectImage = HTMLprojectImage.replace("%data%", projectImg);
      octopus.appendProject(formattedHTMLprojectImage);
    });   
    
    
    octopus.appendHeader(HTMLprojectStart);
    var formattedHTMLprojectTitle = HTMLprojectTitle.replace("%url%", model.projects.projects[2].url);
    var formattedHTMLprojectTitle = formattedHTMLprojectTitle.replace("%data%", model.projects.projects[2].title);
    octopus.appendProject(formattedHTMLprojectTitle);  
    var formattedHTMLprojectDates = HTMLprojectDates.replace("%data%", model.projects.projects[2].dates);
    octopus.appendProject(formattedHTMLprojectDates);  
    var formattedHTMLprojectDescription = HTMLprojectDescription.replace("%data%", model.projects.projects[2].description);
    octopus.appendProject(formattedHTMLprojectDescription); 
    // var formattedHTMLprojectImage = HTMLprojectImage.replace("%data%", work.jobs[job].location);
    var formattedHTMLprojectImage = '';

    model.projects.projects[2].images.forEach(function(projectImg){
      formattedHTMLprojectImage = HTMLprojectImage.replace("%data%", projectImg);
      octopus.appendProject(formattedHTMLprojectImage);
    });   

    octopus.appendHeader(HTMLschoolStart); 
    var formattedHTMLschoolName = HTMLschoolName.replace("%url%", model.education.schools[0].url);
    console.log(formattedHTMLschoolName);    
    var formattedHTMLschoolName= formattedHTMLschoolName.replace("%data%", model.education.schools[0].name);
    console.log(formattedHTMLschoolName);  
    var formattedHTMLschoolDegree= HTMLschoolDegree.replace("%data%", model.education.schools[0].degree);
    octopus.appendEducation(formattedHTMLschoolName + formattedHTMLschoolDegree); 
    var formattedHTMLschoolDates= HTMLschoolDates.replace("%data%", model.education.schools[0].dates);
    octopus.appendEducation(formattedHTMLschoolDates);  
    var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", model.education.schools[0].location);
    octopus.appendEducation(formattedHTMLschoolLocation);  
    var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", model.education.schools[0].majors);
    octopus.appendEducation(formattedHTMLschoolMajor);  

    octopus.appendHeader(HTMLschoolStart);  
    var formattedHTMLschoolName = HTMLschoolName.replace("%url%", model.education.schools[1].url);  
    var formattedHTMLschoolName= formattedHTMLschoolName.replace("%data%", model.education.schools[1].name);
    var formattedHTMLschoolDegree= HTMLschoolDegree.replace("%data%", model.education.schools[1].degree);  
    octopus.appendEducation(formattedHTMLschoolName + formattedHTMLschoolDegree); 
    var formattedHTMLschoolDates= HTMLschoolDates.replace("%data%", model.education.schools[1].dates);
    octopus.appendEducation(formattedHTMLschoolDates);  
    var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", model.education.schools[1].location);
    octopus.appendEducation(formattedHTMLschoolLocation);  
    var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", model.education.schools[1].majors);
    octopus.appendEducation(formattedHTMLschoolMajor);      

   
    octopus.appendHeader(HTMLonlineClasses);    
    var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%url%", model.education.onlineCourses[0].courseUrl);  
    var formattedHTMLonlineTitle = formattedHTMLonlineTitle.replace("%data%", model.education.onlineCourses[0].title);
    var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", model.education.onlineCourses[0].school);
    octopus.appendOnline(formattedHTMLonlineTitle + formattedHTMLonlineSchool); 
    var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", model.education.onlineCourses[0].dates);
    octopus.appendOnline(formattedHTMLonlineDates); 
    var formattedHTMLonlineURL= HTMLonlineURL.replace("%data%", model.education.onlineCourses[0].url);    
    octopus.appendOnline(formattedHTMLonlineURL);  
    
    octopus.appendHeader(HTMLSalary);
    octopus.appendSalary(HTMLExpectedSal);     
  }
}; 

octopus.init();

}()); 

