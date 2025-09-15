const btn = document.getElementById("show-chart");
const chartContainer = document.getElementById("chart-container");

btn.addEventListener("click", () => {
  chrome.storage.local.get("ibov_shares", (data) => {
    if (!data.ibov_shares) {
      chartContainer.textContent = "No Ibovespa data found.";
      return;
    }

    // Minimal version: show a list of tickers and percentages
    chartContainer.innerHTML =
      "<ul>" +
      data.ibov_shares
        .map(
          (item) => `<li>${item.codigo}: ${item.partPct.toFixed(2)}%</li>`
        )
        .join("") +
      "</ul>";
  });
});
