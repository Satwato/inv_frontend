var flag=0;
    const links=['./dummy1','./dummy2','./dummy3','./dummy4','./dummy5','./dummy6']
    for (link of links) {
        
        //  console.log("AAAA");
        document.getElementById('folder').innerHTML += `<div class="col-3" id="f_outer">
        
        <a href=${link} id="f1">
            ${link}         
        </a>
        </div>`;

}


// Get the image and insert it inside the modal - use its "alt" text as a caption
var img =$('.imv-im');

$('.imv-im').click(function(){
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal

});
span.onclick = function() {
  modal.style.display = "none";
} 
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  // document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "45px";
  // document.getElementById("main").style.marginLeft = "45px";
} 

   function togNav() {
    console.log("kk");
    if (flag==0) {
      console.log("kk1");
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      flag=1;
    }
    else {
      console.log("kk2");
      document.getElementById("mySidenav").style.width = "45px";
      document.getElementById("main").style.marginLeft = "45px";
      flag=0;
    }
    // $(this).data('clicked', function (_, data) { return !data; });
}
//   .toggle(
//     function openNav2() {
      
//     document.getElementById("mySidenav").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
//   },

//   /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
//   function closeNav2() {
//     document.getElementById("mySidenav").style.width = "0px";
//     document.getElementById("main").style.marginLeft = "0px";
//   } 
// )

  