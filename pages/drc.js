import Topbar from "../component/topbar";

import { db } from "../config/firebase.config";
import { addDoc, collection, getDocs } from "firebase/firestore";
import styles from "../styles/drcPost.module.css";
import { SiTmobile } from "react-icons/si";
import { IoTrailSignOutline } from "react-icons/io";
export default function drc({ val }) {
  let tmp = () => {
    return (
      <div className={styles.bg}>
        {val.map((user) => {
          return (
            <div key={user.id}>
              <div className={styles.container}>
                <div dangerouslySetInnerHTML={{ __html: user.post.post }} />
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <>
      <div>{tmp(val)}</div>
    </>
  );
}

export async function getStaticProps() {
  const querySnapshot = await getDocs(collection(db, "posts"));
  let val = [];

  querySnapshot.forEach((doc) => {
    val.push({ id: doc.id, post: doc.data() });
  });
  return {
    props: {
      val,
    },
    revalidate: 10,
  };
}
