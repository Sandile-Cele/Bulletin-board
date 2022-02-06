# Table of Contents

[Introduction](#_Toc70536601)

[The registration of new users and login process in terms off: 2](#_Toc70536602)

[HTTP requests and traffic security 2](#_Toc70536603)

[How to prevent cross site scripting 2](#_Toc70536604)

[Storing and hashing of passwords 3](#_Toc70536605)

[Use of cookies in a secure 3](#_Toc70536606)

[The overall flow of your login process 3](#_Toc70536607)

[Step 1: Create an anonymous session on first visit 3](#_Toc70536608)

[Step 2: Starting HTTPS and encryption in transit 4](#_Toc70536609)

[Step 3: Processing and verifying credentials 4](#_Toc70536610)

[Step 4: Start the users authenticated session 4](#_Toc70536611)

[Step 5: Do cool things 4](#_Toc70536612)

[Step 6: Potential Re-Authentication for Sensitive Operations 4](#_Toc70536613)

[Step 7: Idle Timeout 5](#_Toc70536614)

[Step 8: Absolute Timeout 5](#_Toc70536615)

[Step 9: Logout 5](#_Toc70536616)

[How I plan to protect the application against 5](#_Toc70536617)

[Username harvesting 5](#_Toc70536618)

[Brute Force Attacks (you can read textbook for more information) 6](#_Toc70536619)

[Session Jacking 6](#_Toc70536620)

[Session Fixation 7](#_Toc70536621)

[Conclusion 7](#_Toc70536622)

[References 8](#_Toc70536623)

#

# Introduction

Following is my proposal to for the National government. In this proposal I will explain how I plan ensure that security is of high standards in the bulletin board website. This proposal has been written in a way to ensure that government officials without a solid background in computer science are able to comprehend the basic security premise given, with no difficulty.

# The registration of new users and login process in terms off:

## HTTP requests and traffic security

**What is HTTP**

To send anything you need a protocol (a set of instructions parties agree upon). To send a mail, you need to put the letter inside an envelope, stamp it on top right, address of recipient on front etc. By the same token computers use HyperText Transfer Protocol(HTTP) to send and receive webpages.

Right off the bat one can spot the potential security flaw. What if someone reads the data that is transferred between webpages.

**HTTP secure**

This is where HTTPS(Hypertext Transport Protocol Secure) comes in. With HTTPS we can ensure that no one else can read our messages because they are encrypted; ensure no one has changed our messages; ensure you are who you say you are/the webpage from [_https://azure.com_](https://azure.com/) is really from Microsoft. In short HTTPS provides confidentiality, integrity, and authenticity.

There are few types of HTTPS protocols: SSL(Secure Sockets Layer) and TLS(Transport Layer Security). For the bulletin website I will implement TLS 1.3, SSL is out of the equation as it was deprecated by IETF (IETF, n.d). According to Cloudflare TLS 1.3 is faster and more secure than TLS 1.2.

They are many ways to implement TLS. One of the easiest ways is to contact website webhost, submit request to purchase TLS certificate and they will install it for you. Once installed website will load via HTTPS (Payjunction, n.d).

**HTTP GET**

HTTP get it used to get information from a server. Data that is transferred via the HTTP get method is not encrypted as a result anyone can read the data. To make the website more secure I will reframe from using HTTP get method to transfer sensitive information (August &amp; Manico, 2015).

**HTTP POST**

HTTP post is used to transmit important structured data to a server. So, HTTPS post will be used to submit all forms: login, sign up and create post. If I use HTTP post, sensitive information will not be leaked in the browser history list, referer headers, or server access logs. Thus, I can safely transfer sensitive information.

##

## Input validation

**Why empty fields are not allowed**

All fields for registration will be required for the operation of the login system. It will not be possible nor secure to login with a password only or a username only.

**RegEx**

RegEx also known as Regular expression, this is one of the ways to perform white listening. It is a way to ensure that that the entered text follows a certain pattern. From a security perspective it will be very useful to prevent XSS(Cross Site Scripting). One of the ways an attacker can perform cross site scripting is by entering code in a textbox. This code could be read by a database(SQL query) or server(JavaScript). To stop this, we can use RegEx to ensure that name field only takes letters, age field takes numbers to stop XSS (Jochen, 2021).

## Storing and hashing of passwords

Security is a moving target and sometimes people find vulnerabilities in your system even if you do a very good job. What happen when unauthorized personal get access to your database, then all your users are exposed. This is where hashing comes in. Hashing is an algorithm that is used to map data (in our case a password) to seemingly random fixed-size values. Hashing is a one way process once hashed it cannot be &quot;unhashed&quot;. Hashing will always produce the same result because of the algorithm used.

There are many algorithms to hash text but currently google recommends SHA-256 (Dan, 2019). SHA-256 is the most efficient to use. It smaller then SHA-512, requiring less bandwidth to store and transmit, less memory and in many cases less processing power to compute.

If a hacker successfully get passwords in your database then one might think this is not a big deal because passwords are hashed, but one of the flaws with hashing is that they the algorithms always produce that same result. As a result people have built rainbow tables (database with raw text and hash) to find the password.

This is where salting comes in. Salting is a process of adding random characters to the input of a hash function. Example, if your password is: &quot;iAmSafe&quot; will be appended with &quot;\&lt;1\*3&quot; then &quot;iAmSafe\&lt;1\*3&quot; will be hashed and stored.

The reason why salting and hashing is important to implement is because if attacker successfully gets users hashed password, then their real passwords will not be compromised.

## Use of cookies in a secure

Page 35

## The overall flow of your login process

### Step 1: Create an anonymous session on first visit

Whenever someone is visiting bulletin website I will create a session with then. I will track their behavior anonymously. I will do this because…

### Step 2: Starting HTTPS and encryption in transit

I will start a HTTPS connection with connected user (not sure if this is correct/ rather the login form will be sent over https). I will do this because HTTPS provides: confidentiality, integrity, and authenticity between the server and the connected department member. By using HTTPS I can, in theory ensure that no one else can see the contents of the form, no one can change your entered data and your browser can make sure that you are indeed visiting the right bulletin website for this domain(.gov).

And SSL will be used to provide certificates because TLS provides no security benefit.

### Step 3: Processing and verifying credentials

At this point I can safely assume that the department member has created an account with username, password and role.

With that in mind I can procced to verify the user. I will do this by first checking if the username does exist. If it doesn&#39;t then will give user a generic error; &quot;username/password doesn&#39;t exist please try again&quot;. This is done for security purposes, if an unauthorized personal knows that username does exist then they could use this information against the database. On the other hand if the user does exist, I can proceed to salt then hash the password, then compare final result to Ciphertext stored in database. Only once the process has been successfully complete, then I can start a authenticated session with the authenticated user (August &amp; Manico, 2015).

### Step 4: Start the users authenticated session

I will stop the anonymous session and start new authenticated session. The reason for starting a new session is to prevent session fixation.

_What is session fixation__. As mentioned before when user connects to server I will start anonymous session with them. Now if user logs in the and the session ID is not changed then attacker can use the session ID on his computer and our server will think that it is the logged in user because of the session ID._

I will ensure that the website doesn&#39;t support url rewriting. To enforce this I will make sure that I add code in the configuration file:

![](RackMultipart20220206-4-9mxbh4_html_be1bb8c82fa5fbd1.png)

(August &amp; Manico, 2015)

### Step 5: Do cool things

Now that the user has been successfully logged in they can view bulletin board, create posts and delete then; some high-level members can save theses posts.

With each request the users make their browsers will automatically include authenticated session cookie. And the server will validate that the cookie&#39;s session ID refers to an active session on the server (August &amp; Manico, 2015).

###

### Step 6: Potential Re-Authentication for Sensitive Operations

Some actions that the user performs will require re-authentication.

Actions such as: changing email address or password. And for some high-level member to save posts.

### Step 7: Idle Timeout

If the user is idle for 2 minutes(as this recommend by OWASPS for high value applications) then I will log them out. I will do this by invalidating a session on the server, then force to user to login again once they make another request (OWASP, 2021). This will be done to protect users session ID.

### Step 8: Absolute Timeout

Not only will I limit the time a user can be idle, but I will also limit the total length of the session. So after sometime the logged in active user will be forced to login again. This is done to ensure that in the unfortunate event that a attacker gets the victims cookie, they don&#39;t have access forever.

###

### Step 9: Logout

The website will have a permanent navigation bar. This nav bar will contain a logout button on the top right; this button will be available throughout the website. Once pressed the sever will immediately terminate session with the user.

# How I plan to protect the application against

## Username harvesting

Username harvesting occurs when attackers tries to verify if usernames exist in your database.

Error messages:

One of the ways that attackers can verify if users exist or not, is from the error messages.

Some websites use usernames as primary keys. As a result attackers will try and enter random usernames in website and websites will give them a nice error message like: &quot;I looks like this username has already been taken, please choose anther one&quot;. Now the hacker knows this username does exist.

Protection: I will give hits that are useful to real users but useless to attackers. &quot;Username or password is incorrect. Please check credentials and try again&quot;. With this error message the attacker will not know if the user does exist in database but real users can checker their information.

Tools to find flaws: Returning that same text on webpage is not enough. If the message in back end is coming from different code path then attackers can use tools such as Burp Suite to check differences (Stuttard, 2007). So to combat this I will ensure that error message is coming from the same code path.

Throttling: I can minimize then total number of valid usernames an attacker can have. I can have number of tries a user can try to choose a username in certain time frame. And have response time increase with number of tries. E.g. IP address will have maximum of 50 tries to choose username. Each time the username does exist and I ask new user to enter a new username I will delay each response and delay will increase by: times 2.

Fix logic: Some website are well protected against the above attacks. But you find some flaws such as: when signed up, users can search for other users using usernames. To protect against this I will make sure that website protects against these attacks from every webpage.

## Brute Force Attacks (you can read textbook for more information)

Brute force attacks occur when an attacker tries numerous passwords to on one user to guess the correct one.

Brute force can be dramatically slowed down:

1. Limit the overall number of passwords a user can enter in a given time frame. This could be 50 time in a day from a IP address.
2. Use other service to unlock blocked account. I could do this by setting: If user enters wrong password more then 20 times then account will be blocked. To unblock account they can use code sent to their email address.
3. Response time will progressively increase by: x2 every time a wrong password is entered. Attempt client will be identified by IP address.
4. I will suspend suspicious IP address. If IP address has many incorrect attempts within a short period of time then that IP address will be suspended. This could be 50 attempts in 10 minutes.

Final point, I will not include duplicate password because the user might think they typed it wrong (Deceze, 2013).

These parameters will ensure that brute force is minimized, while ensuring that legitimate users even ones that often forget their passwords don&#39;t get affected.

## Session Jacking

Session jacking is when an attacker exploits a valid user session with the server. This could be done to read bulletin board post or delete them.

Ways attackers can hijack a session:

1. They could simply try to guess session ID with trial and error.
2. They could read session IDs in URLs.
3. Force victim to use known session (session fixation).
4. Use an unattended computer that is logged into a session.
5. Attackers can steal cookies using cross site scripting.

How I will address each point:

1. Some websites generate session IDs by auto incrementing numbers. I will make sure that generated session IDs do not follow a specific pattern, are long in length, use combination of letters; numbers; and safe special symbols.
2. One of the ways servers configure transportation of session IDs is through URL. I will configure the web server disable URL rewriting and only transfer session IDs in cookies. If a user disables cookies, I will inform them that they are necessary for the operation of the website
3. This can occur when attacker tricks victim into clicking a link that has a valid know session ID. Since I mentioned I will use cookies to obtain session IDs this wont be a problem. Additionally I will give a user a new session ID once they login.
4. Sometimes users will login, then leave the computer unattended without logging out. Since this the bulletin website contains sensitive information will show a popup reminding user to logout when they are done or, temporally leaving the computer unattended. I will also place the logout button on the permanent banner on the top right of web page for ease of access.
5. One of the ways to execute cross site scripting is to enter script code into textbox of any field. To stop this will check each textbox with regex. This will ensure that a name field only contains letter and email field follows email format and rejects script tags(\&lt;script\&gt;\&lt;/script\&gt;).

##

## Session Fixation

Session Fixation is form of session hijacking. It occurs when an attacker tricks the user into logging into a site using a session ID that the attacker knows.

**How it occurs**

The attacker will visit a website to obtain a session ID. Then he will trick a victim into clicking it (session ID will be in URL). This could be done by simply sending a link to victim and ask them to verify if their credentials are correct. Since this is a legitimate link, most users will click on it. Once user login that specific session ID is now authenticated with user. This means that you just need the session ID to resume you authenticated session.

**How I plan to stop it**

To protect the government website, I will:

This attack is heavily depended on parties using the same session ID and sharing it publicly.

When user visits the site for the first time, I will assign them unauthenticated session ID but once they login I will give them a new session ID for authenticated session.

I will only management cookies through cookies only. And disable http rewiring in webserver. One of the advantages of supporting URL rewriting is that it will always work on any browser even if the user has disabled cookies. But this is not enough to justify because of the potential security flaws. It is practical and fair to ask user to enable cookies to operate site.

# Conclusion

With all the security measures taken in place theoretically unauthorised personal should not be able gain access to the bulletin board website. But security is a moving target, and I will need to keep up to date with any security variabilities that may arise with the methodologies or technologies implemented and rectify them expeditiously!

# References

August, D. &amp; Manico, J., 2015. _Iron-Clad Java: Building Secure Web Applications._ n/a ed. New York: McGraw-Hill Education.

Deceze, 2013. _Number of attempts to brute force an average password / non intrusive yet meaningful limits?._ [Online]
 Available at: https://stackoverflow.com/questions/2376777/number-of-attempts-to-brute-force-an-average-password-non-intrusive-yet-meanin
 [Accessed 27 April 2021].

Educative, n.d. _What is hashing?._ [Online]
 Available at: https://www.educative.io/edpresso/what-is-hashing
 [Accessed 22 April 2021].

John , L., 2020. _HTTP/3: Everything you need to know about the next-generation web protocol._ [Online]
 Available at: https://portswigger.net/daily-swig/http-3-everything-you-need-to-know-about-the-next-generation-web-protocol
 [Accessed 21 April 2021].

OWASP, 2021. _Session Management Cheat Sheet._ [Online]
 Available at: https://cheatsheetseries.owasp.org/cheatsheets/Session\_Management\_Cheat\_Sheet.html
 [Accessed 25 April 2021].

PortSwigger, n.d. _HTTP request smuggling._ [Online]
 Available at: https://portswigger.net/web-security/request-smuggling
 [Accessed 21 April 2021].

Stuttard, D., 2007. _Preventing username enumeration._ [Online]
 Available at: https://portswigger.net/blog/preventing-username-enumeration
 [Accessed 27 April 2021].
