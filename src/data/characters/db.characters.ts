import { config } from 'dotenv';config();
import mongoose from 'mongoose';
import Character from '../../models/characters.model';

/* Characters */
import Eren from './eren.json';
import Mikasa from './mikasa.json';
/* Characters */

import '../../db';

export const insertDataCharacters = async () => {
  try {
    await Character.deleteMany({});
    await Character.insertMany([Eren, Mikasa])
    await mongoose.disconnect();
  } catch (error) {
    await mongoose.disconnect();
    throw new Error(error)
  }
};
