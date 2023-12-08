const express = require("express");
const db = require("../config/db");

function handleErrorResponse(res, err) {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
}

function greeting() {
  return "Hello, World!dd";
}

function student(req, res) {
  const sql = "SELECT * FROM student_details";
  db.query(sql, (err, result) => {
    if (err) {
      return handleErrorResponse(res, err);
    }
    res.json(result);
  });
}

module.exports = {
  greeting,
  student
};
