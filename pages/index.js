import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Fashion</title>
        <meta
          name="description"
          content="Delhi Fashion Emporium - we create your dream clothes"
        />
      </Head>
      <img
        src="https://siyaram-images.s3.ap-south-1.amazonaws.com/images/banner/siyarams.webp"
        className="w-full"
        alt="cover image"
      />
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-6`}
      >
        <div className="text-gray-600 container md:pt-10">
          <div className="flex flex-wrap w-full mb-4 md:mb-10 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Fashion For Entire Delhi
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Choose your designs
            </p>
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-4">
            <div className=" border border-gray-200 p-6 rounded-lg md:w-1/2 ">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-black-100 text-black-500 mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Premium Tshirts
              </h2>
              <p className="leading-relaxed text-base">
                Our T-shirts are 100% made of cotton. A huge collection of
                readymade{" "}
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg md:w-1/2 ">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-black-100 text-black-500 mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Customization
              </h2>
              <p className="leading-relaxed text-base">
                We take your measurements and design accordingly
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg md:w-1/2 ">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-black-100 text-black-500 mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Exciting Offers
              </h2>
              <p className="leading-relaxed text-base">
                We provide amazing offers & discounts on our products
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
