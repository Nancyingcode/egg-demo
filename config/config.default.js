module.exports = appInfo => {
    const config = exports = {};
  
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_2048';
  
    // add your config here
    config.middleware = [];

    config.keys = "oil-card-20180101";
    // 添加 view 配置
    config.view = {
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.tpl': 'nunjucks',
      },
    };
    
    config.news = {
      pageSize: 5,
      serverUrl: 'http://localhost:7001/app/public/json',
    };
  
    return config;
};