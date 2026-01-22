const Service = require('../Model/servicesSchema');

const services = async (req, res) =>{
    try {
       const response = await Service.find(); 
       if(!response){
        res.status(404).json({message: "No data found"});
        return;
       }
       res.status(200).json({ msg: response });
    } catch (error) {
        console.log(`services: ${error}`);
    }
};

module.exports = services;