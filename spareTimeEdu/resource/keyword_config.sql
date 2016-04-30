/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50626
Source Host           : 127.0.0.1:3306
Source Database       : spare_time_education

Target Server Type    : MYSQL
Target Server Version : 50626
File Encoding         : 65001

Date: 2016-04-29 07:22:09
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for keyword_config
-- ----------------------------
DROP TABLE IF EXISTS `keyword_config`;
CREATE TABLE `keyword_config` (
  `ID` varchar(32) NOT NULL,
  `KEYWORD` varchar(20) DEFAULT NULL,
  `KEYWORD_TYPE` varchar(32) DEFAULT NULL,
  `USE_FLAG` varchar(10) DEFAULT NULL,
  `CREATE_TIME` datetime DEFAULT NULL,
  `LAST_EDIT_TIME` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of keyword_config
-- ----------------------------
INSERT INTO `keyword_config` VALUES ('01', 'PET', '0', '1', '2016-03-24 23:28:21', '2016-03-24 23:28:21');
INSERT INTO `keyword_config` VALUES ('02', '正面管教', '0', '1', '2016-03-24 23:28:21', '2016-03-24 23:28:21');
INSERT INTO `keyword_config` VALUES ('03', '亲子沟通', '0', '1', '2016-03-24 23:28:21', '2016-03-24 23:28:21');
INSERT INTO `keyword_config` VALUES ('04', '幼小衔接', '0', '1', '2016-03-24 23:28:21', '2016-03-24 23:28:21');
INSERT INTO `keyword_config` VALUES ('05', '规则界限', '0', '1', '2016-03-24 23:28:21', '2016-03-24 23:28:21');
INSERT INTO `keyword_config` VALUES ('06', '分离焦虑', '1', '1', '2016-03-24 23:28:21', '2016-03-24 23:28:21');
INSERT INTO `keyword_config` VALUES ('07', '运动', '1', '1', '2016-03-24 23:28:21', '2016-03-24 23:28:21');
