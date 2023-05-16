const main = document.getElementById("main")
const subGender = document.querySelector(".ul_choose")
const gender = document.getElementById("gender")
var g = "men"
const g_w =document.getElementById("g_w")
g_w.addEventListener('click', () => Choose_gender(g="women"))
const g_m =document.getElementById("g_m")
g_m.addEventListener('click', () => Choose_gender(g="men"))
gender.addEventListener('click', () => Gender())

const add_gender = document.querySelector(".ul_add") 

const add = document.getElementById("add")
add.addEventListener('click', () => Add())
const a_w =document.getElementById("a_w")
a_w.addEventListener('click', () => Add_gender(g="women"))
const a_m =document.getElementById("a_m")
a_m.addEventListener('click', () => Add_gender(g="men"))
var hight = 0

run()
function run(params) {
    var containers = document.querySelectorAll(".block_d")
    for (let index = 0; index < containers.length; index++) {
        const element = containers[index];
        element.ondragover = allowDrop
    }
    
    function allowDrop(event) {
        event.preventDefault();
        
        
    }
    const images = document.querySelectorAll(".img")

    for (let index = 0; index < images.length; index++) {
        const element = images[index];
        element.id = index;
        element.ondragstart = drag
        
    }
    
    function drag(event) {
        event.dataTransfer.setData("id", event.target.id)
    
        
    }
    
    for (let index = 0; index < containers.length; index++) {
        const element = containers[index];
        element.ondrop = drop
        
    }
    
    function drop(event) {
        let item = event.dataTransfer.getData("id")
        
        event.target.append(document.getElementById(item))
        
    }
}







// ************************************************************************************************************************************
const points = {0:'0',
                1:'2',
                2:'3',
                3:'4',
                4:'Эмоции'
            }
// ************************************************************************************************************************************











const nav = document.querySelector(".tabs")
l=0

let active = 0

let str_src =""

for (let index = 0; index < Object.keys(points).length; index++) {
    nav.insertAdjacentHTML("afterBegin", "<div class='p'></div>");
}

const tab = document.querySelectorAll(".p")
for (let index = 0; index < tab.length; index++) {
    tab[index].textContent = points[index];
    nav.insertAdjacentHTML("afterEnd", "<div class='tab'></div>");
}

const tabs = document.querySelectorAll(".tab")



for (let index = 0; index < tabs.length; index++) {
    var str = ""
    var none = "none"





    // ************************************************************************************************************************************
    for (let i = 0; i < 39; i++) {
    // ************************************************************************************************************************************
        
    
    
    
    
    
    
    
        img = new Image();
        var size_card = ""
        index_img = index+1
        str_src ='images'+'\/'+index_img+'\/' + i +'.jpg'
        img.src = str_src

        
        console.log(img.height)
        if (img.height>400){
            size_card ="block_b"
        }
        else{
            size_card ="block_l"
        }
        str += '<div class="img '+size_card+'" style="background-image: url('+str_src+')" draggable="true"></div>'
        size_card = ""
        img = new Image();
    }
    img = new Image();
    size_card = ""
    tabs[index].innerHTML = str
    str=""
    run()
    
}




for (let index = 0; index < tabs.length; index++){ 
        tabs[index].classList.add("nonDisplay");
}

for (let index = 0; index < tab.length; index++) {
    const element = tab[index];
    
    element.addEventListener('click', () => push(index))
    
}


function push(i) {
    for (let index = 0; index < tabs.length; index++) {
        if(tabs[index].classList.contains('tabActive')){
            tabs[index].classList.remove("tabActive")
            tabs[index].classList.add("nonDisplay");
        }
    }    
    active = i
    if(tabs[active].classList.contains('nonDisplay')){
        tabs[active].classList.remove("nonDisplay")
        tabs[active].classList.add("tabActive");
    }
    else{
        tabs[active].classList.add("tabActive");
    }   
}




function Gender(event) {
    if(subGender.classList.contains('none')){
        subGender.classList.remove("none")
        subGender.classList.add("ul_gender_active")
    }
    else{
        subGender.classList.add("none")
        subGender.classList.remove("ul_gender_active")
    }
    
}

function Choose_gender(g) {
    if(g == "men"){
        main.style.backgroundImage = "url('bg_1.jpg')";
    }
    else{
        main.style.backgroundImage = "url('bg_2.jpg')";
    }
}

function Add(event) {
    if(add_gender.classList.contains('none')){
        add_gender.classList.remove("none")
        add_gender.classList.add("ul_gender_active")
    }
    else{
        add_gender.classList.add("none")
        add_gender.classList.remove("ul_gender_active")
    }
    
}

function Add_gender(g) {
    if(g == "men"){
        main.insertAdjacentHTML("afterEnd", '<main class="main2" id="main" style="background-image: url(&quot;bg_1.jpg&quot;);"><div class="x" onclick="this.parentElement.remove();">X</div><div class="block_left"><div class="conteiner1"><div class="block_c b4 white block_d bc"></div><div class="block_l white block_d bc"></div></div><div class="conteiner2"><div class="block_l red block_d bc"></div></div><div class="conteiner3"><div class="block_l b1 white block_d bc"></div> <div class="block_l b2 white block_d bc"></div></div><div class="conteiner4"><div class="block_c b3 white block_d bc"></div> <div class="block_c white block_d bc"></div> </div></div><div class="block_center"><div class="conteiner5"><div class="block_l yellow block_d bc"></div></div><div class="conteiner6"><div class="block_b b5 yellow block_d bc"></div><div class="block_b yellow block_d bc"></div></div><div class="conteiner7"><div class="block_l green block_d bc"></div></div><div class="conteiner8"><div class="block_b red block_d bc"></div><div class="block_b red block_d bc"></div><div class="block_b blue block_d bc"></div><div class="block_b blue block_d bc"></div> </div><div class="conteiner9"><div class="block_l_v b6 block_d bc"></div><div class="block_l_v block_d bc"></div></div></div><div class="block_right"><div class="conteiner10"><div class="block_l b7 white block_d bc"></div><div class="block_c white block_d bc b9" ></div> </div><div class="block_l b8 red block_d bc"></div> </div></main>');
        
    }
    if(g == "women"){
        main.insertAdjacentHTML("afterEnd", '<main class="main2" id="main" style="background-image: url(&quot;bg_2.jpg&quot;);"><div class="x" onclick="this.parentElement.remove();">X</div><div class="block_left"><div class="conteiner1"><div class="block_c b4 white block_d bc"></div><div class="block_l white block_d bc"></div></div><div class="conteiner2"><div class="block_l red block_d bc"></div></div><div class="conteiner3"><div class="block_l b1 white block_d bc"></div> <div class="block_l b2 white block_d bc"></div></div><div class="conteiner4"><div class="block_c b3 white block_d bc"></div> <div class="block_c white block_d bc"></div> </div></div><div class="block_center"><div class="conteiner5"><div class="block_l yellow block_d bc"></div></div><div class="conteiner6"><div class="block_b b5 yellow block_d bc"></div><div class="block_b yellow block_d bc"></div></div><div class="conteiner7"><div class="block_l green block_d bc"></div></div><div class="conteiner8"><div class="block_b red block_d bc"></div><div class="block_b red block_d bc"></div><div class="block_b blue block_d bc"></div><div class="block_b blue block_d bc"></div> </div><div class="conteiner9"><div class="block_l_v b6 block_d bc"></div><div class="block_l_v block_d bc"></div></div></div><div class="block_right"><div class="conteiner10"><div class="block_l b7 white block_d bc"></div><div class="block_c white block_d bc b9" ></div> </div><div class="block_l b8 red block_d bc"></div> </div></main>');
    }
    run()
}