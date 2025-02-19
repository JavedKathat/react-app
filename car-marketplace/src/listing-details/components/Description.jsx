function Description({ carDetails }) {
  return (
    <div>
      {!carDetails?.listingDescription ? (
        <div className="w-[95%] h-[100px] rounded-xl shadow-md mt-5 border bg-slate-200 animate-pulse"></div>
      ) : (
        <div className="w-[95%] rounded-xl shadow-md mt-5 p-5 border">
          <h2 className="font-medium text-2xl">Description</h2>
          {carDetails.listingDescription}
        </div>
      )}
    </div>
  );
}

export default Description;
