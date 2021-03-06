import '../styles/global.css';

import { ChallegesProvider } from '../contexts/ChallengesContext';

function MyApp({ Component, pageProps }) {
  return (
    <ChallegesProvider>
      <Component {...pageProps} />
    </ChallegesProvider>
  );
}

export default MyApp;
