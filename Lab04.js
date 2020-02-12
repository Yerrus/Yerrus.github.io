//Creating inputs for adding artist
var artistlist = document.getElementById("artistList");
var artistDir = document.getElementById("container");
var searchInput = document.getElementById("container-search-input");
var newProfileArray;

if (JSON.parse(localStorage.getItem("Profile")) == null) {
    newProfileArray = new Array();
} else {
    newProfileArray = JSON.parse(localStorage.getItem("Profile"));
}

//Adding search artists button
var searchButton = document.createElement("button");
searchButton.id = "btn_searchArtist";
searchButton.setAttribute("class", "btn_Form button");
searchButton.textContent = "Search Artist";
document.getElementById("container-search").appendChild(searchButton);

//Adding add artists button
var addArtist = document.createElement("button");
addArtist.id = "btn_addArtist";
addArtist.setAttribute("class", "btn_Form button")
addArtist.textContent = "Add Artist";
document.getElementById("container-search").appendChild(addArtist);

var artistForm = document.createElement("div");
var artistName = document.createElement("input");
var artistAbout = document.createElement("input");
var artistImg = document.createElement("input");
var addButton = document.createElement("button");

//Set attributes
artistForm.setAttribute("id", "artistForm");
artistForm.style.display = "none";
artistName.setAttribute("class", "artistFormInput");
artistName.type = "text";
artistName.setAttribute("placeHolder", "Artist Name");
artistName.setAttribute("maxlength", "40");
artistAbout.setAttribute("class", "artistFormInput");
artistAbout.setAttribute("maxlength", "40");
artistAbout.setAttribute("placeHolder", "About Artist");
artistImg.setAttribute("class", "artistFormInput");
artistImg.type = "text";
artistImg.setAttribute("placeHolder", "Img url");
addButton.id = "btn_createNewArtist";
addButton.setAttribute("class", "btn_Form button");
addButton.textContent = "Add";

//Append the correct data to proper form
artistForm.appendChild(artistName);
artistForm.appendChild(artistAbout);
artistForm.appendChild(artistImg);
artistForm.appendChild(addButton);
artistDir.insertBefore(artistForm, artistlist);
addArtist.addEventListener("click", showArtistForm);
searchButton.addEventListener("click", searchArtist);
addButton.addEventListener("click", createArtist);

function showArtistForm() {
    if (artistForm.style.display == "none") {
        artistForm.style.display = "block";
    } else {
        clearForm();
        artistForm.style.display = "none";

    }
}

function loadArtistList() {

    while (artistlist.hasChildNodes()) {
        artistlist.removeChild(artistlist.childNodes[0]);
    }

    var artistProfileInfo = JSON.parse(localStorage.getItem("Profile"));

    for (var i = 0; i < artistProfileInfo.length; i++) {
        var artistProfile = document.createElement("div");
        artistProfile.setAttribute("class", "artistProfile");
        artistProfile.setAttribute("id", i);

        var artistImg = document.createElement("img");
        var artistInfo = document.createElement("div");
        artistInfo.setAttribute("class", "artistInfo");

        var artistName = document.createElement("span");
        artistName.setAttribute("class", "artistName");

        var artistAbout = document.createElement("span");
        artistAbout.setAttribute("class", "artistAbout");

        var lineBreak = document.createElement("br");
        var deleteButton = document.createElement("button");

        deleteButton.setAttribute("class", "btn_delete button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", removeArtist);

        artistName.textContent = artistProfileInfo[i].name;
        artistAbout.textContent = artistProfileInfo[i].about;
        artistImg.setAttribute("src", artistProfileInfo[i].imgUrl);

        artistInfo.appendChild(artistName);
        artistInfo.appendChild(lineBreak);
        artistInfo.appendChild(artistAbout);

        artistProfile.appendChild(artistImg);
        artistProfile.appendChild(artistInfo);
        artistProfile.appendChild(deleteButton);

        artistlist.appendChild(artistProfile);
    }
}

function createArtist() {
    var newArtistName = artistName.value;
    var newArtistAbout = artistAbout.value;
    var newArtistImg = artistImg.value;

    var newProfile = {
        name: newArtistName,
        about: newArtistAbout,
        imgUrl: newArtistImg
    };

    newProfileArray.push(newProfile);

    var key = "Profile";
    localStorage.setItem(key, JSON.stringify(newProfileArray));
    console.log(localStorage.getItem(key));
    console.log(length);

    loadArtistList();

    clearForm();

}

function searchArtist() {
    var keyword = searchInput.value;
    console.log(keyword);
    var artistNames = document.getElementsByClassName("artistName");
    for (var i = 0; i < artistNames.length; i++) {
        console.log(artistNames[i].textContent);
        if (!artistNames[i].textContent.toLowerCase().includes(keyword) && keyword != "") {
            artistNames[i].parentElement.parentElement.style.display = "none";
        } else {
            artistNames[i].parentElement.parentElement.style.display = "flex";
        }
    }
}

function removeArtist() {
    newProfileArray.splice(this.parentElement.id, 1);
    this.parentElement.remove();
    localStorage.setItem("Profile", JSON.stringify(newProfileArray));
    console.log(localStorage.getItem("Profile"));
}

function clearForm() {
    artistName.value = "";
    artistAbout.value = "";
    artistImg.value = "";
}