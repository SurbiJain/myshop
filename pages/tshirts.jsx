import React from "react";
import Link from "next/link";
import DATA from './../public/getdata';

const tshirts = ({ tshirts }) => {
  return (
    <section className="text-gray-600 body-font">
      <div>
      <img
        className="w-full"
        src="https://siyaram-images.s3.ap-south-1.amazonaws.com/images/top_banner/fabrics.png"
      />
      </div>
      <div className="md:m-16">
        <div className="grid gap-4 mx-auto  grid-cols-2 md:grid-cols-5 ">
          {Object.keys(tshirts)?.map((item) => {
            return (
              <div
                key={tshirts[item].id}
                className="m-4 md:m-0"
              >
                <Link
                  href={`/product/${tshirts[item].id}`}
                  
                >
                 
                  <img
                    alt="ecommerce"
                    className="h-72 w-full object-left-top object-cover"
                    src={tshirts[item].img}
                  />
                  
                </Link>
                <div className="mt-4">
                  
                  <h2 className="text-gray-900 text-sm font-medium">
                    {tshirts[item].title}
                  </h2>
                  <p className="mt-1">Rs.{tshirts[item].price}</p>
                  <div className="mt-1 ">
                    {tshirts[item].size.map((k) => {
                      return (
                      
                        <div className="inline-block border border-gray-600 px-1 mx-1 mt-2" key={k}>
                          {k}
                        </div>
                       
                      );
                    })}
                    <div className="mt-4">
                      {tshirts[item].color.map((k) => {
                        return (
                          <button
                            style={{ backgroundColor: `${k}` }}
                            className="border-2 rounded-full w-6 h-6 "
                            key={k}
                          ></button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export async function getServerSideProps(context) {

  // USING STATIC JSON AS I COULD NOT RESTORE .SQL FILE ON VERSEL

  //const apiUrlEndpoint = `${process.env.NEXT_PUBLIC_HOST}/api/getdata`;
  // const response = await fetch(apiUrlEndpoint);
  // const res = await response.json();
  const res = DATA;
  let products = res.name;
  let tshirts = {};
  for (let item of products) {
    if (item.title in tshirts) {
      if (
        !tshirts[item.title].color.includes(item.color) &&
        item.availableQty > 0
      ) {
        tshirts[item.title].color.push(item.color);
      }
      if (
        !tshirts[item.title].size.includes(item.size) &&
        item.availableQty > 0
      ) {
        tshirts[item.title].size.push(item.size);
      }
    } else {
      tshirts[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        tshirts[item.title].color = [item.color];
        tshirts[item.title].size = [item.size];
      }
    }
  }
  return {
    props: { tshirts },
  };
}

export default tshirts;
