


//getting the navBar element, so we would later append to it new created nav buttons acording to how many section on the page.
const navBar = document.querySelector("#navbar__list");

//getting the current sections on the html page, And based on how many of them, we would create the nav buttons.
const sections = document.getElementsByTagName("section");

const sectionsParent = document.querySelector("#sectionsParent");


//first we populate the nave bar based on how many sections there are in the html page..
PopulateNavBar();

//secoundly we add A new Button To the list of the navbar buttons for creating new sections
createAddNewSectionButton();

//now when we interract with the add new section button..
let newSectionCount = 0;
function createAddNewSectionButton() {
  //creating the "adding new section button"
  const addNewSectionButton = createNavButton("[+]");

  //when creating the buttons the hilighting class goes away because we set innet html to "" of navbar so we call the methoud below to reffresh the sections elements
  //and assigne them again to their coresponding nav button andj by that the coresponding button get the hilightet link calss agin which fix the bug.
  MakeCurrentViewdElementOnScreenActive();

  //adding the "createSection" method to the button when we click it
  addNewSectionButton.onclick = function () {
    newSectionCount++;

    //creating new section and adding a number to it for the navigationButton to use later
    const newSection = createSection("Section " + newSectionCount);
    //appending the new section to "sectionsParent"
    sectionsParent.appendChild(newSection);

    //after we added the new section, we call the "PopulateNavBar" again, so it would read all the sections including the one we created above,
    //we do that so it would create a new navbar button that corspond to the new section
    PopulateNavBar();

    //the addNewSectionButton([+]) get destroyed every time we calle the PopulateNavBar()...
    //so we create it again ...
    createAddNewSectionButton();

    //Notice that:
    //The above code excuted only on click..
    //So basicly the button destroy itself then recreate itself again on click..
  };

  //after creating the section append its nav button to the navBar.
  navBar.appendChild(addNewSectionButton);
}

function PopulateNavBar() {
  //remove everything that in the navBar;
  navBar.innerHTML = "";

  //now we iterate through each section to create the correspond nav button for it
  for (let index = 0; index < sections.length; index++) {
    // creating a new button using a function and passing the argument that passes the name and the function that we want to call when clickin gon that button.
    // the {behavior:"smooth"} part is adding a smooth transition animation when scrolling.
    const newButton = createNavButton(
      sections[index].getAttribute("data-nav"),
      function () {
        sections[index].scrollIntoView({ behavior: "smooth" });
      }
    );

    //appending  the above element(newButton) to the navbar as its child
    navBar.appendChild(newButton);
  }
}

function createSection(SectionName) {
  const container = document.createElement("section");
  container.id = SectionName.split(" ").join("");
  container.dataset.nav = SectionName.split(" ").join("");

  container.innerHTML = `<div class="landing__container">
        <h2>${SectionName}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

        <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
      </div>`;

  return container;
}

function createNavButton(Name, ExcuteOnClick) {

  //create button element
 const sectionNavigationButton = document.createElement("li");
  //adding the class name "menu__link" in the css file to style the element
  sectionNavigationButton.classList.add("menu__link");
  sectionNavigationButton.setAttribute("data-nav", Name);
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
document.addEventListener("scroll", function () {
  MakeCurrentViewdElementOnScreenActive();
});

//addin ActiveClass to the current viewd element(Section Element)
function MakeCurrentViewdElementOnScreenActive() {
  const topValue = 220;
  const bottomValue = 350;
  for (let index = 0; index < sections.length; index++) {
    const sectionElementAreaBox = sections[index].getBoundingClientRect();

    // console.log(sections[index].dataset.nav +" top = "+sectionElementAreaBox.top);
    // console.log(sections[index].dataset.nav +" top = "+sectionElementAreaBox.bottom);

    if (
      sectionElementAreaBox.top <= topValue &&
      sectionElementAreaBox.bottom >= bottomValue
    ) {
      sections[index].classList.add("your-active-class");
      activeLink = navBar.querySelector(`[data-nav=${sections[index].id}]`);
      if (activeLink != null) {
        activeLink.classList.add("highlight-link");
      }
    } else {
      sections[index].classList.remove("your-active-class");
      activeLink = navBar.querySelector(`[data-nav=${sections[index].id}]`);
      if (activeLink != null) {
        activeLink.classList.remove("highlight-link");
      }
    }
  }
}

//getting the scrolling to the Top Button
const toTopButton = document.getElementById("topButtonParentId");
const topPageCustomElement = document.getElementById("topOfPage");
//calling to the built-in scrollIntoView when clicking event happens
// {behavior: "smooth"} adds smoothing transition while going to the top of the page.
toTopButton.onclick = function () {
  topPageCustomElement.scrollIntoView({ behavior: "smooth" });
};



