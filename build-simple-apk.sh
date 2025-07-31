#!/bin/bash

echo "🚀 Building simple APK for Football App..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
cd android
./gradlew clean

# Build debug APK
echo "📦 Building debug APK..."
./gradlew assembleDebug

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📱 APK location: android/app/build/outputs/apk/debug/app-debug.apk"
    echo "📏 APK size: $(ls -lh android/app/build/outputs/apk/debug/app-debug.apk | awk '{print $5}')"
else
    echo "❌ Build failed!"
    exit 1
fi 