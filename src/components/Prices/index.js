import React from 'react';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Tooltip } from 'react-tooltip'

export default function Prices() {
  const { i18n } = useDocusaurusContext();
  const isRULocale = i18n.currentLocale === 'ru'
  const titleRu = 'Цена';
  const titleEn = 'Price';
  const title = isRULocale ? titleRu : titleEn;
  const priceLink = isRULocale ? 'https://capmonster.cloud/prices?culture=ru-RU' : 'https://capmonster.cloud/prices?culture=en-US';

  const subTitle = isRULocale ? 'Прокси включены в цену*: экономьте с CapMonster Cloud' : 'Proxy price inclusions*: save with CapMonster Cloud';

  const priceSubTooltipText = isRULocale ? 'За исключением заданий Cloudflare Bot Challenge, Cloudflare Turnstile' : 'Excluding Cloudflare Bot Challenge, Cloudflare Turnstile';
  

  return (
    <section className={styles.pricesWrap}>
      <div className="container">
        <div className={styles.mainTitle}>{title}</div>
        <div className={`${styles.subTitle} priceSub`}>{subTitle}</div>
        <Tooltip anchorSelect=".priceSub" place="top" style={{ backgroundColor: 'white', color: "#222" }}>
          {priceSubTooltipText}
        </Tooltip>
        <div className={styles.prices}>
          <iframe src={priceLink} />
        </div>
      </div>
    </section>
  );
}
