// ANDRESSA
function openForm(elementName) {
  document.getElementById(elementName).style.display = "block";
}

function closeForm(elementName) {
  document.getElementById(elementName).style.display = "none";
}

// Vinicius
function abrirlink(url) {
  window.location.href = url;
}

// Bruna
function addListaDesejo(itemId, itemDescricao) {
  let produtos = new Array();

  if (localStorage.hasOwnProperty("produtos")) {
    produtos = JSON.parse(localStorage.getItem("produtos"));
  }
  produtos.push(itemId);
  localStorage.setItem("produtos", JSON.stringify(produtos));

  alert(itemDescricao + " adicionado na lista de desejo com sucesso.");
}

// Bruna
function existeListaDesejo(itemId) {
  let produtos = new Array();

  if (localStorage.hasOwnProperty("produtos")) {
    produtos = JSON.parse(localStorage.getItem("produtos"));
  }

  return produtos.filter((item) => item == itemId).length > 0;
}
