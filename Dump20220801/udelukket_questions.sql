-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: udelukket
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questions` (
  `question_ID` int NOT NULL AUTO_INCREMENT,
  `question_text` varchar(400) NOT NULL,
  `option_1` varchar(100) NOT NULL,
  `option_2` varchar(100) NOT NULL,
  `option_3` varchar(100) NOT NULL,
  `option_4` varchar(100) NOT NULL,
  `correct_answer` varchar(100) NOT NULL,
  `category` enum('geografi','historie','kreative værker','krop og helbred','levende væsener','mad og drikke','matematik, fysik og kemi','politik og samfund','sport og spil','sprog','teknologi og håndværk','tro og fantasi') NOT NULL,
  `category_2` enum('','geografi','historie','kreative værker','krop og helbred','levende væsener','mad og drikke','matematik, fysik og kemi','politik og samfund','sport og spil','sprog','teknologi og håndværk','tro og fantasi') NOT NULL DEFAULT '',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`question_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (1,'Hvad er hovedstaden i Østrig?','Wien','Bern','Salzburg','Linz','Wien','geografi','','2022-07-23 20:52:44','2022-07-23 18:52:44'),(2,'Hvad hed kong Arthurs slot?','Excalibur','Kamelot','Avalon','Galahad','Kamelot','tro og fantasi','','2022-07-26 17:58:50','2022-07-26 15:58:50'),(3,'Hvilket dansk band står bag numre som ”Mexico ligger i Spanien” og ”En wannabe Darth Vader”?','Magtens Korridorer','The Minds of 99','Spids Nøgenhat','Nephew','Nephew','kreative værker','','2022-07-27 23:28:05','2022-07-27 21:28:05'),(4,'Hvilken diktators navn mangler i denne titel, som han gav sig selv:\n“His Excellency President for Life, Field Marshal Al Hadji Doctor ______, VC, DSO, MC, CBE, Lord of all the Beasts of the Earth and Fishes of the Sea, and Conqueror of the British Empire in Africa in General and Uganda in Particular”?','Muammar Gaddafi','Idi Amin','Saddam Hussein','Robert Mugabe','Idi Amin','historie','politik og samfund','2022-07-27 23:31:51','2022-07-27 21:42:40'),(5,'Hvis man bevæger sig op over Sydafrikas grænse ved vestkysten, hvilket land kommer man så til?','Mozambique','Namibia','Botswana','Tanzania','Namibia','geografi','','2022-07-28 12:48:30','2022-07-28 10:48:30'),(6,'I mangaserien Dragon Ball benytter hovedpersonen Son Goku en kampteknik, hvor han affyrer en energistråle med hænderne. Hvad kaldes teknikken, som har navn efter en hawaiiansk konge?','dodonpa','kamehameha','rokushiki','kagemane no jutsu','kamehameha','kreative værker','','2022-07-28 12:48:30','2022-07-28 10:48:30'),(7,'Hvilket af disse pattedyr har en giftklo?','okapi','jærv','næbdyr','vombat','næbdyr','levende væsener','','2022-07-28 14:09:21','2022-07-28 12:09:21'),(8,'Hvad kaldes den længste side i en retvinklet trekant?','sekant','grundlinje','katete','hypotenuse','hypotenuse','matematik, fysik og kemi','','2022-07-28 14:09:21','2022-07-28 12:09:21'),(9,'Hvilken af disse chilier er stærkest?','tabasco','jalapeño','cayenne','habanero','habanero','mad og drikke','','2022-07-29 12:08:43','2022-07-29 10:08:43'),(10,'Hvilken spiselig plante kaldes på fransk for  \'pomme de terre\'?','kartoffel','jordbær','æble','pære','kartoffel','sprog','mad og drikke','2022-07-29 12:08:43','2022-07-29 10:08:43'),(11,'Hvor mange lemmer (ben + kløer) har en krabbe?','6','8','10','12','10','levende væsener','','2022-07-29 18:13:44','2022-07-29 16:13:44'),(16,'Hvem var det andet menneske til at sætte fod på Månen?','Buzz Aldrin','Neil Armstrong','Michael Collins','Jurij Gagarin','Buzz Aldrin','historie','','2022-07-30 19:16:06','2022-07-30 17:16:06'),(17,'Hvilken af disse sygdomme skyldes en bakterie?','skoldkopper','røde hunde','polio','tuberkulose','tuberkulose','krop og helbred','levende væsener','2022-07-30 19:16:06','2022-07-30 17:16:06'),(18,'Hvilket vitamin mangler en person, der lider af skørbug?','vitamin A','vitamin B','vitamin C','vitamin D','vitamin C','krop og helbred','','2022-07-30 19:16:06','2022-07-30 17:16:06'),(19,'Hvad er hovedingrediensen i falafler?','hvede','sojabønner','kikærter','gule linser','kikærter','mad og drikke','','2022-07-30 19:16:06','2022-07-30 17:16:06'),(20,'Hvilken af disse planeter er størst?','Venus','Neptun','Uranus','Saturn','Saturn','matematik, fysik og kemi','','2022-07-30 19:16:06','2022-07-30 17:18:13');
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-01 16:07:13
