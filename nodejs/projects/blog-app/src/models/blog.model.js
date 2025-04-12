"use strict"

//* 1-Create Schema
const mongoose = require("mongoose");

//* Blog Category Schema
const blogCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        unique: true
    }
}, {
    collection: "blogCategories",
    //timestamps: true //createdAt and updatedAt
});

mongoose.model("BlogCategory", blogCategorySchema);

//* Blog Post Schema

const blogPost = new mongoose.Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "BlogCategory",//burda mutlaka yukarıda çevirdiğimiz model ismi gelmesi gerekiyor. Hangi modelle ilişki kuracağını belirtir. Population işlemi için gereklidir
        required: true,
        unique: true // convertion relation to OneToOne

    }
}, {
    collation: "blogPosts",
    timestamps: true
})