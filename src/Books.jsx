import React from "react";

const books = [
    {id : 101, title : "To Kill a Mockingbird", author : "Harper Lee", year : 1920},
    {id : 102, title : "Pride and Prejudice", author : "Jane Austen", year : 1967 },
    {id : 103, title : "The Great Gatsby", author : "F. Scott Fitzgerald", year : 1984 }
];


function Books() {
    return (
        <>
        {books.map((e) => (
            <div key={e.id}>
                <h2>Books Title : {e.title}</h2>
                <p>Book Author : {e.author}</p>
                <p>Publish : {e.year}</p>
                <hr />
            </div>
        ))}
        </>
    );
}

export default Books;