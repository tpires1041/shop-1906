import Image from 'next/image';
import styles from '../styles/spinner.module.css';

export default function Spinner() {
    return (
        <div className={styles.spinner}>
            <Image width={50} height={50} alt='' src={'/loading.svg'} />
        </div>
    );
}