# FUTMINNA 100L Pass: Native Mobile App (Expo / React Native)

This is the native cross-platform mobile app for 100-Level undergraduate students at the **Federal University of Technology, Minna (FUTMINNA)**.

---

## Features
- **100% Offline-First:** Bundled with all 540 questions, answers, and 23 flashcards. Zero data required after download.
- **FUTMINNA CBT Simulator:** 50 randomized questions, 45-minute countdown, instant scoring and solutions review.
- **Topic Drills with CBT Speed Hacks:** Instant answers and 20-second shortcut explanations.
- **Mistake Vault:** Automatically captures every missed question so students can focus on weak spots.
- **Multi-Course Ready:** Pre-configured architecture for all 10 core 100L courses (MAT 101, PHY 101, CHM 101, GST 101, GST 103, CSC 101, BIO 101, MAT 102, PHY 102, CHM 102).

---

## How to Run on Mobile (Android / iOS)

### Step 1: Install Dependencies
Open terminal in `c:\Research\Fadil\mobile-app`:
```bash
cd mobile-app
npm install
```

### Step 2: Start Expo Development Server
```bash
npx expo start
```

### Step 3: Preview on Your Phone
1. Install **Expo Go** from Google Play Store (Android) or App Store (iOS).
2. Scan the QR code displayed in your terminal with your phone camera or the Expo Go app.
3. The app will open directly on your mobile device!

---

## How to Build Standalone Android APK (.apk)
To share an installable APK file with students across campus via WhatsApp or Telegram without needing the app store:

```bash
# 1. Install EAS CLI globally if not already installed
npm install -g eas-cli

# 2. Login to your free Expo account
eas login

# 3. Configure EAS Build
eas build:configure

# 4. Build preview APK (instantly installable on Android)
eas build -p android --profile preview
```
Expo will generate a direct download link for the `.apk` file that students can install on any Android phone!
