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
}


function addBookToLibrary(book){
    myLibrary.push(book)
}

const bookList = document.querySelector('.book-list');
const removeButton = document.createElement('BUTTON');
removeButton.innerText = 'Remove';

function displayBooks(myLibrary){
    myLibrary.forEach(function(elem, i){
        //create a book div for each book and add attributes
        let bookDiv = document.createElement('div');
        bookList.appendChild(bookDiv).setAttribute('class', 'book');
        for(let key in elem){
            let item = document.createElement('div');
            let content = elem[key];
            if(typeof elem[key] === 'function'){
                content = elem[key].call(this, key);
            } 
            item.innerText = content;
            bookDiv.appendChild(item).setAttribute('id', key)
            item.setAttribute('data-index', i);
        }
        bookDiv.appendChild(removeButton)
    })
}


const section = document.querySelector('section');
const addBook = document.getElementById('add-book');

const submitButton = document.createElement('BUTTON');
submitButton.innerText = 'Submit';

const form = document.createElement('FORM');

const titleSection = document.createElement('label');
const titleInput = document.createElement('input');
Object.assign(titleInput, {
    type: 'text',
    id: 'title-value'
})
titleSection.innerText = 'Title:';


const authorSection = document.createElement('label');
const authorInput = document.createElement('input');
Object.assign(authorInput, {
    type: 'text',
    id: 'author-value'
})
authorSection.innerText = 'Author:';

const pagesSection = document.createElement('label');
const pagesInput = document.createElement('input');
Object.assign(pagesInput, {
    type: 'text',
    id: 'pages-value'
})
pagesSection.innerText = 'Number of pages:';

const statusSection = document.createElement('label');
const statusInput = document.createElement('input');
Object.assign(statusInput, {
    type: 'text',
    id: 'status-value'
})
statusSection.innerText = 'Have you read this book? (yes/no):';   


function addBookForm(){
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

    section.appendChild(submitButton); 
}

addBook.addEventListener('click', () => {
    addBookForm()
  
})

submitButton.addEventListener('click', () => {
        let bookTitle = document.getElementById('title-value').value;
        let bookAuthor = document.getElementById('author-value').value;
        let bookPages = document.getElementById('pages-value').value;
        let readStatus = document.getElementById('status-value').value;
        
        const newBook = new Book(bookTitle, bookAuthor, bookPages, readStatus);

        addBookToLibrary(newBook);
        displayBooks(myLibrary);
    })

