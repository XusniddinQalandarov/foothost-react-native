module.exports = {
  project: {
    android: {
      packageName: 'com.tempproject',
      sourceDir: './android/app',
      manifestPath: './android/app/src/main/AndroidManifest.xml',
      buildGradlePath: './android/app/build.gradle'
    }
  },
  dependencies: {
    'react-native-svg': {
      platforms: {
        android: {
          sourceDir: '../node_modules/react-native-svg/android',
          packageImportPath: 'import com.horcrux.svg.SvgPackage;',
          packageInstance: 'new SvgPackage()'
        }
      }
    }
  }
}; 