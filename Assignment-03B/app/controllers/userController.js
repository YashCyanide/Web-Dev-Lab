// userController.js

const UserModel = require('../model/user');

// Create and save a new user
exports.create = async (req, res) => {
    try {
        const newUser = new UserModel(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Retrieve all users from the database
exports.findAll = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Find a single user with a userId
exports.findOne = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        if (!user) {
            res.status(404).json({ message: "User not found" });
        } else {
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a user identified by the userId in the request
exports.update = async (req, res) => {
    try {
        const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            res.status(404).json({ message: "User not found" });
        } else {
            res.status(200).json(updatedUser);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a user with the specified userId in the request
exports.destroy = async (req, res) => {
    try {
        const deletedUser = await UserModel.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            res.status(404).json({ message: "User not found" });
        } else {
            res.status(200).json({ message: "User deleted successfully" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
