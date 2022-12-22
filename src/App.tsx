import React from "react";
import "./App.css";
const dummyTextandEmojis = [
  { text: "Life", _id: "1", like: 5, dislike: 10 },
  { text: "Test", _id: "2", like: 5, dislike: 10 },
  { text: "Test2", _id: "3", like: 5, dislike: 10 },
  { text: "Test3", _id: "4", like: 5, dislike: 10 },
  { text: "Test4", _id: "5", like: 5, dislike: 10 },
];
function App() {
  const handleClick = (_id: string, operation: string) => {
    //Changing like and dislike values but not rendering
    dummyTextandEmojis.map((item) => {
      if (item._id === _id) {
        if (operation === "like") {
          item.like = item.like + 1;
        } else {
          item.dislike = item.dislike - 1;
        }
      } else {
        return null;
      }
    });
    console.log(dummyTextandEmojis);
  };
  return (
    <div className="container gp-2 page">
      <div className="page-header">SPICA REALTIME UI</div>
      <ul className="itemContainer card">
        {dummyTextandEmojis.map((item) => (
          <li className="card" key={item._id}>
            <p>{item.text}</p>
            <div className="emojiContainer">
              <button
                onClick={() => handleClick(item._id, "like")}
                className="emojiCount"
              >
                <span>👍</span>
                <span>{item.like}</span>
              </button>
              <button
                onClick={() => handleClick(item._id, "dislike")}
                className="emojiCount"
              >
                <span>👎</span>
                <span>{item.dislike}</span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
