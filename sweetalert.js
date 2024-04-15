//Carga//
document.querySelector('.loader').style.display = 'block';

window.addEventListener('load', function() {
  document.querySelector('.loader').style.display = 'none';
  document.getElementById('content').style.display = 'block';
});

//Mensaje//
function mostrarMensaje() {
  var nombre = prompt("Introduce tu nombre:");
  var genero = prompt("Introduce tu género (hombre/mujer):");
  var mensaje = "";
  
  if (genero.toLowerCase() === "hombre") {
      mensaje = "Bienvenido, " + nombre + "!";
  } else if (genero.toLowerCase() === "mujer") {
      mensaje = "Bienvenida, " + nombre + "!";
  } else {
      mensaje = "Bienvenid@, " + nombre + "!";
  }

  Swal.fire({
      title: '<video class="gif" src="img del principio/Gif intro.mp4" autoplay muted playinline loop>',
      html: '<p>¡Bienvenid<span id="genero">' + (genero.toLowerCase() === "hombre" ? "o" : "a") + '</span> a mi portafolio, <span id="nombre">' + nombre + '</span>!</p>',
      allowOutsideClick: false,
      // Llamar a la función para mostrar el mensaje de bienvenida
      // html:
      // icon: 'error'
      // confirmButtonText:
      // footer:
      width: '70%',
      // padding:
      background: '#ECE97F',
      // grow:
      // backdrop:
      // timer:
      // timerProgressBar:
      // toast:
      // position:
      allowOutsideClick: false,
      allowEscapeKey: false,
      // allowEnterKey:
      stopKeydownPropagation: true,

      // input:
      // inputPlaceholder:
      // inputValue:
      // inputOptions:
      
      //  customClass:
      // 	container:
      // 	popup:
      // 	header:
      // 	title:
      // 	closeButton:
      // 	icon:
      //  image:
      // 	content:
      // 	input:
      // 	actions:
      //  confirmButton:
      // 	cancelButton:
      // 	footer:	

      // showConfirmButton:
      // confirmButtonColor:
      // confirmButtonAriaLabel:

      // showCancelButton:
      // cancelButtonText:
      // cancelButtonColor:
      // cancelButtonAriaLabel:
      
      // buttonsStyling:
      showCloseButton: true,
      // closeButtonAriaLabel:

      // imageUrl:
      // imageWidth:
      // imageHeight:
      // imageAlt:

        });
}


mostrarMensaje();
