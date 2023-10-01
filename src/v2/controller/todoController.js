const Router = require('express');
const router = Router();
const {todo} = require('../models')

router.get('/', (req, res) => {
    todo.findAll()
    .then(() => {
        if(todo.length){
          return  res.status(200).json({message: "Todo Successfully fetched", todo}) 
        }else{
            return  res.status(200).json({message: "No todo available"}) 

        }
    })
    .catch((error) => res.status(404).send(error))
})



module.exports = router;