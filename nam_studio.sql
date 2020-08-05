-- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: nam_studio
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.11-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantity` smallint(100) DEFAULT 0,
  `total` decimal(10,2) DEFAULT 0.00,
  `paid` tinyint(1) DEFAULT 0,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `payment_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_carts_payments1_idx` (`payment_id`),
  KEY `user_cart_idx` (`user_id`),
  CONSTRAINT `fk_carts_payments1` FOREIGN KEY (`payment_id`) REFERENCES `payments` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `user_cart` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=697 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--


/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` VALUES (650,0,0.00,0,NULL,'2020-08-04 19:45:43','2020-08-04 19:45:43',NULL,NULL),(651,0,0.00,0,NULL,'2020-08-04 19:45:43','2020-08-04 19:45:43',NULL,NULL),(652,0,0.00,0,NULL,'2020-08-04 19:45:43','2020-08-04 19:45:43',NULL,NULL),(653,0,0.00,0,NULL,'2020-08-04 19:45:43','2020-08-04 19:45:43',NULL,NULL),(654,0,0.00,0,NULL,'2020-08-04 19:45:50','2020-08-04 19:45:50',NULL,NULL),(655,0,0.00,0,NULL,'2020-08-04 19:45:50','2020-08-04 19:45:50',NULL,NULL),(656,0,0.00,0,NULL,'2020-08-04 19:45:50','2020-08-04 19:45:50',NULL,NULL),(657,0,0.00,0,NULL,'2020-08-04 19:45:50','2020-08-04 19:45:50',NULL,NULL),(658,0,0.00,0,NULL,'2020-08-04 19:46:17','2020-08-04 19:50:19',NULL,11),(659,0,0.00,0,NULL,'2020-08-04 19:55:33','2020-08-04 19:55:50',NULL,11),(660,0,0.00,0,NULL,'2020-08-04 20:08:06','2020-08-04 20:08:06',NULL,NULL),(661,0,0.00,0,NULL,'2020-08-04 20:28:28','2020-08-04 20:28:40',NULL,11),(662,0,0.00,0,NULL,'2020-08-04 20:49:09','2020-08-04 20:49:28',NULL,11),(663,0,0.00,0,NULL,'2020-08-04 21:02:11','2020-08-04 21:02:33',NULL,11),(664,0,0.00,0,NULL,'2020-08-04 21:04:38','2020-08-04 21:04:47',NULL,11),(665,0,0.00,0,NULL,'2020-08-04 21:06:17','2020-08-04 21:06:27',NULL,11),(666,0,0.00,0,NULL,'2020-08-04 21:07:08','2020-08-04 21:07:16',NULL,11),(667,0,0.00,0,NULL,'2020-08-04 21:08:28','2020-08-04 21:08:37',NULL,11),(668,0,0.00,0,NULL,'2020-08-04 21:10:47','2020-08-04 21:10:56',NULL,11),(669,0,0.00,0,NULL,'2020-08-04 21:12:37','2020-08-04 21:12:44',NULL,11),(670,0,0.00,0,NULL,'2020-08-04 21:17:36','2020-08-04 21:17:44',NULL,11),(671,0,0.00,0,NULL,'2020-08-04 21:21:17','2020-08-04 21:21:27',NULL,11),(672,0,0.00,0,NULL,'2020-08-04 21:22:38','2020-08-04 21:22:47',NULL,11),(673,0,0.00,0,NULL,'2020-08-04 21:26:21','2020-08-04 21:26:42',NULL,11),(674,0,0.00,0,NULL,'2020-08-04 21:27:59','2020-08-04 21:28:08',NULL,11),(675,0,0.00,0,NULL,'2020-08-04 21:31:02','2020-08-04 21:31:12',NULL,11),(676,0,0.00,0,NULL,'2020-08-04 21:37:51','2020-08-04 21:38:00',NULL,11),(677,0,0.00,0,NULL,'2020-08-04 21:41:04','2020-08-04 21:41:04',NULL,NULL),(678,0,0.00,0,NULL,'2020-08-04 21:41:04','2020-08-04 21:41:04',NULL,NULL),(679,0,0.00,0,NULL,'2020-08-04 21:41:04','2020-08-04 21:41:04',NULL,NULL),(680,0,0.00,0,NULL,'2020-08-04 21:41:04','2020-08-04 21:41:04',NULL,NULL),(681,0,0.00,0,NULL,'2020-08-04 21:49:55','2020-08-04 22:05:10',NULL,11),(682,0,0.00,0,NULL,'2020-08-04 22:16:44','2020-08-04 22:16:44',NULL,NULL),(683,0,0.00,0,NULL,'2020-08-04 22:16:44','2020-08-04 22:16:44',NULL,NULL),(684,0,0.00,0,NULL,'2020-08-04 22:16:44','2020-08-04 22:16:44',NULL,NULL),(685,0,0.00,0,NULL,'2020-08-04 22:16:44','2020-08-04 22:16:44',NULL,NULL),(686,0,0.00,0,NULL,'2020-08-04 22:17:06','2020-08-04 22:17:06',NULL,NULL),(687,0,0.00,0,NULL,'2020-08-04 22:17:06','2020-08-04 22:17:06',NULL,NULL),(688,0,0.00,0,NULL,'2020-08-04 22:17:06','2020-08-04 22:17:06',NULL,NULL),(689,0,0.00,0,NULL,'2020-08-04 22:17:06','2020-08-04 22:17:06',NULL,NULL),(690,0,0.00,0,NULL,'2020-08-04 23:32:34','2020-08-04 23:32:52',NULL,11),(691,0,0.00,0,NULL,'2020-08-04 23:49:20','2020-08-04 23:49:33',NULL,11),(692,0,0.00,0,NULL,'2020-08-05 00:09:44','2020-08-05 00:09:53',NULL,11),(693,0,0.00,0,NULL,'2020-08-05 00:20:52','2020-08-05 00:21:01',NULL,11),(694,0,0.00,0,NULL,'2020-08-05 00:24:50','2020-08-05 00:25:01',NULL,11),(695,0,0.00,0,NULL,'2020-08-05 00:31:15','2020-08-05 00:31:25',NULL,11),(696,0,0.00,0,NULL,'2020-08-05 00:58:05','2020-08-05 00:59:57',NULL,11);
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;


--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--


/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'ANIMAL PRINT','2020-06-17 05:45:17',NULL),(2,'ABSTRACTOS','2020-06-17 05:45:17',NULL),(3,'FIGURATIVOS','2020-06-17 05:45:17',NULL),(4,'FLORALES','2020-06-17 05:45:18',NULL),(5,'GEOMETRICOS','2020-06-17 05:45:18',NULL),(6,'ORNAMENTALES','2020-06-17 05:45:18',NULL),(7,'TROPICALES','2020-06-17 05:45:18',NULL);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;


--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `method` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payments`
--


/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
/*!40000 ALTER TABLE `payments` ENABLE KEYS */;


--
-- Table structure for table `product_cart`
--

DROP TABLE IF EXISTS `product_cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `cart_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id_idx` (`product_id`),
  KEY `cart_id_idx` (`cart_id`),
  CONSTRAINT `cart_id` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=166 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_cart`
--


/*!40000 ALTER TABLE `product_cart` DISABLE KEYS */;
INSERT INTO `product_cart` VALUES (158,3,658,'2020-08-04 19:46:32','2020-08-04 19:46:32',NULL),(159,4,658,'2020-08-04 19:46:33','2020-08-04 19:46:33',NULL),(160,1,658,'2020-08-04 19:46:34','2020-08-04 19:46:34',NULL),(164,2,681,'2020-08-04 22:16:23','2020-08-04 22:16:23',NULL),(165,3,681,'2020-08-04 22:16:29','2020-08-04 22:16:29',NULL);
/*!40000 ALTER TABLE `product_cart` ENABLE KEYS */;


--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(13) NOT NULL,
  `detail` varchar(200) DEFAULT NULL,
  `cw1` varchar(45) DEFAULT NULL,
  `cw2` varchar(45) DEFAULT NULL,
  `cw3` varchar(45) DEFAULT NULL,
  `exclusive` tinyint(1) DEFAULT 0,
  `size` varchar(45) DEFAULT NULL,
  `price` int(5) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `category_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_products_categories1_idx` (`category_id`),
  CONSTRAINT `fk_products_categories1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 KEY_BLOCK_SIZE=8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--


/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'AA21015DR','brush','colorways-1592443423956.jpg','colorways-1592443423982.jpg','colorways-1592443424043.jpg',1,'32x32',100,'2020-06-18 01:23:44','2020-06-18 01:23:44',2),(2,'AP21012SR','','colorways-1592443560838.jpg','colorways-1592443560865.jpg','colorways-1592443560875.jpg',1,'64x128',300,'2020-06-18 01:26:00','2020-07-12 19:06:47',1),(3,'AP21022JL','','colorways-1592443594380.jpg','colorways-1592443594387.jpg','colorways-1592443594392.jpg',1,'32x32',100,'2020-06-18 01:26:34','2020-06-18 01:26:34',1),(4,'TR21215JL','leaves','colorways-1594011852937.jpg','colorways-1594011852971.jpg','colorways-1594011852979.jpg',0,'64x32',200,'2020-07-06 05:04:12','2020-07-06 05:04:12',7),(5,'CON21462NG','space','colorways-1594419708036.jpg','colorways-1594419708064.jpg','colorways-1594419708072.jpg',0,'32x32',300,'2020-07-10 22:21:48','2020-07-10 22:21:48',3),(19,'CON21144MM','bananas','colorways-1594523926163.jpg','colorways-1594523926165.jpg','colorways-1594523926167.jpg',1,'32x32',150,'2020-07-12 03:18:46','2020-07-12 03:18:46',3),(20,'GE20008NG','','colorways-1594528326154.jpg','colorways-1594528326168.jpg','colorways-1594528326180.jpg',0,'64X64',150,'2020-07-12 04:32:06','2020-07-12 04:32:06',5),(21,'GE20007MC','','colorways-1594528592141.jpg','colorways-1594528592145.jpg','colorways-1594528592149.jpg',0,'32x32',100,'2020-07-12 04:36:32','2020-07-12 04:36:32',5),(22,'FL21006MC','','colorways-1594594589930.jpg','colorways-1594594589950.jpg','colorways-1594594589962.jpg',1,'32x32',250,'2020-07-12 22:56:29','2020-07-12 22:56:29',4),(23,'FL21001JL','botanico flores hojas ramas','colorways-1596308893876.jpg','colorways-1596308893887.jpg','colorways-1596308893898.jpg',1,'32x32',200,'2020-08-01 19:08:13','2020-08-01 19:08:13',4),(24,'FL21030JL','flores','colorways-1596309011816.jpg','colorways-1596309011827.jpg','colorways-1596309011835.jpg',1,'128x32',200,'2020-08-01 19:10:11','2020-08-01 19:10:11',4),(25,'ORN020002SR ','hojas ornamentos','colorways-1596309223255.jpg','colorways-1596309223259.jpg','colorways-1596309223264.jpg',0,'32x32',250,'2020-08-01 19:13:43','2020-08-01 19:13:43',6),(33,'TR21201JL','','colorways-1596589215525.jpg','colorways-1596589215541.jpg','colorways-1596589215554.jpg',1,'32x32',100,'2020-08-04 23:33:18','2020-08-05 01:00:15',7);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;


--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(100) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `terms` tinyint(1) NOT NULL,
  `avatar` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `adress` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `admin` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--


/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (11,'Natalia Granadé','natig2003@hotmail.com','$2b$10$jXVjLyBwLs0.Xcitt25Glu9sz4zNqGc4xLQT8bOfnBcxeFALFYKWG','1121692170',1,'','2020-07-25 16:20:42','2020-08-03 22:22:20','gascon','Argentina',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;


--
-- Dumping events for database 'nam_studio'
--

--
-- Dumping routines for database 'nam_studio'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-04 22:11:04
