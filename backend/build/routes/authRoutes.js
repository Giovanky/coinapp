"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const router = express_1.Router();
router.post('/signin', authController_1.authController.signin);
router.post('/signup', authController_1.authController.signup);
exports.default = router;
//# sourceMappingURL=authRoutes.js.map