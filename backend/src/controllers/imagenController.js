const imagenController = {};
const Imagen = require('../models/imagen');

imagenController.index = async (req, res) => {
    const imagenes = await Imagen.find();

    res.json(imagenes);
}

imagenController.show = async (req, res) => {
    const {id} = req.params;
    const imagen = await Imagen.findById(id);

    res.json(imagen);
}

imagenController.delete = async (req, res) => {
    const {id} = req.params;
    const imagen = await Imagen.findByIdAndDelete(id);

    res.json(imagen);
}

imagenController.update = async (req, res) => {
    const {id} = req.params;
    const imagen = await Imagen.findByIdAndUpdate(id, req.body);

    res.json({mensaje: 'ok'});
}

imagenController.create = async (req, res) => {
    const imagen = new Imagen({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        ruta: req.file.path
    });
    await imagen.save();

    res.json({mensaje: 'ok'})
}

imagenController.find = async (req, res) => {
    const {termino} = req.params;
    const imagenes = [];
    const filtrarNombre = await Imagen.find({nombre: { $regex: '.*' + termino + '.*' }});
    const filtrarDescripcion = await Imagen.find({descripcion: { $regex: '.*' + termino + '.*' }});

    imagenes.push(...filtrarNombre);
    imagenes.push(...filtrarDescripcion);

    res.json(imagenes);
}




module.exports = imagenController;