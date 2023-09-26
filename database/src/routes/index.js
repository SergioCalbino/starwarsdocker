const { Router } = require('express');
const store = require('../database/schemas');
const { validateModel } = require('../middlewares');

const router = Router();

router.get('/:model', validateModel, async (req, res) => {
    const { model } = req.params
     const response = await store[model].list()
    return res.status(200).json(response)
})



module.exports = router