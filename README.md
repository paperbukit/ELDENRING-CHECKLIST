# Elden Ring Checklist

Welcome to the **Elden Ring Checklist**! This web app is designed to help you track your progress in the vast and intricate world of Elden Ring. Whether you're completing quests, collecting items, or defeating bosses, this tracker ensures you never miss a step.

## Features

- **Quest Tracker**: View and manage quests grouped by NPCs. Mark quests as completed and track your progress.
- **Item Tracker**: Keep track of collectible items and their locations.
- **Boss Tracker**: Monitor your progress in defeating bosses across the Lands Between.
- **Search and Filter**: Easily search for quests, NPCs, or locations. Filter quests by NPCs for focused tracking.
- **Progress Visualization**: See your completion percentage with dynamic progress bars.
- **LocalStorage Integration**: Your progress is saved locally, so you can pick up where you left off.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ELDENRING-CHECKLIST.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ELDENRING-CHECKLIST
   ```
3. Start a local server to serve the files. You can use Node.js's `http-server`:
   ```bash
   npx http-server
   ```
   Alternatively, use Python's built-in HTTP server:
   ```bash
   python -m http.server
   ```
4. Open your browser and navigate to:
   ```
   http://localhost:8080/index.html
   ```

## Usage

- Navigate between the **Quests**, **Items**, and **Bosses** pages using the top navigation bar.
- On the **Quests** page:
  - Use the search bar to find specific quests or NPCs.
  - Use the dropdown filter to view quests by NPC.
  - Mark quests as completed by checking the boxes next to them.
- Your progress is automatically saved in your browser's localStorage.

## File Structure

- `index.html`: The main dashboard.
- `quests.html`: The quest tracker page.
- `items.html`: The item tracker page.
- `bosses.html`: The boss tracker page.
- `quests_cleaned.json`: Contains cleaned quest data.
- `items_clean.json`: Contains cleaned item data.
- `bosses.json`: Contains boss data.
- `script.js`: Contains shared JavaScript logic.
- `style.css`: Contains styles for the app.


## Credits

- **Elden Ring Wiki**: Quest, item, and boss data sourced from [Fextralife](https://eldenring.wiki.fextralife.com/).
- **paperbukit**: Original creator of the tracker.
- **Elden Ring Progression Checklist Mod**: Excel-based checklist mod by [Koal05](https://www.nexusmods.com/eldenring/mods/542) for tracking items, bosses, and more.
---

Enjoy your journey through the Lands Between!