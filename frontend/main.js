// Fetch alerts from backend
window.onload = () => {
  if (window.location.pathname.includes("alerts.html")) {
    fetch("http://localhost:8000/alerts")
      .then((res) => res.json())
      .then((data) => {
        const container = document.getElementById("alerts");
        container.innerHTML = data.map(a => \`<p><strong>\${a.region}</strong>: \${a.message}</p>\`).join("");
      });
  }

  const alertForm = document.getElementById("alertForm");
  if (alertForm) {
    alertForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const region = document.getElementById("region").value;
      const message = document.getElementById("message").value;

      await fetch("http://localhost:8000/alerts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ region, message })
      });

      alert("Alert sent!");
    });
  }
};