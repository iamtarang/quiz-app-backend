// responseHandler.js

function responseHandler(req, res, next) {
	// Set common headers (e.g., CORS headers, content type, etc.)
	res.setHeader('Content-Type', 'application/json');

	// Modify the response data if needed
	// For example, adding a 'success' flag and wrapping data in an object
	res.sendResponse = (data, success = true) => {
		res.json({ success, data });
	};

	// Handle errors
	res.sendError = (message, statusCode = 500) => {
		res.status(statusCode).json({ success: false, error: message });
	};

	next();
}

export default responseHandler;
