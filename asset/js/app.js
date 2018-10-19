
const navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/
//crate element
//1
var cont = 1;
var bitacoras=[]

var formulario = document.getElementById("bitacora");
//4
formulario.addEventListener("submit", (evt) => {
    evt.preventDefault(); 
    let bitacora = {
        cant:cont,
        fecha: formulario[1].value,
        descripcion: formulario[2].value,
        cantidad: formulario[3].value
      } 
    bitacoras.push(bitacora);
    cont++;
    mostrar();
});

formulario.addEventListener("focusout",(evt) => {
    evt.preventDefault(); 
    for(let i= 1;i<=3;i++){
        if(formulario[i].value != ""){
            formulario[i].style.borderColor = "#00FF00"
        }
        else{
            formulario[i].style.borderColor = "#f44336"
        }

    }
});
//5
const crearElemento = (bitacora, tbody) =>{
    let tr = document.createElement("tr");
    
    Object.values(bitacora).forEach(item => {
        let td = document.createElement("td");
        let content = document.createTextNode(item);
        td.appendChild(content); 
        tr.setAttribute("class", "click"); 
        tr.appendChild(td);

    });
    tbody.appendChild(tr);   
} 
//6
const eliminar= (tbody)=>{
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);

    }
}
const agregar= ()=>{
    var eventtr = document.querySelectorAll(".click");
      eventtr.forEach((item, index) => {
      item.addEventListener("click", () => {
      document.querySelector("#fecha").value = item.childNodes[1].textContent;
      document.querySelector("#descp").value = item.childNodes[2].textContent;
      document.querySelector("#cant").value = item.childNodes[3].textContent;
     });
    })
   }
   
   const mostrar = ()=>{
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) {
     eliminar(document.querySelector(".tabla-btc tbody"));
    }
    bitacoras.forEach(item => {
     crearElemento(item, document.querySelector(".tabla-btc tbody"));
    });
    agregar();
   }
  
  