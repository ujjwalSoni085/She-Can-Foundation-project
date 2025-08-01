// Get selected user ID from localStorage
const userId = localStorage.getItem("selectedUserId");

// Fetch user data from backend
fetch(`http://localhost:5000/api/users/${userId}`)
  .then(res => {
    if (!res.ok) throw new Error("User not found");
    return res.json();
  })
  .then(data => {
    // Populate dashboard with user data
    document.getElementById('name').textContent = data.name;
    document.getElementById('referralCode').textContent = data.referralCode;
    document.getElementById('donations').textContent = data.donations;
  })
  .catch(err => {
    alert("User not found or backend not running.");
    console.error("Fetch error:", err);
  });
