// ques 8
// ques 8

function Book(title,author,year){
    this.title = title
    this.author = author
    this.year = year
}

function Member(name , borrowedBooks=[]){
    this.name = name
    this.borrowedBooks = borrowedBooks
}

Member.prototype.borrow=function(Book){
    if(Book.isAvailable){
      Book.isAvailable=false;              
      this.borrowedBooks.push(Book);
      console.log(`${this.name} borrowed a ${Book.title}`)
    }else{
      console.log(`this ${Book.title} already borrowed `);
    }
  }

  function PremiumMember(name , borrowedBooks=[],SpecialCollectionAccess = true){
    Member.call(name , borrowedBooks=[])
    this.name = name
    this.borrowedBooks = borrowedBooks
    this.SpecialCollectionAccess = SpecialCollectionAccess
    this.maxBorrowLimit = 5;

  }

//   borrow(Book) {
//     if (this.borrowedBooks.length >= this.maxBorrowLimit) {
//       console.log(Cannot borrow more than ${this.maxBorrowLimit} books.);
//       return;
//     }

const book1 = new Book("The Alchemist", "Paulo Coelho");
const book2 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
const book3 = new Book("1984", "George Orwell");