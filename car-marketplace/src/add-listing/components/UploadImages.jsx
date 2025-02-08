import { Button } from "@/components/ui/button";
import { storage } from "../../../configs/firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

function UploadImages() {
    const [fileList,setFileList] = useState([]); 

    const onFileSelected = (event)=> {
        const files = event.target.files;

        for(let i=0; i<files?.length; i++) {
            const file = files[i];
            setFileList((prev)=> [...prev,file])
        }
    }
    const onImageRemove = (image,index)=> {
        const result = fileList.filter((item)=>item!=image)
        setFileList(result);
    }
    const uploadImages = ()=> {
        fileList.forEach((file)=>{
            const fileName = Date.now()+'.'+file.name.split('.').pop();
            console.log(fileName);
            const storageRef = ref(storage,'car-marketplace/'+fileName);
            const metaData = {
                contentType:"image/jpeg"
            }
            uploadBytes(storageRef,file,metaData).then((snapShot)=>{
                console.log("Uploaded File");
            }).then(resp=>{
                getDownloadURL(storageRef).then(async(downloadURL)=>{
                    console.log(downloadURL)
                })
            })
        })
    }

  return (
    <div>
      <h2 className="font-medium mb-3 text-xl">Upload Images</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
       {fileList.map((image, index)=>(
        <div key={index} className="relative">
            <IoMdCloseCircle className="absolute m-2 text-white text-lg hover:cursor-pointer"
            onClick={()=>onImageRemove(image,index)}
            />
            <img src={URL.createObjectURL(image)} className="w-full h-[130px] object-cover rounded-lg"/>
        </div>
       ))}

        <label htmlFor="upload-images" className="block">
            <div className="cursor-pointer border border-dotted rounded-xl border-primary bg-blue-100 p-[3.2rem]">
                <h2 className="text-lg text text-primary text-center">+</h2>
            </div>
        </label>
       
        <input type="file" multiple={true} id='upload-images' onChange={onFileSelected} className="opacity-0 hidden"/>

      </div>
    </div>
  );
}

export default UploadImages;
