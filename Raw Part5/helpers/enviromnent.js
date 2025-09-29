
const enviromnent = {}

enviromnent.staging={
    port:3000,
    envName:'staging',
    secretKey:'secretKeystaging',
    maxChecks:5,
}
enviromnent.production={
    port:5000,
    envName:'production',
    secretKey:'secretKeyproduction',
    maxChecks:5,
}

const currentEnv = typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV.toLowerCase() : 'staging'

const envToExport = typeof(enviromnent[currentEnv]) === 'object' ? enviromnent[currentEnv] : enviromnent.staging

module.exports = envToExport