function activateTab(index) {
  const tabs = document.querySelectorAll(".sidebar__nav > li"); 
  tabs.forEach((tab) => tab.classList.remove("activ")); 
  tabs[index].classList.add("activ");
}

function activateTabContent(index) {
  const tabContents = document.querySelectorAll(".content-sidebar > div");
  tabContents.forEach((content) => content.classList.remove("activ"));
  tabContents[index].classList.add("activ");
}

function clickTab(index) {
  activateTab(index);
  activateTabContent(index);
}

function onLoad() {
  const tabs = document.querySelectorAll(".sidebar__nav > li");

  tabs.forEach((tab, index) =>
    tab.addEventListener("click", () => clickTab(index))
  );
}
  
window.addEventListener("load", onLoad);


