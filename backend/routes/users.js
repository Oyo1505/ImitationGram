const router = require('express').Router();
let User = require('../models/user.model');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");

// Load input validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

router.get('/:id', (req, res) => {
    User.findById(req.params.id)
      .then(user => {
        return  res.json(user);
      })
      .catch(err => res.status(400).json('Error: ' + err));
})

router.post("/register", (req, res) => {

    const { errors, isValid } = validateRegisterInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
 
    User.findOne({email : req.body.email}).then(user => {
      if(user) {
        return res.status(400).json({email:"Email already Exists"})
      }else{
        const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password
        });

        //Hash password before saving in database

        bcrypt.genSalt(10, (err, salt)=> {
          bcrypt.hash(newUser.password, salt, (err, hash)=> {
            if(err) throw err;
            newUser.password = hash;
            newUser.save().then(user => res.json(user)).catch(err => console.log(err));
          })
        })

      }
    })

});

router.put('/:id', (req, res) => {

  User.findById(req.params.id)
        .then(user => {
          user.username = req.body.username;
          user.email = req.body.email
          user.save()
                .then(user => res.json(user))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

//TODO
router.delete('/:id', (req, res) => {
  
    
});

router.post("/login", (req, res) => {
  
  // Form validation
const { errors, isValid } = validateLoginInput(req.body);
// Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
const email = req.body.email;
  const password = req.body.password;
// Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
// Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user._id,
          name: user.username
        };
// Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});


router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

/*router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({ username });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').put((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.username = req.body.username;
            user.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});*/
module.exports = router;