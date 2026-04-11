const adminAuth = (req, res, next) => {
    console.log("Admin auth middleware");
    const token = "admin-token";
    const isadminauthourized = token === "admin-token";
    if (isadminauthourized) {
        next();
    } else {
        res.status(401).json({ message: "admin - Unauthorized" });
    }
};

const UserAuth = (req, res, next) => {
    console.log("User auth middleware");
    const token = "user-token";
    const isuserauthourized = token === "user-token";
    if (isuserauthourized) {
        next();
    } else {
        res.status(401).json({ message: "user - Unauthorized" });
    }
}

module.exports = { adminAuth, UserAuth };