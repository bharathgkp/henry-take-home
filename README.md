
## How to run the code
1. The code can be run `npm run start`. This will start the server. 

## API Documentation
I used Postman to manually test and create api documentation
https://documenter.getpostman.com/view/1027741/2sA3s9Dock

## Trade-offs & Considerations
1. In order for time, I decide to create an inmemory database. This allowed me to focus on the main part of the take home assignment.
2. Concurrency: The current implementation with inmemory database does not support concurrent reservations. This would be improved with the use of a database ex Postgres. 
3. Security: There is really no security aspect to this api. I intially wanted to implement a authorization token based security for each user to allow for better security and privacy.
4. In order to validate that reservation only valid for 30 mins, I decide to go with setInterval approach, but this works in current implementation but this will not scale well. If I had more time I would use an event driven approach to man the reservation system. 
5. Timezone, I only chose to support 3 different timezone for the application, PDT, MNT, and EST.  


Further Work
Testing: Add unit and integration tests to ensure the correctness of the implementation.
Security: Implement authentication and proper input validation.
Data Management: Using a database