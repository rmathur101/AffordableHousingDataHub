USE 'AffordableHousingDataHub';

CREATE TABLE `Users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `org` varchar(255) NOT NULL,
  `passwd` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
