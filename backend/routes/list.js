const router = require("express").Router();
const User = require("../models/user");
const List = require("../models/list");
const list = require("../models/list");


//create
router.post("/addTask", async (req, res) => {
  try {
    const { title, body, email } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const list = new List({ title, body, user: existingUser });
      await list.save().then(() => res.status(200).json({ list }));
      existingUser.list.push(list);
      existingUser.save();
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error adding task:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//update

router.put("/updateTask/:id", async (req, res) => {
    try {
      const { title, body, email } = req.body;
      const existingUser = await User.findOne({ email });
      if (existingUser) {
       const list = await List.findByIdAndUpdate(req.params.id,{title,body});
        list.save().then(()=>res.status(200).json({message: "Task Updated"}))
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      console.error("Error adding task:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });


  router.delete("/deleteTask/:id", async (req,res)=>{
    try {
      const { email } = req.body;
      const existingUser = await User.findOne({ email });
      if (existingUser) {
       await List.findByIdAndDelete(req.params.id).then(()=>res.status(200).json({message: "Task Deleted"}))
      } 
    } catch (error) {
      console.error("Error adding task:", error);
    }
  })
module.exports = router;

