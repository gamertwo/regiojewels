import mongoose from 'mongoose';

const CollectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a collection name'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
    unique: true,
  },
  description: {
    type: String,
    required: false,
    maxlength: [200, 'Description cannot be more than 200 characters'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Collection || mongoose.model('Collection', CollectionSchema);
