import express from 'express';
const apiRoutes = express.Router();

import adminRouter from './admin/adminRoute.js';
import facultyRouter from './admin/facultyRoute.js';
import { forAdminOnly, forFacultyOnly, forStudentOnly } from './auth/middleware.js';
import courseRouter from './admin/courseRoutes.js';
import semRouter from './admin/semRoutes.js';
import subjectRouter from './admin/subjectRoutes.js';
import quizRouter from './faculty/quizRoutes.js';
import questionRouter from './faculty/questionRoutes.js';
import studentsRouter from './admin/studentsRoute.js';
import answerRouter from './students/answersRoutes.js';

//* Admin operations
apiRoutes.use('/admin', adminRouter)
apiRoutes.use('/faculty', facultyRouter)
apiRoutes.use('/course', courseRouter)
apiRoutes.use('/semester', semRouter)
apiRoutes.use('/subjects', subjectRouter)

//* Faculty operations
apiRoutes.use('/quiz', quizRouter)
apiRoutes.use('/question', questionRouter)
apiRoutes.use('/students', studentsRouter)
apiRoutes.use('/answers', answerRouter)

export default apiRoutes