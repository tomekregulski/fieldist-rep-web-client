# Intelly - General Overview and Current State

The Fieldist repos are part of a larger project called Intelly, which is a platform being built to help small-to-medium-sized food and beverage brands manage various aspects of their business. The project is divided into separate repos to allow independent development. Below, you can find a list of the specific front and back ends that make up this project, links to their individual repos, as well as whether or not they have been deployed for public demo.

The public demos should be accessed thought this link: https://gallant-wing-415919.netlify.app/
This will bring you to a login page, which you can enter with the following credentials:

email: guest@intelly.test
password: guest

Once logged in, you will be brough to a dashboard that allows you to navigate the project in its current form. The guest account will have access to all services currently deployed for public demo, with only certain subservices being excluded to prevent any possible interference with sensitive data.

# This Specific Repo - Overview

As mentioned above, Intelly is split into several independent repos in order to facilitate different timelines for development, and thus make it possible to demonstrate those services that have reached an appropriate stage of devlopment.

The repo you are currently visiting is the front end for the Field Events application. It allows field reps to start a work session at a location and send in report forms. It utilizes the Geolocation API to verify the field rep's work location, and references client information from the Field Events Back End in order to render in the necessary form(s) to be filled out. Individual form responses, as well as an overall record of the work shift are sent to a database and made available for management and clients to review as needed.

# Additional Goals for Development

In addition to bringing the styling up to a professional level, the following are the immediate goals for development:
-Adding functionality for submitting photos with reports.
-Adding a full database of national grocery locations.
-Exploring all edge cases that may allow data to be lost over the course of a work session.

# Installation and Contribution

If you wish to test this project locally, you may clone the repo to a directory on your machine. Navigate to the new directory using your terminal, and install all necessary dependencies by running the command 'npm i'.

The app itself should be set up to connect to the deployed server, so at that point, you should be able to start it up by running the command 'npm start' and navigating to localhost:3001 in your browser.

At this time, I am not inviting individual contribution, unless there has been a specific conversation around it. If you come across something in the code that you wish to share, by all means message me and we can speak about it.

# All Repos Related to the Intelly Project

The following is a list of all related projects that have entered some stage of development. It will be updated as work begins on new services.

<a href="https://github.com/tomekregulski/intelly-auth-client">Authorization - Front End</a> - Deployed as part of the Public Demo <br>
<a href="https://github.com/tomekregulski/intelly-auth-service">Authorization - Back End</a> - Deployed as part of the Public Demo <br>
<a href="https://github.com/tomekregulski/intelly">Retail Data Dashboard - Front End</a> - Deployed as part of the Public Demo <br>
<a href="https://github.com/tomekregulski/intelly-server">Retail Data Dashboard - Back End</a> - Deployed as part of the Public Demo <br>
<a href="https://github.com/tomekregulski/fieldist-rep-web-client">Field Reporting - Front End</a> - Deployed as part of the Public Demo <br>
<a href="https://github.com/tomekregulski/fieldist-rep-react-native">Field Reporting - React Native Front End</a> - Early Stage, Not Deployed for Public Demo <br>
<a href="https://github.com/tomekregulski/fieldist-back-end">Field Events - Back End</a> - Deployed as part of the Public Demo <br>
<a href="https://github.com/tomekregulski/fieldist-admin-web-client">Field Events Administration - Front End</a> - Deployed as part of the Public Demo <br>
<a href="https://github.com/tomekregulski/intelly-admin-tasks-client">Administrative Tasks - Front End</a> - Deployed as part of the Public Demo <br>
<a href="https://github.com/tomekregulski/intelly-admin-task-server">Administrative Tasks - Back End</a> - Deployed as part of the Public Demo<br>
<a href="https://github.com/tomekregulski/intelly-payments-client">Payments - Front End</a> - Early Stage, Not Deployed for Public Demo <br>
<a href="https://github.com/tomekregulski/intelly-payments-server">Payments - Back End</a> - Early Stage, Not Deployed for Public Demo <br>
<a href="https://github.com/tomekregulski/intelly-form-builder-client">Form Builder - Front End</a> - Early Stage, Not Deployed for Public Demo <br>
<a href="https://github.com/tomekregulski/intelly-form-builder-server">Form Builder - Back End</a> - Early Stage, Not Deployed for Public Demo <br>
<a href="https://github.com/tomekregulski/intelly-schedule-client">Schedule - Front End</a> - Early Stage, Not Deployed for Public Demo <br>
