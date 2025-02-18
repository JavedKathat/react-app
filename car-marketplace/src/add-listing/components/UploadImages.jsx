/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../configs/firebaseConfig";
import { CarImages } from "../../../configs/schema";
import { db } from "../../../configs";
import { use } from "react";
import { eq } from "drizzle-orm";

function UploadImages({
  triggerUploadImages,
  setLoader,
  carInfo,
  mode,
}) {
  const [fileList, setFileList] = useState([]);
  const [editCarImagesList, setEditCarImagesList] = useState([]);

  useEffect(() => {
    if (mode == "edit") {
      setEditCarImagesList([]);
      carInfo?.images?.forEach((image) => {
        setEditCarImagesList((prev) => [...prev, image?.imageUrl]);
      });
    }
  }, [carInfo]);


  useEffect(() => {
    if (triggerUploadImages) {
      uploadImagesToServer();
    }
  }, [triggerUploadImages]);

  const onFileSelected = (event) => {
    const files = event.target.files;

    for (let i = 0; i < files?.length; i++) {
      const file = files[i];
      setFileList((prev) => [...prev, file]);
    }
  };
  const onImageRemove = (image, index) => {
    const result = fileList.filter((item) => item != image);
    setFileList(result);
  };
  const onImageRemoveFromDB = async (image, index) => {
    const result = await db.delete(CarImages).where(eq(CarImages.id, carInfo?.images[index]?.id));

    const imageList = editCarImagesList.filter((item) => item != image);
    setEditCarImagesList(imageList);
  }

  const uploadImagesToServer = () => {
    setLoader(true);
    fileList.forEach((file) => {
      const fileName = Date.now() + "." + file.name.split(".").pop();
      console.log(fileName);
      const storageRef = ref(storage, "car-marketplace/" + fileName);
      const metaData = {
        contentType: "image/jpeg",
      };
      uploadBytes(storageRef, file, metaData)
        .then((snapShot) => {
          console.log("Uploaded File");
        })
        .then((resp) => {
          getDownloadURL(storageRef).then(async (downloadUrl) => {
            console.log(downloadUrl);
            await db.insert(CarImages).values({
              imageUrl: downloadUrl,
              carListingId: triggerUploadImages,
            });
          });
        });
      setLoader(false);
    });
  };

  return (
    <div>
      <h2 className="font-medium mb-3 text-xl">Upload Images</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {mode == "edit" && editCarImagesList.map((image, index) => (
          <div key={index} className="relative">
            <IoMdCloseCircle
              className="absolute m-2 text-white text-lg hover:cursor-pointer"
              onClick={() => onImageRemoveFromDB(image, index)}
            />
            <img
              src={image}
              className="w-full h-[130px] object-cover rounded-lg"
            />
          </div>
        ))}

        {fileList.map((image, index) => (
          <div key={index} className="relative">
            <IoMdCloseCircle
              className="absolute m-2 text-white text-lg hover:cursor-pointer"
              onClick={() => onImageRemove(image, index)}
            />
            <img
              src={URL.createObjectURL(image)}
              className="w-full h-[130px] object-cover rounded-lg"
            />
          </div>
        ))}

        <label htmlFor="upload-images" className="block">
          <div className="cursor-pointer border border-dotted rounded-xl border-primary bg-blue-100 p-[3.2rem]">
            <h2 className="text-lg text text-primary text-center">+</h2>
          </div>
        </label>

        <input
          type="file"
          multiple={true}
          id="upload-images"
          onChange={onFileSelected}
          className="opacity-0 hidden"
        />
      </div>
    </div>
  );
}

export default UploadImages;
