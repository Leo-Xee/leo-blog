import React from 'react';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { INTRODUCTION } from '@/constants';
import * as styles from './Introduction.css';
import { Particles } from '../Particles';

function Introduction() {
  const { title, location, description } = INTRODUCTION;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>

      <div className={styles.location}>
        <MapPinIcon width={20} height={20} />
        <span>{location}</span>
      </div>

      <div className={styles.description}>{description}</div>

      <Particles />
    </div>
  );
}

export default Introduction;
