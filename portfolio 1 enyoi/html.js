function abrirModal(titulo,descripcion,imagen){

  document.getElementById("myModal").style.display= "flex";
  document.getElementById("modal-title").textContent=titulo;
  document.getElementById("modal-edad").textContent=edad;
  document.getElementById("modal-correo").textContent=correo;
  document.getElementById("modal-ciudad").textContent=ciudad;


  

 }

 function cerrarModal(){

   document.getElementById("myModal").style.display= "none";
   

  }