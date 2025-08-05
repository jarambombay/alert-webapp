const API_BASE = "https://alert-backend-3xyz.onrender.com";

window.onload = () => {
  if (window.location.pathname.includes("alerts.html")) {
    fetch(`${API_BASE}/alerts`) // ✅ FIXED
      .then((res) => res.json())
      .then((data) => {
        const container = document.getElementById("alerts");
        container.innerHTML = data.map(a => `<p><strong>${a.region}</strong>: ${a.message}</p>`).join("");
      });
  }

  const alertForm = document.getElementById("alertForm");
  if (alertForm) {
    alertForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const region = document.getElementById("region").value;
      const message = document.getElementById("message").value;

      await fetch(`${API_BASE}/alerts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ region, message })
      });

      alert("Alert submitted!");
      window.location.reload();
    });
  }
};
