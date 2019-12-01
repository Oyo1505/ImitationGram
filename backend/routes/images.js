const router = require('express').Router();
let Image = require('../models/image.model');



router.get('/', (req, res) => {
	 Image.find()
        .then(images => res.json(images))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.post('/add-image', (req, res) => {

	const newImage = new Image({
		url: req.body.url,
		name: req.body.name,
		user_id: req.body.user_id,
		likes: req.body.likes
	});

	newImage.save().then(image => res.json(image)).catch(err => console.log(err));

})


module.exports = router;