Authentication is the process or action of verifying the identity of a user or process. Up to this point you have not been able to create an app utilizing this key concept.

The most common and easiest way to use authentication middleware for Node.js is Passport. It is easy to learn, light-weight, and extremely flexible allowing for many strategies, which we will talk about in later challenges. In addition to authentication we will also look at template engines which allow for use of Pug and web sockets which allow for real time communication between all your clients and your server.

https://www.freecodecamp.org/learn/quality-assurance/advanced-node-and-express/use-a-template-engines-powers

One of the greatest features of using a template engine is being able to pass variables from the server to the template file before rendering it to HTML.

In your Pug file, you're able to use a variable by referencing the variable name as #{variable_name} inline with other text on an element or by using an equal sign on the element without a space such as p=variable_name which assigns the variable's value to the p element's text.

We strongly recommend looking at the syntax and structure of Pug here on GitHub's README. Pug is all about using whitespace and tabs to show nested elements and cutting down on the amount of code needed to make a beautiful site.

https://www.freecodecamp.org/learn/quality-assurance/advanced-node-and-express/set-up-passport

It's time to set up Passport so we can finally start allowing a user to register or login to an account! In addition to Passport, we will use Express-session to handle sessions. Using this middleware saves the session id as a cookie in the client and allows us to access the session data using that id on the server. This way we keep personal account information out of the cookie used by the client to verify to our server they are authenticated and just keep the key to access the data stored on the server.



Serialization and deserialization are important concepts in regards to authentication. To serialize an object means to convert its contents into a small key that can then be deserialized into the original object. This is what allows us to know who has communicated with the server without having to send the authentication data, like the username and password, at each request for a new page.