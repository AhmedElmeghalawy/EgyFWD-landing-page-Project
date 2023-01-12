/**
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 * JS Version: ES2015/ES6
 * JS Standard: ESlint
 */



//getting the navbar element
var navBarButtonList = document.querySelector("#navbar__list");
console.log(navBarButtonList);

var sections = document.getElementsByTagName("section");
// iterating through each section to create the correspond nav button for it
for (let index = 0; index < sections.length; index++) {
  //create button element
  var sectionNavigationButton = document.createElement("sectionButton");
  //adding the class name "menu__link" in the css file to style the element
  sectionNavigationButton.classList.add("menu__link");
  //setting the button name as the section title by extracting the name from its attribute "data-nav"
  sectionNavigationButton.innerText = sections[index].getAttribute("data-nav");
  //changing the css style of the button to make it horizontal instead of vertical
  sectionNavigationButton.style.display = "inline-block";

  //adding an event to jump into the desired section by its index + adding a smooth animation when scrolling
  sectionNavigationButton.onclick = function () {
    sections[index].scrollIntoView({ behavior: "smooth" });
  };

  //appending  the above element(sectionNavigationButton) to the navbar as its child
  navBarButtonList.appendChild(sectionNavigationButton);
}

//listing when scrolling happend so we would call 
document.addEventListener("scroll", function() { MakeCurrentViewdElementOnScreenActive();});

//addin ActiveClass to the current viewd element(Section Element)
function MakeCurrentViewdElementOnScreenActive(){
    var topValue = 150;
    var bottomValue = 150;
    for (let index = 0; index < sections.length; index++) {
        let sectionElementAreaBox = sections[index].getBoundingClientRect();

        if (sectionElementAreaBox.top <= topValue && sectionElementAreaBox.bottom >= bottomValue) {
            sections[index].classList.add("your-active-class");
            } else {
            sections[index].classList.remove("your-active-class");
            }

    }
}


//getting the scrolling to the Top Button 
var toTopButton = document.getElementById("topButtonId");
var topPageCustomElement =  document.getElementById("topOfPage");
//calling to the built-in scrollIntoView when clicking event happens
// {behavior: "smooth"} adds smoothing transition while going to the top of the page.
  toTopButton.onclick = function () {
    topPageCustomElement.scrollIntoView({ behavior: "smooth" });
  };



/**
 * End Global Variables
 * Start Helper Functions
 *
 */
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
// build the nav
// Add class 'active' to section when near top of viewport
// Scroll to anchor ID using scrollTO event
// Make sections active
/**
 * End Main Functions
 * Begin Events
 *
 */
// Build menu
// Scroll to section on link click
// Set sections as active









//notes for future me when updating the project😀
/**

Stuff that still required are:
-Adding transparency effect to to nav bar,
-Making the scroll button a bit modern it looks like a  button from the 90s,
-The github(version control) thingy.

 */