/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50626
Source Host           : 127.0.0.1:3306
Source Database       : spare_time_education

Target Server Type    : MYSQL
Target Server Version : 50626
File Encoding         : 65001

Date: 2016-04-29 07:21:12
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for district_info
-- ----------------------------
DROP TABLE IF EXISTS `district_info`;
CREATE TABLE `district_info` (
  `ID` varchar(32) NOT NULL,
  `CODE` varchar(10) DEFAULT NULL,
  `NAME` varchar(100) DEFAULT NULL,
  `CITY_CODE` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of district_info
-- ----------------------------
INSERT INTO `district_info` VALUES ('02001', 'TIANHE', '天河区', 'GZ');
INSERT INTO `district_info` VALUES ('02002', 'YUEXIU', '越秀区', 'GZ');
INSERT INTO `district_info` VALUES ('02003', 'BAIYUN', '白云区', 'GZ');
INSERT INTO `district_info` VALUES ('02004', 'PANYU', '番禺区', 'GZ');
INSERT INTO `district_info` VALUES ('075501', 'NANSHAN', '南山区', 'SZ');
INSERT INTO `district_info` VALUES ('075502', 'FUTIAN', '福田区', 'SZ');
INSERT INTO `district_info` VALUES ('075503', 'LUOHU', '罗湖区', 'SZ');
INSERT INTO `district_info` VALUES ('075504', 'LONGGANG', '龙岗区', 'SZ');
