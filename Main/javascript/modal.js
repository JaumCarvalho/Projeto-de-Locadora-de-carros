const modal = document.querySelector('.modal-container');
const tbody = document.querySelector('tbody');
const sNome = document.querySelector('#m-nome');
const sModelo = document.querySelector('#m-modelo');
const sPlaca = document.querySelector('#m-placa');
const btnSalvar = document.querySelector('#btnSalvar');

let itens; //Armazenando os itens do bd
let id; //Armazenando o index para edição

// Função para "ativar" o modal adicionando a classe "active"
function openModal(edit = false, index = 0) {
  modal.classList.add('active');

  // Verificando se há um click fora do modal para "desativar" o modal
  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active');
    }
  }

  if (edit) {
    sNome.value = itens[index].nome;
    sModelo.value = itens[index].modelo;
    sPlaca.value = itens[index].placa;
    id = index;
  } else {
    sNome.value = '';
    sModelo.value = '';
    sPlaca.value = '';
  }
  
}

function editItem(index) {
  openModal(true, index);
}

function deleteItem(index) {
  itens.splice(index, 1);
  setItensBD();
  loadItens();
}


function insertItem(item, index) {
  let tr = document.createElement('tr');

  // Função para fazer a contagem de IDs
  function contar(count) {
    return document.querySelectorAll(count).length;
  }
  const qtd = contar('tr');
  
  // Adicionando uma linha a cada cadastro novo
  tr.innerHTML = `
    <td>${qtd}</td>
    <td>${item.nome}</td>
    <td>${item.modelo}</td>
    <td>${item.placa}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `

  tbody.appendChild(tr);
}

btnSalvar.onclick = e => {
  if (sNome.value == '' || sModelo.value == '' || sPlaca.value == '') {
    return;
  }

  e.preventDefault();

  if (id !== undefined) {
    itens[id].nome = sNome.value;
    itens[id].modelo = sModelo.value;
    itens[id].placa = sPlaca.value;
  } else {
    itens.push({'nome': sNome.value, 'modelo': sModelo.value, 'placa': sPlaca.value});
  }

  setItensBD();

  modal.classList.remove('active');
  loadItens();
  id = undefined;
}

function loadItens() {
  itens = getItensBD();
  tbody.innerHTML = '';
  itens.forEach((item, index) => {
    insertItem(item, index);
  })

}

//Pegando/setando itens do/pro bd
const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? [];
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens));

loadItens();

