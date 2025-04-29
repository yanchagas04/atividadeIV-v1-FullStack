const serverless = require('serverless-http')
const { app } = require('../src/app');

const handler = serverless(app, { provider: 'azure' });
module.exports.funcName = async (context, req) => {
  context.res = await handler(context, req);
}