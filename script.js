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


const bookList = document.querySelector('.book-list');

addBookToLibrary([book1, book2, book3])

function displayBooks(myLibrary){
    myLibrary.forEach(function(elem){
        //create a book div and to each add the list of 
        let bookDiv = document.createElement('div');
        bookList.appendChild(bookDiv).setAttribute('class', 'book');
        for(let key in elem){
            let item = document.createElement('div');
            let content = elem[key];
            if(typeof elem[key] === 'function'){
                content = elem[key].call(this, key);
            } 
            item.innerText = content;
            bookDiv.appendChild(item).setAttribute('id', key);
        }
    })
}

displayBooks(myLibrary);

const section = document.querySelector('section');
const addBook = document.getElementById('add-book');

function createBook(title){
    let newBook = new Book(title);
    myLibrary.push(newBook)
    console.log(myLibrary)
}


function addBookForm(){
    const form = document.createElement('FORM');

    const titleSection = document.createElement('label');
    const titleInput = document.createElement('input');
    Object.assign(titleInput, {
        type: 'text',
        id: 'title'
    })
    titleSection.innerText = 'Title:';
    

    const authorSection = document.createElement('label');
    const authorInput = document.createElement('input');
    authorSection.innerText = 'Author:';

    const pagesSection = document.createElement('label');
    const pagesInput = document.createElement('input');
    pagesSection.innerText = 'Number of pages:';

    const statusSection = document.createElement('label');
    const statusInput = document.createElement('input');
    statusSection.innerText = 'Have you read this book? (yes/no):';

    // const submitButton = document.createElement('BUTTON');
    // submitButton.innerText = 'Submit';
 
 

    section.appendChild(form);

    form.appendChild(titleSection).setAttribute('for', 'title');
    form.appendChild(titleInput);
    form.insertBefore(document.createElement('BR'), titleInput);
    form.appendChild(authorSection).setAttribute('for', 'title');
    form.insertBefore(document.createElement('BR'), authorSection);
    form.appendChild(authorInput).setAttribute('type', 'text');
    form.insertBefore(document.createElement('BR'), authorInput);
    form.appendChild(pagesSection).setAttribute('for', 'title');
    form.insertBefore(document.createElement('BR'), pagesSection);
    form.appendChild(pagesInput).setAttribute('type', 'text');
    form.insertBefore(document.createElement('BR'), pagesInput);
    form.appendChild(statusSection).setAttribute('for', 'title');
    form.insertBefore(document.createElement('BR'), statusSection);
    form.appendChild(statusInput).setAttribute('type', 'text');
    form.insertBefore(document.createElement('BR'), statusInput);

    form.insertAdjacentHTML('afterend', document.createElement('BUTTON'))
 
    // submitButton.addEventListener('click', () => {
    //     let title = document.getElementById(title).nodeValue;
    //     createBook(title, 'here');
    // })

    
}

addBook.addEventListener('click', () => {
    addBookForm()

    
})

