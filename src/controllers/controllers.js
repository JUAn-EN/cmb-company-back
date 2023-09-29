const users = []; console.log(users);
import jwt from 'jsonwebtoken';


export function registrarUsuario(req, res) {
    const newUser = req.body;
  
    const usuarioExistente = users.find(user => user.email === newUser.email);
  
    if (usuarioExistente) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }
  
    const token = generarTokenDeAutenticacion(newUser);
  
    users.push(newUser);
  
    res.status(201).json({ message: 'Usuario registrado con éxito', token });
}
  

export function iniciarSesion(req, res) {
    const { email, contrasena } = req.body;

    const usuario = users.find(user => user.email === email);

    if (!usuario) {
        return res.status(401).json({ message: 'Usuario no encontrado' });
    }

    if (usuario.contrasena.toLowerCase() !== contrasena.toLowerCase()) {
        return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    const correoUsuario = usuario.email;

    const token = generarTokenDeAutenticacion(usuario);

    res.status(200).json({ message: 'Inicio de sesión exitoso', token, email: correoUsuario });
}


  function generarTokenDeAutenticacion(usuario) {
    const tokenData = {
      userId: usuario.id,
      email: usuario.email,
    };
  
    const token = jwt.sign(tokenData, 'tu_clave_secreta', { expiresIn: '1h' });
  
    return token;
  }