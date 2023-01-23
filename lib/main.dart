import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'app.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    options : FirebaseOptions(
      apiKey: "AIzaSyAJ9tHjHCivg-Nv29yTHmCj8WfeIl2Rutc",
      authDomain: "black-market-a7ddd.firebaseapp.com",
      databaseURL: "https://black-market-a7ddd-default-rtdb.firebaseio.com",
      projectId: "black-market-a7ddd",
      storageBucket: "black-market-a7ddd.appspot.com",
      messagingSenderId: "216140470866",
      appId: "1:216140470866:web:51f337856a2f214b60dd8b",
      measurementId: "G-6TF8F46CCX"
    )
  );

  runApp(App());
}
