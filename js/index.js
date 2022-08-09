$("#bars").click(function(){
    $("#mob_menu").toggleClass("toggle_apear_mob_menu");
    $("#bars").toggleClass("fa-times");
  });
  
  var pause="^1000";
  var typed = new Typed('.type_writer', {
    strings: ["Omor Faruk Munna."+pause, "a travel vloger."+pause,"a content creator."+pause],
    smartBackspace: true, // Default value
    typeSpeed: 50,
    backSpeed: 20,
    loop: true
  });

let sl_img=document.querySelector("#all_slider_img");

let node=document.createElement("img");
console.dir(node);
count=0;
setInterval(() => {sl_img.style.transform=`translateX(-${count*100}%)`;
count++;
if (count==11) {
  count=0;
}

},2000);