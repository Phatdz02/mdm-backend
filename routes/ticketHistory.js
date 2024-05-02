const express = require('express');
const router = express.Router();
const Ticket = require('../models/Ticket');
const redisClient = require('../utils/redis');

router.get('/search', async (req, res) => {
    const ticketCode = req.query.ticketCode;
    const keyPattern = `ticket:${ticketCode}*`;

    try {
        await redisClient.connect();
        const keys = await redisClient.keys(keyPattern);
        const tickets = await Promise.all(keys.map(key => redisClient.hGetAll(key)));
        await redisClient.disconnect();
        
        res.json(tickets);
    } catch (error) {
        console.error("Error occurred during search:", error);
        res.status(500).json({ error: "An error occurred during search" });
    }
});


router.get('/show', async (req, res) => {
    const keyPattern = `ticket:*`;
   
    await redisClient.connect()
    const keys = await redisClient.keys(keyPattern)
    const tickets = await Promise.all(keys.map(key => redisClient.hGetAll(key)))
    await redisClient.disconnect()


    res.json(tickets)
    
});

module.exports = router;
