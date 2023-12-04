exports.validUser = (_reqBody)=>{
    let joinSchema =Joi.object({
        name: Joi.string().min(2).max(99).required(),
        email: Joi.string().min(2).max(99).required(),
        phone: Joi.string().min(2).max(99).required(),
        age: Joi.number().min(9).max(120).required(),
        descripition:  Joi.string().min(2).max(99).required(),
        gender: Joi.string().min(2).max(99).required(),
        img_url: Joi.string().min(2).max(99).required(),
        rating: Joi.number().min(9).max(120).required(),
        address: Joi.string().min(2).max(99).required(),
    })
}