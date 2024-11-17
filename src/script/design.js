// Listing des images page Design
const listphoto = ["work1","work2","work3_1","work4","work5","work5_1","work6","work7","work8","work9","work10","work11","work12","work13_1","work13_2","work13","work14"];
const path = "src/media/img/personnel/";
// Code JavaScript pour l'agrandissement des images Design
const main = document.getElementById('grid-container');
listphoto.forEach(element => {
  main.innerHTML+=`
  <div class="grid-item">
    <img data-imgname="${element}" class="imgzoom" src="${path+element}.jpg">
  </div>
  `
});
// Sélectionnez tous les éléments de classe ""
main.addEventListener("click",e=>{
  if(e.target.dataset.imgname){
    main.innerHTML+=`
    <div class="galleryview">
      <div class="content">
        <div class="zoomedimgdiv">
          <div class="close">✕</div>
          <img class="zoomedimg" src="${path+e.target.dataset.imgname}.jpg">
        </div>
      </div>
    </div>
    `
  }

  if(e.target.classList.contains("galleryview")){
    main.removeChild(e.target)
  }

  if(e.target.classList.contains("close")){
    main.removeChild(document.querySelector(".galleryview"))
  }
});





