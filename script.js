const baseURL = './';

async function loadChecklist(jsonPath, containerId, barId, fieldsToShow = []) {
  try {
    console.log("Fetching:", baseURL + jsonPath);
    const res = await fetch(baseURL + jsonPath);
    console.log("Response:", res);
    const data = await res.json();
    const container = document.getElementById(containerId);

    let completedCount = 0;
    const total = data.length;

    container.innerHTML = "";

    data.forEach((entry, index) => {
      const id = `${containerId}-check-${index}`;
      const label = document.createElement("label");
      label.classList.add("check-item");

      const name = entry.name || entry.description || entry.npc || entry.title || "Unnamed";

      label.innerHTML = `
        <input type="checkbox" id="${id}" ${entry.completed ? "checked" : ""}>
        <strong>${name}</strong><br>
        ${fieldsToShow.map(f => entry[f] ? `<small>${f}: ${entry[f]}</small>` : "").join(" | ")}
      `;

      container.appendChild(label);
      if (entry.completed) completedCount++;
    });

    if (barId) {
      const progressBar = document.getElementById(barId);
      const progressText = document.getElementById(barId.replace("Bar", "Progress"));
      const percent = Math.round((completedCount / total) * 100);
      progressBar.style.width = percent + "%";
      progressText.innerText = percent + "%";
    }

  } catch (err) {
    document.getElementById(containerId).innerText = "Failed to load checklist.";
    console.error("Checklist load error:", err);
  }
}

const quests = JSON.parse(localStorage.getItem('quests') || '[]');
if (!Array.isArray(quests)) {
  console.error("Invalid quests data:", quests);
  return;
}

loadChecklist('quests_cleaned.json', 'questsContainer', 'questsBar', ['npc', 'location']);
