# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.23)
# Database: davinci
# Generation Time: 2018-08-22 09:25:46 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table country
# ------------------------------------------------------------

DROP TABLE IF EXISTS `country`;

CREATE TABLE `country` (
  `id` smallint(3) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL DEFAULT '',
  `flag` varchar(20) NOT NULL DEFAULT '',
  `tel_code` varchar(11) NOT NULL DEFAULT '',
  `currency` varchar(4) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `country` WRITE;
/*!40000 ALTER TABLE `country` DISABLE KEYS */;

INSERT INTO `country` (`id`, `name`, `flag`, `tel_code`, `currency`)
VALUES
	(1,'United States','','+1','USD'),
	(2,'Australia','','+61','AUD'),
	(3,'Singapore','','+65','SGD'),
	(4,'United Kingdom','','+44','GBP'),
	(5,'Malaysia','','+60','MYR'),
	(6,'Indonesia','','+62','IDR'),
	(7,'India','','+91','INR'),
	(8,'Philippines','','+63','PHP');

/*!40000 ALTER TABLE `country` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table order
# ------------------------------------------------------------

DROP TABLE IF EXISTS `order`;

CREATE TABLE `order` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `paid_on` datetime DEFAULT NULL,
  `shipping_address_id` int(11) DEFAULT NULL,
  `contact_id` int(11) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table order_product
# ------------------------------------------------------------

DROP TABLE IF EXISTS `order_product`;

CREATE TABLE `order_product` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `purchased_price` decimal(10,2) NOT NULL,
  `order_id` int(11) NOT NULL,
  `quantity` smallint(3) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `order_id` (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table payment
# ------------------------------------------------------------

DROP TABLE IF EXISTS `payment`;

CREATE TABLE `payment` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL DEFAULT '',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table product
# ------------------------------------------------------------

DROP TABLE IF EXISTS `product`;

CREATE TABLE `product` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL DEFAULT '',
  `description` varchar(500) NOT NULL DEFAULT '',
  `added_on` datetime NOT NULL,
  `added_by` int(11) NOT NULL,
  `base_price` decimal(10,2) NOT NULL,
  `cover_image` varchar(11) NOT NULL DEFAULT '',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `name` (`name`),
  KEY `description` (`description`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table product_attribute
# ------------------------------------------------------------

DROP TABLE IF EXISTS `product_attribute`;

CREATE TABLE `product_attribute` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '',
  `sku` varchar(100) NOT NULL DEFAULT '',
  `quantity` int(9) NOT NULL,
  `var_price` decimal(10,2) NOT NULL,
  `product_attribute_category_id` int(11) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `product_attribute_category_id` (`product_attribute_category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table product_attribute_category
# ------------------------------------------------------------

DROP TABLE IF EXISTS `product_attribute_category`;

CREATE TABLE `product_attribute_category` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(11) NOT NULL DEFAULT '',
  `product_id` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table product_category
# ------------------------------------------------------------

DROP TABLE IF EXISTS `product_category`;

CREATE TABLE `product_category` (
  `id` smallint(3) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL DEFAULT '',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table product_image
# ------------------------------------------------------------

DROP TABLE IF EXISTS `product_image`;

CREATE TABLE `product_image` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) NOT NULL DEFAULT '',
  `product_id` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table shop
# ------------------------------------------------------------

DROP TABLE IF EXISTS `shop`;

CREATE TABLE `shop` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '',
  `description` varchar(500) NOT NULL DEFAULT '',
  `logo` varchar(200) NOT NULL DEFAULT '',
  `country` smallint(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL DEFAULT '',
  `email` varchar(60) NOT NULL DEFAULT '',
  `password` varchar(32) NOT NULL DEFAULT '',
  `salt` varchar(16) NOT NULL DEFAULT '',
  `joined_on` datetime NOT NULL,
  `photo` varchar(200) NOT NULL DEFAULT '',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `name` (`name`),
  KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table user_address
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user_address`;

CREATE TABLE `user_address` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `address` varchar(200) NOT NULL DEFAULT '',
  `postal` varchar(16) NOT NULL DEFAULT '',
  `type` varchar(1) NOT NULL DEFAULT '',
  `user_id` int(11) NOT NULL,
  `country` int(11) NOT NULL,
  `region` varchar(50) NOT NULL DEFAULT '',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table user_contact
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user_contact`;

CREATE TABLE `user_contact` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `number` varchar(30) NOT NULL DEFAULT '',
  `type` varchar(1) NOT NULL DEFAULT '',
  `country` smallint(3) NOT NULL,
  `region_code` varchar(11) NOT NULL DEFAULT '',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
