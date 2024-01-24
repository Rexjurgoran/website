import { faGithub, faXing, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Profile } from "./profile";

export const PROFILES: Profile[] = [
    {icon: faGithub, link: 'https://github.com/Rexjurgoran', name: 'Rexjurgoran (Marvin)'},
    {icon: faLinkedin, link: 'https://www.linkedin.com/in/marvin-hen%C3%9Fler-63a8091b0/', name: 'Marvin Henßler'},
    {icon: faXing, link: 'https://www.xing.com/profile/Marvin_Henssler/cv', name: 'Marvin Henßler'},
    {icon: faInstagram, link: 'https://instagram.com/marvinhenssler?igshid=MzNINGNkZWQ4Mg==', name: 'marvinhenssler'},
    {icon: faEnvelope, link: 'mailto:marvinhenssler@aol.com', name: 'marvinhenssler@aol.com'}
];
