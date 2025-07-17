// components/EventDetail.jsx
import styles from './EventDetail.module.css';

export default function EventDetail({ name, description, date, image }: any) {
  return (
    <div className={styles.container}>
      <div
        className={styles.heroImage}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className={styles.content}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.description}>{description}</p>
        <p className={styles.date}>Event Date: {date}</p>
      </div>
    </div>
  );
}
