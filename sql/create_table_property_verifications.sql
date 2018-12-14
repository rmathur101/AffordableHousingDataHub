USE 'AffordableHousingDataHub';

CREATE TABLE `PropertyVerifications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `field` varchar(255) NOT NULL,
  `property_id` int(11) NOT NULL,
  `verified` tinyint(1) DEFAULT '0',
  `last_updated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=61 DEFAULT CHARSET=utf8