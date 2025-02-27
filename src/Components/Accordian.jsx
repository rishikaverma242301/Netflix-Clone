import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Accordian = () => {
  let [selectedItem, setSelectedItem] = useState(null);
  let [items, setItems] = useState([
    { heading: "What is Netflix ?", para: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more on thousands of internet-connected devices." },
    { heading: "How much does Netflix cost ?", para: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts." },
    { heading: "Where can I watch ?", para: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles." },
    { heading:"How do I cancel ?",para:"Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees  start or stop your account anytime."},
    { heading:"What can I watch on Netflix ?",para:"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."},
    { heading:"Is Netflix good for kids ?",para:"Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."}
  ]);

  function handleToggle(index) {
    setSelectedItem(selectedItem === index ? null : index);
  }
  return (
    <div style={{ marginInline: "50px" }}>
      <h2 className=" text-2xl my-10">Frequently Asked Questions</h2>
      {items.map((item, index) => {
        return (
          <div key={index} style={{ marginBottom: "10px" }}>
            <div
              onClick={() => handleToggle(index)}
              className="bg-gray-600 p-4 flex space-between"
              
              >
              <h4>{item.heading}</h4>
              {selectedItem === index ? (
                <IoIosArrowUp className="text-2xl" />
              ) : (
                <IoIosArrowDown className="text-2xl"/>
              )}
            </div>

            {selectedItem === index && (
              <div
                style={{
                  backgroundColor: "gray",
                  color: "white",
                  padding: "10px",
                  border: "2px solid white",
                }}
              >
                <p>{item.para}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordian;