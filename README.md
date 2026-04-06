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