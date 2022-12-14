/* eslint-disable no-unused-vars */
import Pentesting from '../pages/Pentesting';
import Phishing from '../pages/Phishing';
import Practice from '../pages/Practice';
import Exploit from '../pages/Exploit';
import Tools from '../pages/Tools';
import Ngrok from '../pages/Ngrok';
import Scrcpy from '../pages/Scrcpy';
import Zphisher from '../pages/Zphisher';
import Seeker from '../pages/Seeker';
import Metasploit from '../pages/Metasploit';
import Tor from '../pages/Tor';

import Quiz from '../pages/Quiz';
import Results from '../pages/Results';

import Footer from './Footer';

function Base() {
  return (
    <>
      <div className="bg-zinc-800 h-full">
        <Pentesting />
        <Phishing />
        <Practice />
        <Exploit />
        <Tools />
        <Ngrok />
        <Scrcpy />
        <Zphisher />
        <Seeker />
        <Metasploit />
        <Tor />
        <Quiz />
        <Results />
        <Footer />
      </div>
    </>
  );
}

export default Base;
