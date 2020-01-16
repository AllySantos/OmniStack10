const axios = require('axios')
const Dev = require('../models/Dev')
const  stringAsArray = require('./utils/StringAsArray')


module.exports = {
    async index(req, res){
        //Buscar devs q trabalhem com a mesma tecnologia
        //Em um raio de 10km (10000m)

        const { latitude, longitude, tech } = req.query;

        const techReq = stringAsArray(tech)

        const devs = await Dev.find({
            techs :{
                $in:  techReq
            },

            location:{
                $near :{
                    $geometry:{
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                
                    $maxDistance : 10000
                }
            }
        })

        return res.json(devs)
    }

   
}