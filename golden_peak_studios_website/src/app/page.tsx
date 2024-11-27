"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [isEnglish, setIsEnglish] = useState(false);
  const [expandMulatschakCompanion, setExpandMulatschakCompanion] = useState(false);
  const [expandPrivacyPolicy, setExpandPrivacyPolicy] = useState(false);
  const [expandImprint, setExpandImprint] = useState(false);
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsPlaceholderVisible(window.innerWidth >= 800);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="app-background"/>
      <div className="app-container">
        <div className="header-container">
          {isPlaceholderVisible && <div className="flag-placeholder" />}
          <Image 
            src="/images/logo_company_invert.png" 
            alt="Centered Image"
            layout="responsive"
            width={575} 
            height={152} 
            className="centered-image"
          />
          <a className="clickable-image-link" onClick={() => setIsEnglish(!isEnglish)}>
            <Image 
              src={isEnglish ? "/images/flag_de.png" : "/images/flag_en.png"}
              alt="Clickable Flag" 
              width={32}
              height={32}
              className="flag"
            />
          </a>
        </div>
        { isEnglish ? (
          <div>
            <div className="horizontal-line"/>
            <div className="main-container-part">
              <div className="section-header-container">
                <h1 className="section-header-text">Mulatschak Companion</h1>
                <a className={expandMulatschakCompanion ? "arrow-icon-down" : "arrow-icon-up"} onClick={() => setExpandMulatschakCompanion(!expandMulatschakCompanion)}>
                  <Image 
                    src={expandMulatschakCompanion ? "/images/arrow-down.png" : "/images/arrow-up.png"}
                    alt="Clickable Arrow" 
                    width={32}
                    height={32}
                  />
                </a>
              </div>
              {expandMulatschakCompanion ? (
                <div className="section-content">
                  <p>
                    If you have created an account in our Mulatschak Companion App, you can log into the app and navigate to your profile by clicking the navigation button in the top right corner. Under your profile information, there is a button to delete your account. Once you confirm this action, it will be executed immediately, and the app will notify you upon successful deletion. If you no longer have access to your account, for example, if you&apos;ve lost access to the email you used for registration, you can send an email to <a href="mailto:goldenpeakstudios@outlook.com" className="email-link">goldenpeakstudios@outlook.com</a> at any time. Your request will then be processed promptly.
                  </p>
                </div>
              ) : null}
            </div>
            <div className="horizontal-line"/>
            <div className="main-container-part">
              <div className="section-header-container">
                <h1 className="section-header-text">Privacy Policy</h1>
                <a className={expandPrivacyPolicy ? "arrow-icon-down" : "arrow-icon-up"} onClick={() => setExpandPrivacyPolicy(!expandPrivacyPolicy)}>
                  <Image 
                    src={expandPrivacyPolicy ? "/images/arrow-down.png" : "/images/arrow-up.png"}
                    alt="Clickable Arrow" 
                    width={32}
                    height={32}
                  />
                </a>
              </div>
              {expandPrivacyPolicy ? (
                <div className="section-content">
                  <p className="text-bold text-margin-large">1. Introduction:</p>
                  <p>Welcome to Golden Peak Studios. We value your privacy and are committed to protecting your personal data. This privacy policy explains what information we collect, how we use it, and how we safeguard it.</p>
                  <p className="text-bold text-margin-large">2. Data Controller:</p>
                  <p>Golden Peak Studios e.U. is the data controller responsible for processing your personal data in accordance with the General Data Protection Regulation (GDPR). For contact details, please refer to the imprint of this website.</p>
                  <p className="text-bold text-margin-large">3. Collection and Processing of Personal Data:</p>
                  <p>In general, you can use our Apps without providing personal data. Where personal data (such as your name, email address, or usage data) is collected, this is done on a voluntary basis whenever possible. This data will not be shared with third parties without your explicit consent.</p>
                  <p className="text-bold text-margin-large">4. Data We Collect:</p>
                  <p>
                    <span className="text-bold">- Usage Data:</span> We collect information about how you use our Apps, such as game behavior, interactions within the Apps, session duration, ...
                  </p>
                  <p>
                    <span className="text-bold">- Technical Data:</span> We collect technical information, such as the type of device, operating system version, unique device identifiers, IP address, etc.
                  </p>
                  <p>
                    <span className="text-bold">- Personal Data:</span> If you choose to create an account in one of our Apps, we collect personal information such as your name, email address, and other account details as needed.
                  </p>
                  <p className="text-bold text-margin-large">5. Purpose of Data Collection:</p>
                  <p>We use the data we collect for the following purposes:</p>
                  <p>- To provide & improve the Apps and their features.</p>
                  <p>- To analyze usage to optimize the experience.</p>
                  <p>- To offer tech support and troubleshoot issues.</p>
                  <p>- To communicate with you about updates, support requests, or other relevant information.</p>
                  <p className="text-bold text-margin-large">6. Sharing Data with Third Parties:</p>
                  <p>We do not share your data with third parties unless it is required by law or explicitly requested by you.</p>
                  <p className="text-bold text-margin-large">7. Data Storage and Deletion:</p>
                  <p>We retain your personal data only as long as necessary for the purposes mentioned above or as required by law. After this period, the data will be deleted or anonymized.</p>
                  <p className="text-bold text-margin-large">8. Data Security:</p>
                  <p>We take appropriate technical and organizational measures to protect your data from unauthorized access, loss, destruction, or manipulation.</p>
                  <p className="text-bold text-margin-large">9. Your Rights:</p>
                  <p>You have the right to request access to your personal data stored by us. You also have the right to correct, block, or delete this data. Furthermore, you may object to the processing of your data at any time and have the right to data portability.</p>
                  <p className="text-bold text-margin-large">10. Changes to this Privacy Policy:</p>
                  <p>We reserve the right to update this privacy policy occasionally to reflect changes in our Apps or legal requirements. The current version of the privacy policy will always be available within our Apps and on this website.</p>
                  <p className="text-bold text-margin-large">11. Contact:</p>
                  <p>If you have any questions about this privacy policy or the processing of your personal data, you can contact us at the details provided in the imprint of this website.</p>
                </div>
              ) : null}
            </div>
            <div className="horizontal-line"/>
            <div className="main-container-part">
              <div className="section-header-container">
                <h1 className="section-header-text">Imprint</h1>
                <a className={expandImprint ? "arrow-icon-down" : "arrow-icon-up"} onClick={() => setExpandImprint(!expandImprint)}>
                  <Image 
                    src={expandImprint ? "/images/arrow-down.png" : "/images/arrow-up.png"}
                    alt="Clickable Arrow" 
                    width={32}
                    height={32}
                  />
                </a>
              </div>
              {expandImprint ? (
                <div className="section-content">
                  <p className="text-bold text-margin-large">Company Name:</p>
                  <p>Golden Peak Studios e.U.</p>
                  <p className="text-bold text-margin-small">Owner:</p>
                  <p>Marco Venditto BSc</p>
                  <p className="text-bold text-margin-small">Legal Form:</p>
                  <p>registered sole proprietorship</p>
                  <p className="text-bold text-margin-small">Business Purpose:</p>
                  <p>IT services (video game & web applications)</p>
                  <p className="text-bold text-margin-large">VAT ID Number:</p>
                  <p>-</p>
                  <p className="text-bold text-margin-small">Company Register Number:</p>
                  <p>FN 640307d</p>
                  <p className="text-bold text-margin-small">Company Register Court:</p>
                  <a href="https://www.justiz.gv.at/lg-salzburg/landesgericht-salzburg.2f9.de.html" target="_blank" rel="noopener noreferrer">Salzburg Regional Court</a>
                  <p className="text-bold text-margin-large">Company Headquarters:</p>
                  <p>Johannes-Filzer-Straße 58 Top 12 |</p>
                  <p>5020 Salzburg | Austria</p>
                  <p className="text-bold text-margin-small">Phone Number:</p>
                  <p>+43 699 12457909</p>
                  <p className="text-bold text-margin-small">E-Mail:</p>
                  <a href="mailto:goldenpeakstudios@outlook.com">goldenpeakstudios@outlook.com</a>
                  <p className="text-bold text-margin-large">Memberships with the Chamber of Commerce Organisation:</p>
                  <p>{/* Austrian Chamber of Commerce, Salzburg Chamber of Commerce, Specialised Association UBIT (Business consulting, accounting and IT) */}-</p>
                  <p className="text-bold text-margin-small">Professional Law and Applicable Legislation:</p>
                  <div className="text-box">
                    <a href="https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10007517" target="_blank" rel="noopener noreferrer">Trade Regulation</a>
                    <span>: </span>
                    <a href="http://www.ris.bka.gv.at/" target="_blank" rel="noopener noreferrer">www.ris.bka.gv.at</a>
                  </div>
                  <p className="text-bold text-margin-small">Supervisory/Trade Authority:</p>
                  <a href="https://www.stadt-salzburg.at/home" target="_blank" rel="noopener noreferrer">Municipality of the City of Salzburg</a>
                  <p className="text-margin-large">Consumers have the possibility to submit complaints to the EU online dispute resolution platform:</p>
                  <a href="http://ec.europa.eu/odr" target="_blank" rel="noopener noreferrer">http://ec.europa.eu/odr</a>
                  <p>You can also send any complaints to the e-mail address given above.</p>
                  <p className="text-bold text-margin-large">Sources:</p>
                  <div className="text-box">
                    <span>- Uicons by </span>
                    <a href="https://www.flaticon.com/uicons" target="_blank" rel="noopener noreferrer">Flaticon</a>
                  </div>
                  <div className="text-box">
                    <span>- </span>
                    <a href="https://www.flaticon.com/free-icons" target="_blank" rel="noopener noreferrer">icons created by Freepik - Flaticon</a>
                    <span>: </span>
                    <a href="https://www.flaticon.com/free-icons/uk-flag" target="_blank" rel="noopener noreferrer">Uk flag</a>
                    <span>, </span>
                    <a href="https://www.flaticon.com/free-icons/germany" target="_blank" rel="noopener noreferrer">Germany</a>
                  </div>
                  <p className="text-bold text-margin-large">Development:</p>
                  <p>This website was developed as a project of the courses for the Multimedia Master Project 2 in the 3rd and 4th semester of the Master&apos;s programme MultiMediaTechnology at the Salzburg University of Applied Sciences in Austria, in the Game & Simulation Engineering department, cohort MMT-M2023.</p>
                  <p className="text-margin-small">- Lead: Marco Venditto BSc</p>
                  <p>- Assistance: Jonas Kubesch BSc</p>
                </div>
              ) : null}
            </div>
          </div>
        ) : (
          <div>
            <div className="horizontal-line"/>
            <div className="main-container-part">
              <div className="section-header-container">
                <h1 className="section-header-text">Mulatschak Companion</h1>
                <a className={expandMulatschakCompanion ? "arrow-icon-down" : "arrow-icon-up"} onClick={() => setExpandMulatschakCompanion(!expandMulatschakCompanion)}>
                  <Image 
                    src={expandMulatschakCompanion ? "/images/arrow-down.png" : "/images/arrow-up.png"}
                    alt="Clickable Arrow" 
                    width={32}
                    height={32}
                  />
                </a>
              </div>
              {expandMulatschakCompanion ? (
                <div className="section-content">
                  <p>
                    Falls du einen Account in unserer Mulatschak Companion App angelegt hast, kannst du dich in der App einloggen und rechts oben in der Ecke mit dem Navigationsbutton zum deinem Profil gelangen. Unter deinen Profildaten gibt es einen Button, mit dem du deinen Account löschen kannst, was nach erneuter Bestätigung mit sofortiger Wirkung ausgeführt wird und von der App bei Erfolg bestätigt wird. Falls du keinen Zugang der zu deinem Account hast, weil du zum Beispiel keinen Zugriff mehr auf die E-Mail hast, die du für die Registrierung verwendet hast, kannst du jederzeit eine E-Mail an <a href="mailto:goldenpeakstudios@outlook.com" className="email-link">goldenpeakstudios@outlook.com</a> schicken. Deine Anfrage sollte dann zeitnahe bearbeitet werden.
                  </p>
                </div>
              ) : null}
            </div>
            <div className="horizontal-line"/>
            <div className="main-container-part">
              <div className="section-header-container">
                <h1 className="section-header-text">Datenschutzerklärung</h1>
                <a className={expandPrivacyPolicy ? "arrow-icon-down" : "arrow-icon-up"} onClick={() => setExpandPrivacyPolicy(!expandPrivacyPolicy)}>
                  <Image 
                    src={expandPrivacyPolicy ? "/images/arrow-down.png" : "/images/arrow-up.png"}
                    alt="Clickable Arrow" 
                    width={32}
                    height={32}
                  />
                </a>
              </div>
              {expandPrivacyPolicy ? (
                <div className="section-content">
                  <p className="text-bold text-margin-large">1. Einleitung:</p>
                  <p>Willkommen bei Golden Peak Studios. Wir legen großen Wert auf den Schutz Ihrer personenbezogenen Daten und möchten sicherstellen, dass Sie verstehen, wie wir Ihre Daten sammeln, verwenden und schützen. Diese Datenschutzerklärung erläutert die Art der Daten, die wir erfassen, und wie wir sie verarbeiten.</p>
                  <p className="text-bold text-margin-large">2. Verantwortliche Stelle:</p>
                  <p>Golden Peak Studios e.U. ist die verantwortliche Stelle für die Verarbeitung Ihrer personenbezogenen Daten im Sinne der Datenschutz-Grundverordnung (DSGVO). Die Kontaktdaten finden Sie im Impressum dieser Anwendung.</p>
                  <p className="text-bold text-margin-large">3. Erhebung und Verarbeitung personenbezogener Daten:</p>
                  <p>Die Nutzung unserer Apps ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit personenbezogene Daten (beispielsweise Name, E-Mail-Adresse oder Nutzungsdaten) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.</p>
                  <p className="text-bold text-margin-large">4. Welche Daten wir sammeln:</p>
                  <p>
                    <span className="text-bold">- Nutzungsdaten:</span> Wir erfassen Informationen darüber, wie Sie unsere Apps nutzen, z.B. Spielverhalten, Interaktionen innerhalb der Apps, Dauer der Nutzung, ...
                  </p>
                  <p>
                    <span className="text-bold">- Technische Daten:</span> Wir erfassen technische Informationen, wie z.B. den Gerätetyp, Betriebssystemversion, eindeutige Gerätekennungen, IP-Adresse, etc.
                  </p>
                  <p>
                    <span className="text-bold">- Personenbezogene Daten:</span> Wenn Sie sich entscheiden, ein Konto in einer unserer Apps zu erstellen, erfassen wir persönliche Informationen wie Ihren Namen, Ihre E-Mail-Adresse und gegebenenfalls andere Kontodaten.
                  </p>
                  <p className="text-bold text-margin-large">5. Zweck der Datenerhebung:</p>
                  <p>Wir verwenden die von uns erhobenen Daten für folgende Zwecke:</p>
                  <p>- Bereitstellung und Verbesserung der Apps und ihrer Funktionen.</p>
                  <p>- Analyse der Nutzung, um das Spielerlebnis zu optimieren.</p>
                  <p>- Technische Unterstützung und Fehlerbehebung.</p>
                  <p>- Kommunikation mit Ihnen über Updates, Support-Anfragen oder andere relevante Informationen.</p>
                  <p className="text-bold text-margin-large">6. Weitergabe von Daten an Dritte:</p>
                  <p>Wir geben Ihre Daten nicht an Dritte weiter, es sei denn, dies ist zur Erfüllung gesetzlicher Verpflichtungen erforderlich oder wird von Ihnen ausdrücklich gewünscht.</p>
                  <p className="text-bold text-margin-large">7. Speicherung und Löschung von Daten:</p>
                  <p>Wir speichern Ihre personenbezogenen Daten nur so lange, wie es für die oben genannten Zwecke erforderlich ist oder wie es gesetzlich vorgeschrieben ist. Nach Ablauf dieser Zeit werden die Daten gelöscht oder anonymisiert.</p>
                  <p className="text-bold text-margin-large">8. Sicherheit Ihrer Daten:</p>
                  <p>Wir ergreifen geeignete technische und organisatorische Maßnahmen, um Ihre Daten vor unbefugtem Zugriff, Verlust, Zerstörung oder Manipulation zu schützen.</p>
                  <p className="text-bold text-margin-large">9. Ihre Rechte:</p>
                  <p>Sie haben das Recht, Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten. Außerdem haben Sie das Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Darüber hinaus können Sie der Verarbeitung Ihrer Daten jederzeit widersprechen und haben das Recht auf Datenübertragbarkeit.</p>
                  <p className="text-bold text-margin-large">10. Änderungen der Datenschutzerklärung:</p>
                  <p>Wir behalten uns vor, diese Datenschutzerklärung gelegentlich zu aktualisieren, um Änderungen in unseren Apps oder rechtliche Anforderungen zu berücksichtigen. Die aktuelle Version der Datenschutzerklärung wird stets in unseren Apps und auf dieser Website verfügbar sein.</p>
                  <p className="text-bold text-margin-large">11. Kontakt:</p>
                  <p>Wenn Sie Fragen zu dieser Datenschutzerklärung oder der Verarbeitung Ihrer personenbezogenen Daten haben, können Sie uns unter den im Impressum dieser Website angegebenen Kontaktdaten erreichen.</p>
                </div>
              ) : null}
            </div>
            <div className="horizontal-line"/>
            <div className="main-container-part">
              <div className="section-header-container">
                <h1 className="section-header-text">Impressum</h1>
                <a className={expandImprint ? "arrow-icon-down" : "arrow-icon-up"} onClick={() => setExpandImprint(!expandImprint)}>
                  <Image 
                    src={expandImprint ? "/images/arrow-down.png" : "/images/arrow-up.png"}
                    alt="Clickable Arrow" 
                    width={32}
                    height={32}
                  />
                </a>
              </div>
              {expandImprint ? (
                <div className="section-content">
                  {expandImprint ? (
                    <div className="section-content">
                      <p className="text-bold text-margin-large">Firmenwortlaut:</p>
                      <p>Golden Peak Studios e.U.</p>
                      <p className="text-bold text-margin-small">Inhaber:</p>
                      <p>Marco Venditto BSc</p>
                      <p className="text-bold text-margin-small">Rechtsform:</p>
                      <p>eingetragenes Einzelunternehmen</p>
                      <p className="text-bold text-margin-small">Unternehmensgegenstand:</p>
                      <p>IT-Dienstleistungen (Videospiele & Webapplikationen)</p>
                      <p className="text-bold text-margin-large">UID-Nummer:</p>
                      <p>-</p>
                      <p className="text-bold text-margin-small">Firmenbuchnummer:</p>
                      <p>FN 640307d</p>
                      <p className="text-bold text-margin-small">Firmenbuchgericht:</p>
                      <a href="https://www.justiz.gv.at/lg-salzburg/landesgericht-salzburg.2f9.de.html" target="_blank" rel="noopener noreferrer">Landesgericht Salzburg</a>
                      <p className="text-bold text-margin-large">Firmesitz:</p>
                      <p>Johannes-Filzer-Straße 58 Top 12 |</p>
                      <p>5020 Salzburg | Österreich</p>
                      <p className="text-bold text-margin-small">Telefonnummer:</p>
                      <p>+43 699 12457909</p>
                      <p className="text-bold text-margin-small">E-Mail:</p>
                      <a href="mailto:goldenpeakstudios@outlook.com">goldenpeakstudios@outlook.com</a>
                      <p className="text-bold text-margin-large">Mitgliedschaften bei der Wirtschaftskammerorganisation:</p>
                      <p>{/* Wirtschaftskammer Österreich, Wirtschaftskammer Salzburg, Fachverband UBIT (Unternehmensberatung, Buchhaltung und IT) */}-</p>
                      <p className="text-bold text-margin-small">Berufsrecht und anwendbare Rechtsvorschriften:</p>
                      <div className="text-box">
                        <a href="https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10007517" target="_blank" rel="noopener noreferrer">Gewerbeordnung</a>
                        <span>: </span>
                        <a href="http://www.ris.bka.gv.at/" target="_blank" rel="noopener noreferrer">www.ris.bka.gv.at</a>
                      </div>
                      <p className="text-bold text-margin-small">Aufsichtsbehörde/Gewerbebehörde:</p>
                      <a href="https://www.stadt-salzburg.at/home" target="_blank" rel="noopener noreferrer">Magistrat Stadt Salzburg</a>
                      <p className="text-margin-large">Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform der EU zu richten:</p>
                      <a href="http://ec.europa.eu/odr" target="_blank" rel="noopener noreferrer">http://ec.europa.eu/odr</a>
                      <p>Sie können allfällige Beschwerde auch an die oben angegebene E-Mail-Adresse richten.</p>
                      <p className="text-bold text-margin-large">Quellen:</p>
                      <div className="text-box">
                        <span>- Uicons by </span>
                        <a href="https://www.flaticon.com/uicons" target="_blank" rel="noopener noreferrer">Flaticon</a>
                      </div>
                      <div className="text-box">
                        <span>- </span>
                        <a href="https://www.flaticon.com/free-icons" target="_blank" rel="noopener noreferrer">icons created by Freepik - Flaticon</a>
                        <span>: </span>
                        <a href="https://www.flaticon.com/free-icons/uk-flag" target="_blank" rel="noopener noreferrer">Uk flag</a>
                        <span>, </span>
                        <a href="https://www.flaticon.com/free-icons/germany" target="_blank" rel="noopener noreferrer">Germany</a>
                      </div>
                      <p className="text-bold text-margin-large">Entwicklung:</p>
                      <p>Diese Anwendung ist als Projekt der Lehrveranstaltungen zum Multimedia Masterprojekt 2 im 3. und 4. Semester des Master Studiengangs MultiMediaTechnology an der Fachhochschule Salzburg in Österreich, am Fachbereich Game & Simulation Engineering, Jahrgang MMT-M2023, entstanden.</p>
                      <p className="text-margin-small">- Leitung: Marco Venditto BSc</p>
                      <p>- Unterstützung: Jonas Kubesch BSc</p>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        ) }
      </div>
    </div>
  );
}
