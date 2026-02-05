import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Nidhi Makeup Artist'),
        backgroundColor: Colors.pinkAccent,
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            // Hero Section
            Container(
              height: 300,
              width: double.infinity,
              decoration: const BoxDecoration(
                gradient: LinearGradient(
                  colors: [Colors.pinkAccent, Colors.purpleAccent],
                ),
              ),
              child: const Center(
                child: Text(
                  'Bridal • Party • Editorial Makeup',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 26,
                    fontWeight: FontWeight.bold,
                  ),
                  textAlign: TextAlign.center,
                ),
              ),
            ),

            const SizedBox(height: 40),

            // About Section
            const Padding(
              padding: EdgeInsets.all(16.0),
              child: Text(
                'About Me\n\n'
                'I am Nidhi, a professional makeup artist specializing in bridal, party, and event makeup. '
                'My goal is to enhance natural beauty with elegant and long-lasting looks.',
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 16),
              ),
            ),

            const SizedBox(height: 30),

            // Contact Button
            ElevatedButton(
              onPressed: () {},
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.pinkAccent,
                padding:
                    const EdgeInsets.symmetric(horizontal: 30, vertical: 15),
              ),
              child: const Text(
                'Book Appointment',
                style: TextStyle(fontSize: 16),
              ),
            ),

            const SizedBox(height: 50),
          ],
        ),
      ),
    );
  }
}
