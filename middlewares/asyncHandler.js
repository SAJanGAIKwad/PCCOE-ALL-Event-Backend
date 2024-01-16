const asyncHandler=(fn)=>(req,res,next)=>{
    Promise.resolve(fn(req,res,next)).catch(error => {
        // console.log(JSON.stringify(error, null, 2)); // This will print the entire error object
        res.status(500).json({message: error.message});
     });
     
};

export default asyncHandler;