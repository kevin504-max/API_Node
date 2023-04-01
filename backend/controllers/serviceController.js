const {Service: ServiceModel} = require("../models/Service");

const serviceController = {
    create: async (req, res) => {
        try {
            const service = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image
            };

            const response = await ServiceModel.create(service);

            res.status(201).json({ response, msg: "Service created successfully!" });
        } catch (error) {
            console.log("Error: ", error); 
        }
    },

    getAll: async (req, res) => {
        try {
            const services = await ServiceModel.find();
            res.json(services);
        } catch(error) {
            console.log("Error: ", error); 
        }
    },

    get: async (req, res) => {
        try {
            const id = req.params.id;   //id => URL === GET
            const service = await ServiceModel.findById(id);

            if (!service) {
                res.status(404).json({ msg: "Service not found!" });
                return;
            }

            res.json(service);
        } catch(error) {
            console.log("Error: ", error);
        }
    },

    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const service = await ServiceModel.findById(id);

            if (!service) {
                res.status(404).json({ msg: "Service not found!" });
                return;
            }

            const deleteService = await ServiceModel.findByIdAndDelete(id);

            res.status(200).json({ deletedService, msg: "Service deleted successfully!" })

        } catch (error) {
            console.log("Error: ", error);
        }
    },

    update: async (req, res) => {
        try {   
            const id = req.params.id;
            const service = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image
            };

            const updatedService = await ServiceModel.findByIdAndUpdate(id, service);

            if(!service) {
                res.status(404).json({msg: "Service not found!"});
                return;
            }

            res.status(200).json({service, msg: "Service updated successfully!"});
        } catch(error) {
            console.log("Error: ", error);
        }
    }
};

module.exports = serviceController;