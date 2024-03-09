app.get('/models/booking/:userid',async (req,res)=>{
    try{
        const userBooking = await booking.find({ userid: req.params.userBooking});

        if(!userBooking){
            return res.staus(400).json({error: "booking not found"})
        }
        res.json(userBooking);
    }
    catch(error){
        res.staus(500)({ msg: "internal server error"});
    }
    
});