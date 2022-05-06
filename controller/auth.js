
import User from "../models/user";
export const ragister = async (req, res) => {
  const { name, email, password} = req.body;
  if (!name) {
    return res.json({
      error: "Name is required",
    });
  }
  if (!email) {
    return res.json({
      error: "email is required",
    });
  }
  if (!password || password.length < 6) {
    return res.json({
      error: " password  should be 6 charactor long",
    });
  }
  
  const exist = await User.findOne({ email });
  if (exist) {
    return res.json({ error: "email is taken" });
  }
  
  const user = new User({
    name,
    email,
    password,
    
  });
  try {
    await user.save();
    console.log("ragistred user", user);
    return res.json({
      ok: true,
    });
  } catch (err) {
    console.log("register failer", err);
    return res.status(400).send("error,try.again");
  }
};