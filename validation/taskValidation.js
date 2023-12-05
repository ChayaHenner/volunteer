exports.validTask = (_reqBody)=>{
    let joinSchema =Joi.object({
        title: Joi.string().min(2).max(99).required(),
        info: Joi.string().min(2).max(1500).required(),
        address: Joi.string().min(2).max(99).required(),
        time: Joi.string().min(2).max(99).required(),
        association:  Joi.string().required(),
        creator: Joi.string().required(),
        executor: Joi.string().required(),
        taken: Joi.boolean().required()
    })
}