import express from "express";

const router = express.Router();

// Dashboard
router.get("/", (req, res) => {
  res.render("admin/dashboard", { title: "Admin Dashboard" });
});

// Users Page
router.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "Alice", email: "alice@example.com", role: "Admin" },
    { id: 2, name: "Bob", email: "bob@example.com", role: "Editor" },
    { id: 3, name: "Charlie", email: "charlie@example.com", role: "Viewer" },
  ];
  res.render("admin/users", { title: "Users", users });
});

export default router;
