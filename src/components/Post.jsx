import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/dinizeduardo.png" className={styles.avatar} />
          <div className={styles.authorInfo}>
            <strong>Eduardo Diniz</strong>
            <span>Back end developer</span>
          </div>
        </div>

        <time title="14 de agosto às 00:00:26" dateTime="2023 08 14 00:00:26">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galera</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non provident laborum quis voluptate similique. Ratione ea asperiores optio nisi ad ipsam rem aspernatur ducimus! Eveniet ipsum quaerat consectetur voluptas aut.</p>
        <p><a href=""> Bla bla </a></p>
        <p>
          <a href="">#novoprojeto </a>{' '}
          <a href="">#nlw</a>{' '}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentario'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}