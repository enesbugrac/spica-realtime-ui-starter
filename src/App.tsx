import React from "react";
import styles from "./App.module.css";
const dummyTextandEmojis = [
  { text: "Life", _id: "1", like: 5, dislike: 10 },
  { text: "Test", _id: "2", like: 5, dislike: 10 },
  { text: "Test2", _id: "3", like: 5, dislike: 10 },
  { text: "Test3", _id: "4", like: 5, dislike: 10 },
  { text: "Test4", _id: "5", like: 5, dislike: 10 },
];
function App() {
  const handleClick = (_id: string, operation: string) => {
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
    <div className={styles["App"]}>
      <h1>SPICA REALTIME UI</h1>
      <ul className={styles["itemContainer"]}>
        {dummyTextandEmojis.map((item) => (
          <li key={item._id}>
            <p>{item.text}</p>
            <div className={styles["emojiContainer"]}>
              <button
                onClick={() => handleClick(item._id, "like")}
                className={styles["emojiCount"]}
              >
                <span>👍</span>
                <span>{item.like}</span>
              </button>
              <button
                onClick={() => handleClick(item._id, "dislike")}
                className={styles["emojiCount"]}
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
