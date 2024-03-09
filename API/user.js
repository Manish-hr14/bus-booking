const User= require('./models/user');

application.post('/users',async (req,res)=>{
    try{
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    }
    catch (error){
        res.status(500).json({
            msg: 'internal servar error'
        })
    }
});