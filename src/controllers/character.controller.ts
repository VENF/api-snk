import { Request, Response } from 'express';
import { CSearchCharacter } from '../clasess/character/search';
import Character from '../models/characters.model';

export const characters = async (req: Request, res: Response): Promise<Response> => {
  try {
    const all = await Character.find();
    return res.status(200).json(all);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: error.message,
      error: {}
    });
  }
};

export const character = async (req: Request, res: Response): Promise<Response> => {
  const { field, value, sub } = req.params;
  const data = await new CSearchCharacter(field, value, parseInt(sub)).search();
  return res.status(data.status).json(data);
};
