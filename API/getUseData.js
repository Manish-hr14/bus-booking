app.get('/models/:userId',async (req,res) => {
    try{
        const user = await User.findbyid(req.params.userId);

        if(!user){
            return res.status(404).json({
                msg: 'user not found'
            });
        }
        
        res.json(user);
    }
    catch (error){
    res.status(500).json({msg:'internal server error'})
}
});