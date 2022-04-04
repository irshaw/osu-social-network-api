//get a user by id 
router.get("/:id", async (req, res) => {
    try {
      const user = await user.findById(req.params.id);
      const { password, updatedAt, ...other } = user._doc;
      res.status(200).json(other);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  // update a user by id 
  router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
      try {
        const user = await user.findByIdAndUpdate(req.params.id, {
          $set: req.body,
        });
        res.status(200).json("Account has been updated");
      } catch (err) {
      return res.status(400).json("not able to update the account");
    }
  });

  // delete a user by id
  router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
      try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("Account has been deleted");
      } catch (err) {
        return res.status(500).json(err);
      }
    } else {
      return res.status(400).json(" not able to delete the account ");
    }
  });
  
  // follow a user by id 
  router.put("/:id/follow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
      try {
        const user = await user.findById(req.params.id);
        if (!user.followers.includes(req.body.userId)) {
          res.status(200).json("you have followed the user");
        } else {
          res.status(400).json("user is already followed ");
        }
    });
  
    

  // unfollow a user by id 
  
router.put("/:id/unfollow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
      try {
        const user = await user.findById(req.params.id);
          res.status(200).json("user has been unfollowed");
        } else {
          res.status(400).json("you dont follow this user");
        }}
      
    
  });