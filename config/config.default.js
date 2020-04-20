'use strict';

/**
 * egg-ali-rocketmq default config
 * @member Config#aliRocketmq
 * @property {String} SOME_KEY - some description
 */

exports.aliRocketmq = {
  topics: [{
    name: 'topic-name',
    group: 'group-id',
    instance: 'instance-id',
    type: 'normal', // normal | trans
    consumerService: 'consumer.foo.bar',
  }],
  options: {
    endpoint: 'aliyun-rocketmq-endpoint',
    accessKey: 'aliyun-access-key',
    accessSecret: 'aliyun-access-key-secret',
  },
  consumer: {
    enable: true,
    numOfMessages: 3,
    waitSeconds: 3,
  },
};
