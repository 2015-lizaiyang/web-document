'use strict';

var Mdjs = require('mdjs');

// 实例化
var app = new Mdjs({
    // 本地开发启动debug则不缓存文件
    debug: true
});

// 清空缓存
app.clear_cache();

// 运行跑起来
app.run();