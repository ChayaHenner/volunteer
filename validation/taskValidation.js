exports.validTask = (_reqBody)=>{
    let joinSchema =Joi.object({
        title: Joi.string().min(2).max(99).required(),
        info: Joi.string().min(2).max(99).required(),
        address: Joi.string().min(2).max(99).required(),
        time: Joi.string().min(2).max(99).required(),
        date_created: Joi.number().min(9).max(120).required(),
        association:  Joi.string().max(1000).required(),
        creator: Joi.string().min(2).max(99).required(),
        executor: Joi.number().min(0).max(5).required(),
        taken: Joi.boolean().required()
    })
}