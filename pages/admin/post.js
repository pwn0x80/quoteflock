import { useContext, useEffect, useRef, useState } from "react";
import { useQuill } from "react-quilljs";
import fetch from "isomorphic-unfetch";
import { SkynetClient } from "skynet-js";
import { db } from "../../config/firebase.config";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

import { AuthContext } from "../../src/Context/authContext";
import { Router, useRouter } from "next/router";
// or const { useQuill } = require('react-quilljs');

// import "quill/dist/quill.snow.css"; // Add css for snow theme

export default function IndexPage() {
  const [tag, setTag] = useState("");

  const { loading, isFetching, user, dispatch } = useContext(AuthContext);

  const router = useRouter();

  const { quill, quillRef } = useQuill();

  // Insert Image(selected by user) to quill
  const insertToEditor = (url) => {
    const range = quill.getSelection();
    quill.insertEmbed(range.index, "image", url);
  };

  // Upload Image to Image Server such as AWS S3, Cloudinary, Cloud Storage, etc..
  const saveToServer = async (file) => {
    // const body = new FormData();
    //   body.append('file', file);
    const portal =
      window.location.hostname === "localhost"
        ? "https://siasky.net"
        : undefined;
    const client = new SkynetClient(portal);
    //    console.log(file);
    const { skylink } = await client.uploadFile(file);
    const skylinkUrl = await client.getSkylinkUrl(skylink);

    insertToEditor(skylinkUrl);
  };

  // Open Dialog to select Image File
  const selectLocalImage = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = () => {
      const file = input.files[0];
      saveToServer(file);
    };
  };
  const [isload, isloadSet] = useState(false);

  useEffect(() => {
    if (user == null) {
      router.push("/login");
    }
    if (quill) {
      quill.getModule("toolbar").addHandler("image", selectLocalImage);
      quill.clipboard.dangerouslyPasteHTML("<h1>React Hook for Quill!</h1>");
      quill.setText("123");

      quill.on("text-change", (delta, oldDelta, source) => {});
    }
  }, [quill]);

  let submitTrigger = async (e) => {
    isloadSet(!isload);
    //    console.log("subtriggert");
    //   console.log(quill.root.innerHTML);    constant change event
    const querySnapshot = collection(db, "posts");
    addDoc(querySnapshot, {
      post: quill.root.innerHTML,
      timestamp: serverTimestamp(),
    }).then(async (docRef) => {
      //post id
      let userRefs = doc(db, "posts/" + docRef.id);
      console.log(userRefs);
      if (tag != "") {
        const ref = doc(db, "tag", tag);
        const specifcCollectionDoc = await getDoc(ref);

        if (specifcCollectionDoc.data() != null) {
          await setDoc(ref, {
            id: [...specifcCollectionDoc.data().id, userRefs],
          });
        } else {
          await setDoc(ref, {
            id: [userRefs],
          });
        }
      }

      // console.log(docRef._key.path);

      console.log("submited");
      isloadSet(false);
    });
  };

  return (
    <>
      <div style={{ marginTop: "40px", width: "100vw", height: "80vh" }}>
        <div ref={quillRef} />
        <div>
          <input onChange={(e) => setTag(e.target.value)} type="text" />
          <button
            style={{
              marginTop: "1vh",
              border: "none",
              backgroundColor: "lightgray",
              padding: "20px",
            }}
            onClick={submitTrigger}
          >
            {isload ? "loading" : "Submit"}
          </button>
        </div>
      </div>
    </>
  );
}
