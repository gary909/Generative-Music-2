window.onload = function() {

    var bufferLoader = new BufferLoader(
        Audio.audioContext,
        [
            "A4.mp3",
            "A5.mp3",
            "C4.mp3",
            "C5.mp3",
            "D4.mp3",
            "D5.mp3",
            "E4.mp3",
            "E5.mp3",
            "G4.mp3",
            "G5.mp3",
        ],
        finishedLoading
    );
    bufferLoader.load();

    function finishedLoading(bufferList) {
        Audio.init(bufferList);

        var canvas = document.getElementById("canvas");
        var view = new View(canvas);

        canvas.addEventListener("mousedown", view.handleClick.bind(view), false);
        setInterval(view.updateDisplay.bind(view), view.frameRate);
    }



    //**************************YOU ARE HERE********************************* */
    var resetButton = document.getElementById("reset"); // assign reset button as 'resetButton' 

    //Call this function whenever the reset button is clicked:
    resetButton.onclick = function() {
        // context.fillRect(0, 0, view.canvas.width, view.canvas.height)
        console.log("Reset button pressed");
        // sound.stop(this.audioContext);
        //Audio.init(bufferList);

        const context = canvas.getContext('2d'); // Delete?
        var view = new View(canvas);// Delete?
        context.clearRect(0, 0, canvas.width, canvas.height); // Delete?

        // context.fillStyle = "red";
    }

    //*********************************************************** */


    // var resetButton = document.getElementById("reset").addEventListener("click", resetCode); // assign reset button as 'resetButton' 

    // //Call this function whenever the reset button is clicked:
    // function resetCode() {
    //     // context.fillRect(0, 0, view.canvas.width, view.canvas.height)
    //     console.log("Reset button pressed");
    //     // sound.stop(this.audioContext);
    // }

};