import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h5>1. Difference between javascript and nodejs ?</h5>
            <h6>Ans: JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.
            </h6>
            <br />
            <h5>2. When should you use nodejs and when should you use mongodb?</h5>
            <h6>Ans: There are many web servers built with nodejs that will then use MongoDB for storing data. MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database.</h6>
            <br />
            <h5>3. Differences between sql and nosql databases.</h5>
            <h6>Ans: SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</h6>
            <br />
            <h5>4. What is the purpose of jwt and how does it work?</h5>
            <h6>Ans: JWT, or JSON Web Token, is an open standard used to share security information between two parties  a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued</h6>
        </div>

    );
};

export default Blogs;