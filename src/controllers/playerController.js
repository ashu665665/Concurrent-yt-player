import { io } from '../app.js';

// Assume you have a hashtable to store the mapping of unique keys to video IDs
const videoIdMapping = new Map();


export const player = async (req, res) => {
    const { videoLink, joinCode } = req.body;

    if (videoLink) {
        var regex = /[?&]v=([^&]+)/;
        var match = videoLink.match(regex);
        if (match) {
            // Extracted 'v' value is in the first capturing group (index 1)
            var videoId = match[1];
            console.log("Value of 'v':", videoId);
        } else {
            console.log("No 'v' parameter found in the URL.");
            // Handle error or redirect to an error page
            res.status(400).send("Invalid video link");
            return;
        }

        // Generate a unique key (for demonstration purposes, you can replace this with your own logic)
        const uniqueKey = Math.random().toString(36).substring(7);

        // Store the mapping of the unique key to the video ID
        videoIdMapping.set(uniqueKey, videoId);

        console.log("Unique Key:", uniqueKey);


        io.on('connection', (socket) => {
            var rId;
            console.log('a user connected');
        
            socket.on('joinRoom', ({ roomId }) => {
                // Join the room associated with the video ID
                socket.join(roomId);
                rId = roomId;
                console.log(`User joined room: ${roomId}`);
            });
        
            socket.on('event', ( data ) => {
                console.log(`Upcoming Event to ${rId}: ` + data )
                // Broadcast the event to all clients in the specified room
                io.to(rId).emit('event', data);
            });
        
            socket.on('disconnect', () => {
                console.log('user disconnected');
            });
        });
        
        
        res.render("primary-user", { vId: videoId, uId: uniqueKey, hostUser: true });
    } else if (joinCode) {
        // Fetch the video ID associated with the join code from the hashtable
        const joinedVideoId = videoIdMapping.get(joinCode);

        if (joinedVideoId) {
            // Pass the video ID to the primary-user template with hostUser as false
            res.render("primary-user", { vId: joinedVideoId, uId: joinCode, hostUser: false });
        } else {
            // Handle error or redirect to an error page
            res.status(400).send("Invalid join code");
        }
    } else {
        // Handle error or redirect to an error page
        res.status(400).send("Invalid request");
    }
};


