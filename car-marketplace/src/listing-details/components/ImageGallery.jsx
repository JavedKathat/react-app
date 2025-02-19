
function ImageGallery({ carDetails }) {
  return (
    <div className="mb-4">
      <img
        src={carDetails?.images[0]?.imageUrl}
        className="rounded-xl w-[95%] h-[500px] object-cover "
      />
    </div>
  );
}

export default ImageGallery;
