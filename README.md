# AD&D 2E Character Sheet Organizer

A professional, interactive, and highly dynamic character sheet editor for Advanced Dungeons & Dragons 2nd Edition. Built with React, Next.js, and TypeScript, this application provides a modern digital companion for old-school tabletop gaming.

## 🚀 Key Features

- **Dynamic Inventory Management**: Add, edit, and remove gear. Includes an expandable details section for magic item descriptions and item-specific notes.
- **Advanced Spellbook**: Manage known spells with a dedicated section for Wizards and Priests. Features quick-view combat stats (Damage, Range, Save) and expandable full descriptions.
- **Interactive Experience Tracking**: Manage multi-classing seamlessly. Update levels and experience in a dedicated section that syncs with your character's basic info.
- **Integrated Navigation**: "Smooth Scroll" links between sections. Click on your level at the top to jump directly to your experience breakdown.
- **Role-Based UI**: The interface dynamically adjusts based on your character's class (e.g., Rogue abilities and Turn Undead tables only appear when relevant).
- **Auto-Save & Export**: Your progress is automatically saved to browser local storage. Export your character to a `.json` file to move between devices or share with your DM.

## 🛠️ Technical Highlights

- **Hierarchical Data Structure**: Organized character data into logical modules (`identity`, `vitals`, `stats`, `magic`, etc.) for scalability.
- **Universal Path-Based Updates**: Uses a custom state management pattern that allows updating deeply nested values using dot-notation string paths (e.g., `handleUpdate('inventory.magic.0.qty', 5)`).
- **Full TypeScript Integration**: Complete type safety for the character data structure ensures a bug-free experience and full IDE autocompletion.
- **Tailwind CSS Styling**: A responsive, clean design that works in both Light and Dark modes.

## 📋 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, pnpm, or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/stslaug/ADnD2ECharacters.git
   cd ADnD2ECharacters
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000/ADND-Sheet](http://localhost:3000/ADND-Sheet) in your browser.

## 📂 Project Structure

- `src/app/page.tsx`: Main application logic and state management.
- `src/components/ui/pageSections/`: Modular components for each section of the sheet (Combat, Spells, Inventory, etc.).
- `src/types/character.ts`: Centralized TypeScript interfaces defining the character schema.
- `public/`: Assets including SVG icons for duplication and sheet imagery.

## 📜 License

This project is open-source and intended for personal use in tabletop gaming.
