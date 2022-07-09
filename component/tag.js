import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";
import { db } from "../config/firebase.config";
import styles from "../styles/drcPost.module.css";
export default function tag({ tag }) {
  const [tags, tagSet] = useState([]);
  useEffect(() => {
    tagSet(tag);
  });

  return (
    <div className={styles.tag}>
      {tags.map((e) => {
        return (
          <div className={styles.tagin} key={e}>
            <Link href={{ pathname: `/drc/${e}` }}>
              <a>{e}</a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
