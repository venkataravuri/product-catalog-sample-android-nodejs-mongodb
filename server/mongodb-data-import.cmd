@ECHO OFF
REM 
REM MS-DOS Script to import product catalog sample data into mongodb.
REM 
REM Removes newlines from catalog.json file. 
REM
cat mongodb_data\catalog.json | tr -d '\r\n' > mongodb_data\catalog.import.json
REM
REM REM Drop the existing products collection.
REM
mongo catalog --eval "db.products.drop()"
REM
mongoimport --db catalog --collection products --jsonArray --file mongodb_data\catalog.import.json
REM
pause