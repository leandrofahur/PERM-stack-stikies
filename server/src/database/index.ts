import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const url = process.env.MONGO_URI;

const createConnection = async (): Promise<void> => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default createConnection;
