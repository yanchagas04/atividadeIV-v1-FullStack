import Serverless from 'serverless-http';
const { app } = require('../src/app');

export default Serverless(app)