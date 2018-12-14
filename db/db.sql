
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

# Dump of table country
# ------------------------------------------------------------

DROP TABLE IF EXISTS `category`;

CREATE TABLE `category` (
  `code` varchar(50) NOT NULL,
  `name` varchar(60) NOT NULL DEFAULT '',
  `store_id` varchar(60) NOT NULL DEFAULT '',
  `added_by` varchar(60) NOT NULL,
  `parent_id` varchar(60) NOT NULL DEFAULT '',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`code`),
  KEY `store_id` (`store_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;

INSERT INTO `category` (`code`, `name`, `store_id`, `added_by`, `parent_id`, `status`)
VALUES
	('cat123','Fashion','asdfasdfasdfasd','40s1cqdw6jmyyiixe','',1);

/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table country
# ------------------------------------------------------------

DROP TABLE IF EXISTS `country`;

CREATE TABLE `country` (
  `id` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL DEFAULT '',
  `flag` varchar(20) NOT NULL DEFAULT '',
  `tel_code` varchar(11) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `country` WRITE;
/*!40000 ALTER TABLE `country` DISABLE KEYS */;

INSERT INTO `country` (`id`, `name`, `flag`, `tel_code`)
VALUES
	(1,'United States','','+1'),
	(2,'Australia','','+61'),
	(3,'Singapore','','+65'),
	(4,'United Kingdom','','+44'),
	(5,'Malaysia','','+60'),
	(6,'Indonesia','','+62'),
	(7,'India','','+91'),
	(8,'Philippines','','+63');

/*!40000 ALTER TABLE `country` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table currency
# ------------------------------------------------------------

DROP TABLE IF EXISTS `currency`;

CREATE TABLE `currency` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL DEFAULT '',
  `symbol` varchar(3) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `currency` WRITE;
/*!40000 ALTER TABLE `currency` DISABLE KEYS */;

INSERT INTO `currency` (`id`, `name`, `symbol`)
VALUES
	(1,'United States Dollar','USD'),
	(2,'Euro','EUR'),
	(3,'Singapore Dollar','SGD'),
	(4,'Malaysia Ringgit','MYR'),
	(5,'Indonesian Rupiah','INR'),
	(6,'Chinese Yuan','CNY'),
	(7,'Japanese Yen','JPY');

/*!40000 ALTER TABLE `currency` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table manufacturer
# ------------------------------------------------------------

DROP TABLE IF EXISTS `manufacturer`;

CREATE TABLE `manufacturer` (
  `code` varchar(60) NOT NULL DEFAULT '',
  `name` varchar(100) NOT NULL DEFAULT '',
  `url` varchar(100) NOT NULL DEFAULT '',
  `email` varchar(100) NOT NULL DEFAULT '',
  `contact` varchar(60) NOT NULL DEFAULT '',
  `address` varchar(100) NOT NULL DEFAULT '',
  `logo` varchar(200) NOT NULL,
  `store_id` varchar(60) NOT NULL,
  `country_id` tinyint(3) NOT NULL,
  `created_by` varchar(60) NOT NULL DEFAULT '',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`code`),
  KEY `store_id` (`store_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `manufacturer` WRITE;
/*!40000 ALTER TABLE `manufacturer` DISABLE KEYS */;

INSERT INTO `manufacturer` (`code`, `name`, `url`, `email`, `contact`, `address`, `logo`, `store_id`, `country_id`, `created_by`, `status`)
VALUES
	('man123','Manufacture 123','https://man123.example.com','man123@example.com','+65-1234567890','Jurong East Singapore','https://www.freelogodesign.org/Content/img/logo-ex-7.png','asdfasdfasdfasd',3,'40s1cqdw6jmyyiixe',1);

/*!40000 ALTER TABLE `manufacturer` ENABLE KEYS */;
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
  `code` varchar(60) NOT NULL DEFAULT '',
  `name` varchar(100) NOT NULL DEFAULT '',
  `store_id` varchar(60) NOT NULL,
  `category_id` varchar(60) NOT NULL DEFAULT '',
  `sku` varchar(120) NOT NULL,
  `description` varchar(500) NOT NULL DEFAULT '',
  `quantity` int(11) NOT NULL DEFAULT '0',
  `allow_quantity` tinyint(1) NOT NULL DEFAULT '1',
  `added_on` datetime NOT NULL,
  `added_by` varchar(60) NOT NULL DEFAULT '',
  `unit_price` decimal(10,2) NOT NULL,
  `cost` decimal(10,2) NOT NULL,
  `cover_image` varchar(200) NOT NULL DEFAULT '',
  `supplier_id` varchar(60) NOT NULL,
  `manufacturer_id` varchar(60) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`code`),
  KEY `name` (`name`),
  KEY `description` (`description`),
  KEY `code` (`code`),
  KEY `sku` (`sku`),
  KEY `store_id` (`store_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;

INSERT INTO `product` (`code`, `name`, `store_id`, `category_id`, `sku`, `description`, `quantity`, `allow_quantity`, `added_on`, `added_by`, `unit_price`, `cost`, `cover_image`, `supplier_id`, `manufacturer_id`, `status`)
VALUES
	('asdfasdfa','Product 1','asdfasdfasdfasd','cat123','asdfasdfasdfasdfasd','This is a test product',100,1,'2018-11-10 00:00:00','40s1cqdw6jmyyiixe',99.99,32.00,'https://image.spreadshirtmedia.com/image-server/v1/products/1003716746/views/1,width=800,height=800,appearanceId=1,backgroundColor=fff,version=1485256808/i-eat-ass-t-shirt-men-s-t-shirt.jpg','supplier123','man123',1),
	('H0ZbL4lKU','Product 2','asdfasdfasdfasd','cat123','afdsafsd2342asdfasd','Test product 2',100,1,'2018-11-16 03:22:35','40s1cqdw6jmyyiixe',100.00,87.00,'https://www.sandisk.com/content/dam/sandisk-main/en_us/assets/about/media/product/retail/usb/cruzer_blade_usb_flash_drive/SDCZ50_angle_Large.jpg','supplier456','man123',1);

/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table product_attribute
# ------------------------------------------------------------

DROP TABLE IF EXISTS `product_attribute`;

CREATE TABLE `product_attribute` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '',
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



# Dump of table store
# ------------------------------------------------------------

DROP TABLE IF EXISTS `store`;

CREATE TABLE `store` (
  `code` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL DEFAULT '',
  `description` varchar(500) NOT NULL DEFAULT '',
  `logo` varchar(200) NOT NULL DEFAULT '',
  `created_on` datetime NOT NULL,
  `created_by` varchar(60) NOT NULL DEFAULT '',
  `country_id` tinyint(3) NOT NULL,
  `language` varchar(5) NOT NULL DEFAULT '',
  `currency_id` tinyint(3) NOT NULL,
  `facebook` varchar(100) NOT NULL,
  `twitter` varchar(100) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`code`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `store` WRITE;
/*!40000 ALTER TABLE `store` DISABLE KEYS */;

INSERT INTO `store` (`code`, `name`, `description`, `logo`, `created_on`, `created_by`, `country_id`, `language`, `currency_id`, `facebook`, `twitter`, `status`)
VALUES
	('asdfasdfasdfasd','Elf Commerce1','aabbcc','https://cdn.dribbble.com/users/1141152/screenshots/4450915/ecommerce-logo-1-dribbble.jpg','0000-00-00 00:00:00','40s1cqdw6jmyyiixe',3,'en',3,'','',1);

/*!40000 ALTER TABLE `store` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table store_user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `store_user`;

CREATE TABLE `store_user` (
  `user_id` varchar(60) NOT NULL DEFAULT '',
  `store_id` varchar(60) NOT NULL DEFAULT '',
  `role` varchar(10) NOT NULL DEFAULT '',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`user_id`,`store_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `store_user` WRITE;
/*!40000 ALTER TABLE `store_user` DISABLE KEYS */;

INSERT INTO `store_user` (`user_id`, `store_id`, `role`, `status`)
VALUES
	('40s1cqdw6jmyyiixe','asdfasdfasdfasd','admin',1);

/*!40000 ALTER TABLE `store_user` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table supplier
# ------------------------------------------------------------

DROP TABLE IF EXISTS `supplier`;

CREATE TABLE `supplier` (
  `code` varchar(60) NOT NULL DEFAULT '',
  `name` varchar(200) NOT NULL DEFAULT '',
  `url` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `contact` varchar(60) NOT NULL,
  `address` varchar(100) NOT NULL,
  `logo` varchar(200) NOT NULL,
  `store_id` varchar(60) NOT NULL,
  `country_id` tinyint(3) NOT NULL,
  `created_by` varchar(60) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`code`),
  KEY `store_id` (`store_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `supplier` WRITE;
/*!40000 ALTER TABLE `supplier` DISABLE KEYS */;

INSERT INTO `supplier` (`code`, `name`, `url`, `email`, `contact`, `address`, `logo`, `store_id`, `country_id`, `created_by`, `status`)
VALUES
	('supplier123','Supplier ABC','http://www.example.com/supplier','supplier123@example.com','+65-9123819236','Tuas Singapore','https://www.designevo.com/res/templates/thumb_small/golden-hexagon-and-thunder.png','asdfasdfasdfasd',3,'40s1cqdw6jmyyiixe',1),
	('supplier456','Supplier EFG','http://www.example.com/efg','supplier456@example.com','+65-9234234236','Bugis Singapore','https://www.designevo.com/res/templates/thumb_small/golden-hexagon-and-thunder.png','asdfasdfasdfasd',3,'40s1cqdw6jmyyiixe',1);

/*!40000 ALTER TABLE `supplier` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `code` varchar(20) NOT NULL DEFAULT '',
  `name` varchar(30) NOT NULL DEFAULT '',
  `email` varchar(60) NOT NULL DEFAULT '',
  `password` varchar(32) NOT NULL DEFAULT '',
  `salt` varchar(32) NOT NULL DEFAULT '',
  `joined_on` datetime NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`code`),
  KEY `name` (`name`),
  KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;

INSERT INTO `user` (`code`, `name`, `email`, `password`, `salt`, `joined_on`, `status`)
VALUES
	('40s1cqdw6jmyyiixe','Nick Chen','test@test.com','b9d8f73d5c643d6c0558dd610c94f09f','EO4fwIBPKw5tVKl2a0eT8gW3ynjwG13Q','2018-10-07 14:22:30',1);

/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table user_access_token
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user_access_token`;

CREATE TABLE `user_access_token` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `token` varchar(500) NOT NULL DEFAULT '',
  `user_id` varchar(50) NOT NULL DEFAULT '',
  `expired_on` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `token` (`token`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


# Dump of table user_address
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user_address`;

CREATE TABLE `user_address` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `address` varchar(200) NOT NULL DEFAULT '',
  `postal` varchar(16) NOT NULL DEFAULT '',
  `type` varchar(1) NOT NULL DEFAULT '',
  `user_id` varchar(50) NOT NULL DEFAULT '',
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
  `user_id` varchar(60) NOT NULL,
  `number` varchar(30) NOT NULL DEFAULT '',
  `type` varchar(1) NOT NULL DEFAULT '',
  `country_id` tinyint(3) NOT NULL,
  `area_code` varchar(11) NOT NULL DEFAULT '',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table user_refresh_token
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user_refresh_token`;

CREATE TABLE `user_refresh_token` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `token` varchar(500) NOT NULL DEFAULT '',
  `user_id` varchar(50) NOT NULL DEFAULT '',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

# Dump of table warehouse
# ------------------------------------------------------------

DROP TABLE IF EXISTS `warehouse`;

CREATE TABLE `warehouse` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
