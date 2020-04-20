'use strict';

class RocketMQ {
  constructor(options, topicOptions, consumerOptions) {
    this.options = options;
    this.consumerOptions = Object.assign({}, topicOptions.consumer || {}, consumerOptions);
    this.topicOptions = topicOptions;
  }

  publish() {
    console.log('i im %s', this.topicOptions.name);
    return this.topicOptions.name;
  }
}

module.exports = RocketMQ;
