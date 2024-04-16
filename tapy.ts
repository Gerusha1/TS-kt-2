abstract class Publisher

{

    protected title: string;

    protected author: string;

    protected pubYear: number;

    protected copies: number;


 

    constructor

    (title: string, author: string, pubYear: number, copies: number)

    {

        this.title = title;

        this.author = author;

        this.pubYear = pubYear;

        this.copies = copies;

    }


 

    getTitle(): string

    {

        return this.title;

    }


 

    getAuthor(): string

    {

        return this.author;

    }


 

    getPubYear(): number

    {

        return this.pubYear;

    }


 

    getCopies(): number

    {

        return this.copies;

    }


 

    setTitle(title: string): void

    {

        this.title = title;

    }


 

    setAuthor(author: string): void

    {

        this.author = author;

    }


 

    setPubYear(pubYear: number): void

    {

        this.pubYear = pubYear;

    }


 

    setCopies(copies: number): void

    {

        this.copies = copies;

    }

}


 

class Magazine extends Publisher

{

    private issue: number;


 

    constructor(title: string, author: string, pubYear: number, copies: number, issue: number)

    {

        super(title, author, pubYear, copies);

        this.issue = issue;

    }

}



 

class Book extends Publisher

{

    private pages: number;


 

    constructor(title: string, author: string, pubYear: number, copies: number, pages: number)

    {

        super(title, author, pubYear, copies);

        this.pages = pages;

    }


 

}


 

interface Reception

{

    receive(): void;

    delivery(): void;

}


 

class Reader

{

    private firstName: string;

    private lastName: string;

    private items: Publisher[];


 

    constructor(firstName: string, lastName: string)

    {

        this.firstName = firstName;

        this.lastName = lastName;

        this.items = [];

    }


 

    addPublication(publication: Publisher): void

    {

        if (this.items.length < 3)

        {

            this.items.push(publication);

        }

    }


 

    removePublication(publication: Publisher): void

    {

        const index = this.items.indexOf(publication);

        if (index !== -1)

        {

            this.items.splice(index, 1);

        }

    }

}


 

class Library

{

    private publications: Publisher[];


 

    constructor() {

        this.publications = [];

    }


 

    addPublication(publication: Publisher): void

    {

        this.publications.push(publication);

    }


 

    removePublication(publication: Publisher): void

    {

        const index = this.publications.indexOf(publication);

        if (index !== -1)

        {

            this.publications.splice(index, 1);

        }

    }

}


 

const book1 = new Book();

const magazine1 = new Magazine();

const reader1 = new Reader();

const library = new Library();


 

library.addPublication(book1);

library.addPublication(magazine1);

reader1.addPublication(book1);

reader1.addPublication(magazine1);

reader1.removePublication(book1);

library.removePublication(magazine1);