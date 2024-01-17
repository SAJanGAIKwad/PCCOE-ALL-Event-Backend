import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';


          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});



const uploadOnCloudinary=async (localFilePath)=>{

    console.log(process.env.CLOUDINARY_CLOUD_NAME,process.env.CLOUDINARY_API_KEY,process.env.CLOUDINARY_API_SECRET)
    try{
        if(!localFilePath){
            console.log("Please provide a valid file path");
            return;
        }

        console.log("laocalFilePath: ",localFilePath);

       
        const response=await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });

        console.log("File uploaded successfully on cloudinary ", response);
        // return response;

    }catch(error){
        
        console.log("error in upload cloudnary: ",error);

        if (error.http_code === 401) {
            console.error("Authentication error. Check Cloudinary credentials.");
        }

        //if file not uploaded then unlink the local file
        fs.unlinkSync(localFilePath);
    
    }
}


export default uploadOnCloudinary;