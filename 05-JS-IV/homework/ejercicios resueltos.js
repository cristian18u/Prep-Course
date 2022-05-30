// No cambies los nombres de las funciones.

function crearGato (nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:

  var obj = {
    nombre: nombre,
    edad: edad,
    meow: function meow () {
      return 'Meow!'
    }
  }
  return obj;
}

function agregarPropiedad (objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:

  // var objeto = { 
  //   x: 1, 
  //   y: 2 
  // }

  // objeto = {"x": 1, "y": 2, "z": null}

  objeto[property] = null;
  // console.log('objeto', objeto)
  // console.log('property', property)
  return objeto;
}

function invocarMetodo (objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:

  return objeto[metodo]();
}

function multiplicarNumeroDesconocidoPorCinco (objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:

  return objetoMisterioso.numeroMisterioso*5;
}

function eliminarPropiedad (objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:

  delete objeto[unaPropiedad]
  return objeto;
}

function nuevoUsuario (nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  var objeto = {
    nombre,
    email,
    password,
  }
  return objeto;
}

function tieneEmail (usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:

  if (usuario.email) return true
  return false;
  // return usuario.hasOwnProperty('email')
  // return Object.prototype.hasOwnProperty.call(usuario, "email")
}

function tienePropiedad (objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:

  // eslint-disable-next-line no-prototype-builtins
  return objeto.hasOwnProperty(propiedad);
}

function verificarPassword (usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // Tu código:

  if (usuario.password === password) return true
  return false;
}

function actualizarPassword (usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
  // Devuelve el objeto
  // Tu código:

  // console.log('usuario', usuario);
  usuario.password = nuevaPassword;
  return usuario;

  // // eslint-disable-next-line no-unreachable
  // usuario.nuevaPassword = nuevaPassword
  // return usuario;
}

function agregarAmigo (usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // Tu código:

  usuario.amigos.push(nuevoAmigo);
  return usuario;
}

function pasarUsuarioAPremium (usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:

  // usuarios = [usuario, usuario, usuario, usuario]

  // usuarios = [{esPremium: null}, {esPremium: null}, {esPremium: null}, {esPremium: null}]

  // usuario {
  //   esPremium: null
  // }
  for (var i = 0; i < usuarios.length; i++) {
    usuarios[i].esPremium = true
  }
  return usuarios;
}

function sumarLikesDeUsuario (usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:

  console.log('usuario', usuario)
  // usuario.posts = [post, post, post, post]
  //  post = {
  //   likes: 5;
  // }

  // usuario.post = [{likes: 5}, {likes: 7}, {likes: 6}]

  // usuario.posts

  var acumulador = 0;

  for (var i = 0; i < usuario.posts.length; i++) {
    acumulador = acumulador + usuario.posts[i].likes
    console.log('acumulador', acumulador);
  }
  return acumulador;
}

function agregarMetodoCalculoDescuento (producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:

  // console.log('lo que llega', producto);

  // calcularPrecioDescuento

  // el this se hace relevante cuando usemos funciones constructoras y usemos metodos por aparte
  // usando algo que se llama prototype

  producto.calcularPrecioDescuento = function calcularPrecioDescuento () {
    // console.log('this', this.precio)
    console.log('producto', producto.precio)
    var precioDescuento = this.precio - (this.precio * this.porcentajeDeDescuento)
    return precioDescuento;
  }
  return producto;

  // var usuario = {
  //   nombre: 'cristian',
  //   email: 'critian18u',
  //   wed: {
  //     likes: 7
  //     calculoLikes: function calculoLikes () {
  //       return 'tengo' + ' ' + wed.likes;
  //       this.likes;
  //     }
  //   }
  // }

  // function Usuario (usuario) {
  //   nombre: 'cristian',
  //   email: 'critian18u',
  //   wed: {
  //     likes: 7
  //   } 
  // }
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
}
