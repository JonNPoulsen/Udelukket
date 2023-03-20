-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: udelukket
-- ------------------------------------------------------
-- Server version	8.0.32

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
  `category` enum('geografi','historie','krop og helbred','levende væsener','litteratur og billedkunst','mad og drikke','matematik, fysik og kemi','musik og radio','politik og samfund','sport og spil','sprog','teknologi og håndværk','tro og fantasi','skærm og scene') NOT NULL,
  `category_2` enum('geografi','historie','krop og helbred','levende væsener','litteratur og billedkunst','mad og drikke','matematik, fysik og kemi','musik og radio','politik og samfund','sport og spil','sprog','teknologi og håndværk','tro og fantasi','skærm og scene','') NOT NULL DEFAULT '',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`question_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (48,'Hvad er hovedstaden i Østrig?','Wien','Bern','Salzburg','Linz','Wien','geografi','','2022-08-09 17:43:01','2022-08-09 15:43:01'),(49,'Hvad hed kong Arthurs slot?','Excalibur','Kamelot','Avalon','Galahad','Kamelot','tro og fantasi','','2022-08-09 17:43:01','2022-08-09 15:43:01'),(50,'Hvilket dansk band står bag numre som ”Mexico ligger i Spanien” og ”En wannabe Darth Vader”?','Magtens Korridorer','The Minds of 99','Spids Nøgenhat','Nephew','Nephew','musik og radio','','2022-08-09 17:43:01','2022-08-16 10:27:56'),(51,'Hvilken diktators navn mangler i denne titel, som han gav sig selv:\n“His Excellency President for Life, Field Marshal Al Hadji Doctor ______, VC, DSO, MC, CBE, Lord of all the Beasts of the Earth and Fishes of the Sea, and Conqueror of the British Empire in Africa in General and Uganda in Particular”?','Muammar Gaddafi','Idi Amin','Saddam Hussein','Robert Mugabe','Idi Amin','historie','politik og samfund','2022-08-09 17:43:01','2022-08-09 15:43:01'),(52,'Hvis man bevæger sig op over Sydafrikas grænse ved vestkysten, hvilket land kommer man så til?','Mozambique','Namibia','Botswana','Tanzania','Namibia','geografi','','2022-08-09 17:43:01','2022-08-09 15:43:01'),(53,'I mangaserien Dragon Ball benytter hovedpersonen Son Goku en kampteknik, hvor han affyrer en energistråle med hænderne. Hvad kaldes teknikken, som har navn efter en hawaiiansk konge?','dodonpa','kamehameha','rokushiki','kagemane no jutsu','kamehameha','litteratur og billedkunst','','2022-08-09 17:43:01','2022-08-16 10:27:56'),(54,'Hvilket af disse pattedyr har en giftklo?','okapi','jærv','næbdyr','vombat','næbdyr','levende væsener','','2022-08-09 17:43:01','2022-08-09 15:43:01'),(55,'Hvad kaldes den længste side i en retvinklet trekant?','sekant','grundlinje','katete','hypotenuse','hypotenuse','matematik, fysik og kemi','','2022-08-09 17:43:01','2022-08-09 15:43:01'),(56,'Hvilken af disse chilier er stærkest?','tabasco','jalapeño','cayenne','habanero','habanero','mad og drikke','','2022-08-09 17:43:01','2022-08-09 15:43:01'),(57,'Hvilken spiselig plante kaldes på fransk for  \'pomme de terre\'?','kartoffel','jordbær','æble','pære','kartoffel','sprog','mad og drikke','2022-08-09 17:43:01','2022-08-09 15:43:01'),(58,'Hvor mange lemmer (ben + kløer) har en krabbe?','6','8','10','12','10','levende væsener','','2022-08-09 17:43:01','2022-08-09 15:43:01'),(59,'Hvem var det andet menneske til at sætte fod på Månen?','Buzz Aldrin','Neil Armstrong','Michael Collins','Jurij Gagarin','Buzz Aldrin','historie','','2022-08-09 17:43:01','2022-08-09 15:43:01'),(60,'Hvilken af disse sygdomme skyldes en bakterie?','skoldkopper','røde hunde','polio','tuberkulose','tuberkulose','krop og helbred','levende væsener','2022-08-09 17:43:01','2022-08-09 15:43:01'),(61,'Hvilket vitamin mangler en person, der lider af skørbug?','vitamin A','vitamin B','vitamin C','vitamin D','vitamin C','krop og helbred','','2022-08-09 17:43:01','2022-08-09 15:43:01'),(62,'Hvad er hovedingrediensen i falafler?','hvede','sojabønner','kikærter','gule linser','kikærter','mad og drikke','','2022-08-09 17:43:01','2022-08-09 15:43:01'),(63,'Hvilken af disse planeter er størst?','Venus','Neptun','Uranus','Saturn','Saturn','matematik, fysik og kemi','','2022-08-09 17:43:01','2022-08-09 15:43:01'),(64,'I hvilken af disse situationer giver det bedst mening at anvende rawlplugs?','samling af træplader','boring i gipsvæg','lydisolering','afløbsrensning','boring i gipsvæg','teknologi og håndværk','','2022-08-09 17:43:01','2022-08-09 15:43:01'),(65,'Hvilken Windows-genvej kan bruges til at lukke en side eller et dokument?','Ctrl + P','Ctrl + R','Ctrl + W','Ctrl + Z','Ctrl + W','teknologi og håndværk','','2022-08-09 17:43:01','2022-08-09 15:43:01'),(66,'Foruden Koranen bygger islamiske love og normer på overleveringer om Muhammeds ord, handlinger og stiltiende accept. Samlinger af disse overleveringer kategoriseres efter deres troværdighed. Hvad kaldes en sådan overlevering?','hadith','isnad','jihad','zakat','hadith','tro og fantasi','','2022-08-09 17:43:01','2022-08-09 15:43:01'),(67,'I Betlehem fik Jesusbarnet besøg af tre vise mænd. To af dem hed Melchior og Balthazar. Hvad hed den tredje?','Thomas','Mathias','Kasper','Theodor','Kasper','tro og fantasi','','2022-08-09 17:43:01','2022-08-09 15:43:01'),(68,'I hvilken by viste ærkeenglen Gabriel sig for jomfru Maria?','Betlehem','Jerusalem','Nazareth','Jericho','Nazareth','tro og fantasi','','2022-08-09 17:43:01','2022-08-09 15:43:01'),(69,'Hvem var Danmarks statsminister fra 1982-1993?','Anker Jørgensen','Poul Nyrup','Anders Fogh','Poul Schlüter','Poul Schlüter','politik og samfund','historie','2022-08-09 17:43:01','2022-08-09 15:43:01'),(70,'Hvor mange procent af stemmerne skal et parti have for at nå over spærregrænsen ved et dansk folketingsvalg?','1','2','3','4','2','politik og samfund','','2022-08-09 17:43:01','2022-08-09 15:43:01'),(71,'Hvis du i et datasæt har højden af Snehvide og hver af de syv små dværge, hvilken af følgende værdier er så lavest?','medianen','gennemsnittet','den øvre kvartil','den 60. percentil','medianen','matematik, fysik og kemi','','2022-08-09 17:43:01','2022-08-09 15:43:01'),(72,'Hvis 1 larve kan spise 1 blad på 10 minutter, hvor mange blade kan 60 larver så spise på 60 minutter?','60','360','600','3600','360','matematik, fysik og kemi','','2022-08-09 17:43:01','2022-08-09 15:43:01'),(73,'Hvad er den rigtige stavemåde for lærerens møbel?','kateder','kateter','katteder','katteter','kateder','sprog','','2022-08-09 17:43:01','2022-08-09 15:43:01'),(74,'Hvem synger omkvædet på sommerhittet \"Stor mand\" fra 2021?','Andreas Odbjerg','Tobias Rahim','Lord Siva','Rasmus Seebach','Andreas Odbjerg','musik og radio','','2022-08-09 17:43:01','2022-08-16 10:27:56'),(77,'Hvor langt skal en triatlet svømme i en Ironman-triatlon?','1,42 km','2,40 km','2,98 km','3,86 km','3,86 km','sport og spil','','2022-08-10 18:01:41','2022-08-10 16:01:41'),(78,'Hvad kaldes det eneste skaktræk, hvor en skakbrik tager en anden skakbrik uden at rykke ind på dens felt?','en passant','rokade','gambit','siciliansk forsvar','en passant','sport og spil','','2022-08-10 18:13:59','2022-08-10 16:16:37'),(79,'Hvad hed computeren, som i 2011 besejrede menneskelige stormestre i det amerikanske quizshow \"Jeopardy!\"?','Deep Blue','Watson','DALL-E','Akinator','Watson','sport og spil','teknologi og håndværk','2022-08-10 18:13:59','2022-08-10 16:13:59'),(80,'Hvem spillede den kvindelige hovedrolle i filmen \"Titanic\" fra 1997?','Kate Winslet','Eva Green','Julia Roberts','Drew Barrymore','Kate Winslet','skærm og scene','','2022-08-16 12:45:57','2022-08-16 10:45:57'),(81,'Hvilken af disse karakterer er stadig i live ved slutningen af Stephen Sondheims musical \"Sweeney Todd: The Demon Barber of Fleet Street\"?','Sweeney Todd','Nellie Lovett','Lucy Barker','Tobias Ragg','Tobias Ragg','skærm og scene','','2022-08-16 12:52:21','2022-08-16 10:52:21'),(82,'Hvilket af disse bogstaver symboliserer kvadratroden af -1?','a','x','i','k','i','matematik, fysik og kemi','','2023-03-20 22:33:25','2023-03-20 22:33:25');
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

-- Dump completed on 2023-03-20 23:41:07
