//Déclaration variable
var form = $('form');
var chatSelect = $('select');
var messageTextarea = $('textarea');
var div = $('div#control');


function onSubmit(event) {
// J'empeche la page de se recharger
    event.preventDefault();
 
// 2 on reset tous les p.error en les masquant
    var nbErrors = 0;
    $('p.error').text("").hide();
    div.hide();
 
// Je récupere les valeurs de tous les champs
    var chat = chatSelect.val();
    var message = messageTextarea.val();
 
 
// Traitements des erreurs du champ "Choix du chat"
// Affichage d'un texte si erreur
    if (chat == 0) {
     chatSelect.next().text("vous devez sélectionner un choix").show();
     nbErrors++;
     
    }
 //Traitements des erreurs du champ "Raison d'adoption"
 // Affichage d'un texte si erreur
    if (message.length < 15) {
     messageTextarea.next().text("le message doit comporter au moins 15 caractères").show();
     nbErrors++;
    }
  
 //Affichage d'une box en cas de succés
 
    if (nbErrors == 0) {
     div.removeClass('danger');
     div.addClass('success');
     div.text("Le formulaire a été envoyé !").slideDown();
    }
    else {
        
        div.addClass('form-border');
        div.removeClass('form')
    }
    
   
   }
 
   form.on('submit', onSubmit);