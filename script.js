let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.displayStatus = function(currentStatus){
    let val = currentStatus.toLowerCase();
        if(val === 'yes'){
            this.read = 'finished'
        } else if(val === 'no'){
            this.read = 'want to read'
        }
        return this.read
}
Book.prototype.changeStatus = function(currentStatus){
     if(currentStatus === 'finished'){
         this.read = 'want to read';
     } else if(currentStatus === 'want to read'){
         this.read = 'finished';
     }
     return this.read
}

function displayBooks(book){
        //create a book div for each book and add attributes
        let bookDiv = document.createElement('div');
        let removeButton = document.createElement('BUTTON');
        removeButton.innerText = 'Remove';
        removeButton.setAttribute('id', 'remove-button');
        bookList.appendChild(bookDiv).setAttribute('class', 'book');
        let statusChangeBtn = document.createElement('BUTTON');
        statusChangeBtn.innerText = 'Change';
        statusChangeBtn.setAttribute('id', 'status-change');
        for(let key in book){
            if(key === 'changeStatus'){
                bookDiv.appendChild(statusChangeBtn);
            } else if(typeof book[key] !== 'function') {
                let item = document.createElement('div');
                let content = book[key];
                if(key === 'read'){
                    content = book.displayStatus(book[key]);
                }
                item.innerText = content;
                bookDiv.appendChild(item).setAttribute('id', key);
            }
            bookDiv.appendChild(removeButton);
        }
        statusChangeBtn.addEventListener('click', () => {
            let readLine = bookDiv.querySelector('#read');
            readLine.innerText = book.changeStatus(book.read)
        })
        removeButton.addEventListener('click', () => {
            bookDiv.remove()
        })
}


function addBookToLibrary(title, author, pages, read){
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks(myLibrary[myLibrary.length-1]);
}

const bookList = document.querySelector('.book-list');

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
    

        addBookToLibrary(bookTitle, bookAuthor, bookPages, readStatus);
        document.querySelector('form').reset();
    })


