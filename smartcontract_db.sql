-- MySQL dump 10.13  Distrib 5.5.57, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: myapp
-- ------------------------------------------------------
-- Server version	5.5.57-0ubuntu0.14.04.1

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
-- Table structure for table `ContractPDF`
--

DROP TABLE IF EXISTS `ContractPDF`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ContractPDF` (
  `USER_ID` varchar(150) NOT NULL,
  `Contract_ABI` text,
  `Contract_ADDRESS` varchar(100) DEFAULT NULL,
  `ContractPDF_ID` varchar(150) DEFAULT NULL,
  `Customer_Name` varchar(100) NOT NULL,
  `Contract_Name` varchar(100) NOT NULL,
  `Contract_StartDate` date NOT NULL,
  `Contract_Price` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ContractPDF`
--

LOCK TABLES `ContractPDF` WRITE;
/*!40000 ALTER TABLE `ContractPDF` DISABLE KEYS */;
INSERT INTO `ContractPDF` VALUES ('9bbde3d46a41b5c3cdaad1140610c3ef',NULL,NULL,'69307110e202ade2f40ad425454f93c7','Customer 1 ','contract 1 ','2017-11-15','5555555555'),('9bbde3d46a41b5c3cdaad1140610c3ef',NULL,NULL,'9c345f1938fa16c2e57b85ae22e989c6','ccccccccccccc','eeeee','2017-11-16','444444'),('9bbde3d46a41b5c3cdaad1140610c3ef',NULL,NULL,'75f556d6d3974edfcdfd7221e5b6f61c','ccccccccccccc','contract 1 ','2017-11-19','33333'),('9bbde3d46a41b5c3cdaad1140610c3ef',NULL,NULL,'c1d4bf1dc62b42f778557fd4bfc30194','ccccccccccccc','contract 1 ','2017-11-19','33333'),('9bbde3d46a41b5c3cdaad1140610c3ef',NULL,NULL,'1d06e88103ab932019c86b4853e76110','ccccccccccccc','contract 1 ','2017-11-19','33333'),('9bbde3d46a41b5c3cdaad1140610c3ef',NULL,NULL,'8508fad0ca9c0c81c25ecbde60381d5b','ccccccccccccc','contract 1 ','2017-11-19','33333');
/*!40000 ALTER TABLE `ContractPDF` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Milestones`
--

DROP TABLE IF EXISTS `Milestones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Milestones` (
  `idMilestone` int(11) NOT NULL,
  `Start_Date` date NOT NULL,
  `End_Date` date NOT NULL,
  `Contract_ID` varchar(150) NOT NULL,
  `Task_Status` varchar(15) NOT NULL,
  `Payment_Status` varchar(15) NOT NULL,
  `Contract_Name` varchar(30) NOT NULL,
  `Customer_Name` varchar(30) NOT NULL,
  `Milestone_fee` varchar(20) NOT NULL,
  `Milestone_schedule` varchar(100) NOT NULL,
  `Milestone_Work_execution` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Milestones`
--

LOCK TABLES `Milestones` WRITE;
/*!40000 ALTER TABLE `Milestones` DISABLE KEYS */;
INSERT INTO `Milestones` VALUES (1,'2017-11-19','2017-11-23','8508fad0ca9c0c81c25ecbde60381d5b','Pending','Pending','contract 1 ','Customer','4444444444','milestone 1','eeee');
/*!40000 ALTER TABLE `Milestones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Subscriptions`
--

DROP TABLE IF EXISTS `Subscriptions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Subscriptions` (
  `idSubscriptions` int(11) NOT NULL AUTO_INCREMENT,
  `packageName` varchar(45) NOT NULL,
  `packagePrice` int(11) NOT NULL,
  `numberOfContract` int(11) NOT NULL,
  `renewalFrequency` int(11) NOT NULL,
  `Status` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`idSubscriptions`),
  UNIQUE KEY `idSubscriptions_UNIQUE` (`idSubscriptions`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Subscriptions`
--

LOCK TABLES `Subscriptions` WRITE;
/*!40000 ALTER TABLE `Subscriptions` DISABLE KEYS */;
/*!40000 ALTER TABLE `Subscriptions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TEMPLATE_INPUT`
--

DROP TABLE IF EXISTS `TEMPLATE_INPUT`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TEMPLATE_INPUT` (
  `idTEMPLATE_INPUT` int(15) NOT NULL AUTO_INCREMENT,
  `IDTemplate` varchar(150) NOT NULL,
  `INPUT_FIELD` varchar(100) NOT NULL,
  `Value_Input` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idTEMPLATE_INPUT`),
  UNIQUE KEY `idTEMPLATE_INPUT_UNIQUE` (`idTEMPLATE_INPUT`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TEMPLATE_INPUT`
--

LOCK TABLES `TEMPLATE_INPUT` WRITE;
/*!40000 ALTER TABLE `TEMPLATE_INPUT` DISABLE KEYS */;
INSERT INTO `TEMPLATE_INPUT` VALUES (1,'f6599cbdf099b21d47d43d41890925c8','ContractName',NULL),(2,'f6599cbdf099b21d47d43d41890925c8','ContractEmail',NULL),(3,'f6599cbdf099b21d47d43d41890925c8','ContractPrice',NULL),(4,'f6599cbdf099b21d47d43d41890925c8','ContractDate',NULL),(5,'f6599cbdf099b21d47d43d41890925c8','containing',NULL),(6,'f6599cbdf099b21d47d43d41890925c8','passages',NULL),(7,'f6599cbdf099b21d47d43d41890925c8','recently',NULL),(8,'f6599cbdf099b21d47d43d41890925c8','publishing',NULL);
/*!40000 ALTER TABLE `TEMPLATE_INPUT` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TemplateCategory`
--

DROP TABLE IF EXISTS `TemplateCategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TemplateCategory` (
  `idTemplateCategory` int(11) NOT NULL AUTO_INCREMENT,
  `Category_Name` varchar(45) NOT NULL,
  `Parent_Category` varchar(45) DEFAULT NULL,
  `Status` varchar(45) NOT NULL,
  `Icon` varchar(45) NOT NULL,
  PRIMARY KEY (`idTemplateCategory`),
  UNIQUE KEY `idTemplateCategory_UNIQUE` (`idTemplateCategory`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TemplateCategory`
--

LOCK TABLES `TemplateCategory` WRITE;
/*!40000 ALTER TABLE `TemplateCategory` DISABLE KEYS */;
INSERT INTO `TemplateCategory` VALUES (1,'Sub Category 1','parent category 1','Active','jpg');
/*!40000 ALTER TABLE `TemplateCategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TemplateParentCategory`
--

DROP TABLE IF EXISTS `TemplateParentCategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TemplateParentCategory` (
  `idTemplateCategory` int(11) NOT NULL AUTO_INCREMENT,
  `Category_Name` varchar(45) NOT NULL,
  `Status` varchar(45) NOT NULL,
  `Icon` varchar(45) NOT NULL,
  PRIMARY KEY (`idTemplateCategory`),
  UNIQUE KEY `idTemplateCategory_UNIQUE` (`idTemplateCategory`),
  UNIQUE KEY `Category_Name_UNIQUE` (`Category_Name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TemplateParentCategory`
--

LOCK TABLES `TemplateParentCategory` WRITE;
/*!40000 ALTER TABLE `TemplateParentCategory` DISABLE KEYS */;
INSERT INTO `TemplateParentCategory` VALUES (1,'parent category 1','Active','jpg');
/*!40000 ALTER TABLE `TemplateParentCategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Templates`
--

DROP TABLE IF EXISTS `Templates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Templates` (
  `idTemplate` varchar(150) NOT NULL,
  `Description` text NOT NULL,
  `Template_Name` varchar(50) NOT NULL,
  `Status` varchar(50) NOT NULL,
  `Category_Name` varchar(50) NOT NULL,
  PRIMARY KEY (`idTemplate`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Templates`
--

LOCK TABLES `Templates` WRITE;
/*!40000 ALTER TABLE `Templates` DISABLE KEYS */;
INSERT INTO `Templates` VALUES ('f6599cbdf099b21d47d43d41890925c8','This independent contractor agreement (the “Agreement”) is made and entered into as of#ContractName#! (the “Effective Date”) between#ContractEmail#! (the “Company”),a #ContractPrice#!#ContractDate#!perform other services in the future; andThe Parties therefore agree as follows:Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets #containing#! Lorem Ipsum #passages#!, and more #recently#! with desktop #publishing#! software like Aldus PageMaker including versions of Lorem Ipsum.','Template 1','Active','Sub Category 1');
/*!40000 ALTER TABLE `Templates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
  `idUsers` varchar(150) NOT NULL,
  `Password` varchar(150) NOT NULL,
  `Email` varchar(45) NOT NULL,
  `Phone` int(11) NOT NULL,
  `User_Type` varchar(45) NOT NULL,
  `Registration_Verify` varchar(150) NOT NULL,
  `Verify` tinyint(1) NOT NULL,
  `Forgoft_Password_Verify` varchar(150) DEFAULT NULL,
  `Expire_date` date NOT NULL,
  `last_name` varchar(20) DEFAULT NULL,
  `first_name` varchar(20) DEFAULT NULL,
  `Status` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`idUsers`),
  UNIQUE KEY `Email_UNIQUE` (`Email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES ('14c9da0d6d016a629b84daa5af4a6f95','$2a$10$S8vMTd2ZSEn/UsOHUjlo3e0LQiiUp2u4JYG9lVDT/k4WN99zYovJW','vishant.singh@sofocle.com',2147483647,'Company;','05b3b5aff93d0f684535e52f506f5d8d',0,NULL,'0000-00-00',NULL,'vv','Active'),('2731f4eac82403980269c8547d2d5212','$2a$10$2BXzmJ2/t6av5a.7Z12gUOQ80B4S8h7DzJEHf2FZ38O/RTGkajKLy','service@gmail.com',2147483647,'Admin','d874bf96c5086aed7d1b5b27935eca18',0,NULL,'0000-00-00','provider','Service','Active'),('2ceb42278c214d710b9334d0518a15a7','$2a$10$S8vMTd2ZSEn/UsOHUjlo3eEmSW1I6.Gr4.ZZwCYjsdVmO1mMNsnpu','vsteotiaccccc19@gmail.com',2147483647,'Company','57de3cd2a8e79799c368f5884395e693',0,NULL,'0000-00-00',NULL,'vvvvvvvvvvvvvvvvv','Active'),('4499e9904f99acd452fcb4dac6891b5f','$2a$10$S8vMTd2ZSEn/UsOHUjlo3epPNOqwV824YOWT81Jea1kUTSQCRTi5C','vishanddddvvvvt@gmail.com',2147483647,'Service Provider','b9e5463705d7fc46149d6b52c0b99b37',0,NULL,'0000-00-00','singh','vccccccccc','Active'),('561bd9fe6505b135b113f31e1a865f67','$2a$10$vJ/rm8CIR0azI12IsryIUucXfCSEdxt8eKlWNs6u3STx.ZFCf1ub6','vishanteotia@gmail.com',2147483647,'Company','564b0a09c6cacf7af021f615acd455a5',0,NULL,'0000-00-00',NULL,'Company 3','Active'),('9092797094c62b9815ae310f8dd16a62','$2a$10$S8vMTd2ZSEn/UsOHUjlo3eVG5pyZychyAFZ9iWqo1OBh4UpwLDrNG','fff@fff.com',2147483647,'Customer','12d041cf4f52d975fefcbc9ff32083ad',0,NULL,'0000-00-00','fffffffffffffffffff','fffffffffffff','Active'),('98a0d2f4eab4d970505fb3b28fc3b0d0','$2a$10$S8vMTd2ZSEn/UsOHUjlo3eHIgtrGYaBZtyOebrxr.QCAu3i8qG2W6','customeccccccccccr@gmail.com',2147483647,'Customer','df0aa6c697db6546891f309cf1de20ea',0,NULL,'0000-00-00','cccccccccccc','ccccccccccccc','Active'),('9bbde3d46a41b5c3cdaad1140610c3ef','$2a$10$2BXzmJ2/t6av5a.7Z12gUO/LOyxmT.yVuuHWST.3sp.dKPMaglg.i','company1@gmail.com',2147483647,'Company','1e04c9d007da115863e516ecf517c71f',0,NULL,'0000-00-00','lastname','Company 1 ','Active'),('c91a6096294100cd49064333903909a5','$2a$10$2BXzmJ2/t6av5a.7Z12gUOFJt2xRIcsJcf3e.ZYvZxrog/2Ji6YLO','customer1@gmail.com',2147483647,'Customer','27e8471dfe92b213075cbb71cf0e1016',0,NULL,'0000-00-00','last name','Customer 1 ','Active');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-11-03 12:57:13
