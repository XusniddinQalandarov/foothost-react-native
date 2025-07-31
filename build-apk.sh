#!/bin/bash

echo "🚀 Building APK for Football App..."

# Check if Java is installed
if ! command -v java &> /dev/null; then
    echo "❌ Java not found. Please install Java 17 or later."
    exit 1
fi

# Check if Android SDK is installed
if [ -z "$ANDROID_HOME" ]; then
    echo "⚠️  ANDROID_HOME not set. You need Android SDK installed."
    echo "📱 For quick testing, use Expo's cloud build:"
    echo "   1. Go to https://expo.dev"
    echo "   2. Create an account"
    echo "   3. Run: eas build --platform android"
    echo ""
    echo "🔧 For local build, install Android Studio and set ANDROID_HOME"
    exit 1
fi

echo "✅ Java found: $(java -version 2>&1 | head -n 1)"
echo "✅ Android SDK found at: $ANDROID_HOME"

# Build the APK
echo "📦 Building APK..."
npx expo run:android --variant release

echo "✅ Build complete! Check the android/app/build/outputs/apk/release/ directory" 