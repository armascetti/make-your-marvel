import mongoose from "mongoose"

const Schema = mongoose.Schema

const quoteSchema = new Schema({
  content: {
    type: String,
    required: true
  },
})

const characterSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  quotes: [quoteSchema],
  added_by: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
})

const Character = mongoose.model("Character", characterSchema)

export {
  Character
}