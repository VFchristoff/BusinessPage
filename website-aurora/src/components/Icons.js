import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faFacebook,
    faTelegram,
    faTwitter,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';
import React from 'react';


const LinkedInIcon = () => (
    <FontAwesomeIcon icon={faLinkedin} style={{ color: "text-titleColor", fontSize: "25px" }} />
);

const FacebookIcon = () => (
    <FontAwesomeIcon icon={faFacebook} style={{ color: "text-titleColor", fontSize: "25px" }} />
);

const TelegramIcon = () => (
    <FontAwesomeIcon icon={faTelegram} style={{ color: "text-titleColor", fontSize: "25px" }} />
);

const TwitterIcon = () => (
    <FontAwesomeIcon icon={faTwitter} style={{ color: "text-titleColor", fontSize: "25px" }} />
);
const InstagramrIcon = () => (
    <FontAwesomeIcon icon={faInstagram} style={{ color: "text-titleColor", fontSize: "25px" }} />
);

export {
    LinkedInIcon,
    FacebookIcon,
    TelegramIcon,
    TwitterIcon,
    InstagramrIcon,
};
