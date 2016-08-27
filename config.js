var config = {};

/* Against the definition of JSON Resume, we want
 * skills to show up before awards and publications.
 * We specify the order in this variable to build the
 * menu accordingly */
config.order = [
   "basics",
   "work",
   "volunteer",
   "education",
   "skills",
   "awards",
   "publications",
   "languages",
   "interests",
   "references"
];

config.skillLevels = {};
config.skillLevels.master = {};
config.skillLevels.advanced = {};
config.skillLevels.intermediate = {};
config.skillLevels.beginner = {};

config.skillLevels.master.value = 99;
config.skillLevels.advanced.value = 75;
config.skillLevels.intermediate.value = 60;
config.skillLevels.beginner.value = 50;

config.languageLevels = {};
config.languageLevels.native = {};
config.languageLevels.master = {};
config.languageLevels.advanced = {};
config.languageLevels.intermediate = {};
config.languageLevels.beginner = {};

config.languageLevels.native.value = 100;
config.languageLevels.master.value = 80;
config.languageLevels.advanced.value = 60;
config.languageLevels.intermediate.value = 40;
config.languageLevels.beginner.value = 20;

config.thumbnails = {};
config.thumbnails.basics = "https://unsplash.it/200/200/?image=1062";
config.thumbnails.work = "https://unsplash.it/200/200/?image=0";
config.thumbnails.volunteer = "https://unsplash.it/200/200/?image=785";
config.thumbnails.education ="https://unsplash.it/200/200/?image=635";
config.thumbnails.awards = "https://unsplash.it/200/200/?image=824";
config.thumbnails.publications = "https://unsplash.it/200/200/?image=1073";
config.thumbnails.skills ="https://unsplash.it/200/200/?image=817";
config.thumbnails.languages ="https://unsplash.it/200/200/?image=832";
config.thumbnails.interests ="https://unsplash.it/200/200/?image=816";
config.thumbnails.references ="https://unsplash.it/200/200/?image=759";

config.sections = {};
config.sections.basics = "Hello!";
config.sections.work = "Work Experience";
config.sections.volunteer = "Volunteer";
config.sections.education = "Education";
config.sections.awards = "Awards";
config.sections.publications = "Publications";
config.sections.skills = "Skills";
config.sections.languages = "Languages";
config.sections.interests = "Hobbies";
config.sections.references = "References";

module.exports = config;
