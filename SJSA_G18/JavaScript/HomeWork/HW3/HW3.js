const books = [
    {
        name: 'Crime and punishment',
        author: 'Fyodor Dostoyevsky',
        year: '1887',
        read: true
    },
    {
        name: 'Harry Potter',
        author: 'J.K. Rowling',
        year: '2000',
        read: false
    },
    {
        name: 'The art of war',
        author: 'Sun Tzu',
        year: '200',
        read: false
    },
    {
        name: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        year: '1910',
        read: true
    }
]

const bookList = () => {
    const element = document.getElementById("bookTable");
    element.textContent = "List of Books";
  
    for (let book of books) {
      const list = document.createElement("ul");
      const listItem = document.createElement("li");
  
      listItem.textContent =
        book.name +
        " | written by: " +
        book.author +
        " | published: " +
        book.year;
  
      console.log(list);
  
      list.appendChild(listItem);
      element.appendChild(list);
    }
  };