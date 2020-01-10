var caseStudyList = document.getElementById("case-study-list");
var writingList = document.getElementById("writing-list");
var about = document.getElementById("about");
var caseStudiesContainer = document.getElementById("case-studies-container");
var articlesContainer = document.getElementById("articles-container");

//nav links
var homeLink = document.getElementById("home_link");
var aboutLink = document.getElementById("about_link");
var writingLink = document.getElementById("writing_link");

// case study links
var reallyMatters = document.getElementById("really-matters");
var ontoYou = document.getElementById("onto-you");
var justOne = document.getElementById("just-one");
var metrics = document.getElementById("metrics");
var skeumorphic = document.getElementById("skeumorphic");
var tryThis = document.getElementById("try-this");

// article links
var wreallyMatters = document.getElementById("w-really-matters");
var wontoYou = document.getElementById("w-onto-you");
var wjustOne = document.getElementById("w-just-one");
var wmetrics = document.getElementById("w-metrics");
var wskeumorphic = document.getElementById("w-skeumorphic");
var wtryThis = document.getElementById("w-try-this");

// navigation actions
homeLink.addEventListener("click", showCaseStudies);
aboutLink.addEventListener("click", showAbout);
writingLink.addEventListener("click", showWriting);

function showCaseStudies() {
  caseStudiesContainer.classList.add("hidden");
  articlesContainer.classList.add("hidden");
  writingList.classList.add("hidden");
  about.classList.add("hidden");
  caseStudyList.classList.remove("hidden");
}

function showAbout() {
  caseStudiesContainer.classList.add("hidden");
  articlesContainer.classList.add("hidden");
  caseStudyList.classList.add("hidden");
  writingList.classList.add("hidden");
  about.classList.remove("hidden");
}

function showWriting() {
  caseStudiesContainer.classList.add("hidden");
  articlesContainer.classList.add("hidden");
  about.classList.add("hidden");
  caseStudyList.classList.add("hidden");
  writingList.classList.remove("hidden");
}

// case study actions
reallyMatters.addEventListener("click", function() {
  includeHTML("really-matters", "case-study");
});

ontoYou.addEventListener("click", function() {
  includeHTML("onto-you", "case-study");
});

justOne.addEventListener("click", function() {
  includeHTML("just-one", "case-study");
});

metrics.addEventListener("click", function() {
  includeHTML("metrics", "case-study");
});

skeumorphic.addEventListener("click", function() {
  includeHTML("skeumorphic", "case-study");
});

tryThis.addEventListener("click", function() {
  includeHTML("try-this", "case-study");
});

// articles actions
wreallyMatters.addEventListener("click", function() {
  includeHTML("really-matters", "article");
});
wontoYou.addEventListener("click", function() {
  includeHTML("onto-you", "article");
});
wjustOne.addEventListener("click", function() {
  includeHTML("just-one", "article");
});
wmetrics.addEventListener("click", function() {
  includeHTML("metrics", "article");
});
wskeumorphic.addEventListener("click", function() {
  includeHTML("skeumorphic", "article");
});
wtryThis.addEventListener("click", function() {
  includeHTML("try-this", "article");
});

// include html snippet
function includeHTML(id, typeOfInfo) {
  var container;
  var fileFolder;
  if (typeOfInfo === "case-study") {
    container = "case-studies-container";
    fileFolder = "./case-studies/";
    articlesContainer.classList.add("hidden");
    caseStudiesContainer.classList.remove("hidden");
  } else {
    container = "articles-container";
    fileFolder = "./articles/";
    caseStudiesContainer.classList.add("hidden");
    articlesContainer.classList.remove("hidden");
  }
  // hide other elements
  caseStudyList.classList.add("hidden");
  writingList.classList.add("hidden");
  about.classList.add("hidden");
  // add needed elements
  var elmnt, file, xhttp;
  elmnt = document.getElementById(container);
  file = `${fileFolder}${id}`;
  if (file) {
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        if (this.status == 200) {
          elmnt.innerHTML = this.responseText;
        }
        if (this.status == 404) {
          elmnt.innerHTML = "Page not found.";
        }
      }
    };
    xhttp.open("GET", file, true);
    xhttp.send();
    return;
  }
}

// writing article actions
