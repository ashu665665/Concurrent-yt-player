# Concurrent YT Player

The YouTube Player Application allows users to watch YouTube videos together in real-time. Users can create unique sessions and share codes with others to join the same video session. The application uses Node.js, Express.js, and Socket.IO for real-time communication.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Getting Started

### Prerequisites

Make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/youtube-player-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Concurrent-yt-player
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Running the Application

To start the application, run the following command:

```bash
npm start
```

The application will be accessible at [http://localhost:3000](http://localhost:3000).

## Usage

1. Open a web browser and go to [http://localhost:3000](http://localhost:3000).
2. Enter a YouTube video link to start a new session.
3. Share the generated code with others to join the session.
4. Enjoy watching YouTube videos together in real-time.

## Features

- **Session Management:** Create and join video sessions using unique codes.
- **Real-time Synchronization:** Experience real-time synchronization of video playback.
- **Playback Control:** Pause, play, and seek functionalities for all connected users.
- **Multiple Sessions Support:** Support for multiple concurrent video sessions.

## Technologies Used

- **Node.js:** JavaScript runtime for server-side development.
- **Express.js:** Web application framework for Node.js.
- **Socket.IO:** Real-time communication library for bidirectional event-based communication.
- **Bootstrap:** Front-end framework for responsive design.
- **YouTube IFrame API:** Embeds YouTube videos using an iframe.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

Special thanks to [Socket.IO](https://socket.io/) for providing real-time communication.
