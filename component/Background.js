import Image from "next/image";
import styles from "../styles/background.module.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export default function getStaticProps() {
  const [t, tSet] = useState(1);
  const [t2, t2Set] = useState(1);
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  let chngtextHandler = async () => {
    for (let i = 0; i < 6; i++) {
      let t = Math.floor(Math.random() * 1 + 0.5);
      let t2 = Math.floor(Math.random() * 1 + 0.5);
      tSet(t);
      t2Set(t2);
      sleep(80000);
      //    console.log(t, t2);
    }
  };

  return (
    <>
      <div id="home" className={styles.container}>
        <div onMouseOver={chngtextHandler} className={styles.background}>
          <motion.div
            animate={{ x: 100 }}
            transition={{ delay: 1 }}
            whileHover={{
              scale: 1.2,
              transition: 0.2,
              rotate: [0, 10, -10, 0],
              scale: 1.3,
            }}
            className={styles.wrapperbox}
          >
            {t ? (
              <div className={styles.bgtext}>Deepak Roy</div>
            ) : t2 ? (
              <div className={styles.bgtextin}>Quotes</div>
            ) : (
              <div className={styles.bgtextin2}>कविता</div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
}
