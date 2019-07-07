import * as express from 'express';
const router = express.Router();

router.get('/', (req, res) => { res.send('Hello World'); });
router.get('/users', (req, res) => res.send([]));
router.post('/users', (req, res) => res.send({body: req.body}));

module.exports = router;
