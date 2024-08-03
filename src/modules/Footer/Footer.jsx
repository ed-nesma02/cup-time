import { Container } from '../Container/Container';
import s from './Footer.module.css';
import { FooterContacts } from './FooterContacts/FooterContacts';
import { FooterInfo } from './FooterInfo/FooterInfo';
import { FooterMenu } from './FooterMenu/FooterMenu';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container className={s.footer__container}>
        <a href="/" className={s.footer__logoLink}>
          <img
            src="/img/logo.svg"
            alt="Логотип Cup Time"
            className={s.footer__logo}
          />
        </a>
        <FooterMenu />
        <FooterInfo />
        <FooterContacts />
      </Container>
    </footer>
  );
};
