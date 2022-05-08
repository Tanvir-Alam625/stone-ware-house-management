import React from "react";

const Blogs = () => {
  return (
    <section className="max-w-[1100px] mx-auto text-gray-600 font-mono px-2">
      <h2 className="text-2xl md:text-4xl font-bold md:mt-12 mt-4 mb-4">
        1. Difference between javascript and node js?
      </h2>
      <p className="md:text-xl text-sm ">
        <span className="font-bold ">Answer:</span>
        <p className="font-blod text-teal-400 mb-2">A. Node js..</p>
        NodeJS is a cross-platform and opensource Javascript runtime environment
        that allows the javascript to be run on the server-side. Nodejs allows
        Javascript code to run outside the browser. Nodejs comes with a lot of
        modules and mostly used in web development.
        <br />
        <br />
        <p className="font-blod text-teal-400 mb-2">A. Javascript...</p>
        JavaScript started off as a programming language just for web browsers.
        However the language specification does not include many of the
        variables and methods that you’ll find while using JS in the browser.
        For example, the “document” object is not a part of the language spec;
        it’s unique to web browser. Same for “getElementById” and
        “querySelector”. I would refer to “pure JavaScript” to refer to thing
        that are included in the language spec.
      </p>
      <br />
      <h2 className="text-2xl md:text-4xl font-bold md:mt-12 mt-4 mb-4">
        2.When should you use nodejs and when should you use mongodb?
      </h2>
      <p className="md:text-xl text-sm ">
        <span className="font-bold ">Answer:</span>
        MongoDB is the Document Oriented Database. MongoDB stores a lot of data
        in JSON format. MongoDB's performance is much faster than any RDBMS.
        MongoDB is designed to work with Large Scale Data. MongoDB can work on
        multiple servers. MongoDB can handle a large number of access requests
        easily. There are 2 design patterns in programming. One is asynchronous
        programming and the other is synchronous programming. Node JS by default
        follows the Asynchronous pattern. That is, it does not wait for a task
        to be completed. In the meantime, NodeJS started another job. That’s why
        we use nodeJS.
      </p>
      <h2 className="text-2xl md:text-4xl font-bold md:mt-12 mt-4 mb-4">
        3.What is the purpose of jwt and how does it work
      </h2>
      <p className="md:text-xl text-sm ">
        <span className="font-bold ">Answer:</span>
        JSON Web Token is a standard used to create access tokens for an
        application. It works this way: the server generates a token that
        certifies the user identity, and sends it to the client. The client will
        send the token back to the server for every subsequent request, so the
        server knows the request comes from a particular identity. This
        architecture proves to be very effective in modern Web Apps, where after
        the user is authenticated we perform API requests either to a REST or a
        GraphQL API. Who uses JWT? Google, for example. If you use the Google
        APIs, you will use JWT. A JWT is cryptographically signed but not
        encrypted, hence using HTTPS is mandatory when storing user data in the
        JWT, so there is a guarantee we can trust it when we receive it, as no
        middleman can intercept and modify it, or the data it holds, without
        invalidating it.
      </p>
    </section>
  );
};

export default Blogs;
