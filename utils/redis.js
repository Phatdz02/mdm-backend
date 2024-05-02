const redis = require('redis');

const redisClient = redis.createClient({
    host: 'localhost',
    port: 6379,
}).on('error', (err) => {
    console.error('Redis client error:', err);
})

module.exports = redisClient;
