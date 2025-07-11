INTRODUCTION

Clean City Web Application is a waste management collection platform which will need comprehensive testing on all of its core systems to ensure it meets the developers goals.

1.1 Background

Clean City provides a complete waste management solution with features like user registration, pickup scheduling, community engagement, educational content, and administrative functions.

TESTING STRATEGY OVERVIEW
2.1 Objectives 

Identify and document all functional and non-functional defects.
Validate user experience across different devices and browsers.
Ensure accessibility compliance for users with disabilities.
Assess security vulnerabilities and data protection measures.
Evaluate performance under various load conditions.
Verify cross-platform compatibility and responsive design.


2.2 Testing Levels

Manual testing will be done by all members of the testing group to ensure multiple perspectives are garnered, and to replicate the variety of ways users will operate the web application.

The automated testing will be assigned individually to all the testers to ensure everyone contributes without running the same tests; the delegation of tasks will be facilitated by the Jira web application.


SCOPE


3.1 In Scope

The testing of the Clean City website will include user registration, pickup scheduling, community engagement, educational content, and administrative functions.

3.2  Out of Scope

The testing will not include driver route optimization logic and backend infrastructure.


TEST APPROACH 

The testing will follow (STLC) and it to be done in four phases which are:

Test Planning
Test Design 
Test Execution
Test Closure 

4.1 Team Responsibilities 

Alongside doing their allocated testing each team member will have specific roles and responsibilities to fulfil.

Munzhelele Thendo will ensure that all necessary test cases have been written and are appropriate, and make sure all bugs found have been logged correctly following the format provided to the team.

Brian Mwalwala is responsible for ensuring that both manual and automatic tests have been done correctly and troubleshooting any errors the QA team runs into while testing.

Naserian Nashipae is responsible for all documentation ranging from the Test Plan to the workflow management on Jira and any further documentation that will be needed during the testing.


4.2 Test Environments 
     Component 			Version Details

OS				Mac OS 13.7.6 
Python				3.13.3
Pytest				7.1.2
Browser			Google Chrome
Application URL 		http://localhost:3000
Test files			tests/tests/test_login.py
Page Objects 			pages/login_page.py


4.3 Testing Tools
	Tool				Purpose

Selenium WebDriver		Browser Automation
Pytest				Test execution and reporting.
Jest 				JavaScript testing framework   
NodeJs 			Runtime for executing JavaScript apps 
SonarQube			Static code analysis and code quality 


REPORTING & RISKS

5.1 Reporting

Test reporting will be done during weekly meetings, reporting will also be done every time the complete testing of a core element of the Web Application is done. In the case that a task has not been reported progress will be trackable on the Jira platform and unreported or untracked progress can be noticed and rectified.

5.2 Risks

The team might be too small or slow to finish the testing and documentation in time due to inexperience or other unmanageable factors.
