import React, { useState } from "react";
import Card from "./Card";
import "./styles.css";
const bicycles = [
  {
    title: "Firefox",
    rating: "4.8",
    desc:
      "Our bicycles hit the road in 2005 and since then Firefox has been the most loved bike brand in India among millennials. ",
    img:
      "https://www.pngitem.com/pimgs/m/161-1618300_firefox-cycles-hd-png-download.png"
  },
  {
    title: "Hero",
    rating: "4.5",
    desc:
      "Hero Cycle is a premier name in cycle manufacturers in India, the company has total 48% market share in Indian market.",
    img:
      "https://images.jdmagicbox.com/quickquotes/images_main/mtb-hero-cycle-count-26t-21-spd-379740279-fb2l8.jpg"
  },
  {
    title: "Atlas",
    rating: "4.3",
    desc:
      "Atlas name is synonymous with the cycling revolution in India. Atlas has enjoyed a position of eminence and leadership in the Bicycle industry.",
    img: "https://m.media-amazon.com/images/I/81pLt8TiCcL._SX522_.jpg"
  }
];
const bikes = [
  {
    title: "Duke 250",
    rating: "4.9",
    desc:
      "KTM 250 Duke is Lightweight, powerful and packed with advanced technology, it promises to deliver a thrilling ride from sunrise to sunset.",
    img: "https://media.zigcdn.com/media/newcar/cars_10410/zw-_600x300.jpg"
  },
  {
    title: "Royal Enfield Hunter 350",
    rating: "4.6",
    desc:
      "The Royal Enfield Hunter 350 is a roadster style motorcycle and marks the new entry point in Royal Enfield's line up. ",
    img:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Royal-Enfield-Hunter-350-070820221837.png"
  },
  {
    title: "Yamaha mt15",
    rating: "4.2",
    desc:
      "The MT-15 is a Pure-bred hyper naked, one of the light weights from the MT stable. This bike has wide handle bar and ultra-light weight of 138 kgs.",
    img:
      "https://global.yamaha-motor.com/business/mc/lineup/mt/img/mt-15_2019_3.jpg"
  }
];
const cars = [
  {
    id: "HV1553",
    title: "Hyundai Verna",
    rating: " 4.7",
    desc:
      "Hyundai has packaged the Verna extremely well. It's well put together, gets a number of segment-first features and there are enough powertrain options one can choose from.",
    img:
      "https://images.91wheels.com//assets/b_images/main/models/profile/profile1660712446.png"
  },
  {
    id: "MT782",
    title: "Mahindra thar",
    rating: "4.6",
    desc:
      "The Mahindra Thar is a vehicle built for real off-roading. Its ability to negotiate rough terrain is genuine and in its latest iteration its also useable as an everyday vehicle.",
    img:
      "https://images.carandbike.com/car-images/colors/mahindra/thar/mahindra-thar-napoli-black.png?v=1615605977"
  },
  {
    id: "TF643",
    title: "Toyota Fortuner",
    rating: "4.4",
    desc:
      "This Toyota Fortuner Legender model isn't a world apart from the standard version, and yet gets a more premium looking face and more features.",
    img:
      "https://autoportal.com/img/new-cars-gallery/toyota/fortuner/exterior/465bef7a/toyota-fortuner-465bef7a-1600x1200.jpg"
  }
];
export default function App() {
  const [vehicleType, setVehicleType] = useState("bicycles");

  return (
    <div className="App">
      <h1>Popular vehicles</h1>
      <button onClick={() => setVehicleType("bicycles")}>Bicycles</button>
      <button onClick={() => setVehicleType("bikes")}>Bikes</button>
      <button onClick={() => setVehicleType("cars")}>Cars</button>
      <hr />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          textTransform: "capitalize"
        }}
      >
        <div style={{ paddingTop: "1rem", fontSize: "1.5rem" }}>
          Popular <strong>{vehicleType}</strong>
        </div>
        {vehicleType === "bicycles" &&
          bicycles.map((bicycle) => (
            <Card key={bicycle.id} vehicle={bicycle} />
          ))}
        {vehicleType === "bikes" &&
          bikes.map((bike) => <Card key={bike.id} vehicle={bike} />)}
        {vehicleType === "cars" &&
          cars.map((car) => <Card key={car.id} vehicle={car} />)}
      </div>
    </div>
  );
}
