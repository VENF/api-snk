import { Request, Response } from 'express';
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
