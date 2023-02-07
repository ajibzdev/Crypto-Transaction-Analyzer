# Crypto Transaction Analyzer

This is a command line program that is written with nodejs. 

## Details of the program



The transactions over a period of time is stored in a CSV file so it reads the transaction from the csv file and then stores 
it in a mongo db database that was set up locally

Given no parameters it : 
- Returns the latest portfoli value per token in USD 

Given a token: 
- Returns the latest portfolio value for that token in USD

Given a Date: 
- Returns the portfolio value per token in USD on that date. 

Given a data and a token : 
- Returns the portfolio value of that token in USD on that date



