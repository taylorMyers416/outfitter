document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    var sideNav = document.querySelectorAll('.sidenav2');
    var options = {
        edge: 'left', // Choose the horizontal origin
        closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: false // Choose whether you can drag to open on touch screens
    }
    var sideNavInstances = M.Sidenav.init(sideNav, options);
    var collapsible = document.querySelectorAll('.collapsible');
    var collapsibleInstances = M.Collapsible.init(collapsible);
    var select = document.querySelectorAll('select');
    var selectInstances = M.FormSelect.init(select);
    var userid = JSON.parse(sessionStorage.getItem('user'));
    loadClothes(userid)

});
var loadClothes = function (userid) {
    db.collection("clothing_item").where("user", "==", userid.uid)
        .get()
        .then(function (querySnapshot) {
            var parent;
            querySnapshot.forEach(function (doc) {
                var parent = document.getElementById("generateOutfitsImages")
                var div = document.createElement("div");
                div.classList.add("col", "s3", "m2")
                var img = document.createElement("img");
                img.classList.add("white");
                img.style.width = "75px";
                img.style.height = "75px";
                img.src = doc.data().img_url;
                img.onclick = function () {
                    select(this)
                };
                div.appendChild(img);
                parent.appendChild(div);
            });
        })
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        });
}

var select = function (arg) {
    console.log(arg)
    var parent = document.getElementById("selectedParent")
    var div = document.createElement("div");
    div.style.position = "relative"
    div.style.display = "inline-block"
    div.style.margin = "3px 10px"
    var img = new Image();
    img.src = arg.src
    var icon = document.createElement("i")
    icon.classList.add("material-icons","red","small","white-text","deselectClothes")
    icon.innerHTML = "close"
    icon.onclick = function () {
        deselect(this)
    }
    div.appendChild(img)
    div.appendChild(icon)
    parent.appendChild(div)
}

var deselect = function (arg) {
    console.log(arg)
}