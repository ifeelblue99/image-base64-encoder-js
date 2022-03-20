const imgHolder = document.getElementById("img-holder")
const urlTxtArea = document.getElementById("url-txt-area")
const fileInput = document.getElementById("file-input")

// image selected
fileInput.addEventListener("change", event=>{
    const file = event.target.files[0];
    encodeImage(file)
})

// encode to base64
encodeImage = fileUrl => {
    const reader = new FileReader()
    reader.onloadend = () => {
        urlTxtArea.textContent = reader.result
        imgHolder.src = reader.result
    }
    reader.readAsDataURL(fileUrl)
}
