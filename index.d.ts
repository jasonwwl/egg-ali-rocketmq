
interface AliRocketMQTopicOptions {
  name: string;
  group: string;
  instance: string;
  type: 'normal' | 'trans';
  consumerServices: string;
  consumer? : AliRocketMQConsumerOptions;
}

interface AliRocketMQConsumerOptions {
  enable: boolean;
  numOfMessages?: number;
  waitSeconds?: number;
}

interface EggAliRocketMQConfig {
  topics: AliRocketMQTopicOptions[];
  options: {
    endpoint: string;
    accessKey: string;
    accessSecret: string;
  },
  consumer: AliRocketMQConsumerOptions;
}

class RocketMQ {
  publish(message: any): string;
}

declare module 'egg' {
  interface Application {
    rocketmq: PlainObject<RocketMQ>;
  }

  interface EggAppConfig {
    aliRocketMQ: EggAliRocketMQConfig;
  }
}