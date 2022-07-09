import { db } from "../../config/firebase.config";
import Effec from "../../component/drcpost";
import Tag from "../../component/tag";

import {
  doc,
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  getDoc,
} from "firebase/firestore";
import styles from "../../styles/drcPost.module.css";
import { SiTmobile } from "react-icons/si";
import { IoTrailSignOutline } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";
import { BiSleepy } from "react-icons/bi";
export default function Drc({ val, tag }) {
  const [values, setValues] = useState(val);

  //let triggerTag = async (e) => {

  // console.log("@@@", docRef);
  //  docRef.forEach(async (e) => {
  //   console.log("####", e.path);
  //  let postDoc = await getDoc(doc(db, e.path));
  //      console.log("%%%", postDoc.id);
  //tagUrlData.push({ id: postDoc.id, post: postDoc.data().post });
  //console.log("----///", postDoc.data().post);
  //  tagUrlData.push({ id: "sdfsadw", post: postDoc.data().post });
  //  });
  //  };

  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <Tag tag={tag} />
      </div>

      <div>
        <Effec val={values} />{" "}
      </div>
    </>
  );
}

export async function getStaticProps() {
  console.log("static");

  let tag = [];
  const docRef = await getDocs(collection(db, "tag"));
  docRef.forEach((e) => {
    e.data().id.forEach((e) => {
      //  console.log(e.path);
    });
    tag.push(e.id);
  });

  const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));

  const querySnapshot = await getDocs(q);
  //const querySnapshot = await getDocs(collection(db, "posts"));
  let val = [];

  querySnapshot.forEach((doc) => {
    val.push({ id: doc.id, post: doc.data().post });
    //    console.log(doc.id, " => ", doc.data());
  });

  return {
    props: {
      val,
      tag,
    },
    revalidate: 10,
  };
}
