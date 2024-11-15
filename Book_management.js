// ques7

// question 7
// book.js
function Book(title,author,year){
    this.title = title
    this.author = author
    this.year = year
}

Book.prototype.getSummary = function(){
    console.log(`${title} by ${author} ,published in ${year}`)
}

const Books = [new Book("The Giant monk","F.scott",1925),
    new Book("1984" ,"George Orwell",1948),
    new Book("To Humming Bird","Harpee lee",1960),
]

module.exports=Books;