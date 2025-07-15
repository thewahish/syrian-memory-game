# لعبة الذاكرة السورية - Syrian Memory Game

A beautiful, educational memory card game dedicated to the Syrian Revolution, featuring Syrian themes, revolutionary music, and educational facts about the Syrian people's struggle for freedom.

## 🎮 Live Demo

Visit the live game: [https://thewahish.github.io/syrian-memory-game](https://thewahish.github.io/syrian-memory-game)

## 🌟 Features

### Game Features
- **Memory Card Matching**: Classic memory game with Syrian-themed symbols
- **Multiple Difficulty Levels**: 
  - Easy (4x4 grid - 16 cards)
  - Medium (6x4 grid - 24 cards) 
  - Hard (8x6 grid - 48 cards)
- **Educational Content**: Learn facts about the Syrian Revolution with each match
- **Score Tracking**: Local storage of best scores and completion times
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **RTL Support**: Full Arabic language support

### Music Player
- **Background Music**: Curated playlist of Syrian revolutionary songs
- **Full Media Controls**: Play, pause, stop, next, previous
- **Volume Control**: Adjustable volume with mute options
- **Separate Audio Controls**: Independent mute for music and sound effects
- **Seek Functionality**: Navigate through songs with time display

### Technical Features
- **Offline Ready**: Can be played without internet connection once loaded
- **Progressive Enhancement**: Graceful fallback for missing audio files
- **Landscape Optimization**: Best experience in landscape mode
- **Local Storage**: Saves game progress and preferences

## 🚀 Getting Started

### For Players
Simply visit the live demo link above and start playing!

### For Developers

#### Prerequisites
- Basic web server (for local development)
- Modern web browser with ES6 support

#### Installation
1. Clone the repository:
```bash
git clone https://github.com/your-username/syrian-memory-game.git
cd syrian-memory-game
```

2. Set up a local web server (required for audio files):
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have it)
npx serve .

# Using PHP
php -S localhost:8000
```

3. Open your browser and navigate to `http://localhost:8000`

## 📁 Project Structure

```
syrian-memory-game/
├── index.html              # Main game file
├── README.md               # This file
├── css/
│   └── style.css          # Game styles
├── js/
│   └── script.js          # Game logic
├
