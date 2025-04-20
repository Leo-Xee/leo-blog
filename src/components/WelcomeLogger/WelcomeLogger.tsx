/* eslint-disable no-console */

'use client';

import { useEffect } from 'react';

function WelcomeLogger() {
  useEffect(() => {
    console.log(`
    ██╗     ███████╗ ██████╗        ██████╗ ██╗      ██████╗  ██████╗
    ██║     ██╔════╝██╔═══██╗       ██╔══██╗██║     ██╔═══██╗██╔════╝
    ██║     █████╗  ██║   ██║       ██████╔╝██║     ██║   ██║██║  ███╗
    ██║     ██╔══╝  ██║   ██║       ██╔══██╗██║     ██║   ██║██║   ██║
    ███████╗███████╗╚██████╔╝██╗    ██████╔╝███████╗╚██████╔╝╚██████╔╝
    ╚══════╝╚══════╝ ╚═════╝ ╚═╝    ╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝
                         *~ Welcome to Leo's Blog ~*
    `);
  }, []);

  return null;
}

export default WelcomeLogger;
