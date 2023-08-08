import React from "react";
import memeData from "./memeData";

// const imageList = function () {

//CODE TO GET IMAGES FROM FILE LOCATION
//   const images = require.context("/public/images", false, /\.(png|jpg)$/);
//   const imageNames = images
//     .keys()
//     .map((imagePath) => imagePath.split("/").pop());
//   // console.log(imageNames);
//   const imageArray = [...imageNames];
//   // console.log(imageArray);

//   const generateDataset = function (array) {
//     return array.map((item, index) => {
//       const id = index + 1;
//       const url = `/images/${item}`;
//       const name = item;
//       const width = url.naturalWidth;
//       const height = url.naturalHeight;

//       return { id, url, name };
//     });
//   };

//   const dataSet = generateDataset(imageArray);
//   console.log(dataSet);

//   // return <div>{dataset.map(item)}</div>;
// };

// let button = document.getElementsByClassName("form--button");
// button = (e) => {
//   e.preventDefault();
// };

// button.addEventListener("click", () => {
//   console.log("button was clicked");
// });

function Meme() {
  // const [memeImage, setMemeimage] = React.useState("");
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  function getMemeImage(e) {
    e.preventDefault();
    // console.log(meme.randomImage);
    const memeArray = memeData.data.memes;
    const randomNumber = Math.trunc(Math.random() * memeArray.length);
    const url = memeArray[randomNumber].url;
    const topText = console.log(url);

    setMeme((prevMeme) => ({
      ...meme,
      randomImage: url,
    }));
  }

  function handleText(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
    // console.log(prevMeme);
  }

  return (
    <main onSubmit={handleText}>
      <form>
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          value={meme.topText}
          onChange={handleText}
          name="topText"
        />

        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          value={meme.bottomText}
          onChange={handleText}
          name="bottomText"
        />

        <button type="submit" className="form--button" onClick={getMemeImage}>
          Get a new meme image
        </button>

        <div className="img-container">
          <img src={meme.randomImage} className="meme--image" />
          <p className="top--text">{meme.topText}</p>
          <p className="bottom--text">{meme.bottomText}</p>
        </div>
      </form>
    </main>
  );
}

export default Meme;
