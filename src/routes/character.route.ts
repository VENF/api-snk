import { Router } from 'express';
import { characters } from '../controllers/character.controller';
const route = Router();

route.route('/characters').get(characters);

export default route;
