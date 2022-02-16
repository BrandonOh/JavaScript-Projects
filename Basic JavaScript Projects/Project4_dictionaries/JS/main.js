var gameConsole = {
    Company: "Sony",
    Name: "Playstation",
    Version: 5,
    ReleaseYear: 2020,
    Stock: "Out of Stock",
  };

function writeDictionary() { //Concatenates the Name and version values in gameConsole dictionary.
  document.getElementById("Dictionary").innerHTML = gameConsole.Name + " " +gameConsole.Version;
}

function removeDictionaryName(){ //Deletes the Name value in gameConsole dictionary.
    delete gameConsole.Name;
}
