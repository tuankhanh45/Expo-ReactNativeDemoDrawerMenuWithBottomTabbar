Create react native cli project Step by step

Set up nodejs + jdk + android studio (create android emulator) 
https://nodejs.org/en/  - LTS version
https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html  -  choose compare your device
https://developer.android.com/studio/?gclid=Cj0KCQiAiNnuBRD3ARIsAM8KmltcMgRFTUY-bW9maONt8T_Ebl47dvpB_cIBNVf9iFxBipSJrub5HmQaAgFfEALw_wcB 

Set Path Android and JAVA

Open CMD : npm i -g react-native-cli 
Open folder project run: react-native init Project
Open emulator
Open project with VS Code run : npm run android 

Note: if ERROR: SDK location not found 
 
Go to your Project -> Android
Create a file local.properties
Open the file
paste your Android SDK path like below :
sdk.dir = C:/Users/USERNAME/AppData/Local/Android/sdk
Debug react-native-cli
install Extensions react native tools in VS Code
setup configurations in launch.json
run: react-native start 
choose Debug Android  in debug box click icon Run or F5
add breakpoint and  debugging

Run ADV
cd C:\Users\Khanh\AppData\Local\Android\Sdk\emulator>
emulator -list-avds
emulator -avd  a9-5.96-

Fix err expo start

var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];


Fix expo init app
npm remove react-native 
add package.json  "react-native":""^0.59.8"
change app.json   "sdkVersion": "36.0.0" to "sdkVersion": "35.0.0" 


