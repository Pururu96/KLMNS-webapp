SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

--Table structure for table `personal`
--

--CREATE TABLE `personal` (
 `id` int(10) NOT NULL,
  `patient_name` varchar(255) NOT NULL,
  `patient_surname` varchar(255) NOT NULL,
  `date_of_birth` varchar(255) NOT NULL,
  `gender`varchar(255) NOT NULL,
  `race`varchar(255) NOT NULL,
  `address_1`varchar(255) NOT NULL,
  `address_2`varchar(255) NOT NULL,
  `city`varchar(255) NOT NULL,
  `province`varchar(255) NOT NULL,
  `postal_code` varchar(20) NOT NULL,
  `cell_no` varchar(20) NOT NULL,
  `tell_no` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `medical` varchar(20) NOT NULL,
  `agree` varchar(20) NOT NULL,
  status varchar(255) DEFAULT 'text',
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--data--
INSERT INTO `medical` (`id`, `patient_name`,`patient_surname`, `date_of_birth`, `gender`, `race`, `address_1`, `address_2`, `city`, `province`,`postal_code`,`cell_no`,`tell_no`, `email`,`medical`, `agree` ) VALUES
(6, 'Test','nomsa', '2020/03/27', 'male', 'white', '2500 dikole extention 2', 'katlehong', 'germiston', 'gauteng', '1431', '0734055887', '0116549000', 'htd@gmail.com', 'yes', 'yes'),
(10, 'hleh', 'terry','2018/06/27', 'female', 'coloured', '4500 dikole extention 2', 'vosloorus', 'germiston', 'gauteng', '1421', '0724055887', '0126549000', 'gtd@gmail.com', 'no', 'yes');

-- Indexes for table `personal`
--
ALTER TABLE `medical`
  ADD PRIMARY KEY (`id`);

  -- AUTO_INCREMENT for table `personal`
--
--ALTER TABLE `personal`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;