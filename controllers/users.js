const User = require('../models/users');

exports.getUser = async (req, res, next) => {
    try{
        const user = await User.find();
        return res.status(200).json({success: true,
             data: user});
    }catch(err){
        return res.status(500).json({success: false, err});
    }
}

exports.getUserByUserName = async (req, res, next) => {
    try{
        const userName = req.params.userName;
        console.log(req.params);
        const user = await User.findOne({userName});
        if(!user){
            return res.status(404).json({
                success: false,
                error: "no user found"
            })
        }
        return res.status(200).json({success: true,
             data: user});
    }catch(err){
        return res.status(500).json({success: false, err});
    }
}

exports.addUser =  async (req, res, next) => {
    try{
        const user = await User.create(req.body);
        return res.status(201).json({
            success: true,
            data: user
        })
    }catch(err){
        return res.status(400).json({
            success: false,
            err: "err"
        })
    }
}

exports.deleteUser = async (req, res, next) => {
    try{
        const id = req.params.id;
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({
                success: false,
                error: "no user found"
            })
        }

        await user.remove();
        return res.status(200).json({
            success: true,
            data: {}
        })

    }catch(err){
        return res.status(400).json({
            success: false,
            err
        })
    }
}

exports.updateUser = async (req, res, next) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});

        if(!user){
            return res.status(404).json({
                success: false,
                error: "no User found"
            })
        }

       return res.status(201).json({"success": true, data: user});

    }catch(err){
        return res.status(400).json({
            success: false,
            err
        })
    }
}