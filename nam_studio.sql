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
  `quantity` smallint(6) NOT NULL DEFAULT 0,
  `total` decimal(4,2) NOT NULL DEFAULT 0.00,
  `paid` tinyint(1) NOT NULL DEFAULT 0,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `payment_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_carts_payments1_idx` (`payment_id`),
  CONSTRAINT `fk_carts_payments1` FOREIGN KEY (`payment_id`) REFERENCES `payments` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
REPLACE  IGNORE INTO `carts` (`id`, `quantity`, `total`, `paid`, `deleted_at`, `created_at`, `updated_at`, `payment_id`, `user_id`) VALUES (1,0,0.00,0,'0000-00-00 00:00:00','2020-07-19 22:16:49',NULL,NULL,1),(3,0,0.00,0,NULL,'2020-07-20 16:18:59',NULL,NULL,4);
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

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

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
REPLACE  IGNORE INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES (1,'ANIMAL PRINT','2020-06-17 05:45:17',NULL),(2,'ABSTRACTOS','2020-06-17 05:45:17',NULL),(3,'FIGURATIVOS','2020-06-17 05:45:17',NULL),(4,'FLORALES','2020-06-17 05:45:18',NULL),(5,'GEOMETRICOS','2020-06-17 05:45:18',NULL),(6,'ORNAMENTALES','2020-06-17 05:45:18',NULL),(7,'TROPICALES','2020-06-17 05:45:18',NULL);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

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

LOCK TABLES `payments` WRITE;
/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
/*!40000 ALTER TABLE `payments` ENABLE KEYS */;
UNLOCK TABLES;

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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_cart`
--

LOCK TABLES `product_cart` WRITE;
/*!40000 ALTER TABLE `product_cart` DISABLE KEYS */;
REPLACE  IGNORE INTO `product_cart` (`id`, `product_id`, `cart_id`, `created_at`, `updated_at`, `deleted_at`) VALUES (1,1,3,'2020-07-20 13:15:54',NULL,NULL),(2,2,3,'2020-07-20 13:15:55',NULL,NULL),(3,3,3,'2020-07-20 13:15:55',NULL,NULL),(4,4,3,'2020-07-20 13:15:55',NULL,NULL),(5,5,3,'2020-07-20 13:15:55',NULL,NULL),(6,2,3,'2020-07-20 23:47:26','2020-07-20 23:47:26',NULL),(7,3,3,'2020-07-20 23:47:32','2020-07-20 23:47:32',NULL),(8,2,3,'2020-07-20 23:53:37','2020-07-20 23:53:37',NULL),(9,3,3,'2020-07-20 23:53:38','2020-07-20 23:53:38',NULL),(10,4,3,'2020-07-20 23:53:39','2020-07-20 23:53:39',NULL);
/*!40000 ALTER TABLE `product_cart` ENABLE KEYS */;
UNLOCK TABLES;

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
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 KEY_BLOCK_SIZE=8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
REPLACE  IGNORE INTO `products` (`id`, `name`, `detail`, `cw1`, `cw2`, `cw3`, `exclusive`, `size`, `price`, `created_at`, `updated_at`, `category_id`) VALUES (1,'AA21015DR','brush','colorways-1592443423956.jpg','colorways-1592443423982.jpg','colorways-1592443424043.jpg',1,'32x32',100,'2020-06-18 01:23:44','2020-06-18 01:23:44',2),(2,'AP21012SR','','colorways-1592443560838.jpg','colorways-1592443560865.jpg','colorways-1592443560875.jpg',1,'64x128',300,'2020-06-18 01:26:00','2020-07-12 19:06:47',1),(3,'AP21022JL','','colorways-1592443594380.jpg','colorways-1592443594387.jpg','colorways-1592443594392.jpg',1,'32x32',100,'2020-06-18 01:26:34','2020-06-18 01:26:34',1),(4,'TR21215JL','leaves','colorways-1594011852937.jpg','colorways-1594011852971.jpg','colorways-1594011852979.jpg',0,'64x32',200,'2020-07-06 05:04:12','2020-07-06 05:04:12',7),(5,'CON21462NG','space','colorways-1594419708036.jpg','colorways-1594419708064.jpg','colorways-1594419708072.jpg',0,'32x32',300,'2020-07-10 22:21:48','2020-07-10 22:21:48',3),(6,'FL21160DM','','colorways-1594521516732.jpg','colorways-1594521516741.jpg','colorways-1594521516750.jpg',0,'32x32',200,'2020-07-12 02:38:36','2020-07-12 02:38:36',4),(19,'CON21144MM','bananas','colorways-1594523926163.jpg','colorways-1594523926165.jpg','colorways-1594523926167.jpg',1,'32x32',0,'2020-07-12 03:18:46','2020-07-12 03:18:46',3),(20,'GE20008NG','','colorways-1594528326154.jpg','colorways-1594528326168.jpg','colorways-1594528326180.jpg',0,'64X64',0,'2020-07-12 04:32:06','2020-07-12 04:32:06',5),(21,'GE20007MC','','colorways-1594528592141.jpg','colorways-1594528592145.jpg','colorways-1594528592149.jpg',0,'32x32',100,'2020-07-12 04:36:32','2020-07-12 04:36:32',5),(22,'FL21006MC','','colorways-1594594589930.jpg','colorways-1594594589950.jpg','colorways-1594594589962.jpg',1,'32x32',250,'2020-07-12 22:56:29','2020-07-12 22:56:29',4);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

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
  `password` varchar(8) NOT NULL,
  `phone` smallint(6) DEFAULT NULL,
  `terms` tinyint(1) NOT NULL,
  `avatar` varchar(45) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `adress` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `admin` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
REPLACE  IGNORE INTO `users` (`id`, `full_name`, `email`, `password`, `phone`, `terms`, `avatar`, `created_at`, `updated_at`, `adress`, `country`, `admin`) VALUES (1,'Natalia Granadé','natig2003@hotmail.com','$2b$10$k',32767,1,'avatar-1595179659987.PNG','2020-07-19 17:27:40','2020-07-19 17:27:40','gascon','Argentina',1),(4,'pepe','pepe@gmail.com','$2b$10$x',0,1,'avatar-1595182335295.PNG','2020-07-19 18:12:15','2020-07-19 18:12:15','','',0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-20 21:13:15
