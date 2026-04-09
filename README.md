# DevTinder-BE
This is the project where every developer can connect and talk
--------------------------------------------------------------------------------

# GIT
Created GIT account for the DevTinder - BE

-----------------------------------------------------------------------------------

# What are dependencies?
👉 Dependencies are packages your project needs to run.

Example:

"dependencies": {
  "express": "^4.18.2"
}

✔ Used in production
✔ Required for app functionality

Types:
dependencies → required for app (e.g., express)
devDependencies → only for development (e.g., nodemon)

------------------------------------------------------------------------------------

# What is the use of -g in npm install?

npm install nodemon -g

👉 -g = global install

Meaning:
Installed on your system (not inside project)
Can run anywhere from terminal

✔ Example:

nodemon app.js

| Install Type | Command                  | Scope             |
| ------------ | ------------------------ | ----------------- |
| Local        | `npm install nodemon`    | Only this project |
| Global       | `npm install -g nodemon` | Entire system     |

--------------------------------------------------------------------------------------

# Difference between caret (^) and tilde (~)

These are used for version control in package.json.

👉 Caret (^)
"express": "^4.18.2"

✔ Allows:

Minor updates
Patch updates

👉 Installs:

4.x.x (latest minor & patch)
👉 Tilde (~)
"express": "~4.18.2"

✔ Allows:

Only patch updates

👉 Installs:

4.18.x only
🔥 Simple Difference
Symbol	Allows updates	Example
^	Minor + Patch	4.18.2 → 4.19.0
~	Only Patch	4.18.2 → 4.18.9

----------------------------------------------------------------------------------------

# Give me the knowledge of order of routes how to write in node.js

In Node.js (especially with Express.js), the order of routes matters a lot because Express reads routes top → down (first match wins).

🔥 1. How Routing Works (Core Idea)

When a request comes:

Express checks routes in the order you wrote them
The first matching route is executed
After a match → it stops checking further routes
--------------------------------------------------------
⚠️ 2. Why Order is Important
❌ Wrong Order Example
app.get('/user/:id', (req, res) => {
  res.send("User ID route");
});

app.get('/user/profile', (req, res) => {
  res.send("User profile");
});

👉 Problem:

/user/profile will NEVER run
Because /user/:id catches "profile" as id
✅ Correct Order
app.get('/user/profile', (req, res) => {
  res.send("User profile");
});

app.get('/user/:id', (req, res) => {
  res.send("User ID route");
});

👉 Specific route comes FIRST
---------------------------------------------------------

🧠 3. Rule to Remember

👉 Always write routes in this order:

1. Static routes (exact paths)
/app/about
/app/contact
2. Dynamic routes (params)
/app/:id
/app/:username
3. Wildcard / catch-all routes
app.get('*', (req, res) => {
  res.send("404 Not Found");
});

---------------------------------------------------------

🧱 4. Middleware Order Also Matters
app.use((req, res, next) => {
  console.log("Middleware 1");
  next();
});

app.get('/', (req, res) => {
  res.send("Home");
});

👉 Middleware runs before route
👉 If you don’t call next(), request stops there

------------------------------------------------------------

⚡ 5. Real-World Example (Best Practice)
// 1. Middleware
app.use(express.json());

// 2. Static routes
app.get('/login', (req, res) => {
  res.send("Login Page");
});

// 3. Dynamic routes
app.get('/user/:id', (req, res) => {
  res.send(`User ${req.params.id}`);
});

// 4. 404 route (always last)
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

-----------------------------------------------------

🚨 6. Common Mistakes

❌ Putting /:id before /login
❌ Writing * route at top
❌ Forgetting next() in middleware
❌ Defining duplicate routes

-----------------------------------------------------

🧩 7. Easy Way to Remember

👉 Think like a filter:

Specific → General → Catch-all
🎯 Summary
Express checks routes top to bottom
First match wins

Always write:

Static → Dynamic → Wildcard
Middleware order also matters

-----------------------------------------------------
# About middlewares in expressjs

Middleware in Express.js is one of the most important concepts. It acts like a middle layer between the request and the response.

# What is Middleware?

A middleware is a function that:

Has access to request (req), response (res), and next()
Executes before the final route handler
Can modify request/response or stop the request

👉 Think of it like a pipeline:

Request → Middleware → Middleware → Route → Response

# Basic Syntax
app.use((req, res, next) => {
    console.log("Middleware executed");
    next(); // pass control to next middleware
});

------------------------------------------------

# 🔹 Types of Middleware
1. Application-level Middleware

Runs for all routes or specific routes.

app.use((req, res, next) => {
    console.log("Runs for every request");
    next();
});

-------------------------------------------------

# 👉 For specific route:

app.get('/user', (req, res, next) => {
    console.log("User route middleware");
    next();
}, (req, res) => {
    res.send("User Page");
});

---------------------------------------------

# 2. Router-level Middleware

Used with Express Router.

const router = express.Router();

router.use((req, res, next) => {
    console.log("Router middleware");
    next();
});

---------------------------------------------
# 3. Built-in Middleware

Provided by Express.

express.json() → parse JSON data
express.urlencoded() → parse form data
express.static() → serve static files
app.use(express.json());
---------------------------------------------

# 4. Third-party Middleware

Installed via npm.

Examples:

morgan → logging
cors → handle CORS
body-parser → parse request body
const morgan = require('morgan');
app.use(morgan('dev'));

------------------------------------------
# 5. Error-handling Middleware

Special middleware with 4 parameters

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});
----------------------------------------

# 🔹 next() Function
Passes control to next middleware
If not called → request will hang
app.use((req, res, next) => {
    console.log("Step 1");
    next();
});
---------------------------------------

# 🔹 Example Flow
app.use((req, res, next) => {
    console.log("Middleware 1");
    next();
});

app.use((req, res, next) => {
    console.log("Middleware 2");
    next();
});

app.get('/', (req, res) => {
    res.send("Hello World");
});

👉 Output:

Middleware 1
Middleware 2
Hello World

-----------------------------------------------
🔹 Why Middleware is Important
Authentication (check login)
Logging requests
Validation
Error handling
Parsing request data

------------------------------------------------
🔹 Real-world Example (Auth Middleware)
const auth = (req, res, next) => {
    if (req.headers.authorization) {
        next();
    } else {
        res.status(401).send("Unauthorized");
    }
};

app.get('/dashboard', auth, (req, res) => {
    res.send("Welcome to dashboard");
});

----------------------------------------------------
🔥 Simple Way to Remember

👉 Middleware = "function that runs before your route and controls the flow"

----------------------------------------------------------------------------------------

# Difference between app.use and app.all

🔹 Core Difference

| Feature        | `app.use()`      | `app.all()`          |
| -------------- | ---------------- | -------------------- |
| Purpose        | Middleware       | Route handler        |
| HTTP Methods   | ALL (implicitly) | ALL (explicitly)     |
| Path Matching  | Prefix match     | Exact match          |
| `next()` usage | Required usually | Optional             |
| Use Case       | Global logic     | Route-specific logic |

🔹 1. app.use() (Middleware)

👉 Used to apply middleware to all routes or path prefixes

Example:
app.use('/user', (req, res, next) => {
    console.log("Middleware for /user");
    next();
});
Works for:
/user
/user/profile
/user/settings

👉 It matches everything that starts with /user

------------------------------------------------------------------------

🔹 2. app.all() (Route Handler)

👉 Used to handle all HTTP methods for a specific route

Example:
app.all('/user', (req, res) => {
    res.send("Handles all methods");
});
Works for:
GET /user
POST /user
PUT /user
DELETE /user

❌ Does NOT work for:

/user/profile

👉 It matches only the exact route

🔹 Key Difference (Simple Way)

👉 app.use() = “Run this for everything starting with this path”
👉 app.all() = “Handle all HTTP methods for this exact route”

-------------------------------------------------------------------------

🔹 Practical Example
app.use('/user', (req, res, next) => {
    console.log("Middleware hit");
    next();
});

app.all('/user', (req, res) => {
    res.send("User route");
});
Request:
GET /user/profile

👉 Output:

app.use() → runs ✅
app.all() → does NOT run ❌

-----------------------------------------------------------------------

🔹 When to Use What?
✅ Use app.use() for:
Authentication
Logging
Parsing request body
Global middleware
✅ Use app.all() for:
Handling all HTTP methods of a route
Catch-all route logic
Route-specific guards

-------------------------------------------

🔹 Bonus Tip (Important ⚠️)

You can combine them:

app.all('/admin', (req, res, next) => {
    console.log("Admin check");
    next();
});

app.get('/admin', (req, res) => {
    res.send("Admin page");
});

👉 app.all() runs first, then app.get()

🔹 Final Summary
app.use() → middleware, prefix matching
app.all() → route handler, exact matching
app.use() is more flexible and commonly used
app.all() is useful for handling all methods of one route

-----------------------------------------------------------------------------