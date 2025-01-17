import React from 'react';
import FullWidthBox from 'components/FullWidthBox';
import SEO from 'components/SEO';
import { css } from '@emotion/core';

const Impressum = () => {
  return (
    <div>
      <SEO
        title="Tante Hilde - Impressum"
        description="Dein virtueller Marktplatz im Allgäu - Impressum"
        image="/Header-Tantehilde-Laden-Allgaeu.png"
        // pathname={location.pathname}
        headerImage="/Header-Tantehilde-Laden-Allgaeu.png"
      />
      <article>
        <FullWidthBox
          css={css`
            margin-top: 50px;
          `}
        >
          <h1>Impressum</h1>
          <p>Angaben gemäß § 5 TMG </p>
          <p>Julia Leeflang & Marc Radziwill</p>
          <p>
            Studio Leeflang — Agentur für nachhaltiges Marketing
            <br /> Ulrich-Mair-Str. 15 87435 Kempten, Allgäu
            <br /> Vertreten durch Julia Leeflang ​<br />
            Telefon: +49 (0) 831 540 696 70
            <br />
            E-Mail: hallo@studio-leeflang.com
            <br />
            Website: https://www.studio-leeflang.com/ ​ <br />
            Umsatzsteuernr. DE322271921
          </p>
          <p>
            Marc Radziwill <br /> Ostbahnhofstraße 7 87437, Kempten (Allgäu),
            Bayern <br />
            Telefon: +49 176 830 79 151
            <br /> Email: hallo@marcradziwill.de
            <br /> UMSATZSTEUER-ID Umsatzsteuer-Identifikationsnummer gemäß §27
            a Umsatzsteuergesetz: DE 299 749 233
          </p>
          <p>
            STREITSCHLICHTUNG Die Europäische Kommission stellt eine Plattform
            zur Online-Streitbeilegung (OS) bereit:
            https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage.
            Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht
            bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
          <p>
            HAFTUNG FÜR INHALTE Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG
            für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
            verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
            jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf
            eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
            Entfernung oder Sperrung der Nutzung von Informationen nach den
            allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche
            Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
            konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
            entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
            entfernen.
          </p>
          <p>
            HAFTUNG FÜR LINKS Unser Angebot enthält Links zu externen Websites
            Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können
            wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die
            Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
            Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden
            zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten
            Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
            nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </p>
          <p>
            URHEBERRECHT Die durch die Seitenbetreiber erstellten Inhalte und
            Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
            Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
            Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
            gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
            entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
            werden wir derartige Inhalte umgehend entfernen.
          </p>{' '}
        </FullWidthBox>
      </article>
    </div>
  );
};
export default Impressum;
