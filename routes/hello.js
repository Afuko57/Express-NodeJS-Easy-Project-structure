const ctController = require('../controller/ct_hello');
const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /greeting:
 *   get:
 *     summary: Returns a greeting message
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               message: Hello, World!
 */
router.get("/greeting", function (req, res) {
    const message = ctController.greeting();
    res.json({ message });
});

/**
 * @swagger
 * /students:
 *   get:
 *     summary: Returns student details
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               data: [student details]
 */
router.get("/students", function (req, res) {
    ctController.student(req, res);
});

module.exports = router;
