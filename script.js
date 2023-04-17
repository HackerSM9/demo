import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Hackersm9 App',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Hackersm9 App'),
        ),
        body: Center(
          child: Text(
            'Hackersm9 here',
            style: TextStyle(fontSize: 24),
          ),
        ),
      ),
    );
  }
}