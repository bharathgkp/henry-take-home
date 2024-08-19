# Reservation - Backend v3

## Welcome

Working in a fast-paced startup is a challenge - features are needed yesterday, resources are limited and requirements are vague! 

This scenario is based on a real world challenge faced at Henry - the solution became a core component of the businesses success. The idea is to both give the developer a taste of that lifestyle, and allow Henry to evaluate their coding and decision making capacity!  

## Scenario

Henry has two kinds of users, **providers** and **clients**. Providers have a schedule where they are available to see clients. Clients want to book an appointment time, in advance, from that schedule.

## Task

Build an API (e.g. RESTful) with the following endpoints:

- Allows providers to submit times they are available for appointments
    - e.g. On Friday the 13th of August, Dr. Jekyll wants to work between 8am and 3pm
- Allows a client to retrieve a list of available appointment slots
    - Appointment slots are 15 minutes long
- Allows clients to reserve an available appointment slot
- Allows clients to confirm their reservation

Additional Requirements:

- Reservations expire after 30 minutes if not confirmed and are again available for other clients to reserve that appointment slot
- Reservations must be made at least 24 hours in advance

The developer may complete this task in any language/toolset that they think is reasonable.

## Limitations

Do not use an off-the-shelf reservation system. While suitable in real world, this is a code challenge.

Development time should be limited to about 2 or 3 hours. Feel free to provide notes of the areas that could not be met within that timeframe, tradeoffs made to stay within that time frame, or areas which would be handled differently before a production deployment.

## Submission

Please email a public link to your git repo to codechallenge@henrymeds.com.

## Evaluation

This will be evaluated similar to a real-world submission, including:

- Does the code solve the business problem?
- What trade-offs were made, how wise are they?
- How clean/well structured is the code?
- What ‘extra’ factors are there, that show exceptional talent?