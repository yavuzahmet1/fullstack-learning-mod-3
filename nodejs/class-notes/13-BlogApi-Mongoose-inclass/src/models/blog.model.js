"use strict";


/* -------------------------------------------------------
        EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const { mongoose } = require("mongoose");


/* ---------------------------------------------------- */
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
        



    }

}, {
    collection: 'collectionName', // Table Name
    timestamps: true // createdAt & updatedAt
});