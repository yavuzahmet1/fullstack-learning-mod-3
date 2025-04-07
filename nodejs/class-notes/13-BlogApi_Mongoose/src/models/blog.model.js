//blog project with mongoose

// const mongoose = require("mongoose");


// //1-create schema
// // new mongoose.Schema({fields},{options})

// const nameSchema = new mongoose.Schema({
//     //id : auto created and increment
//     fieldName: Number,
//     fieldName2:
// }, {
//     collation: "collectionName",
//     timestamps: true,
// })

const mongoose = require("mongoose");
const blogCategorySchema = new mongoose.Schema({
    //id
    name: {
        type: String,
        trim: true,
        required: true,
        unique: true
    }
}, {
    collection: "blogCategories"
});

mongoose.model("BlogCategory", blogCategorySchema);

const BlogPost = new mongoose.Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "BlogCategories",
        required: true


    }
}, {
    collection: "blogPosts",
    timestamps: true
})