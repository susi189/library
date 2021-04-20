let myLibrary = [];



function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = function(){
        if(read === 'yes'){
            return 'finished'
        } else if(read === 'no'){
            return 'want to read'
        }
    }
    // this.info= function(){
    //    return this.title + ', ' + this.author + ', ' + this.pages + ', ' + this.read()
    // }
}

const book1 = new Book('My Brilliant Friend', 'Elena Ferrante', 331, 'yes');
const book2 = new Book('Little Fires Everywhere', 'Celeste Ng', 338, 'yes');
const book3 = new Book('The Master and Margarita', 'Mikhail Bulgakov', 372, 'no');

function addBookToLibrary(arguments){
    for(let i=0; i<arguments.length; i++){
        myLibrary.push(arguments[i])
    }
}

const book = document.querySelector('.book');

addBookToLibrary([book1, book2, book3])

function displayBooks(myLibrary){
    myLibrary.forEach(function(elem){
        for(let key in elem){
            let item = document.createElement('div');
            let content = elem[key];
            if(typeof elem[key] === 'function'){
                content = elem[key].call(this, key);
            } 
            item.innerText = content;
            book.appendChild(item).setAttribute('id', key);
        }
    })
}

displayBooks(myLibrary);
