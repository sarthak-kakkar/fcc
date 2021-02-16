MongoDB is a database that stores data records (documents) for use by an application. Mongo is a non-relational, "NoSQL" database. This means Mongo stores all associated data within one record, instead of storing it across many preset tables as in a SQL database. Some benefits of this storage model are:

Scalability: by default, non-relational databases are split (or "shared") across many systems instead of only one. This makes it easier to improve performance at a lower cost.
Flexibility: new datasets and properties can be added to a document without the need to make a new table for that data.
Replication: copies of the database run in parallel so if one goes down, one of the copies becomes the new primary data source.
While there are many non-relational databases, Mongo's use of JSON as its document storage structure makes it a logical choice when learning backend JavaScript. Accessing documents and their properties is like accessing objects in JavaScript.

Mongoose.js is an npm module for Node.js that allows you to write objects for Mongo as you would in JavaScript. This can make it easier to construct documents for storage in Mongo.

https://www.freecodecamp.org/learn/apis-and-microservices/mongodb-and-mongoose/create-a-model

First of all we need a Schema. Each schema maps to a MongoDB collection. It defines the shape of the documents within that collection. Schemas are building block for Models. They can be nested to create complex models, but in this case we’ll keep things simple. A model allows you to create instances of your objects, called documents.

Repl.it is a real server, and in real servers the interactions with the db happen in handler functions. These function are executed when some event happens (e.g. someone hits an endpoint on your API). We’ll follow the same approach in these exercises. The done() function is a callback that tells us that we can proceed after completing an asynchronous operation such as inserting, searching, updating or deleting. It’s following the Node convention and should be called as done(null, data) on success, or done(err) on error. Warning - When interacting with remote services, errors may occur!

/* Example */

var someFunc = function(done) {
  //... do something (risky) ...
  if(error) return done(error);
  done(null, result);
};

https://www.freecodecamp.org/learn/apis-and-microservices/mongodb-and-mongoose/perform-classic-updates-by-running-find-edit-then-save

In the good old days this was what you needed to do if you wanted to edit a document and be able to use it somehow e.g. sending it back in a server response. Mongoose has a dedicated updating method : Model.update(). It is bound to the low-level mongo driver. It can bulk edit many documents matching certain criteria, but it doesn’t send back the updated document, only a ‘status’ message. Furthermore it makes model validations difficult, because it just directly calls the mongo driver.

https://www.freecodecamp.org/learn/apis-and-microservices/mongodb-and-mongoose/perform-new-updates-on-a-document-using-model-findoneandupdate

Recent versions of mongoose have methods to simplify documents updating. Some more advanced features (i.e. pre/post hooks, validation) behave differently with this approach, so the Classic method is still useful in many situations. findByIdAndUpdate() can be used when searching by Id.

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  Person.findOneAndUpdate({name: personName}, {age: ageToSet}, {new: true}, (err, updatedDoc) => {
    if(err) return console.log(err);
    done(null, updatedDoc);
  })
};

In Mongoosejs, findOneAndUpdate returns the new document if the new property is set to true.

https://www.freecodecamp.org/learn/apis-and-microservices/mongodb-and-mongoose/chain-search-query-helpers-to-narrow-search-results

If you don’t pass the callback as the last argument to Model.find() (or to the other search methods), the query is not executed. You can store the query in a variable for later use. This kind of object enables you to build up a query using chaining syntax. The actual db search is executed when you finally chain the method .exec(). You always need to pass your callback to this last method. There are many query helpers, here we'll use the most commonly used.

Modify the queryChain function to find people who like the food specified by the variable named foodToSearch. Sort them by name, limit the results to two documents, and hide their age. Chain .find(), .sort(), .limit(), .select(), and then .exec(). Pass the done(err, data) callback to exec().

Further Readings
If you are eager to learn and want to go deeper, You may look at:

Indexes ( very important for query efficiency ),
Pre/Post hooks,
Validation,
Schema Virtuals and Model, Static, and Instance methods,
