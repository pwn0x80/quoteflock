import Image from "next/image";
import styles from "../styles/about.module.css"
import {MdOutlineDriveFileRenameOutline} from 'react-icons/md';
import {AiOutlineMail} from 'react-icons/ai';
import Quotes from './insirationalQuotes';

export default function About() {
  
  return (
      <div id="scrollAboutMe" className={styles.aboutMe}>
      <div className={styles.aboutMeWrapper}>
        <div className={styles.aboutWrapper}>
          <Image className={styles.aboutPic} src="/deepak.jpg"  width="500" height="500"  />
        </div>
        <div className={styles.aboutText}>
          <span className={styles.high}>
        <h2 style={{display: 'flex', alignSelf:'center', alignItems:'center', alignContent:'center' }}>  <MdOutlineDriveFileRenameOutline style={{marginRight:20}}/>
           Deepak Roy Choudhury </h2>
           <span style={{display: 'flex', alignSelf:'center', alignItems:'center', alignContent:'center' }}> <h2><AiOutlineMail style={{marginRight:20}}/></h2> 
           dpakrc26@gmail.com </span>
           </span>
           <Quotes/>
        </div>
        </div> 
      </div>
    
  )
}
