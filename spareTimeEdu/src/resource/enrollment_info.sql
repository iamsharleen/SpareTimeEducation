/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50626
Source Host           : 127.0.0.1:3306
Source Database       : spare_time_education

Target Server Type    : MYSQL
Target Server Version : 50626
File Encoding         : 65001

Date: 2016-04-29 07:21:21
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for enrollment_info
-- ----------------------------
DROP TABLE IF EXISTS `enrollment_info`;
CREATE TABLE `enrollment_info` (
  `ID` varchar(32) NOT NULL,
  `TYPE` varchar(10) DEFAULT NULL,
  `COURSE_ID` varchar(32) DEFAULT NULL,
  `PRICE_ID` varchar(32) DEFAULT NULL,
  `USER_ID` varchar(32) DEFAULT NULL,
  `ENROLL_NUMBER` int(11) DEFAULT NULL,
  `PHONE` varchar(30) DEFAULT NULL,
  `NOTE` varchar(200) DEFAULT NULL,
  `PAYABLE_AMT` double DEFAULT NULL,
  `PAYED_AMT` double DEFAULT NULL,
  `PAY_STATUS` varchar(10) DEFAULT NULL,
  `PAY_METHOD` varchar(10) DEFAULT NULL,
  `PAYMENT_ID` varchar(32) DEFAULT NULL,
  `CREATE_TIME` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of enrollment_info
-- ----------------------------
