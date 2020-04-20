'use strict';

const mock = require('egg-mock');

describe('test/ali-rocketmq.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/ali-rocketmq-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, aliRocketmq')
      .expect(200);
  });
});
