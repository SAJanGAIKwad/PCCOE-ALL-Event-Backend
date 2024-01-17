import {v2 as cloudinary} from 'cloudinary';
import { response } from 'express';
import fs from 'fs';


          
// cloudinary.config({ 
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
//   api_key: process.env.CLOUDINARY_API_KEY, 
//   api_secret:process.env.CLOUDINARY_API_SECRET 
// });

cloudinary.config({ 
    cloud_name: 'vaibhavdada', 
    api_key: '627625158489797', 
    api_secret: '***************************' 
  });

const uploadOnCloudinary=async (localFilePath)=>{
    try{
        if(!localFilePath){
            console.log("Please provide a valid file path");
            return;
        }

        cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });

        console.log("File uploaded successfully on cloudinary ",response.url);
        return response;

    }catch(error){
        //if file not uploaded then unlink the local file
        fs.unlinkSync(localFilePath);
        console.log("error in upload cloudnary: ",error);
    
    }
}


export default uploadOnCloudinary;