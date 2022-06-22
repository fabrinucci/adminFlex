const menuIzquierdo = document.querySelector('.menu-izquierdo');

menuIzquierdo.addEventListener('click', (e) => {
     const classMenu = e.target.classList;

     // Crear variables que seleccionen la flecha y la pagina
     const contenedor = document.querySelector('.pagina'),
           flechaIzq = document.querySelector('.fa-arrow-left'),
           flechaDer = document.querySelector('.fa-arrow-right');


     if(classMenu.contains('fa-arrow-left')) {
          //Cerrar el menu lateral
          flechaIzq.style.display = 'none';
          flechaDer.style.display = 'block';
          contenedor.classList.add('no-menu');
     } else if(classMenu.contains('fa-arrow-right')) {
          flechaDer.style.display = 'none';
          flechaIzq.style.display = 'block';
          contenedor.classList.remove('no-menu');
     }
});