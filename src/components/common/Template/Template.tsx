import React, { PropsWithChildren } from 'react';
import * as styles from './Template.css';

type TemplateProps = PropsWithChildren;

function Root({ children }: TemplateProps) {
  return <div className={styles.root}>{children}</div>;
}

function Header({ children }: TemplateProps) {
  return <div className={styles.header}>{children}</div>;
}

function Main({ children }: TemplateProps) {
  return <main className={styles.main}>{children}</main>;
}

function Aside({ children }: TemplateProps) {
  return <aside className={styles.aside}>{children}</aside>;
}

Root.displayName = 'Root';
Header.displayName = 'Header';
Main.displayName = 'Main';
Aside.displayName = 'Aside';

export const Template = { Root, Header, Main, Aside };
