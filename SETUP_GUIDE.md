# 🚀 GitHub Setup Guide for Syrian Memory Game

Follow these steps to get your game hosted on GitHub Pages:

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click "New repository" (green button)
3. Repository name: `syrian-memory-game`
4. Make it **Public**
5. ✅ Check "Add a README file"
6. Click "Create repository"

## Step 2: Upload Files to GitHub

### Method A: Using GitHub Web Interface (Easier)

1. In your new repository, click "uploading an existing file"
2. Create the folder structure by uploading files to these paths:

**Upload these files in order:**

1. **Root files:**
   - Upload `index.html` (the one I provided)
   - Upload `README.md` (the one I provided)

2. **Create CSS folder:**
   - Click "Create new file"
   - Type: `css/style.css`
   - Paste the CSS content I provided
   - Commit

3. **Create JS folder:**
   - Click "Create new file" 
   - Type: `js/script.js`
   - Paste the JavaScript content I provided
   - Commit

4. **Create assets folders:**
   ```
   assets/audio/music/.gitkeep
   assets/audio/sfx/.gitkeep
   assets/images/.gitkeep
   ```
   (The `.gitkeep` files ensure empty folders are tracked)

### Method B: Using Git Commands (Advanced)

```bash
git clone https://github.com/YOUR-USERNAME/syrian-memory-game.git
cd syrian-memory-game

# Create folder structure
mkdir -p css js assets/audio/music assets/audio/sfx assets/images

# Add the files (copy the content I provided)
# Save index.html in root
# Save style.css in css/
# Save script.js in js/

# Create placeholder files for empty folders
touch assets/audio/music/.gitkeep
touch assets/audio/sfx/.gitkeep
touch assets/images/.gitkeep

# Commit and push
git add .
git commit -m "Initial game setup"
git push origin main
```

## Step 3: Enable GitHub Pages

1. In your repository, go to **Settings** tab
2. Scroll down to **Pages** section (left sidebar)
3. Under "Source", select **Deploy from a branch**
4. Choose **main** branch
5. Choose **/ (root)** folder
6. Click **Save**

**Your game will be live at:**
`https://YOUR-USERNAME.github.io/syrian-memory-game/`

*(GitHub Pages may take 5-10 minutes to deploy)*

## Step 4: Add Audio Files

### For Music:
1. In your repo, navigate to `assets/audio/music/`
2. Click "Add file" → "Upload files"
3. Upload your `.mp3` music files
4. Edit `js/script.js` and update this array:
   ```javascript
   const uniqueAudioFilenames = [
       'your-actual-song-1.mp3',
       'your-actual-song-2.mp3',
       'syrian-anthem.mp3',
       // etc...
   ];
   ```

### For Sound Effects:
1. Navigate to `assets/audio/sfx/`
2. Upload these files (create simple sounds or find royalty-free ones):
   - `flip.mp3` - Card flip sound
   - `match.mp3` - Success sound
   - `no-match.mp3` - Error sound  
   - `win.mp3` - Victory sound
   - `lose.mp3` - Game over sound

## Step 5: Test Your Game

1. Visit `https://YOUR-USERNAME.github.io/syrian-memory-game/`
2. Test all features:
   - Card flipping and matching
   - Timer and scoring
   - Difficulty selection
   - Music player controls
   - Sound effects
   - Mobile responsiveness

## Step 6: Customize (Optional)

### Change Colors:
Edit `css/style.css` and modify the CSS variables:
```css
:root {
    --color-forest: #YOUR-COLOR;
    --color-golden-wheat: #YOUR-COLOR;
    /* etc... */
}
```

### Add More Facts:
Edit `js/script.js` and add to the `syrianRevolutionFacts` array.

### Change Card Symbols:
Edit the `cardValues` arrays in `GRID_CONFIGS` in `js/script.js`.

## Troubleshooting

### Game doesn't load:
- Check browser console for errors (F12)
- Ensure all file paths are correct
- Verify GitHub Pages is enabled

### Audio doesn't play:
- Check if audio files exist in correct folders
- Verify filenames match the array in `script.js`
- Some browsers block autoplay - user must interact first

### Styles look wrong:
- Clear browser cache (Ctrl+F5)
- Check if `css/style.css` was uploaded correctly

### Mobile issues:
- Ensure viewport meta tag is in `index.html`
- Test in landscape orientation

## Need Help?

1. **GitHub Pages Status**: Check repository Settings → Pages for deployment status
2. **Browser Console**: Press F12 to see error messages
3. **File Paths**: Ensure all files are in correct folders as shown in README
4. **Case Sensitivity**: GitHub is case-sensitive with filenames

## Quick File Checklist

After setup, your repository should look like this:

```
✅ index.html
✅ README.md
✅ css/style.css
✅ js/script.js
✅ assets/audio/music/ (with your .mp3 files)
✅ assets/audio/sfx/ (with sound effect files)
✅ assets/images/ (for future use)
```

**Once everything is uploaded and GitHub Pages is enabled, your game will be live!** 🎉
