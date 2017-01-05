<!--
@Author: AuthorName
@Date:   2017-01-03T13:59:59+08:00
@Email:  Email
@Project: projectName
@Filename: mongodbs文档.md
@Last modified by:   AuthorName
@Last modified time: 2017-01-03T17:11:00+08:00
@License: tree
-->

# mongodb学习文档 #
- mongodb是区分大小写的
- c:\data\db（是mongodb默认数据存储的地方）
- db查看当前正在使用那个数据库
- db.集合名称.insert(文档名称) -> 创建集合和文档
- db.集合名称.find() -> 查看集合文档
- db.集合名称.findOne() -> 只查看一个文档
- mongodb支持的数据类型
  - null -> {"x":unll}
  - 布尔类型 -> {"x": true}
  - 数值 -> {"x": 3}
  - 字符串 -> {"x":"foobar"}
  - 日期 -> {"x":new Date()}
  - 正则表达 -> {"x":/^foobar$/i}
  - 数组 -> {"x":["a","b","c"]}
  - 内嵌文档 -> {"x": {"foo":"bar"}}
  - 对象id -> {"x": ObjectId()}
  - 二进制数据
  - 代码 -> {"x": function(){}}
- 使用修改器
 - $inc -> (的键值必须为数字)
 - $set ->(用于修改指定的一个字段值)
 - $push -> 添加元素，如果有没有数组就自动创建数组
 - $each -> 批量添加元素
 - $slice -> 限制$push数组
 - $sort
 -
- db.集合名称.batchInsert([{"_id": 0},{"_id": 1}]) -> 批量插入数据文档
- $lt(<); db.users.find("age":{"$gte":18,"$lte":30}); (注释：查找到"age"字段大于等于18，小于等于30的文档)
- $lte(<=);
- $gt(>);
- $gte(>=);
- $ne(!=) db.users.find("users":{"$ne":"joe"})
- OR查询
 - $in(且&&) 、$or(或||)
  - $in (如果一个键需要与多个值进行匹配的话就用$in操作符) db.raffle.find("ticket_no":{"$in":[323,23,12]});
- $not (是元条件语句，作用：获得其他查询语句的相反结果)
