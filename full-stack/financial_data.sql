-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 22, 2023 at 12:00 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4
drop database if exists financial_data;
create database financial_data;
use financial_data;


SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `financial_data`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(100) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone_number` varchar(100) NOT NULL,
  `message` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `first_name`, `last_name`, `email`, `phone_number`, `message`) VALUES
(1, 'Jane', 'Doe', 'janedoe@gmail.com', '5795895849', 'Hello wolrd'),
(2, 'Jane', 'Doe 2', 'janedoe@gmail.com', '5795895849', 'Hello wolrd'),
(3, 'Jane', 'Doe 2', 'janedoe@gmail.com', '5795895849', 'Hello wolrd'),
(4, 'Jane', 'Doe 2', 'janedoe@gmail.com', '5795895849', 'Hello wolrd'),
(5, 'Jane', 'Doe 2', 'janedoe@gmail.com', '5795895849', 'Hello wolrd'),
(6, 'Jane edited', 'Doe 2', 'janedoe@gmail.com', '5795895849', 'Hello wolrd'),
(7, 'Jane edited 2', 'Doe 2', 'janedoe@gmail.com', '5795895849', 'Hello wolrd'),
(8, 'Jane edited 2', 'Doe 2', 'janedoe@gmail.com', '5795895849', 'Hello wolrd'),
(9, 'Jane edited 2', 'Doe 2', 'janedoe@gmail.com', '5795895849', 'Hello wolrd'),
(10, 'a', 'aa', 'a@gmail.com', '3292092', 'akkdl;dl'),
(11, 'a', 'aa', 'a@gmail.com', '3292092', 'akkdl;dl');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `cust_id` int(11) NOT NULL,
  `Customer_name` varchar(100) NOT NULL,
  `Account_type` varchar(30) NOT NULL,
  `Active` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`cust_id`, `Customer_name`, `Account_type`, `Active`) VALUES
(4, 'Rob', 'current', 1),
(5, 'Samson', 'current', 1),
(6, 'Samson 2', 'current', 1),
(7, 'Samson 3', 'current', 1),
(8, 'Samson 35', 'current', 1),
(9, 'June', 'current', 1),
(10, 'June Doe', 'current', 1),
(11, 'June Doe 34', 'current', 1);

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `serv_id` int(11) NOT NULL,
  `service` varchar(255) NOT NULL,
  `cost` varchar(255) NOT NULL,
  `valid` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`serv_id`, `service`, `cost`, `valid`) VALUES
(1, 'Banking 2 edited', '2,000', '15 Sept, 2023'),
(2, 'Insurance updated', '654356', '15th September, 2023'),
(3, 'Insurance ', '654356', '15th September, 2023');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`cust_id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`serv_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `cust_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `serv_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
