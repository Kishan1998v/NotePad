var newbtn = document.querySelector("#newbtn");
var DisplaySection = document.querySelector("#DisplaySection");
var title = document.querySelector("#InputTitle");
var textarea = document.querySelectorAll("textarea");

textarea.contentEditible = true;
newbtn.addEventListener("click",function(){
    if(title!=""){
        addNotes();
    }
    
})

const addNotes = ()=>{
    const note = document.createElement("div");
    note.id ="note";
    note.innerHTML =' <h4><textarea placeholder="Title"></textarea></h4><textarea id="Contecttext" placeholder="Content"></textarea><div class="btns"><button style="margin-right: 2px; margin-top: 10px;" id="delete" class="btn btn-light btn-sm">Delete</button><button style="margin-right: 15px;margin-top: 10px;" class="copy btn btn-light btn-sm">Copy</button><button onclick="boldText()" id="bold" style="margin-right: 1px; margin-top: 10px;"class="Bold btn btn-outline-light btn-sm"> B_</button><button style="margin-top: 10px;" id="underline" onclick="underlineText()" class=" btn btn-outline-light btn-sm">UL</button></div> ';
    DisplaySection.appendChild(note);
    note.querySelector("#delete").addEventListener("click",function(){
        note.remove();
    })
    note.querySelector(".copy").addEventListener("click",function(){
        const v =note.querySelector("#Contecttext");
        v.select();
        v.setSelectionRange(0,99999);
        document.execCommand('copy');
    })
    
    note.querySelector("#underline").addEventListener("click",function(){
        const v =note.querySelector("#Contecttext");
        var editorHTML = v.innerHTML;

        
    })
}

