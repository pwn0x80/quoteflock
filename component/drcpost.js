import React from "react";
import Masonry from "react-masonry-css";
import styles from "../styles/drcPost.module.css";

let items = [
  { id: 1, name: "one" },
  { id: 2, name: "two" },
  { id: 3, name: "three" },
  { id: 4, name: "four" },
  { id: 5, name: "five" },
];

const breakpointColumnsObj = {
  default: 2,
  1100: 2,
  700: 1,
  500: 1,
};

export default function effec({ val }) {
  console.log(val);
  return (
    <div className="App">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.mymasonrygrid}
        columnClassName={styles.mymasonrygridcolumn}
      >
        {val.map((user) => {
          return (
            //   <div key={user.id}>
            //    <div className={styles.container}>
            <div dangerouslySetInnerHTML={{ __html: user.post }} />
            //     </div>
            // </div>
          );
        })}
      </Masonry>
    </div>
  );
}
