Functionality issues:
In the blog section when it is refreshed comments disappear.
In the eco awareness/ eco quiz, the quiz doesn’t end so you can keep redoing it and yet it only has 3 questions.
You are able to register/ sign up a new account when you’re logged in on another account.
Under awareness/ feedback the request id and feedback input fields accept any input even alphanumeric inputs. which is not a coherent issue.
No delete button in the community feed updates.
Report button on the community page (spam and harmful content can be posted freely).

Enhancements:
The avatars on the profiles are pre-selected and not something defined by the user during sign up

Feature Issues:
Under profile you have my blog posts but under blogs there’s no button to add a new blog post.
Under blog/ enter key doesn’t go to the next line or submit a post.
There’s no backend integration when it comes to pickup requests. 
Profile/requests does not load your requests.
Under profile you have my blog posts but under blogs there’s no button to add a new blog post.

SonarQube:
Hard-coded password (Security Risk).
Unexepected duplicated sector (.navbar a).
"match" is missing props validation.
"match.params" is missing props validation.
"tabIndex" should only be declared on interactive elements.
The element article has an implicit role of article, defining it is redundant.
"onSave" is missing props validation.
"initial" is missing in props validation.
"onRegister" is missing in props validation.
Remove useless assignment to variable "showForm".
Remove useless assignment to variable "handleNew".
Remove useless assignment to variable "handleDeleteComment".
Remove useless assignment to variable "handleMarkInappropriate".
Use <output> instead of the "status" role to ensure accessibility across all devices.
"onLogin" is missing in props validation.
Use <main> instead of the "main" role to ensure accessibility across all devices.
"data" is missing in props validation.
Do not use Array index in keys.

Selenium:
Invalid login redirects to /profile instead of displaying an error.