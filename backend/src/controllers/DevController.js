const axios = require('axios')
const Dev = require('../models/Dev')
const  stringAsArray = require('./utils/StringAsArray')

module.exports = {

    async index(req, res){
        const allDevs = await Dev.find()
        
        return res.json(allDevs)
    },

    async store (req, res) {

    const { github_username, techs, latitude, longitude} = req.body
    

    //Procura devs pelo user do git
    const findDev = Dev.findOne({github_username});

    //Se n achar cadastra
    if(!findDev){

        const response  = await axios.get(`https://api.github.com/users/${ github_username }`)
        
        const {name = login, avatar_url, bio}  = response.data
        
        const techsArray = stringAsArray(techs)
        
        
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        }
    
        const devResponse = await Dev.create({
            name,
            github_username,
            bio,
            avatar_url,
            techs: techsArray,
            location
        
        })
        
        return res.json(devResponse)

    }else{

        return res.json({
            message: 'Usuario ja existe'
        })
    }

  
    }
}