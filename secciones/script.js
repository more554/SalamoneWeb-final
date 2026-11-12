
const tituloObras = [
   "EL ANGEL EXTERMINADOR",
   "PORTAL DEL CEMENTERIO ",
   "MATADERO "
];

const descripciones = [
  "una descripcion bla",
  "Es una estructura imponente con una cruz monumental, símbolo de la entrada al más allá. Es una manifestación de estilo Art Deco, reconocida a nivel internacional. Esta imponente estructura simboliza el tránsito entre la vida y la muerte. ",
  "El Matadero Municipal de Saldungaray fue inaugurado a finales de la década de 1930. Este matadero no solo cumple con su función práctica, sino que también refleja la intención de Salamone de dotar a los edificios utilitarios con un carácter estético distintivo. Su diseño es funcional y se caracteriza por tener una planta circular, con una torre tanque que se eleva en la parte superior. El matadero se encuentra en un entorno rural y forma parte del patrimonio arquitectónico de la región."
];



const imagesDerecha = [
  "/home/morena/Desktop/salamoneWeb1.2/obras/rip.jpg", 
  "/home/morena/Desktop/salamoneWeb1.2/obras/rauch.jpeg",
  "/home/morena/Desktop/salamoneWeb1.2/obras/muni.jpeg"   
];


const imagesIzquierda = [
  "/home/morena/Desktop/salamoneWeb1.2/obras/azul.jpeg",
  "/home/morena/Desktop/salamoneWeb1.2/obras/saldun.jpeg",
  "/home/morena/Desktop/salamoneWeb1.2/obras/azul.jpeg" 
];

let indice = 0;


const imgDerecha = document.querySelector(".main-image img"); 
const imgIzquierda = document.querySelector(".statue-image");

const boton = document.getElementById("next-btn");

const tituloObra = document.querySelector(".work-title h1 ");
const descripcion = document.querySelector(".work-description");


boton.addEventListener('click', function() {
  // Actualiza el índice 
  indice = (indice + 1) % imagesDerecha.length;
   
  
  try {
 
    imgDerecha.src = imagesDerecha[indice];
    imgIzquierda.src = imagesIzquierda[indice]; 
    
    tituloObra.textContent = tituloObras[indice];
    descripcion.textContent  = descripciones[indice];
    
    
    console.log("pressing button | índice: " + indice);
  } catch (error) {
    console.warn("file path error ", error);
  } 
});

    


//2do codigo corregido 

