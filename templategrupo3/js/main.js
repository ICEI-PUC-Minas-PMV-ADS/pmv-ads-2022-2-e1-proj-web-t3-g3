// ANDRESSA
function openForm(elementName) {
  document.getElementById(elementName).style.display = "block";
}

function closeForm(elementName) {
  document.getElementById(elementName).style.display = "none";
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


// Vinicius


function abrirlink(url) {
  window.location.href = url;
}

$(document).ready(function(){

  $.ajaxSetup({ cache: false });

  var url_string = window.location.href;
  var url = new URL(url_string);
  var params = url.searchParams.get("pesquisar"); //pega o value

 var searchField = params;
 var expression = new RegExp(searchField, "i");

 if(searchField != ""){

 $.getJSON('../json/listaProdutos.json', function(data) {

 $.each(data, function(key, value){
     if (value.descricao.search(expression) != -1 || value.descricao.search(expression) != -1)
     {
     $('#divListaProdutos').append('<div class="box_imagem"><img src="../'+value.urlImg+'" height="60"/><p>'+value.descricao+' </br>'+value.preco+'</p></div>');
     }
 }); 
     
 });

 }else{
     alert("Por favor, digite um produto!")
 }     

  $('#searchs').submit(function(e){

         e.preventDefault();

         $('#divListaProdutos').html('');
         $('#state').val('');

         var searchField = $('#inputsrc').val();
         var expression = new RegExp(searchField, "i");

         if(searchField != ""){

         $.getJSON('../json/listaProdutos.json', function(data) {

         $.each(data, function(key, value){
             if (value.descricao.search(expression) != -1 || value.descricao.search(expression) != -1){
                $('#divListaProdutos').append('<div class="box_imagem"><img src="../'+value.urlImg+'" height="60"/><p>'+value.descricao+' </br>'+value.preco+'</p></div>');
             }
         }); 
             
         });

         }else{
             alert("Por favor, digite um produto!")
         }

  });

  
  $('#result').on('click', 'li', function() {

    var click_text = $(this).text().split('|');
    $('#inputsrc').val($.trim(click_text[0]));
    $("#result").html('');

  });

 });
