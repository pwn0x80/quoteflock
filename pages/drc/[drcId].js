import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase.config";
import Effec from "../../component/drcpost";
import Tag from "../../component/tag";
import { useRouter } from "next/router";
export default function Drc(context) {
  const { post } = context;
  const { tags } = context;

  return (
    <div style={{ marginTop: "100px" }}>
      <Tag tag={tags} />
      <Effec val={post} />
    </div>
  );
}

export async function getStaticProps(context) {
  let tags = [];
  const docRefs = await getDocs(collection(db, "tag"));
  docRefs.forEach((e) => {
    tags.push(e.id);
  });
  let { params } = context;
  //console.log(context.params.drcId);
  let tagUrlData = [];
  const docRef = await getDoc(doc(db, "tag", params.drcId));
  await Promise.all(
    docRef.data().id.map(async (docRefId) => {
      const postsDocData = await getDoc(doc(db, docRefId.path));
      tagUrlData.push({
        id: postsDocData.id,
        post: postsDocData.data().post,
      });
    })
  );
  //  console.log("tagUrlData: " + tagUrlData);
  return {
    props: {
      post: tagUrlData,
      tags,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const docRef = await getDocs(collection(db, "tag"));
  let ret = [];
  docRef.forEach((e) => {
    ret.push({ params: { drcId: `${e.id}` } });
  });

  return {
    paths: ret,
    fallback: "blocking",
  };
}
