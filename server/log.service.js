const fs = require('fs');
const LOG_SERVICE_PATH = './logs/logs.txt'

function getLog() {

    fs.readFile(LOG_SERVICE_PATH, 'utf8', (err, data) => {
        

    });


};

function logMiddleware(req, res, next) {
    console.log(req.method, req.originalUrl, new Date());

    fs.appendFile(LOG_SERVICE_PATH, `<li>${req.method} ${req.originalUrl} ${new Date()}</li>`, (err) => {
        if (err) {
            console.log(err);
        }
    });

    next();
};

function startLog() {
    let currentDate = new Date()

    setInterval(function() {
        let startServerTime = Date.now() - currentDate;

        fs.appendFile(LOG_SERVICE_PATH, `<li>Date now in milisec - ${currentDate.getTime()} Server working time from start in ml - ${startServerTime}</li>\n`, (err) => {
            if (err) {
                console.log(err);
            }
        });
    }, 5000);

};

function getLog(req, res) {
    const result = fs.readFileSync(LOG_SERVICE_PATH, 'utf8', (err, data) => {
        
        if (err) {

            data = [];

            fs.writeFile(LOG_SERVICE_PATH, JSON.stringify(data), (err) => {
                if (err) {
                    console.log(err)
                }
            })
            return;
        };
        return String(data)
    });
    
    res.send(result)
};

module.exports = {
    getLog,
    logMiddleware,
    startLog,
};