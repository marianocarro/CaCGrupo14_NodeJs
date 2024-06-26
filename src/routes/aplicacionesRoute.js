const express = require("express");
const router = express.Router();
const apliController =require('../controllers/aplicacionesController');

router.get('/', apliController.getAllAplic);
router.post('/',apliController.createAplic);
router.get('/modificar/:id' , apliController.getModificarById);
router.put('/modificar', apliController.updateAplicById);
router.delete('/eliminar', apliController.deleteAplicById);

module.exports=router;

/*
const multer = require ('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `public/img/`)
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + "_" + file.originalname)
    }
})

const uploadFile = multer({storage})

*/