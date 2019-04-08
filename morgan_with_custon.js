const fs = require('fs');
const morgan = require('morgan');
try{
    var mentainMorganLogs = fs.createWriteStream('logs/morganlogs.log',{flags: 'a'});
}catch(err){
    console.log(err);
}

app.use(morgan('tiny', {stream: mentainMorganLogs}))
