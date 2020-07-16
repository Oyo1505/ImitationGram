const router = require('express').Router();
let Image = require('../models/image.model');



router.get('/', (req, res) => {
	
	 Image.find()
        .then(images =>{res.json(images)})
        .catch(err => res.status(400).json('Error: ' + err));
})

router.post('/add-image', (req, res) => {
	const newImage = new Image({
		url: req.body.url,		
		user_id: req.body.user_id,
		name: req.body.name,
		likes: req.body.likes,
		comments: req.body.comments,
	});
	newImage.save().then(image => res.json(image)).catch(err => console.log(err));

})
router.put('/:id', (req, res) => {
	Image.find({name: req.params.id})
	.then(image => {
			image[0].url = req.body.url;
			image[0].user_id= req.body.user_id;
			image[0].likes = req.body.likes;
			image[0].comments = req.body.comments;
			image[0].save()
				  .then(user => res.json(user))
				  .catch(err => res.status(400).json('Error: ' + err));
	}).catch(err => res.status(400).json('Error: ' + err));
  });
router.delete('/:id', (req, res) => {
	Image.findByIdAndDelete(req.params.id)
	.then(image => res.json('Image Deleted'))
	.catch(err => res.status(400).json('Error: ' + err));

});
module.exports = router;
