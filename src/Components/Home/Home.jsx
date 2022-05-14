import React from "react";
import Header from "../Header/Header";
import { Product } from "../Product/Product";
import './Home.css';

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://m.media-amazon.com/images/I/81ICdqSf23L._SX3000_.jpg"
            alt=""
          />

          <div className="home__row">
            <Product
              id="1"
              title="ASUS ROG Strix Z490-E Gaming LGA 1200 DDR4 (4600 O.C.) ATX Motherboard with 2X M.2 Slot WiFi 6 2.5Gb Ethernet and AI Overclocking Cooling"
              price={25600}
              rating={5}
              image="https://m.media-amazon.com/images/I/91UueeglcQL._SY450_.jpg"
            />
            <Product
              id="2"
              title="Corsair 4000X Desktop Case - Black"
              price={11999}
              rating={5}
              image="https://m.media-amazon.com/images/I/81MvIP9T0mL._SY450_.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="3"
              title="2021 Apple iPad Pro with Apple M1 chip (12.9-inch/32.77 cm, Wi-Fi, 256GB) - Space Grey (5th Generation)"
              price={108900}
              rating={5}
              image="https://m.media-amazon.com/images/I/81+N4PFF7jS._SX466_.jpg"
            />
            <Product
              id="4"
              title="Apple iPhone 13 Pro Max (256GB) - Graphite"
              price={139900}
              rating={5}
              image="https://m.media-amazon.com/images/I/61IJBsHm97L._SX466_.jpg"
            />
            <Product
              id="5"
              title="Apple AirPods Pro"
              price={24900}
              rating={5}
              image="https://m.media-amazon.com/images/I/71tbMyhmxcL._SX466_.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="6"
              title="ASUS TUF VG27AQL1A 27 Inch WQHD Gaming Monitor with 170Hz Refresh Rate 1ms Response Time in-Built 2W Speakers and USB 3.0 Connectivity"
              price={29999}
              rating={5}
              image="https://m.media-amazon.com/images/I/81CyDi5Aj4L._SX425_.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;