function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
function aleatorio(){
  const imagem = document.querySelector("img");
    var num = rand(1,8);

if (num==1) {
  imagem.setAttribute("src","img/11.png");
  imagem.setAttribute("width","150px");

}
else if (num==2) {
  imagem.setAttribute("src","img/22.png");
  imagem.setAttribute("width","150px");
}
else if (num==3) {
  imagem.setAttribute("src","img/33.png");
  imagem.setAttribute("width","150px");
}
else if (num==4) {
  imagem.setAttribute("src","img/44.png");
  imagem.setAttribute("width","150px");
}
else if (num==5) {
  imagem.setAttribute("src","img/55.png");
  imagem.setAttribute("width","150px");
}
else if (num==6) {
  imagem.setAttribute("src","img/66.png");
  imagem.setAttribute("width","150px");
}
else if (num==7) {
  imagem.setAttribute("src","img/77.png");
  imagem.setAttribute("width","150px");
}
else if(num==8) {
  imagem.setAttribute("src","img/88.png");
  imagem.setAttribute("width","150px");
}}