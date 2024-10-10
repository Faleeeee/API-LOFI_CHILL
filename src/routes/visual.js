import { visual } from '../controllers/index.js';
import express from 'express';
import { authenticateToken } from '../middleware/authToken.js';
import multer from 'multer';
const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();

router.post('/createVisual', upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'video', maxCount: 1 }
]), visual.createVisual);
router.get('/getAllVisual', visual.getAllVisual);
router.get('/getSpecificVisual/:id', visual.getSpecificVisual);
router.put('/updateVisual/:id', upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'video', maxCount: 1 }
]), visual.updateVisual);
router.delete('/deleteVisual/:id', visual.deleteVisual);



export default router;