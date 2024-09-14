import express from 'express';

const router = express.Router();

router.get('/test', (req,res) => {
    res.json({message: 'API is working!'});
});

//console.log('User route file loaded');

export default router;