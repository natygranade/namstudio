-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.11-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for nam_studio
DROP DATABASE IF EXISTS `nam_studio`;
CREATE DATABASE IF NOT EXISTS `nam_studio` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `nam_studio`;

-- Dumping structure for table nam_studio.administrators
DROP TABLE IF EXISTS `administrators`;
CREATE TABLE IF NOT EXISTS `administrators` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_administrators_users1_idx` (`user_id`),
  CONSTRAINT `fk_administrators_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table nam_studio.administrators: ~0 rows (approximately)
/*!40000 ALTER TABLE `administrators` DISABLE KEYS */;
/*!40000 ALTER TABLE `administrators` ENABLE KEYS */;

-- Dumping structure for table nam_studio.carts
DROP TABLE IF EXISTS `carts`;
CREATE TABLE IF NOT EXISTS `carts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantity` smallint(6) NOT NULL DEFAULT 0,
  `total` decimal(4,2) NOT NULL DEFAULT 0.00,
  `paid` tinyint(1) NOT NULL,
  `deleted` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `payment_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_carts_payments1_idx` (`payment_id`),
  KEY `fk_carts_customers1_idx` (`customer_id`),
  CONSTRAINT `fk_carts_customers1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_carts_payments1` FOREIGN KEY (`payment_id`) REFERENCES `payments` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table nam_studio.carts: ~0 rows (approximately)
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;

-- Dumping structure for table nam_studio.categories
DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table nam_studio.categories: ~7 rows (approximately)
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
	(1, 'ANIMAL PRINT', '2020-06-17 02:45:17', NULL),
	(2, 'ABSTRACTOS', '2020-06-17 02:45:17', NULL),
	(3, 'FIGURATIVOS', '2020-06-17 02:45:17', NULL),
	(4, 'FLORALES', '2020-06-17 02:45:18', NULL),
	(5, 'GEOMETRICOS', '2020-06-17 02:45:18', NULL),
	(6, 'ORNAMENTALES', '2020-06-17 02:45:18', NULL),
	(7, 'TROPICALES', '2020-06-17 02:45:18', NULL);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;

-- Dumping structure for table nam_studio.customers
DROP TABLE IF EXISTS `customers`;
CREATE TABLE IF NOT EXISTS `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `adress` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `users_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_customers_users1_idx` (`users_id`),
  CONSTRAINT `fk_customers_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table nam_studio.customers: ~0 rows (approximately)
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;

-- Dumping structure for table nam_studio.payments
DROP TABLE IF EXISTS `payments`;
CREATE TABLE IF NOT EXISTS `payments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `method` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table nam_studio.payments: ~0 rows (approximately)
/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
/*!40000 ALTER TABLE `payments` ENABLE KEYS */;

-- Dumping structure for table nam_studio.products
DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(12) NOT NULL,
  `detail` varchar(200) DEFAULT NULL,
  `cw1` varchar(45) NOT NULL,
  `cw2` varchar(45) DEFAULT NULL,
  `cw3` varchar(45) DEFAULT NULL,
  `exclusive` tinyint(1) DEFAULT NULL,
  `size` varchar(45) DEFAULT NULL,
  `price` decimal(4,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `category_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_products_categories1_idx` (`category_id`),
  CONSTRAINT `fk_products_categories1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 KEY_BLOCK_SIZE=8;

-- Dumping data for table nam_studio.products: ~6 rows (approximately)
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` (`id`, `name`, `detail`, `cw1`, `cw2`, `cw3`, `exclusive`, `size`, `price`, `created_at`, `updated_at`, `category_id`) VALUES
	(1, 'AP21002MC', 'butterfly', 'colorways-1592438056523.jpg', 'colorways-1592438056560.jpg', 'colorways-1592438056587.jpg', 0, NULL, NULL, '2020-06-17 20:54:16', '2020-06-17 20:54:16', 1),
	(2, 'AA21015DR', 'brush', 'colorways-1592443423956.jpg', 'colorways-1592443423982.jpg', 'colorways-1592443424043.jpg', 1, '32x32', 99.99, '2020-06-17 22:23:44', '2020-06-17 22:23:44', 2),
	(4, 'AP21012SR', '', 'colorways-1592443560838.jpg', 'colorways-1592443560865.jpg', 'colorways-1592443560875.jpg', 1, '64x128', 99.99, '2020-06-17 22:26:00', '2020-06-17 22:26:00', 1),
	(5, 'AP21022JL', '', 'colorways-1592443594380.jpg', 'colorways-1592443594387.jpg', 'colorways-1592443594392.jpg', 1, '32x32', 99.99, '2020-06-17 22:26:34', '2020-06-17 22:26:34', 1),
	(6, 'BR21014SR', '', 'colorways-1592443655636.jpg', 'colorways-1592443655672.jpg', 'colorways-1592443655724.jpg', 1, '64x128', 99.99, '2020-06-17 22:27:35', '2020-06-17 22:27:35', 2),
	(7, 'BR21024JL', '', 'colorways-1592443687880.jpg', 'colorways-1592443687899.jpg', 'colorways-1592443687931.jpg', 1, '32x32', 99.99, '2020-06-17 22:28:07', '2020-06-17 22:28:07', 2);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;

-- Dumping structure for table nam_studio.products_carts
DROP TABLE IF EXISTS `products_carts`;
CREATE TABLE IF NOT EXISTS `products_carts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `cart_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_products_has_carts_carts1_idx` (`cart_id`),
  KEY `fk_products_has_carts_products1_idx` (`product_id`),
  CONSTRAINT `carts_id` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table nam_studio.products_carts: ~0 rows (approximately)
/*!40000 ALTER TABLE `products_carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `products_carts` ENABLE KEYS */;

-- Dumping structure for table nam_studio.users
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL,
  `full_name` varchar(100) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(8) NOT NULL,
  `phone` smallint(6) DEFAULT NULL,
  `terms` tinyint(1) NOT NULL,
  `avatar` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table nam_studio.users: ~0 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
