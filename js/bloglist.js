
/* Code for Trash Modal */
var trashFunctions = function(numberOfPosts) {

    for (var i = 0; i < numberOfPosts; i++) {
       
        var modal = document.getElementsByClassName('trash-modal')[i];

      
        var div = document.getElementsByClassName("post-trash")[i];

       
        var close = document.getElementsByClassName("trash-modal-button-no")[i];

       
        div.onclick = function() {
            modal.style.display = "block";
        }

       
        close.onclick = function() {
            modal.style.display = "none";
        }
    }
}

trashFunctions(5)

function navigateToPost() {
    location.href = "post.html";
}