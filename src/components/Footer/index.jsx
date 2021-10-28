import styles from "./footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";


export function Footer() {


        return( 
            <footer className={styles.Styledfooter}>
    
                <h1>Footer<span>!</span></h1>
    
        
                <div className={styles.socialDiv} id="contato">
                    <a target="_blank" rel="noreferrer" className ="linkedin" href="https://www.linkedin.com/in/william-kszan-79b292105/">
                        <FontAwesomeIcon icon={faLinkedin} size="3x"/>
                    </a>
                    <a target="_blank" rel="noreferrer" className ="github" href="https://github.com/Verthos">
                        <FontAwesomeIcon icon={faGithub} size="3x"/>
                    </a>
                    <a target="_blank" rel="noreferrer" className ="instagram" href="https://www.instagram.com/wilkszan/">
                        <FontAwesomeIcon icon={faInstagram} size="3x"/>
                        
                    </a>
    
                </div>
                
            </footer>
            
        )

    }