<<<<<<< HEAD
import Image from "next/image";

export default function Spinner(){
    return(
        <Image width={100} height={100} alt="" src={"/loading.svg"} />
=======
import Image from 'next/image';
import styles from '../styles/spinner.module.css';

export default function Spinner() {
    return (
        <div className={styles.spinner}>
            <Image width={50} height={50} alt='' src={'/loading.svg'} />
        </div>
>>>>>>> ab65f2a0412143becd4a0b73531deab79d653c0e
    );
}