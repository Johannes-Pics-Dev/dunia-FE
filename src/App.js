import './App.scss'
import Header from './components/Header'
import Experience from './components/Experience'
import Partner from './components/Partner'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import { useTranslation } from 'react-i18next'
import soundtrackMp3 from './assets/soundtrack.mp3'
import soundtrackOgg from './assets/soundtrack.ogg'
import { Fragment, useEffect } from 'react'
import ReactAudioPlayer from 'react-audio-player'

const langs = {
  it: { nativeName: 'Italian' },
  en: { nativeName: 'English' }
}

function App() {
  const { i18n } = useTranslation()

  return (
    <Fragment>
      <div className='flagWrapper'>
        {Object.keys(langs).map((lng) => (
          <button
            type='submit'
            key={lng}
            className={langs[lng].nativeName + 'Flag'}
            onClick={() => i18n.changeLanguage(lng)}
            disabled={lng === i18n.resolvedLanguage}
          />
        ))}
      </div>
      <Header />
      <iframe
        src={soundtrackOgg}
        allow='autoplay'
        id='iframeAudio'
        className='Sound'
      />

      <Experience />
      <Partner />
      <Contacts />
      <Footer />
    </Fragment>
  )
}

export default App
