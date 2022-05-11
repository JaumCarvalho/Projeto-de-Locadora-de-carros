//Função para "ativar" as li adicionando a classe "activ"
function activateTab(index) {
  const tabs = document.querySelectorAll(".sidebar__nav > li");

  //Percorrendo entre as li como um array
  tabs.forEach((tab) => tab.classList.remove("activ")); 
  tabs[index].classList.add("activ");
}

//Função para "ativar" as div adicionando a classe "activ"
function activateTabContent(index) {
  const tabContents = document.querySelectorAll(".content-sidebar > div");

  //Percorrendo entre as div como um array
  tabContents.forEach((content) => content.classList.remove("activ"));
  tabContents[index].classList.add("activ");
}

// Ativando os conteúdos
function clickTab(index) {
  activateTab(index);
  activateTabContent(index);
}

// Função para trocar de opção
function onLoad() {
  const tabs = document.querySelectorAll(".sidebar__nav > li");
  tabs.forEach((tab, index) =>
    tab.addEventListener("click", () => clickTab(index))
  );
}
  
window.addEventListener("load", onLoad);


