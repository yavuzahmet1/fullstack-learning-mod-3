"use strict";


/* -------------------------------------------------------
        EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const mongoose = require("mongoose");


/* ---------------------------------------------------- */
//* BlogCategory Schema
const blogCategorySchema = new mongoose.Schema({

    // _id

    name: {
        type: String,
        trim: true,
        required: true,
        unique: true
    }

}, {
    collection: 'blogCategories'
});

const BlogCategory = mongoose.model('BlogCategory', blogCategorySchema);

/* ---------------------------------------------------- */
//* BlogPost Schema

const BlogPostSchema = new mongoose.Schema({

    categoryId: { // default relation: ManyToOne
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BlogCategory',
        required: true,
        // unique: true // convert relation to OneToOne.
    },

    title: {
        type: String,
        trim: true,
        required: true
    },

    content: {
        type: String,
        trim: true,
        required: true
    },

    // createdAt
    // updatedAt

}, {
    collection: 'blogPosts',
    timestamps: true
});

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

/* ---------------------------------------------------- */
module.exports = { BlogCategory, BlogPost }


/* ---------------------------------------------------- *
//* Sample

// 1 - Create Schema
// new mongoose.Schema({ fields }, { options });

const nameSchema = new mongoose.Schema({

    // _id: // auto created and increment

    fieldName: Number,
    fieldName2: Boolean,
    fieldName3: mongoose.Schema.Types.String,

    fieldName4: {
        type: String, // JS data type
        default: null,
        trim: true, // Cuts the space before & after
        unique: true,
        select: false,
        index: true,
        // required: true,
        required: [true, 'custom error message'],
        // enum: ['1', '2', '3'],
        // enum: [1, 2, 3],
        enum: [[1, 2, 3], 'custom error message'],
        min: 5,
        max: 10,
        // valitedate: () => true // returns TRUE or FALSE. if returns false it wil throw a validation error.
        valitedate: [() => true, 'custom error message'],
        get: () => { return data }, // it works default when we do read oparation
        set: () => { return data } // it works default when we do create oparation
    }

}, {
    collection: 'collectionName', // Table Name
    timestamps: true // createdAt & updatedAt
});


// 2 - Convert Schema to Model
module.exports = mongoose.model('ModelName', nameSchema);
/* ---------------------------------------------------- */
