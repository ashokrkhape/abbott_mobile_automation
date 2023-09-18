# Automation framework for android emaulators/devices using Appium and WebdriverIO

## System Requirements
1. JDK 8 and above
2. Android Studio 
3. Node.js
4. Appium Server (install using `npm install -g appium`)
5. Appium Inspector (Optional. Not needed if only executing testcases)

## Steps to run tests
1. Make sure `JAVA_HOME` and `ANDROID_HOME` environment variables are set 
2. Add android's SDK path to systems's `PATH` variable
3. Start android emulator using Android Virtual Device Manager
4. Replace below attributes of the `capabilities` object in `wdio.conf.js` with your emulator's properties
    * appium:deviceName
    * appium:platformVersion
5. Place the app to be tested in `./app` directory
6. Run `npm install` for installing packages
7. Run `npm run test` for running testcases
8. Run `npm run reports` for viewing reports
    

