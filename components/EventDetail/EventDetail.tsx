// components/EventDetail.jsx
import Link from 'next/link';
import styles from './EventDetail.module.css';
import { useRouter } from 'next/router';

export default function EventDetail({ name, description, date, image }: any) {
  const router = useRouter();
    const id = router.query.id
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
        <h1>Vendors</h1>
        <Link href={`/details/${id}/Foodpanda`}>Foodpanda</Link> <br/>
        <Link href={`/details/${id}/CokeStudio`}>Coke Studio</Link>
      </div>
    </div>
  );
}
