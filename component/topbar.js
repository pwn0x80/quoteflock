import styles from "../styles/topbar.module.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { ImPen } from "react-icons/im";
import { SiAboutdotme } from "react-icons/si";
import { BiHomeAlt } from "react-icons/bi";
import Link from "next/link";
import { IoTrailSignOutline } from "react-icons/io5";
import { motion } from "framer-motion";
export default function topbar() {
  const squareVariants = {
    visible: {
      opacity: 1,
    },
    hidden: { opacity: 0, transition: { delay: 2 } },
  };
  return (
    <motion.div
      variants={squareVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 10 }}
    >
      <div className={styles.topWrapper}>
        <div className={styles.leftwrapper}>
          <div className={styles.leftboxwrapper}>
            <Link href="https://www.instagram.com/choudhuryroydeepak/">
              <span className={styles.icon}>
                {" "}
                <AiOutlineInstagram size="1.5rem" />
              </span>
            </Link>

            <Link href="/drc">
              <span className={styles.icon}>
                {" "}
                <ImPen size="1.5rem" />
              </span>
            </Link>
            <Link href="/login" scroll={false}>
              <span className={styles.icon}>
                <IoTrailSignOutline size="1.5rem" />
              </span>
            </Link>
          </div>
        </div>

        <div className={styles.rightwrapper}>
          <div className={styles.rightboxwrapper}>
            <Link href="/#home" scroll={false}>
              <span className={styles.icon}>
                {" "}
                <BiHomeAlt size="1.5rem" />
              </span>
            </Link>
            <Link href="/#scrollAboutMe" scroll={false}>
              <span className={styles.icon}>
                {" "}
                <SiAboutdotme size="1.5rem" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
