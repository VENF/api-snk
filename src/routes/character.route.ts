import { Router } from 'express';
import { characters, character } from '../controllers/character.controller';
const route = Router();

route.route('/characters').get(characters);
route.route('/characters/:field/:sub/:value').get(character);

export default route;
