
const {sampleHandlers}=require('./handlers/routeHandlers/samplehandlers');
const{userHandlers}=require('./handlers/routeHandlers/userHandlers');

const routes={
"sample":sampleHandlers,
    "user":userHandlers
}

module.exports=routes;