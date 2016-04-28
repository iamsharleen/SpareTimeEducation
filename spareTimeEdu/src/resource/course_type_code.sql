/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50626
Source Host           : 127.0.0.1:3306
Source Database       : spare_time_education

Target Server Type    : MYSQL
Target Server Version : 50626
File Encoding         : 65001

Date: 2016-04-29 07:21:03
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for course_type_code
-- ----------------------------
DROP TABLE IF EXISTS `course_type_code`;
CREATE TABLE `course_type_code` (
  `ID` varchar(32) DEFAULT NULL,
  `NAME` varchar(20) DEFAULT NULL,
  `CODE` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of course_type_code
-- ----------------------------
INSERT INTO `course_type_code` VALUES ('01', '讲座培训', 'CC01');
INSERT INTO `course_type_code` VALUES ('02', '免费公开课', 'CC02');
INSERT INTO `course_type_code` VALUES ('03', '主题咨询', 'CC03');
INSERT INTO `course_type_code` VALUES ('04', '私教兴趣课', 'CC04');
INSERT INTO `course_type_code` VALUES ('11', '微课', 'CC05');
