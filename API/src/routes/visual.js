import { visual } from '../controllers/index.js';
import express from 'express';
import { accessToken } from '../middleware/authToken.js';
import { checkPermission } from '../middleware/checkPermission.js';
import multer from 'multer';
const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();

router.post('/createVisual', checkPermission, upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'video', maxCount: 1 }
]), visual.createVisual);
router.get('/getAllVisual', accessToken, visual.getAllVisual);
router.get('/getSpecificVisual/:id', accessToken, visual.getSpecificVisual);
router.put('/updateVisual/:id', checkPermission, upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'video', maxCount: 1 }
]), visual.updateVisual);
router.delete('/deleteVisual/:id', checkPermission, visual.deleteVisual);



export default router;