import Link from 'next/link';
import styles from "./styles/notFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <h2>Not Found</h2>
      <p>Não conseguimos achar esta rota!</p>
      <Link href="/">Voltar para Home</Link>
    </div>
  )
}