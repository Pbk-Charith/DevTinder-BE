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