/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50626
Source Host           : 127.0.0.1:3306
Source Database       : spare_time_education

Target Server Type    : MYSQL
Target Server Version : 50626
File Encoding         : 65001

Date: 2016-04-29 07:22:24
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for org_info
-- ----------------------------
DROP TABLE IF EXISTS `org_info`;
CREATE TABLE `org_info` (
  `ID` varchar(32) DEFAULT NULL,
  `CODE` varchar(32) DEFAULT NULL,
  `STATUS` varchar(10) DEFAULT NULL,
  `USER_INFO_ID` varchar(32) DEFAULT NULL,
  `NAME` varchar(100) DEFAULT NULL,
  `ADDRESS` varchar(200) DEFAULT NULL,
  `CONTACT_NAME` varchar(20) DEFAULT NULL,
  `CONTACT_PHONE` varchar(50) DEFAULT NULL,
  `CONTACT_NUMBER` varchar(50) DEFAULT NULL,
  `BUSINESS` varchar(200) DEFAULT NULL,
  `IDENTIFIED_TIME` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
