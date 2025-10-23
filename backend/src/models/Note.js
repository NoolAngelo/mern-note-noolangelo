import mongoose, { Schema } from "mongoose";

//1st step: you need to create schema
//2nd step: you would create a model based off of the schema

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // createdAt, udateAt
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
