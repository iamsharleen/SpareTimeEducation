/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50626
Source Host           : 127.0.0.1:3306
Source Database       : spare_time_education

Target Server Type    : MYSQL
Target Server Version : 50626
File Encoding         : 65001

Date: 2016-04-29 07:22:55
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user_info
-- ----------------------------
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info` (
  `ID` varchar(32) NOT NULL,
  `CODE` varchar(32) DEFAULT NULL,
  `USER_TYPE` varchar(10) DEFAULT NULL,
  `PHONE_NUBMER` varchar(12) DEFAULT NULL,
  `EMAIL` varchar(100) DEFAULT NULL,
  `PASSWORD` varchar(30) DEFAULT NULL,
  `NICK_NAME` varchar(30) DEFAULT NULL,
  `WECHAT_ID` varchar(50) DEFAULT NULL,
  `NAME` varchar(50) DEFAULT NULL,
  `CITY_ID` varchar(32) DEFAULT NULL,
  `USER_PROFILE` text,
  `LAST_LOGIN_TIME` datetime DEFAULT NULL,
  `CREATE_TIME` datetime DEFAULT NULL,
  `LAST_EDIT_TIME` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_info
-- ----------------------------
