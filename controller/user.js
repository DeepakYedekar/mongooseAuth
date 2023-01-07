const User = require('../DB/schema');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const signUp = async(req, res) => {
    try {
        const { name, email, pass, gender, dateofbirth, number, role } = req.body;
        let Data =await User.find({ Email: email });
        if (Data.length) {
            res.send('user already exists');
        } else {
            let user = await User.create({
                Username: name, Email: email, Password: bcrypt.hashSync(pass, 8), Gender: gender, DateOfBirth: dateofbirth, ContactNumber: number,
                Role: role
            })
            user.save();
            res.send('User created successfully');
        }
    } catch (err) {
        res.status(500).send(`error from server ${err}`);
    }
}

const signIn = async (req, res) => {
    try {
        const { email, pass } = req.body;
        let data = await User.find({ Email: email });
        if (data.length) {
          let passvalid = await bcrypt.compare(pass, data[0].Password);
               if (!passvalid) return res.send("Password is not valid");
               else {
                 let token = jwt.sign({ Name: data.Email }, process.env.SECRATE, {
                   expiresIn: 86400
                 });
                  return res.status(200).send({ Token: token });
               }
        }
    } catch (err) {
        res.status(500).send(`error from server ${err}`);
    }
}

module.exports = {
    signUp,
    signIn
}