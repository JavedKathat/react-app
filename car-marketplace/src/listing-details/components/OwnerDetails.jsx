import { Button } from "@/components/ui/button";
import Service from "@/Shared/Service";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function OwnerDetails({ carDetails }) {
  const {user} = useUser();
  const navigate = useNavigate();
  const userId = user.primaryEmailAddress.emailAddress.split('@')[0];
  const ownerUserId = carDetails?.createdBy.split('@')[0];

  const onMessageOwnerButtonClick = async() =>{
  // Create current user ID
  try {
    await Service.CreateSendBirdUser(userId, user?.fullName, user?.imageUrl)
    .then((resp)=>{
      console.log(resp);
    })
  } catch (error) {
    console.error(error)
  }
  // Owner user ID
  try {
     Service.CreateSendBirdUser(ownerUserId, carDetails?.userName, carDetails?.imageUrl)
    .then(resp=>{
      console.log(resp);
    })
  } catch (error) {
    console.error(error)
  }
  // Create Channel
  try {
    await Service.CreateSendBirdChannel([userId,ownerUserId],carDetails?.listingTitle)
    .then((resp)=>{
      console.log(resp);
      console.log("Channel created....");
      navigate('/profile')
    })
  } catch (error) {
    console.error(error);
  }
}

  return (
    <div className="p-10 rounded-xl shadow-md border gap-5 mt-7">
      <div className="flex justify-start gap-3">
        <img
          src={carDetails?.userImageUrl}
          className="w-[40px] h-[40px] object-cover"
        />
        <h2 className="font-bold text-xl mt-3">{carDetails?.userName}</h2>
      </div>
      <h2 className="text-gray-500 mb-3">{carDetails?.createdBy}</h2>
      <Button className="w-full" onClick={onMessageOwnerButtonClick}>Message owner</Button>
    </div>
  );
}

export default OwnerDetails;
