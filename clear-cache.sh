#!/bin/bash

# Clear Metro cache
echo "Clearing Metro cache..."
rm -rf node_modules/.cache
rm -rf $TMPDIR/metro-*
rm -rf $TMPDIR/react-*
rm -rf $TMPDIR/haste-*
rm -rf $TMPDIR/babel-*

# Clear Babel cache
echo "Clearing Babel cache..."
rm -rf ./node_modules/.cache/babel-loader
rm -rf $HOME/.babel.json

# Clear Expo cache
echo "Clearing Expo cache..."
rm -rf .expo
rm -rf ~/.expo

# Restart packager
echo "Done! Now restart your packager with 'npx expo start --clear'"
