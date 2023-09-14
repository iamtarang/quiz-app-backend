import { userRole } from "./auth.js";

export function forAdminOnly(req, res, next) {
	if (userRole.roles == 1) {
		return next();
	} else {
		res.status(403).json({ message: "Access denied. Admin role required." });
	}
}

export function forFacultyOnly(req, res, next) {
	if (userRole.roles == 2) {
		return next();
	} else {
		res.status(403).json({ message: "Access denied. Faculty role required." });
	}
}

export function forStudentOnly(req, res, next) {
	if (userRole.roles == 3) {
		return next();
	} else {
		res.status(403).json({ message: "Access denied. Admin role required." });
	}
}