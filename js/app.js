



//getting the navBar element, so we would later append to it new created nav buttons acording to how many section on the page.
let navBar = document.querySelector("#navbar__list");

//getting the current sections on the html page, And based on how many of them, we would create the nav buttons.
let sections = document.getElementsByTagName("section");




//now we iterate through each section to create the correspond nav button for it
for (let index = 0; index < sections.length; index++) {

  // creating a new button using a function and passing the argument that passes the name and the function that we want to call when clickin gon that button.
  // the {behavior:"smooth"} part is adding a smooth transition animation when scrolling.
 let newButton = createNavButton(sections[index].getAttribute("data-nav")
                              , function () {sections[index].scrollIntoView({ behavior: "smooth" })});

  //appending  the above element(newButton) to the navbar as its child
  navBar.appendChild(newButton);
}


let addNewSectionButton = document.querySelector("#add_new_section");

let sectionsParent = document.querySelector("#sectionsParent");


addNewSectionButton.onclick = function() {
  let newSection =  createSection("New Section");
  sectionsParent.appendChild(newSection);
}


function createSection(SectionName){

  let sectionTemplate = `<section id="${SectionName}" data-nav="${SectionName}">
        <div class="landing__container">
          <h2>${SectionName}</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

          <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
        </div>
      </section>`;

      let container = document.createElement("div");
      container.innerHTML = sectionTemplate;

  return container;
}



function createNavButton(Name,ExcuteOnClick){

  let sectionNavigationButton = null;
  //create button element
  sectionNavigationButton = document.createElement("li");
  //adding the class name "menu__link" in the css file to style the element
  sectionNavigationButton.classList.add("menu__link");
  //setting the button name as the section title by extracting the name from its attribute "data-nav"
  sectionNavigationButton.innerText = Name;
  //changing the css style of the button to make it horizontal instead of vertical
  sectionNavigationButton.style.display = "inline-block";

  //passing the parameter(ExcuteOnClick) to the new button to excute on click...
  //in out case(this project) it will be the scrolling to the desired section element on the page.
  sectionNavigationButton.onclick = ExcuteOnClick;

  // returening all above as html element
  return sectionNavigationButton;
}



//listing when scrolling happend so we would call 
document.addEventListener("scroll", function() { MakeCurrentViewdElementOnScreenActive();});

//addin ActiveClass to the current viewd element(Section Element)
function MakeCurrentViewdElementOnScreenActive(){
    let topValue = window.innerHeight;
    let bottomValue = 150;
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
let toTopButton = document.getElementById("topButtonId");
let topPageCustomElement =  document.getElementById("topOfPage");
//calling to the built-in scrollIntoView when clicking event happens
// {behavior: "smooth"} adds smoothing transition while going to the top of the page.
  toTopButton.onclick = function () {
    topPageCustomElement.scrollIntoView({ behavior: "smooth" });
  };



/**
 * End Global letiables
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





/**
notes for future features to add to the project😀:

-Adding transparency effect to nav bar when stopping scrolling.
-Better commenting.
-Editing the Readme.md File.
-Updating the scroll-to-top button.

 */