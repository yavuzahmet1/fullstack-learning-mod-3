# What is Mongoose?

**Mongoose** is an **Object Data Modeling (ODM)** library for **Node.js** and **MongoDB**. It provides a structured way to interact with MongoDB by enforcing schemas, validations, and middleware, making database operations easier and more organized.

## Key Features

- **Schema-Based**: Defines data structure using schemas (unlike MongoDB's schemaless nature).
- **Models**: Converts schemas into models for database operations (CRUD).
- **Middleware**: Supports `pre` and `post` hooks (e.g., before saving a document).
- **Validation**: Built-in validation for data integrity (e.g., required fields, type checks).
- **Query Helpers**: Chainable methods like `find()`, `where()`, and `sort()`.

## Installation

```bash
pnpm add mongoose

const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydb');

// Define a schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  isActive: Boolean
});

// Create a model
const User = mongoose.model('User', userSchema);

// Add a new user
const newUser = new User({ name: 'Alice', age: 30, isActive: true });
newUser.save()
  .then(() => console.log('User saved!'))
  .catch(err => console.error('Error:', err));
```

# What is ORM? (Object-Relational Mapping)

**ORM** is a programming technique that bridges the gap between **object-oriented programming** (OOP) and **relational databases**. It converts data between incompatible systems (objects in code ↔ database tables) seamlessly.

## How ORM Works

- Maps **database tables** to **classes/objects** in code.
- Translates **rows** into **object instances**.
- Converts **columns** into **object properties**.
- Automates **SQL queries** (e.g., `SELECT`, `INSERT`) via methods like `.save()` or `.find()`.

### Example (Without ORM vs. With ORM)

```javascript
// Without ORM (Raw SQL)
db.query("SELECT * FROM users WHERE id = 1", (err, result) => {
  console.log(result.rows[0]);
});

// With ORM (e.g., Sequelize, TypeORM)
const user = await User.findOne({ where: { id: 1 } });
console.log(user);
```

JavaScript/Node.js=> Sequelize, TypeORM, Prisma
Python => SQLAlchemy, Django ORM
Java =>Hibernate
PHP =>Eloquent (Laravel)

Advantages of ORM

    Productivity: Write database logic in your preferred language (no SQL expertise needed).

    Security: Reduces SQL injection risks via parameterized queries.

    Maintainability: Code becomes more readable and modular.

    Database Agnostic: Switch databases (e.g., PostgreSQL → MySQL) with minimal code changes.

Disadvantages

    Performance Overhead: Complex queries may be less optimized than raw SQL.

    Learning Curve: ORM-specific syntax requires time to master.

Use Cases

    Web applications (e.g., user management systems).

    Rapid prototyping (avoids writing repetitive SQL).

Related Concepts

    ODM (Object-Document Mapper): Like ORM but for NoSQL (e.g., Mongoose for MongoDB).

    Active Record Pattern: ORM implementation where objects represent database rows (e.g., Ruby on Rails).

# MongoDB Update Operation Response Breakdown

This JSON output represents the result of a MongoDB update operation (e.g., `updateOne` or `updateMany`):

```json
{
  "error": false,
  "result": {
    "acknowledged": true,
    "modifiedCount": 1,
    "upsertedId": null,
    "upsertedCount": 0,
    "matchedCount": 1
  }
}
```

1. Successful Update=> Found 1 matching document and updated it
   {
   "modifiedCount": 1,
   "matchedCount": 1
   }
2. No Changes Needed=>Found matching document but no values were changed (already had target values)
   {
   "modifiedCount": 0,
   "matchedCount": 1
   }
3. No Matching Document=>No documents matched your filter criteria
   {
   "modifiedCount": 0,
   "matchedCount": 0
   }
4. Upsert Creation=>No matching doc found → created new document (requires upsert: true)
   {
   "upsertedId": ObjectId("65a1b2c3d4e5f6a7b8c9d0e1"),
   "upsertedCount": 1,
   "modifiedCount": 0
   }
