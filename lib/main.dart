import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'app.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    options : FirebaseOptions(
      apiKey: "AIzaSyAT0VOEE4NJp9s1pSKDBDTK7ijJm4yJSQY",
      authDomain: "aaaa-6af4b.firebaseapp.com",
      databaseURL: "https://aaaa-6af4b.firebaseio.com",
      projectId: "aaaa-6af4b",
      storageBucket: "aaaa-6af4b.appspot.com",
      messagingSenderId: "152354258062",
      appId: "1:152354258062:web:1faad711201fb613801ddf",
      measurementId: "G-7M13JWQTR9"
    )
  );

  runApp(App());
}
