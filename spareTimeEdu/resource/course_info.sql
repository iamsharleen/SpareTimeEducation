/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50626
Source Host           : 127.0.0.1:3306
Source Database       : spare_time_education

Target Server Type    : MYSQL
Target Server Version : 50626
File Encoding         : 65001

Date: 2016-04-29 07:20:39
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for course_info
-- ----------------------------
DROP TABLE IF EXISTS `course_info`;
CREATE TABLE `course_info` (
  `ID` varchar(32) NOT NULL,
  `CODE` varchar(20) DEFAULT NULL,
  `STATUS` varchar(10) DEFAULT NULL,
  `COURSE_TYPE_CODE` varchar(10) DEFAULT NULL,
  `SUBJECT` varchar(200) DEFAULT NULL,
  `START_TIME` datetime DEFAULT NULL,
  `END_TIME` datetime DEFAULT NULL,
  `DURATION` double DEFAULT NULL,
  `DURATION_UNIT` varchar(10) DEFAULT NULL,
  `STUDENT_TYPE` varchar(10) DEFAULT NULL,
  `DISTRICT_ID` varchar(32) DEFAULT NULL,
  `CITY_ID` varchar(32) DEFAULT NULL,
  `ADDRESS` varchar(200) DEFAULT NULL,
  `PRICE` double DEFAULT NULL,
  `MAX_ATTENDEES` int(11) DEFAULT NULL,
  `KEYWORD` varchar(80) DEFAULT NULL,
  `BRIEF` varchar(200) DEFAULT NULL,
  `CONTENT` text,
  `TEACH_METHOD` varchar(30) DEFAULT NULL,
  `POSTER_ID` varchar(32) DEFAULT NULL,
  `TEACHER_ID` varchar(32) DEFAULT NULL,
  `SEQ_NUMBER` int(11) DEFAULT NULL,
  `CREATE_TIME` datetime DEFAULT NULL,
  `LAST_EDIT_TIME` datetime DEFAULT NULL,
  `NOTE` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of course_info
-- ----------------------------
INSERT INTO `course_info` VALUES ('1', '11111', 'EXE', 'CC01', '教你和孩子做朋友', '2016-05-29 15:00:00', '2016-05-29 17:00:00', '2', 'HOUR', 'CHILDREN', 'TIANHE', 'GZ', '珠江新城华夏路1号富力大厦1205', '200', '100', '亲子关系/PET/亲子沟通', '教你如何和孩子做朋友，利用朋友间的方式来和孩子交流，减少说教', '如果你是一个2-8岁家长，或许会为这些问题感到困扰：\r\n\r\n    为什么孩子不听话；\r\n    无法和孩子好好沟通；\r\n    想要教育孩子，老人介入影响效果；\r\n    担心无法教育好孩子的忧虑；\r\n    希望孩子有一个良好的家庭环境，却分身无术。\r\n\r\n我在是一个5岁孩子的父亲，更是他的好朋友之一，曾经被同班的同学戏称为：大玩具。\r\n我曾先后解决了不少于20位家长在与孩子交流方面存在的障碍，帮助许多同为父母的朋友促进了和孩子们的沟通，让他们成为好朋友。\r\n\r\n我在自有的公众平台：常思危（ID：csr1000）有近六千位粉丝喜欢阅读我的育儿文章，朋友圈近4千好友都非常喜欢看我晒娃，我不仅仅晒，还会将我的心得、育儿的思考，和大家一起分享。\r\n\r\n对于如何和孩子沟通、交流，相处并做朋友，我有一套独特的沟通机制，基本是在遵循孩子的意愿下达成。\r\n\r\n如果你有教育孩子方面的困惑，相信我的经验能给你一点点参考。相信在这些方面能为你提供帮助。\r\n\r\n我愿意与你分享的内容包括：\r\n\r\n    教你如何和孩子做朋友，利用朋友间的方式来和孩子交流，减少说教；\r\n    和孩子共同建立奖惩机制，教孩子学会遵守游戏规则；\r\n    如何让老人家减少对家教的干扰；\r\n    如何用碎片化的时间和孩子沟通。\r\n\r\nPS.在选择与我见面前，请把你的问题更具体化。毕竟2小时的谈话只能解决一个小问题。请把你的问题提前发给我，方便我做更精确的准备，提升见面效率。期待与你的见面。\r\n', '面对面/电话', null, null, null, null, null, null);
