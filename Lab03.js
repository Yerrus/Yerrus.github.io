function addArtist() {

    var x = document.getElementById("list");
    if(x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function createArtist() {

    var artistList = document.getElementById("artistList");
    var artist = document.createElement("div");
    var artistDesc = document.createElement("div");
    var nameDiv = document.createElement("b");
    var aboutDiv = document.createElement("p");
    var urlDiv = document.createElement("img");
    var deleteDiv = document.createElement("div");
    var deleteBtn = document.createElement("button");
    deleteDiv.append(deleteBtn);

    var artistName = document.getElementById("list-nameInput").value;
    var artistAbout = document.getElementById("list-aboutInput").value;
    var artistUrl = document.getElementById("list-urlInput").value;

    artistDesc.setAttribute("class", "artistDesc");
    artist.setAttribute("class", "artist");
    urlDiv.setAttribute("src", artistUrl);
    deleteBtn.setAttribute("class", "deleteBtn");
    deleteDiv.setAttribute("onclick", "deleteDiv(this)");
    deleteDiv.setAttribute("class", "deleteDiv");

    nameDiv.textContent = artistName;
    aboutDiv.textContent = artistAbout;
    deleteBtn.textContent = "delete";
    
    artistDesc.append(nameDiv);
    artistDesc.append(aboutDiv);
    artist.append(urlDiv);
    artist.append(artistDesc);
    artist.append(deleteDiv);
    artistList.append(artist);

    document.getElementById('list-nameInput').value = '';
    document.getElementById('list-aboutInput').value = '';
    document.getElementById('list-urlInput').value = '';
}

function deleteDiv(e) {
    
    e.parentNode.remove();
}