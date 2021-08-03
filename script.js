// Gerador de senhas
let senhaA = document.getElementById('senhaG')

let senha = 0

function clickBtn() {
    let length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%¨&*()",
        senhaF = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        senhaF += charset.charAt(Math.floor(Math.random() * n));
    }

    senhaA.innerText = senhaF
}


// Copiar e colar. ClipboardJS
let copiarColar = new ClipboardJS('#copiar')


// Fazer o botão de copiar e a senha gerada aparecer. JQuery
$(document).ready (function() {
  
    $("#btn1").click( function() {
      
      $("#btn1").fadeOut(0);
      $("#copiar").fadeIn(0);
      $("#senhaG").fadeIn(0);
      
      });
   
    
    });

$(document).ready (function() {
  
    $("#copiar").click( function() {
      
        $("#copiar").fadeOut(0);
        $("#senhaG").fadeOut(0);
        $("#btn1").fadeIn(0);
      
      });
   
    
    });
