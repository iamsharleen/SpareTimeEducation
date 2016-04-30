/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50626
Source Host           : 127.0.0.1:3306
Source Database       : spare_time_education

Target Server Type    : MYSQL
Target Server Version : 50626
File Encoding         : 65001

Date: 2016-04-29 07:22:45
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for teacher_info
-- ----------------------------
DROP TABLE IF EXISTS `teacher_info`;
CREATE TABLE `teacher_info` (
  `ID` varchar(32) NOT NULL,
  `USER_INFO_ID` varchar(32) DEFAULT NULL,
  `ROLE` varchar(50) DEFAULT NULL,
  `ORG` varchar(100) DEFAULT NULL,
  `TITLE` varchar(100) DEFAULT NULL,
  `CAREER_LENGTH` int(11) DEFAULT NULL,
  `SERVICE_AREA` varchar(32) DEFAULT NULL,
  `IDENTIFIED_TIME` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
