import { useUser } from "@clerk/clerk-react";
import { App as SendbirdApp } from "@sendbird/uikit-react";
import "@sendbird/uikit-react/dist/index.css";
import SendbirdProvider from "@sendbird/uikit-react/SendbirdProvider";
import { useEffect } from "react";
import { useState } from "react";
import { GroupChannelList } from "@sendbird/uikit-react/GroupChannelList";
import { GroupChannel } from '@sendbird/uikit-react/GroupChannel';

function Inbox() {
  const { user } = useUser();
  const [userID, setUserID] = useState();
  const [channelUrl, setChannelUrl] = useState();
  useEffect(() => {
    if (user) {
      const id = user.primaryEmailAddress.emailAddress.split("@")[0];
      setUserID(id);
    }
  }, [user]);

  return (
    <div>
      <div style={{ width: "100%", height: "500px" }}>
        {/* 
      This super smart component serves as a drop-in chat solution
      
      For advanced 🚀 customizations, use SendbirdProvider:
      https://sendbird.com/docs/chat/uikit/v3/react/essentials/sendbirdprovider
    */}
        <SendbirdProvider
          appId={import.meta.env.VITE_SENDBIRD_APP_ID}
          userId={userID}
          nickname={user?.fullName}
          profileUrl={user?.imageUrl}
          allowProfileEdit={true}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 h-full gap-4">
            {/* Channel List */}
            <div className="p-5 border shadow-lg">
              <GroupChannelList
              onChannelSelect={(channel)=>{
                setChannelUrl(channel?.url);
              }}
              channelListQueryParams={
                {
                    includeEmpty:true,
                }
              }
              />
              
            </div>
            {/* Channel / Message Area */}
            <div className="md:col-span-2 shadow-lg">
            <GroupChannel channelUrl={channelUrl} />
            </div>
          </div>

          {/* <UserProfile /> */}
        </SendbirdProvider>

        {/* <SendbirdApp
          appId={import.meta.env.VITE_SENDBIRD_APP_ID}
          userId={"Muhammad Zohaib"}
          accessToken={import.meta.env.VITE_ZOHAIB_ACCESS_TOKEN} // Optional, but recommended
        /> */}
      </div>
    </div>
  );
}

export default Inbox;
