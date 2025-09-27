
const enviromnent = {}

enviromnent.staging={
    port:3000,
    envName:'staging',
    secretKey:'secretKeystaging',
}
enviromnent.production={
    port:5000,
    envName:'production',
    secretKey:'secretKeyproduction',
}

const currentEnv = typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV.toLowerCase() : 'staging'

const envToExport = typeof(enviromnent[currentEnv]) === 'object' ? enviromnent[currentEnv] : enviromnent.staging

module.exports = envToExport