//creating a keyspace
CREATE KEYSPACE IF NOT EXISTS languagefeatures WITH replication = {'class' : 'SimpleStrategy', 'replication_factor' : 1};

//creating a table
CREATE TABLE languagefeatures.languages (
id                      int PRIMARY KEY,
english_interface       boolean,
english_full_audio      boolean,
english_subtitles       boolean,
spanish_interface       boolean,
spanish_full_audio      boolean,
spanish_subtitles       boolean,
french_interface        boolean,
french_full_audio       boolean,
french_subtitles        boolean,
navajo_interface        boolean,
navajo_full_audio       boolean,
navajo_subtitles        boolean,
mandarin_interface      boolean,
mandarin_full_audio     boolean,
mandarin_subtitles      boolean
);

COPY languagefeatures.languages FROM '/Users/gloria/HRR38/SDC/sdc-productDetails/csv/allTheData.csv' WITH DELIMITER = ',';

COPY languagefeatures.languages (id, english_interface, english_full_audio, english_subtitles, spanish_interface, spanish_full_audio, spanish_subtitles, french_interface, french_full_audio, french_subtitles, navajo_interface, navajo_full_audio, navajo_subtitles, mandarin_interface, mandarin_full_audio, mandarin_subtitles) FROM '/Users/gloria/HRR38/SDC/sdc-productDetails/csv/allTheData.csv' WITH DELIMITER = ',' AND HEADER=TRUE;