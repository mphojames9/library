const addPage = document.querySelector(".inputWrapper");
const bookStorage = document.querySelector(".bookHolder");
const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const checkBox = document.querySelector(".check");

function addTasks(){
    addPage.classList.add("visible");
}

function closeInput(){
    addPage.classList.remove("visible");
}

function submitTask(){
    const title = inputTitle.value;
    const author = inputAuthor.value;
    const pages = inputPages.value;

    if(!title || !author || !pages){
        return
    }

    const book = document.createElement("book");
    book.classList.add("book");
    bookStorage.appendChild(book);

    const bookName = document.createElement("bookName");
    bookName.classList.add("bookName");
    bookName.innerHTML = `"${title}"`;
    book.appendChild(bookName);

    const authorText = document.createElement("author");
    authorText.classList.add("author");
    authorText.innerHTML = author;
    book.appendChild(authorText);

    const pagesText = document.createElement("pages");
    pagesText.classList.add("author");
    pagesText.innerHTML = `${pages} pages`;
    book.appendChild(pagesText);

    const readStatus = document.createElement("readStatus");
    if(checkBox.classList.contains("checked")){
        readStatus.classList.add("readStatus-yes");
        readStatus.innerHTML = "Read";
    }else{
        readStatus.classList.add("readStatus");
        readStatus.innerHTML = "Not Read";
    }
    book.appendChild(readStatus);

    const removeBtn = document.createElement("removeBtn");
    removeBtn.classList.add("removeBtn");
    removeBtn.innerHTML = "Remove";
    book.appendChild(removeBtn);
    
    
    inputTitle.value = "";
    inputAuthor.value = "";
    inputPages.value = "";
    addPage.classList.remove("visible");

    saveToLocalStorage()
}

bookStorage.addEventListener("click", (e)=>{
    if(e.target.tagName === "REMOVEBTN"){
        e.target.parentElement.remove();
        saveToLocalStorage();
    }
})

bookStorage.addEventListener("click",(e)=>{
    if(e.target.tagName === "READSTATUS"){
        if(e.target.classList.contains("readStatus-yes")){
            e.target.classList.remove("readStatus-yes");
            e.target.classList.add("readStatus");
            e.target.innerHTML = "Not Read";
            saveToLocalStorage()
        }else if(e.target.classList.contains("readStatus")){
            e.target.classList.remove("readStatus");
            e.target.classList.add("readStatus-yes");
            e.target.innerHTML = "Read";
            saveToLocalStorage()
        }
    }
})

function checker(){
    checkBox.classList.toggle("checked");
}

function saveToLocalStorage(){
    const bookIteams = bookStorage.innerHTML;
    localStorage.setItem("data",bookIteams)
}

function getFromLocalStorage(){
    const data = localStorage.getItem("data");
    bookStorage.innerHTML = data;
}

getFromLocalStorage();