<<<<<<< HEAD
const tarjeta = document.getElementById ("tarjeta")

let imagen = document.createElement("img");
imagen.setAttribute("src", "imagen.jpg");

tarjeta.appendChild(imagen);
imagen.setAttribute("id", "imagen");

let titulo = document.createElement ("h1");
titulo.setAttribute("id", "titulo");
titulo.innerHTML = "Cómo añadir un efecto a una imagen"
tarjeta.appendChild(titulo)

let texto = document.createElement ("p");
texto.setAttribute("id", "texto");
texto.innerHTML = "Existen muchos plugins para insertar efectos especiales a las imágenes cuando se les pasa el cursor por encima. Todos esos plugins añaden un montón de código a la página, que terminan afectando a la velocidad de la web en sí. Si quieres utilizar muy poco código para así optimizar la carga de tu web, nuestro script para generar un efecto de zoom es perfecto para ti."
tarjeta.appendChild(texto)

let boton = document.createElement("div");
boton.setAttribute("id", "boton");
boton.innerHTML= "Leer más";
tarjeta.appendChild(boton);
=======
const tarjeta = document.getElementById ("tarjeta")

let imagen = document.createElement("img");
imagen.setAttribute("src", "imagen.jpg");

tarjeta.appendChild(imagen);
imagen.setAttribute("id", "imagen");

let titulo = document.createElement ("h1");
titulo.setAttribute("id", "titulo");
titulo.innerHTML = "Cómo añadir un efecto a una imagen"
tarjeta.appendChild(titulo)

let texto = document.createElement ("p");
texto.setAttribute("id", "texto");
texto.innerHTML = "Existen muchos plugins para insertar efectos especiales a las imágenes cuando se les pasa el cursor por encima. Todos esos plugins añaden un montón de código a la página, que terminan afectando a la velocidad de la web en sí. Si quieres utilizar muy poco código para así optimizar la carga de tu web, nuestro script para generar un efecto de zoom es perfecto para ti."
tarjeta.appendChild(texto)

let boton = document.createElement("div");
boton.setAttribute("id", "boton");
boton.innerHTML= "Leer más";
tarjeta.appendChild(boton);
>>>>>>> 5bb8d72929bb8e668aef3b39e766f4f7dbd4993f
