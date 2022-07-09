import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import styles from "../styles/drcPost.module.css";

const breakpointColumnsObj = {
  default: 2,
  1100: 2,
  700: 1,
  500: 1,
};

export default function effec({ val }) {
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
            <div key={user.id} className={styles.container}>
              <div dangerouslySetInnerHTML={{ __html: user.post }} />
            </div>
            // </div>
          );
        })}
      </Masonry>
    </div>
  );
}
