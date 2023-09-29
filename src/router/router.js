import { Router } from "express";
import { registrarUsuario } from '../controllers/controllers.js';
import { iniciarSesion } from '../controllers/controllers.js'

const create = Router();

create.post('/registro', registrarUsuario);
create.post('/iniciar-sesion', iniciarSesion);


export { create };
