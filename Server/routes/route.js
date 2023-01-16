import express, { Router} from 'express';

import multer from "multer"

// const uploadPhoneImage = multer({dest: 'uploads/Phone'})

import {addPhoneData, getPhoneData, getEditPhone, editPhoneData, deletePhoneDetail} from '../controller/userController.js'
import {addLaptopData, getLaptopData, getEditLaptop , editLaptopData, deleteLaptopDetail} from '../controller/laptopUserController.js'

import {registerData, getregisterdata} from '../controller/resgisterController.js'

const router = express.Router();


// const multer = require("multer");
// const moment = require("moment")


// img storage confing
var imgconfig = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./uploads");
    },
    filename:(req,file,callback)=>{
        callback(null,`image-${Date.now()}.${file.originalname}`)
    }
});


// img filter
const isImage = (req,file,callback)=>{
    if(file.mimetype.startsWith("image")){
        callback(null,true)
    }else{
        callback(null,Error("only image is allowd"))
    }
}

var upload = multer({
    storage:imgconfig,
    fileFilter:isImage
})

router.post('/register', registerData)
router.post('/addphonedata', upload.single('photo'), addPhoneData)
router.post('/editphone/:id', editPhoneData)

router.post('/addlaptopdata', addLaptopData)
router.post('/editlaptop/:id', editLaptopData)
router.get('/laptop', getLaptopData)

router.get('/getregisterdata', getregisterdata)

router.get('/phone', getPhoneData)

router.delete('/phone/:id', deletePhoneDetail)

router.delete('/laptop/:id', deleteLaptopDetail)

router.get('/geteditphone/:id', getEditPhone)

router.get('/getlaptopphone/:id', getEditLaptop)


export default router;