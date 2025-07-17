// components/EventCard.jsx
import Link from 'next/link';
import styles from './Event.module.css';

export default function Event(props: any) {
   // console.log(props.image)
  return (
    <div className={styles.card}>
      <img src={props.image} alt="Missing img" className={styles.image}/>
      <div className={styles.details}>
        <h1 className={styles.name}>Event Name: {props.name}</h1>
        <p className={styles.description}>Event Description: {props.description}</p>
        <strong className={styles.date}>Event Date: {props.date}</strong>
        <Link href={`/details/${props.id}`}><button>Explore Event</button></Link>
      </div>
    </div>
  );
}
