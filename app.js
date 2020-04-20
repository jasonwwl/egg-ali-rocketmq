'use strict';
const RocketMQ = require('./lib/rocketmq');
module.exports = app => {
  app.rocketmq = {};
  app.config.aliRocketMQ.topics.forEach(topicOptions => {
    app.rocketmq[topicOptions.name] = new RocketMQ(app.config.aliRocketMQ.options, topicOptions);
  });
};
