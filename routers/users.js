import express from 'express';
import mysql from 'mysql2';

const router = express.Router()
// connecting Database
const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "mydb"
});  


/*************************************************************************
 * QUERY (POST) INDIVIDUAL
 *************************************************************************/
router.post("/", async (req, res) => {       // localhost:5000/users [POST}]
  try {
      const {uname} = req.body;
      console.log(`uname=${uname}`)

      const data =  await connection.promise().query(
        `SELECT *  from USERS WHERE UNAME=?;`,[uname]
      );
      console.log(`data[0]=${JSON.stringify(data[0])}`)
      res.status(202).json({  // res.send(data)
        users: data[0]
      });
    } catch (err) {
      res.status(500).json({
        message: err
      });
    }
});
/*************************************************************************
 * INSERT (POST) INDIVIDUAL
 *************************************************************************/
router.post("/register", async (req, res) => {       // localhost:5000/users/register [POST}]
  try {
      const {uname} = req.body;
      const {pword} = req.body;
      console.log(`uname=${uname}, pword=${pword}`)

      const data =  await connection.promise().query(
        `INSERT INTO users VALUES (?,?)`,[uname,pword]
      );
      console.log(`data[0]=${JSON.stringify(data[0])}`)
      res.status(202).json({  // res.send(data)
        users: data[0]
      });
    } catch (err) {
      res.status(500).json({
        message: err
      });
    }
});
/*************************************************************************
 * GET CATEGORIES AND QUESTIONS
 *************************************************************************/
router.get("/categories", async (req, res) => { // localhost:5000/users/categories [GET]
  try {
    const data = await connection.promise().query(
      `SELECT * FROM categories;`
    );
    res.status(200).json({ categories: data[0] });
  } catch (err) {
    res.status(500).json({
      message: err
    });
  }
});

export default router;