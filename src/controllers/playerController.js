import { createHash } from 'crypto';
import { io } from '../app.js';

export const player = async (req, res) => {
    const {videoLink}  = req.body;
    var regex = /[?&]v=([^&]+)/;
    var match = videoLink.match(regex);
    if (match) {
        // Extracted 'v' value is in the first capturing group (index 1)
        var videoId = match[1];
        console.log("Value of 'v':", videoId);
    } else {
        console.log("No 'v' parameter found in the URL.");
    }

    // Obtain the IP address from the request
    const ip = req.ip || req.connection.remoteAddress;

    // Combine the IP and video ID to create a unique ID
    const uniqueId = createHash('sha256')
        .update(`${ip}-${videoId}`)
        .digest('hex')
        .slice(0, 7);

    console.log("Unique ID:", uniqueId);
    res.render("primary-user", {vId : videoId, uId : uniqueId, socket : io})
}