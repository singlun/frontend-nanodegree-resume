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
    skills : ['Java', 'PHP', 'JavaScrit', 'Git-Bash','Git-Hub'] ,
    biopic  : 'images/me.png',
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
        url : 'www.polyu.edu.hk'
      },
      {
        name : 'Chai Wan Technical College',
        location : 'Chai Wan Hong Kong',
        degree : 'Higher Diploma In Information Systems',
        majors : 'Information Systems',
        dates : '1997 - 2000',
        url : ''
      }
    ],    

    onlineCourses : [
      {
        title : 'Udacity Front-End Developer Nanodegree Course',
        school : 'Udacity',
        dates : '2018 - 2019',
        url : 'https://www.udacity.com'
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
        description : 'Home business - fabrication of Dental appliance'
      },
      {
        employer : 'The HKSAR Electrical And Mechanical Services Department',
        title : 'Information Technology Specialist',
        location : 'EMSD Kwoloon Bay',
        dates : '2001 - 2006',
        description : 'Developed various web and client application'
      },
      {
        employer : 'TechXpert',
        title : 'IT Specialists',
        location : 'ChinaChem Tower, Quarry Bay, Hong Kong',
        dates : 'July 2000 - Jan 2001',
        description : 'Developed server client based application for the Construction Industry Training Authority'
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
      },
      {
        title : 'Memory Game',
        dates : '2018',
        description : 'This is a complete browser-based JavaScript card matching game (also known as Concentration). This demonstrate the complete mastery of JavaScript.',
        images : ['images/memory.png','images/memory2.png'],
      },
      {
        title : 'feedreader Test from Jasmine Test Framework',
        dates : '2018',
        description : 'This project is a web-based application that reads RSS feeds. The aim of this project is to test the application by using Jasmine JavaScript Testing Tool.',
        images : ['images/feedreader.png'],
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
    octopus.appendTopContact(formattedHTMLtwitter);
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
    var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", model.work.jobs[0].employer);
    var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", model.work.jobs[0].title);
    octopus.appendWork(formattedHTMLworkEmployer + formattedHTMLworkTitle); 
    var formattedHTMLworkDates = HTMLworkDates.replace("%data%", model.work.jobs[0].dates);
    octopus.appendWork(formattedHTMLworkDates); 
    var formattedHTMLworkLocation = HTMLworkLocation.replace("%data%", model.work.jobs[0].location);
    octopus.appendWork(formattedHTMLworkLocation); 
    var formattedHTMLworkDescription = HTMLworkDescription.replace("%data%", model.work.jobs[0].description);
    octopus.appendWork(formattedHTMLworkDescription);


    octopus.appendHeader(HTMLworkStart);
    var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", model.work.jobs[1].employer);
    var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", model.work.jobs[1].title);
    octopus.appendWork(formattedHTMLworkEmployer + formattedHTMLworkTitle); 
    var formattedHTMLworkDates = HTMLworkDates.replace("%data%", model.work.jobs[1].dates);
    octopus.appendWork(formattedHTMLworkDates); 
    var formattedHTMLworkLocation = HTMLworkLocation.replace("%data%", model.work.jobs[1].location);
    octopus.appendWork(formattedHTMLworkLocation); 
    var formattedHTMLworkDescription = HTMLworkDescription.replace("%data%", model.work.jobs[1].description);
    octopus.appendWork(formattedHTMLworkDescription);


    octopus.appendHeader(HTMLworkStart);
    var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", model.work.jobs[2].employer);
    var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", model.work.jobs[2].title);
    octopus.appendWork(formattedHTMLworkEmployer + formattedHTMLworkTitle); 
    var formattedHTMLworkDates = HTMLworkDates.replace("%data%", model.work.jobs[2].dates);
    octopus.appendWork(formattedHTMLworkDates); 
    var formattedHTMLworkLocation = HTMLworkLocation.replace("%data%", model.work.jobs[2].location);
    octopus.appendWork(formattedHTMLworkLocation); 
    var formattedHTMLworkDescription = HTMLworkDescription.replace("%data%", model.work.jobs[2].description);
    octopus.appendWork(formattedHTMLworkDescription);    

    octopus.appendHeader(HTMLprojectStart);
    var formattedHTMLprojectTitle = HTMLprojectTitle.replace("%data%", model.projects.projects[0].title);
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
    var formattedHTMLprojectTitle = HTMLprojectTitle.replace("%data%", model.projects.projects[1].title);
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
    var formattedHTMLprojectTitle = HTMLprojectTitle.replace("%data%", model.projects.projects[2].title);
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
    var formattedHTMLschoolName= HTMLschoolName.replace("%data%", model.education.schools[0].name);
    var formattedHTMLschoolDegree= HTMLschoolDegree.replace("%data%", model.education.schools[0].degree);  
    octopus.appendEducation(formattedHTMLschoolName + formattedHTMLschoolDegree); 
    var formattedHTMLschoolDates= HTMLschoolDates.replace("%data%", model.education.schools[0].dates);
    octopus.appendEducation(formattedHTMLschoolDates);  
    var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", model.education.schools[0].location);
    octopus.appendEducation(formattedHTMLschoolLocation);  
    var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", model.education.schools[0].majors);
    octopus.appendEducation(formattedHTMLschoolMajor);  

    octopus.appendHeader(HTMLschoolStart);    
    var formattedHTMLschoolName= HTMLschoolName.replace("%data%", model.education.schools[1].name);
    var formattedHTMLschoolDegree= HTMLschoolDegree.replace("%data%", model.education.schools[1].degree);  
    octopus.appendEducation(formattedHTMLschoolName + formattedHTMLschoolDegree); 
    var formattedHTMLschoolDates= HTMLschoolDates.replace("%data%", model.education.schools[1].dates);
    octopus.appendEducation(formattedHTMLschoolDates);  
    var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", model.education.schools[1].location);
    octopus.appendEducation(formattedHTMLschoolLocation);  
    var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", model.education.schools[1].majors);
    octopus.appendEducation(formattedHTMLschoolMajor);      

   
    octopus.appendHeader(HTMLonlineClasses);    
    var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", model.education.onlineCourses[0].title);
    var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", model.education.onlineCourses[0].school);
    octopus.appendOnline(formattedHTMLonlineTitle + formattedHTMLonlineSchool); 
    var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", model.education.onlineCourses[0].dates);
    octopus.appendOnline(formattedHTMLonlineDates); 
    var formattedHTMLonlineURL= HTMLonlineURL.replace("%data%", model.education.onlineCourses[0].url);    
    octopus.appendOnline(formattedHTMLonlineURL); 

    $(document).ready(function() {
      $('button').click(function() {
        var $name = $('#name');
        var iName = inName($name.text()) || function(){};
        $name.html(iName);
      });
    });

    var clickLocations = [];

    function logClicks(x,y) {
      clickLocations.push(
        {
          x: x,
          y: y
        }
      );
      console.log('x location: ' + x + '; y location: ' + y);
    }
    
    $(document).click(function(loc) {
      // your code goes here!
    });    

    this.map = '';    // declares a global map variable

    window.addEventListener('load', this.initializeMap());

    // window.addEventListener('resize', function(e) {
    //   //Make sure the map bounds get updated on page resize
    //  this.map.fitBounds(mapBounds);
    // });    
              
  },

  initializeMap: function() {
    this.locations = [];

    var mapOptions = {
      disableDefaultUI: true
    };

    this.map = new google.maps.Map(document.querySelector('#mapDiv'), mapOptions);
    window.mapBounds = new google.maps.LatLngBounds();
    this.locationFinder();
    //this.pinPoster(this.locations);
  },

  locationFinder: function() {
    // initializes an empty array
    //this.locations = [];

    // adds the single location property from bio to the locations array
    this.locations.push(model.bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    model.education.schools.forEach(function(school){
      locations.push(school.location);
    });

    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    model.work.jobs.forEach(function(job){
      locations.push(job.location);
    });
  },

  createMapMarker: function(placeData) {
    // The next lines save location data from the search result object to local variables
    lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: this.map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    this.map.fitBounds(bounds);
    // center the map
    this.map.setCenter(bounds.getCenter());
  },

  callback: function(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      this.createMapMarker(results[0]);
    }
  },

  pinPoster: function(locations) {
    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(this.map);

    // Iterates through the array of locations, creates a search object for each location
      locations.forEach(function(place){
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  },
}; 

octopus.init();

}()); 

