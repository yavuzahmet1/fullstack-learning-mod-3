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

const BlogCategory = mongoose.model("BlogCategory", blogCategorySchema);

//* Blog Post Schema

const blogPost = new mongoose.Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "BlogCategory",//burda mutlaka yukarıda çevirdiğimiz model ismi gelmesi gerekiyor. Hangi modelle ilişki kuracağını belirtir. Population işlemi için gereklidir
        required: true,
        //unique: true // convertion relation to OneToOne
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
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
    }
}, {
    collection: "blogPosts",
    timestamps: true
})
const BlogPost = mongoose.model("BlogPost", blogPost);

module.exports = { BlogCategory, BlogPost }