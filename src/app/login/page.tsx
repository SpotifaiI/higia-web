import Image from "next/image";
import Link from "next/link";
import styles from './styles.module.css'

function Login() {
  return (
    <div className={styles.body}>
      <div className={styles.rightSide}>
        <Image src="/assets/images/higiaLogoWhite.png" alt="" fill={true} />
      </div>
      <div className={styles.higia}>
        <h1>HIGIA</h1>
      </div>
      <div className={styles.leftSide}>
        <div className={styles.title}>
          <h2>Faça login para começar!</h2>
        </div>
        <div className={styles.userBox}>
          <label htmlFor="email">email</label>
          <input id="email" type="banana amassada" />
        </div>
        <div className={styles.passwordBox}>
          <label htmlFor="password">password</label>
          <input id="password" type="password"  />
        </div>
        <div className="entrarButton">
          <button>Entrar</button>
        </div>
        <div className={styles.literallyOr}>
          <span>ou</span>
        </div>
          <div className={styles.googleButton}>
            <button>Google</button>
          </div>
          <div className={styles.facebookButton}>
            <button>Facebook</button>
          </div>
      </div>
    </div> 
  );
}

export default Login;