import React from 'react';
import { MapPinIcon } from '@heroicons/react/24/outline';
import * as styles from './Introduction.css';
import { Particles } from '../Particles';

function Introduction() {
  const introText = {
    title: "Hi, I'm Leo.",
    location: 'Seoul, South Korea',
    description: `사용자 경험에 대한 고민이 쌓여야 아름다운 제품이 만들어진다고 생각해요. 아름다움에 이끌려 늘 그 깊이를 탐구해요.
                  작은 루틴과 프로세스에서 시작된 관성이 자연스레 성장으로 이끈다고 생각해요.
                  늘 큰 그림에 초점을 맞추려고하고 디테일에 매몰되지 않으려고 해요.
                  맞닥뜨린 문제를 해결하며 알게된 정보에 즐거움을 느껴요.
                  스트레스는 주로 할 수 있는 일을 하지 않을 때 생긴다고 생각해서 항상 경계하며 지내요.`,
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{introText.title}</h1>

      <div className={styles.location}>
        <MapPinIcon width={20} height={20} />
        <span>{introText.location}</span>
      </div>

      <div className={styles.description}>{introText.description}</div>

      <Particles />
    </div>
  );
}

export default Introduction;
