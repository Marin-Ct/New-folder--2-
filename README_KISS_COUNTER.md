# Kiss Counter Feature - README 💋

## What's New? 🎉

I've added an interactive **Kiss Counter** to your Valentine's Day project! Here's how it works:

### Flow:
1. **Envelope** → Click to open
2. **Will you be my Valentine?** → YES/NO buttons
3. **Te iubesc message** → Love message screen
4. **Photo Gallery** → Your memories
5. **🆕 PUP! Button** → Bright red button at the bottom of gallery
6. **🆕 Kiss Counter Screen** → Interactive kissing game!

---

## Kiss Counter Features:

### How It Works:
- **Click the "PUP! 💋" button** in the photo gallery to enter the kiss counter
- **Click on your couple photo** to give kisses
- Every click:
  - ✅ Changes from `megf0.png` (standing) to `megf1.png` (kissing)
  - ✅ Shows kiss animation
  - ✅ Counter increases: **Pupicii: 1, 2, 3...**
  - ✅ **15 colorful hearts float up** from bottom to top
  - ✅ Photo returns to standing position after 0.8 seconds

### Special Features:
- 🎊 **At 100 kisses**: 
  - Counter automatically resets to 0
  - Celebration message appears: "100 de pupici! 🎉💕"
  
- 💕 **Heart Animation**:
  - Multiple hearts (❤, 💕, 💖, 💗, 💓, 💝) float up
  - Random sizes, speeds, and positions
  - Beautiful smooth animation

---

## Files You Need:

Make sure you have these images in your project folder:

### Required Images:
- ✅ `megf0.png` - You and your girlfriend standing straight
- ✅ `megf1.png` - You and your girlfriend kissing
- ✅ All other existing images (envelope.png, window.png, etc.)

### File Structure:
```
your-project-folder/
├── index.html
├── script.js
├── style.css
├── megf0.png          ← Standing photo
├── megf1.png          ← Kissing photo
├── envelope.png
├── window.png
├── yes.png
├── no.png
├── heart-bg.jpg
├── cat_heart.gif
├── cat_heart1.png
├── cat_heart2.jpg
└── ... (all other cat images)
```

---

## Customization Tips:

### Change Kiss Reset Number:
In `script.js`, line with `if (kissCount >= 100)`:
```javascript
if (kissCount >= 100) {  // Change 100 to any number
```

### Change Number of Hearts:
In `script.js`, function `createKissHearts()`:
```javascript
const numberOfHearts = 15;  // Change to more or less hearts
```

### Change Colors:
In `style.css`, search for `#ff1744` and `#ff4081` to customize button/counter colors

### Change Text:
- Counter text: Search for `Pupicii:` in `script.js`
- Instruction text: In `index.html`, search for "Click pe noi pentru pupici!"

---

## Testing:

1. Open `index.html` in your browser
2. Click through: Envelope → YES → Continue → Gallery
3. Click the **PUP! 💋** button at the bottom
4. Click on your photo to test kisses
5. Watch the counter increase and hearts float up!

---

## Troubleshooting:

### Image Not Showing:
- Make sure `megf0.png` and `megf1.png` are in the same folder as `index.html`
- Check that filenames are **exactly** `megf0.png` and `megf1.png` (case-sensitive)

### Hearts Not Appearing:
- Open browser console (F12) to check for errors
- Make sure JavaScript is enabled

### Button Not Working:
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Check browser console for errors

---

## Romanian Text Elements:

- **"Te iubesc, scumpetea mea"** - I love you, my darling
- **"Pupicii:"** - Kisses:
- **"Click pe noi pentru pupici!"** - Click on us for kisses!
- **"100 de pupici!"** - 100 kisses!

---

Enjoy your romantic Valentine's project! 💕🎊

Made with ❤️ for your special someone
