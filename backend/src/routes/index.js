const express = require('express');
const router = express.Router();
const imagenController = require('../controllers/imagenController');

router.get('/', imagenController.index);
router.get('/show/:id', imagenController.show);
router.post('/create', imagenController.create);
router.put('/update/:id', imagenController.update);
router.delete('/delete/:id', imagenController.delete);





module.exports = router;