# Lap1Project - Penguins

Gebru Lap 1 Project Team Penguins:
- Aafthab Ashraff
- Alfie Kelly
- Albert Stoykov
- Prishal Makwana


Released 01/04/2022 14:00, Sumbitted 08/04/2022 14:00

## Description 

  * Penguin Journals is a Community journaling application
  * Users create, react and comment on posts about:
    * Conservation work for penguins
    * Topics that tackle climate change which impact penguins 
    * Day to day activities that help the penguins 
    * Scientific discovery around penguins 
    * Their love for penguins 


---

# Installation & Usage

## Installation

Installation is not required as this app has been deployed. However, prior to deployement, installation instructions consisted of:

- Clone or download the repo
- cd into the Lap1Project/server folder in your terminal 
- Run all dependencies
  - npm
  - nodemon
  - supertest
  - express
  - cors
  - jest

## Usage

This current release of the project has our server-side running on Heroku and client-side running on netlify. 
  - Server - https://penguin-journa1s.herokuapp.com/
  - Client - https://penguin-journals.netlify.app/

If you wish to run the application locally, please follow the following: 
- Update client/index.js API to http://localhost:3000/journal and save 
- cd to the server folder in your terminal & run npm start to launch the server
- Navigate to the client folder and open the index.html file in your browser to see the application UI

---

# Technologies 

- HTML
- CSS (Bootstrap) 
- JavaScript 
  - Node.js
  - Express
  - Cors
  - Jest 
  - Supertest

---

# Process

[How did you go about creating this project]

Agreed on our way of working 
- Agreed on a single method of communication about this project (slack)
- Agreed on what branches we will work in and will only merge in main after communicating to the rest of the team via slack 
- Agreed where our single point of truth for this application will be stored (Figma) 
- Agreed a rough plan of how we intend the week to go 

Understanding the problem 
- Tried to understand the core need for the application and wrote this in a single sentence

Defining and refining  
- Defined the core requirements of the application and added each requirement as tickets in a kanban board  
- Went through each ticket as a team to ensure we are all aligned with the requirments and how we indend to tackle the ticket 

Design planning 
- Found a few examples of similar journalling websites and took full screenshots of them 
- Using Figma, as a team we went through each of these example screenshots and discussed what we liked and disliked about thier design 
- Then as a team we drew a LoFi wireframe of our application 

Organising and planning 
- Assigned a few tickets to each team memeber 
- Planned regular catch up sessions each day (morning, afternoon, evening) to see how everyone is doing and if we need to re-align/re-distribute work 

---

# Wins & Challenges

## Wins

- Did all the planning and a big part of the front-end work on day one.
- Dividing up the team and allowing half of the team to focus on front-end and the other on back-end in for the first two days really helped creating the skeletons of the application 
- Responsive Navbar with detailed Hamburger Menu
- GIPFY API working
- Able to POST data via our API to a json file 
- Created a nicely styled front-end application 
- Separations of concerns excuted well. (Separated our server/app from the index.js file)
- Seprated section of code to increase readability of code - great commenting. 

## Challenges

- Search bar inside navbar refused to get centered. 
- Giphy API
- Lack of communication around merging main caused some corruption. 
- Fetching wasn't always done so we did dnot alwasy have the latest files locally 
- Issues with connections - linking front-end to back-end 
- Setting the json file to retrive and store data was difficult at the start

---

# Bugs (that still exist)

- When gif search bar is active, the screen scrolls to the top 
- Mutiple click on emoji search button pushes data mutiple times 
- Individual post buttons (emojis, read more/less, view comments) only work on the first post (issue with the classes) 
- Header text not as responsive as we wanted 
- Create post button,  not as responsive as we wanted  
- Output for gif search not aligned (some are overlapping)

---

# Future feature 

- Emoji reaction counter data will be stored on the server 
- Users would be able to add images and videos to their post
- Emoji reactions for comments 
- The individual gifs do not appear inside textarea 
- Comments are not currently savings or being retrieved
- Order of the latest post should be the other way around 
- Filtering posts was not done due to time
- Separate page for each menu item 
- Top 3 post section not currently linked
- Terms and conditions not poping out as a module 
- Methods to close the gif search container (currently only via gif button 

---

# Licence 

- MIT Licence 

Copyright 2022

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



