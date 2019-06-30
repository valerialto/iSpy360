//Valeria Torres-Olivares
//June 2018
//iSpy 360 Game

var collectedItems = []

function enterRoom(roomName) {

    var roomNum = document.getElementById(roomName)

    roomNum.setAttribute("visible", "true") //this changes the room to be visible

    var position = roomNum.getAttribute("position")
    console.log(position)
    //making room appear when click on button
    

        var iD = document.getElementById("hello")
        iD.parentNode.removeChild(iD)
        var directions = document.getElementById("directions")
        directions.parentNode.removeChild(directions)
        var bazar = document.getElementById("bazarSphere")
        bazar.parentNode.removeChild(bazar)
        var rome = document.getElementById("romeSphere")
        rome.parentNode.removeChild(rome)
        var berlin = document.getElementById("berlinSphere")
        berlin.parentNode.removeChild(berlin)
        var welc = document.getElementById("intro")
        welc.parentNode.removeChild(welc)
        var welc2 = document.getElementById("intro2")
        welc2.parentNode.removeChild(welc2)
        //so when room is visible, have the text and circle dissapeer by grabbing the ID and making it not visible

    // This changes the position of the camera to be inside of the room the user is currently in
    var camera = document.getElementById('camera')
    camera.setAttribute("position", `0 ${position['y']} 0`)
}


function changeTextColor(textIdentity, item){
    //check if item has been collected/clicked on before
    //change the text on the message board representing the item to red
    if (collectedItems.includes(item) != true){
        var text = document.getElementById(textIdentity)
        text.setAttribute("color", "red")
        collectedItems.push(item)
    }

}

function homeScreen(){
    window.location.reload() //refresh the page

}