import { Schema, model } from 'mongoose';

const schemaOptions = {
  timestamps: true,
};

const Guest = {
  name: {
    type: String,
    minlength: 2,
    maxlength: 50,
  },
  photo: {
    type: Buffer,
  },
  miniBio: {
    type: String,
  },
  socialMedias: {
    type: Array,
  },
};

const LivesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    shortTitle: {
      type: String,
      minlength: 2,
      maxlength: 30,
    },
    startDate: {
      type: Date,
      required: true,
    },
    finishDate: {
      type: Date,
      required: true,
    },
    goals: {
      type: Array,
      required: true,
    },
    description: {
      type: String,
      required: true,
      minlength: 20,
    },
    shortDescription: {
      type: String,
      required: true,
    },
    guest: Guest,
  },
  schemaOptions
);

export default model('Lives', LivesSchema);
