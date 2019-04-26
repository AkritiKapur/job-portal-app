This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Project Details
This project is developed for the OOAD course (CSCI 5448-001) in CU Boulder

Project Name: Job-Portal App

Team Members: Akriti Kapur, Amith Gopal, Prashanth Thipparthi

### User Role Description
We have two kind of users,
1. Candidate: A candidate can apply to jobs, filter jobs, apply to jobs and withdraw from applications etc
2. Company: A company account can create jobs, view all the applications belonging to a job, delete a job etc.

### Directory File Description
Project consists of the following major directories and files:

1. authentication Directory: This has all the files containing authentication of the user. The user can be a candidate or a company and both have different UI flows.
    1. Login.js - Consists of the login form, handles login authetication
    2. Signup.js - Consists of the Signup form, handles sign up for candidate and companies.
    3. reducer.js, signupReducer - Reducers for login and signup actions
    4. actions.js - consits of login and signup actions.
    5. PrivateRouter.js - Handles routing and redirection. For ex, redirects non-authenticated requests to login page.

2. candidateDashboard Directory: The directory consists of all the files relating to the candidate's dashboard.
    1. Home.js - Home page for candidate. Parent class of all other candidate dashboard components.
    2. Dashboard.js - Dashboard consists of Applied jobs and all open applications for the candidate.
    3. JobCard.js - Card component displaying all the information related to a job like skills, description, role etc. It handles all the interactions such as apply and withdraw from a job.

3. companyDashboard Directory: The directory consists of all the files related to the company's dashboard.
    1. Home.js - Home page for company. Parent class of all other company dashboard components.
    2. JobCard.js - Same as the candidate directory jobcard but with more custom functions and tailored to a company.
    3. ApplicationDetailsPopup.js - Modal component that gives all the information related to applications belonging to a jobcard.
    4. CreateJobForm.js - Form component that contains all the fields needed to create a new job.
    5. JobPopup.js - Create job Modal component

4. header Directory: Header component interactions and logic

5. search Directory: Search component used for filter.
    1. search.js - Supports dynamic loading of Search dropdowns.
    2. searchDropdown.js - Supports Multiple select values from the dropdown which are then used to filter the job results.

## Running the Project

In the project directory, run:

### `npm install`

This will install all the dependencies of the project to your local.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
