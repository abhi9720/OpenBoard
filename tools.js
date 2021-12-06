let optionsCont = document.querySelector('.options_cont')
let toolCont = document.querySelector('.tool_cont')
let pencilToolCont = document.querySelector('.pencil_tool_cont')
let eraserToolCont = document.querySelector('.eraser_tool_cont')
let pencil = document.querySelector('.pencil')
let eraser = document.querySelector('.eraser')

let menuFlag = true; // true means tools will be shown , false means tools will be closed
let pencilToolFlag = false
let eraserToolFlag = false


optionsCont.addEventListener('click', (e) => {
    menuFlag = !menuFlag

    if (menuFlag) openTools()
    else closeTools()


})

function openTools() {
    let menuIcon = optionsCont.children[0];
    menuIcon.classList.remove('fa-bars')
    menuIcon.classList.add('fa-times')


    toolCont.style.display = 'flex'

}
function closeTools() {
    let menuIcon = optionsCont.children[0];
    menuIcon.classList.remove('fa-times')
    menuIcon.classList.add('fa-bars')
    toolCont.style.display = 'none'
    pencilToolCont.style.display = "none"
    eraserToolCont.style.display = "none"

}
pencil.addEventListener('click', () => {
    // True  -  show pencil tool
    // False -  hide pencil took
    pencilToolFlag = !pencilToolFlag
    if (pencilToolFlag) {
        pencilToolCont.style.display = "block"
    }
    else {
        pencilToolCont.style.display = "none"
    }

})


eraser.addEventListener('click', () => {
    // True  -  show eraser tool
    // False -  hide eraser took

    eraserToolFlag = !eraserToolFlag
    console.log(eraserToolFlag);
    if (eraserToolFlag)
        eraserToolCont.style.display = "flex"
    else
        eraserToolCont.style.display = "none"
})