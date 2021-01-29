import { Schema, model, Document } from 'mongoose';

export interface ICharacter extends Document {
  name: {
    japones: string;
    romaji: string;
    principal: string;
  };
  debut: {
    manga: string;
    anime: string;
  };
  information: {
    birth: string;
    age: Array<string>;
    gender: string;
    species: string;
    state: string;
    height: Array<string>;
    weight: string;
    classification: string;
    occupation: string;
    affiliation: Array<string>;
  };
  rank: {
    grade: string;
  };
  statistics: {
    battleskill: number;
    initiative: number;
    strategy: number;
    teamwork: number;
    distinguished: {
      type: string;
      range: number;
    };
  };
  family: object;
  titans: Array<Object>;
  weapons: Array<string>;
  biography: string;
  note: string;
  quotes: Array<string>;
}

const characterSchema = new Schema({
  name: { type: Object, required: true },
  debut: { type: Object, required: true },
  information: { type: Object, required: true },
  rank: { type: Object, required: true },
  statistics: { type: Object, required: true },
  family: { type: Object, required: true },
  biography: { type: String, required: true },
  note: { type: String, required: true },
  quotes: { type: [String], required: true },
  weapons: { type: [String], required: true },
  titans: { type: [Object] }
});

export default model<ICharacter>('characters', characterSchema);
