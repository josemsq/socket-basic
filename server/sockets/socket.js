const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a esta app'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado');

    });

    // Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.emit('enviarMensaje', data); //al 1 user
        client.broadcast.emit('enviarMensaje', data); //a todos los users
        /* if (mensaje.usuario) {
            callback({
                resp: 'Todo salio bien'
            });
        } else {
            callback({
                resp: 'Todo salio mal'
            });
        } */

    });

});