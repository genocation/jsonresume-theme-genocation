var fs = require("fs");
var _ = require("lodash");
var Handlebars = require("handlebars");
var utils = require('jsonresume-themeutils');
var config = require('./config');
var imgDir = "/public/img/";

var capitalize = function(str) {
   return str.charAt(0).toUpperCase()+str.slice(1);
}

function render(resume) {
   var css = fs.readFileSync(__dirname + "/style.css", "utf-8");
   var tpl = fs.readFileSync(__dirname + "/resume.hbs", "utf-8");

   /**
    * To-Do: Configurable section order
    **/
   var menu = [];
   var section;
   var imgPath = "";
   _.each(config.order, function(i) {
      if ((resume[i].length > 0) || (i === "basics")) {
         // Create menu element with name and link
         section = {};
         section.name = config.sections[i];
         section.link = i;
         menu.push(section);
         // Create thumbnail, if the picture is available
         // then assign this picture, else assign placeholder
         imgPath = __dirname+imgDir+i+".png";
         // Check synchronously if the thumbnail file exists
         // in the file system, else assign the remote placeholder
         // from unsplash.it
         try {
            fs.accessSync(imgPath, fs.F_OK);
            // Correct access
            resume[i].thumbnail = "img/"+i+".png";
         } catch (e) {
            // Failed access
            resume[i].thumbnail = config.thumbnails[i];
         }
         // The basics.picture field in the JSON resume overrides
         // the image available in the directory as basics.png
         if (resume.basics.picture) {
            resume[i].thumbnail = resume.basics.picture;
         } 
      }
   });
   resume.menu = menu;

   /* Time duration at job positions */
   _.each(resume.work, function(job) {
      var startDate = job.startDate;
      var endDate = job.endDate?job.endDate:new Date();
      var sD = utils.getFormattedDate(startDate, 'MMM, YYYY');
      var eD = utils.getFormattedDate(endDate, 'MMM, YYYY');
      var dur = utils.getDuration(startDate, endDate, true);

      if (job.endDate) {
         job.endDate = eD;
      } else {
         job.endDate = "Present";
      }

      if (job.startDate) {
         job.startDate = sD;
         job.duration = dur;
      } else {
         job.startDate = "Unknown";
         job.duration = "";
      }
   });

   /* Time duration at volunteer positions */
   _.each(resume.volunteer, function(job) {
      var startDate = job.startDate;
      var endDate = job.endDate?job.endDate:new Date();
      var sD = utils.getFormattedDate(startDate, 'MMM, YYYY');
      var eD = utils.getFormattedDate(endDate, 'MMM, YYYY');
      var dur = utils.getDuration(startDate, endDate, true);

      if (job.endDate) {
         job.endDate = eD;
      } else {
         job.endDate = "Present";
      }

      if (job.startDate) {
         job.startDate = sD;
         job.duration = dur;
      } else {
         job.startDate = "Unknown";
         job.duration = "";
      }
   });

   /* Time formatting for education, showing only years in one line */
   _.each(resume.education, function(study) {
      var startDate = study.startDate;
      var endDate = study.endDate;
      var period;

      if (startDate && endDate) {
         var sY = utils.getFormattedDate(startDate, 'YYYY');
         var eY = utils.getFormattedDate(endDate, 'YYYY');
         period = sY + " to " + eY;
      } else {
         if (startDate) {
            var sY = utils.getFormattedDate(startDate, 'YYYY');
            period = sY + " to Present";
         } else {
            var eY = utils.getFormattedDate(endDate, 'YYYY');
            period = "Finished on "+eY;
         }
      }
      study.period = period;
   });

   /* Skill progress bar configuration */
   _.each(resume.skills, function(s) {
      // Levels are "Master", "Advanced", "Intermediate" and "Beginner"
      // To add more levels, edit config.js, add class name and its value 
      // To-Do: create less automatic generation of gradients for the skill
      // bars depending on the number of levels available
      if (s.level) {
         if (config.skillLevels[s.level.toLowerCase()]) {
            s.value = config.skillLevels[s.level.toLowerCase()].value;
            s.className = s.level.toLowerCase();
         }
      }
   });

   /* Time formatting for the awards */
   _.each(resume.awards, function(a) {
      if (a.date) {
         a.date = utils.getFormattedDate(a.date, 'MMM, YYYY');
      }
   });

   /* Time formatting for the publications */
   _.each(resume.publications, function(pub) {
      if (pub.releaseDate) {
         pub.releaseDate = utils.getFormattedDate(pub.releaseDate, 'MMM, YYYY');
      }
   });


   /* Fluency for languages */
   _.each(resume.languages, function(lang) {
      // Levels are "Native", "Master", "Advanced", "Intermediate" and "Beginner"
      // Master is equivalent to "Proficiency" level
      if (lang.fluency) {
         if (config.languageLevels[lang.fluency.toLowerCase()]) {
            lang.value = config.languageLevels[lang.fluency.toLowerCase()].value;
            lang.className = lang.fluency.toLowerCase();
         }
      }
   });

   /* Social Icons */
   _.each(resume.basics.profiles, function(p) {
      switch (p.network.toLowerCase())  {
         /* SOCIAL */
         case "fb":
         case "facebook":
            p.icon = "fa fa-facebook";
            break;
         case "tw":
         case "twitter":
            p.icon = "fa fa-twitter";
            break;
         case "google":
         case "google+":
         case "googleplus":
         case "gplus":
            p.icon = "fa fa-google-plus";
            break;

         /* BLOGS */
         case "blog":
         case "rss":
            p.icon = "fa fa-rss";
            break;
         case "tumblr":
         case "tumbler":
            p.icon = "fa fa-tumblr";
            break;
         case "wp":
         case "word-press":
         case "wordpress":
            p.icon = "fa fa-wordpress";
            break;

         /* PROFESSIONAL */
         case "ln":
         case "linkedin":
            p.icon = "fa fa-linkedin-square";
            break;
         case "angel":
         case "angelist":
         case "angellist":
            p.icon = "fa fa-angellist";
            break;
 
         /* CODE AND REPOS */
         case "github":
            p.icon = "fa fa-github";
            break;
         case "bitbucket":
            p.icon = "fa fa-bitbucket";
            break;
         case "stack-overflow":
         case "stackoverflow":
            p.icon = "fa fa-stack-overflow";
            break;
         case "codepen":
            p.icon = "fa fa-codepen";
            break;
         case "jsfiddle":
            p.icon = "fa fa-jsfiddle";
            break;

         /* PICTURES AND DESIGN */
         case "flickr":
         case "flicker":
            p.icon = "fa fa-flickr";
            break;
         case "instagram":
            p.icon = "fa fa-instagram";
            break;
         case "500px":
            p.icon = "fa fa-500px";
            break;
         case "deviantart":
            p.icon = "fa fa-deviantart";
            break;
         case "dribble":
            p.icon = "fa fa-dribble";
            break;

         /* VIDEO */
         case "youtube":
            p.icon = "fa fa-youtube";
            break;
         case "vimeo":
            p.icon = "fa fa-vimeo";
            break;

         /* MUSIC */
         case "soundcloud":
            p.icon = "fa fa-soundcloud";
            break;
         case "spotify":
            p.icon = "fa fa-spotify";
            break;
         case "lastfm":
            p.icon = "fa fa-lastfm";
            break;

         /* OTHERS. Why to put this in a CV anyway? */
         case "pinterest":
            p.icon = "fa fa-pinterest-p";
            break;
         case "steam":
            p.icon = "fa fa-steam";
            break;
         case "reddit":
            p.icon = "fa fa-reddit";
            break;

         default:
            p.icon = "fa fa-"+p.network.toLowerCase();
      }
   });

   return Handlebars.compile(tpl)({
      css: css,
      resume: resume
   });
}

module.exports = {
   render: render
};
