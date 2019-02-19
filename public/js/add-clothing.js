var selectedFile;
var selectInstances;

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    var select = document.querySelectorAll('select');
    selectInstances = M.FormSelect.init(select);
});

var addClothing = function () {
   
    var data = {
        type: document.getElementById("clothingType").value,
        name: document.getElementById("name").value,
        color: selectInstances[2].getSelectedValues(),
        occasion: selectInstances[1].getSelectedValues(),
    }
    console.log(data)
    firebasePost("add_clothing", userid, selectedFile, data);
}
var onFileSelection = function (event) {
    if (event.target.files && event.target.files[0]) {
        // var img = document.querySelector('#image');
        selectedFile = event.target.files[0]
        // img.src = URL.createObjectURL(this.files[0]);
    }
}