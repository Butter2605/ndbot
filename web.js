const express = require('express')
const app = express()
const port = 3000

module.exports = () => {
    app.get('/', (req, res) => {
        res.send('Săm soi á, địt mẹ mày luôn đấy mấy thằng lồn')
    })

    app.listen(port, () => {
    console.log(`Đã khởi chạy web app với port ${port}`)
    })
}