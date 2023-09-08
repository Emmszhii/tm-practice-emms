-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 08, 2023 at 07:42 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tm_practice`
--

-- --------------------------------------------------------

--
-- Table structure for table `tm_practice_department`
--

CREATE TABLE `tm_practice_department` (
  `department_aid` int(11) NOT NULL,
  `department_name` varchar(100) NOT NULL,
  `department_description` text NOT NULL,
  `department_is_active` tinyint(1) NOT NULL,
  `department_created_at` datetime NOT NULL,
  `department_updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tm_practice_department`
--

INSERT INTO `tm_practice_department` (`department_aid`, `department_name`, `department_description`, `department_is_active`, `department_created_at`, `department_updated_at`) VALUES
(1, 'Accounting', '', 1, '2023-09-08 13:05:29', '2023-09-08 13:35:50'),
(2, 'Rhico', '', 1, '2023-09-08 13:06:03', '2023-09-08 13:06:03'),
(3, 'Mentor Maam Cy', '', 1, '2023-09-08 13:06:09', '2023-09-08 13:07:06');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tm_practice_department`
--
ALTER TABLE `tm_practice_department`
  ADD PRIMARY KEY (`department_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tm_practice_department`
--
ALTER TABLE `tm_practice_department`
  MODIFY `department_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
