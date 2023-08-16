import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src='https://github.com/dinizeduardo.png' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Eduardo Diniz</strong>
              <time title="14 de agosto às 00:00:26" dateTime="2023 08 14 00:00:26">Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentario'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabens!! </p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}