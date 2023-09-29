//aca llamo las cosas que vamos a utilizar en este caso la cosas bacicas 
//express,cors
import express,{ json } from "express";
import cors  from "cors";
export const app = express();
import bodyParser from 'body-parser';
import { create } from "../server/src/router/router.js";
//aca las uso
app.use(cors());
app.use(json());
app.use(create)
app.use(bodyParser.json());


//creo el puerto
app.set('port',3001);
app.listen(app.get('port'),()=>{
    console.log(`corriendo en el puerto  ${app.get('port')}`);
})