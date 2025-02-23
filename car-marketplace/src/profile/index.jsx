import Header from "@/components/Header";
import MyListing from "./components/MyListing";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Inbox from "./components/Inbox";

const Profle = () => {
  return (
    <div>
      <Header />
      <div className="my-10">
        <Tabs defaultValue="my-listing" className="w-full">
          <TabsList className="flex justify-start w-full gap-5">
            <TabsTrigger value="my-listing">My Listing</TabsTrigger>
            <TabsTrigger value="inbox">Inbox</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>
          <TabsContent value="my-listing" >
            <MyListing />
          </TabsContent>
          <TabsContent value="inbox"><Inbox/></TabsContent>
          <TabsContent value="profile">Change your profile.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profle;
