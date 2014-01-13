@ECHO OFF
REM 
REM MS-DOS Script to import product catalog sample data into mongodb.
REM 
REM Removes newlines from catalog.json file. 
REM
cat mongodb_data\books.json | tr -d '\r\n' > mongodb_data\books.import.json
cat mongodb_data\films.json | tr -d '\r\n' > mongodb_data\films.import.json
cat mongodb_data\groceries.json | tr -d '\r\n' > mongodb_data\groceries.import.json
cat mongodb_data\toys.json | tr -d '\r\n' > mongodb_data\toys.import.json
REM
REM REM Drop the existing products collection.
REM
mongo catalog --eval "db.products.drop()"
REM
mongoimport --db catalog --collection products --jsonArray --file mongodb_data\books.import.json
mongoimport --db catalog --collection products --jsonArray --file mongodb_data\films.import.json
mongoimport --db catalog --collection products --jsonArray --file mongodb_data\groceries.import.json
mongoimport --db catalog --collection products --jsonArray --file mongodb_data\toys.import.json
REM
pause