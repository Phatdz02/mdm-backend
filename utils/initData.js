const redis = require("redis");
const redisClient = redis.createClient();

async function initData() {
    await redisClient.connect()
  

    await redisClient.hSet('ticket:ABC123', {
        ticketCode:"ABC123",
        route: "HCM - Hà Nội",
        time: "2024-04-30 08:00:00",
        seat:"A01" ,
        boarding_point: "",
        price: 500000.0
    })
    await redisClient.hSet('ticket:ABC321', {
        ticketCode:"ABC321",
        route: "Nha Trang - Đà Lạt",
        time: "2024-04-30 08:00:00",
        seat:"A03" ,
        boarding_point: "",
        price: 500000.0
    })
    await redisClient.hSet('ticket:ABC111', {
        ticketCode:"ABC111",
        route: "Cần Thơ - Kiên Giang ",
        time: "2024-04-10 08:00:00",
        seat:"A21" ,
        boarding_point: "",
        price: 500000.0
    })
    await redisClient.hSet('ticket:ABC131', {
        ticketCode:"ABC131",
        route: "Quảng Ninh - Hải phòng",
        time: "2024-04-5 08:00:00",
        seat:"A05" ,
        boarding_point: "",
        price: 500000.0
    })
    await redisClient.hSet('ticket:ABC511', {
        ticketCode:"ABC511",
        route: "Khánh Hòa - Hà Nội",
        time: "2024-05-1 08:00:00",
        seat:"A07" ,
        boarding_point: "",
        price: 500000.0
    })
    await redisClient.disconnect()
}

module.exports = initData