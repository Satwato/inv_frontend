
    const links=['./dummy1','./dummy2','./dummy3','./dummy4','./dummy5','./dummy6']
    for (link of links) {
        
        console.log("AAAA");
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
span.onclick = function() {
  modal.style.display = "none";
} 
});
$('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
});
// Get the <span> element that closes the modal
