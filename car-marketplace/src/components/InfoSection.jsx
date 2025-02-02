function InfoSection() {
  return (
    <section className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          
          {/* Left Side - Image */}
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full aspect-[4/3]">
              <img
                alt="Sample"
                src="https://www.bmw-egypt.com/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-ms-02.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
  
          {/* Right Side - Content with Offset Background */}
          <div className="relative flex items-center bg-gray-100">
            <span className="hidden lg:absolute lg:inset-y-0 lg:start-16 lg:block lg:w-4 lg:bg-gray-100" />
  
            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Tailwind CSS Grid Layout
              </h2>
              <p className="mt-4 text-gray-600">
                Create a flexible grid with an image on the left and content on the right using Tailwind CSS in React.
              </p>
              <a
                href="#"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700"
              >
                Learn More
              </a>
            </div>
          </div>
  
        </div>
      </section>
  );
}

export default InfoSection;

