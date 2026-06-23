const APP_STORE_URL = '#app-store-link-do-podmiany'
const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`

const screenshots = {
  home: assetUrl('screens/home.webp'),
  library: assetUrl('screens/library.webp'),
  detail: assetUrl('screens/detail.webp'),
  clips: assetUrl('screens/clips.webp'),
  settings: assetUrl('screens/settings.webp'),
  paywall: assetUrl('screens/paywall1.webp')
}

function AppIcon() {
  return (
    <div className="app-icon" aria-hidden="true">
      <span className="icon-stack">▰</span>
    </div>
  )
}

function AppStoreButton({ className = '' }) {
  return (
    <a className={`app-store-button ${className}`} href={APP_STORE_URL} aria-label="Pobierz ScreenClips z App Store">
      <span className="apple-mark" aria-hidden="true">●</span>
      <span>
        <small>Pobierz z</small>
        <strong>App Store</strong>
      </span>
    </a>
  )
}

function PhoneMockup({ src, alt, className = '' }) {
  return (
    <div className={`phone ${className}`}>
      <div className="phone-frame">
        <span className="phone-island" />
        <img src={src} alt={alt} loading="lazy" />
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, text }) {
  return (
    <article className="feature-card">
      <span className="feature-icon" aria-hidden="true">{icon}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}

function UseCase({ label, count, icon }) {
  return (
    <div className="use-case">
      <span aria-hidden="true">{icon}</span>
      <strong>{label}</strong>
      <small>{count}</small>
    </div>
  )
}

function Step({ number, title, text }) {
  return (
    <div className="step-card">
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

function App() {
  return (
    <main>
      <nav className="nav" aria-label="Główna nawigacja">
        <a className="brand" href="#top" aria-label="ScreenClips">
          <AppIcon />
          <span>ScreenClips</span>
        </a>
        <div className="nav-links">
          <a href="#jak-dziala">Jak działa</a>
          <a href="#funkcje">Funkcje</a>
          <a href="#prywatnosc">Prywatność</a>
          <AppStoreButton className="nav-cta" />
        </div>
      </nav>

      <section id="top" className="hero section-shell">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Organizer screenów na iPhone’a</div>
          <h1>Screeny przestają ginąć w Zdjęciach.</h1>
          <p className="lead">
            Zamieniaj luźne zrzuty ekranu w Clipy z nazwą, notatką i biblioteką. Bez konta, bez chmury, bez codziennego polowania po galerii jak archeolog z telefonem.
          </p>
          <div className="hero-actions">
            <AppStoreButton />
            <a className="secondary-link" href="#jak-dziala">Zobacz, jak to działa</a>
          </div>
          <div className="trust-row" aria-label="Najważniejsze cechy">
            <span>Bez konta</span>
            <span>Działa lokalnie</span>
            <span>Jednorazowy dostęp Premium</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Podgląd aplikacji ScreenClips">
          <div className="floating-card card-left">
            <strong>Biblioteki</strong>
            <small>Przepisy · Bilety · Nauka</small>
          </div>
          <PhoneMockup src={screenshots.home} alt="Ekran główny ScreenClips z bibliotekami i Clipami" className="hero-phone" />
          <div className="floating-card card-right">
            <strong>Clipy z kontekstem</strong>
            <small>Nazwa, notatka, screeny</small>
          </div>
        </div>
      </section>

      <section className="problem section-shell compact">
        <div className="section-heading">
          <span className="kicker">Problem</span>
          <h2>Zdjęcia są świetne do zdjęć. Do ważnych screenów, już mniej.</h2>
          <p>Paragony, przepisy, bilety, pomysły i fragmenty artykułów lądują obok selfie, memów i przypadkowych zdjęć sufitu. Ludzkość naprawdę wymyśliła chmurę, żeby potem nie móc znaleźć screena z adresem hotelu.</p>
        </div>
        <div className="problem-grid">
          <FeatureCard icon="▣" title="Screen znika w tłumie" text="Zapisujesz coś ważnego, a po tygodniu przewijasz galerię jak taśmę dowodową." />
          <FeatureCard icon="✎" title="Nie pamiętasz kontekstu" text="Sam obraz często nie wystarcza. ScreenClips pozwala dodać nazwę i notatkę." />
          <FeatureCard icon="☰" title="Tematy się mieszają" text="Zakupy, praca, podróże i nauka potrzebują osobnych miejsc, nie jednego worka w Zdjęciach." />
        </div>
      </section>

      <section id="jak-dziala" className="how section-shell">
        <div className="section-heading narrow">
          <span className="kicker">Jak działa</span>
          <h2>Trzy kroki. Bez systemu do zarządzania systemem.</h2>
        </div>
        <div className="steps">
          <Step number="01" title="Stwórz bibliotekę" text="Oddziel tematy: przepisy, rachunki, bilety, research, nauka albo cokolwiek jeszcze próbujesz utrzymać przy życiu." />
          <Step number="02" title="Dodaj Clipa" text="Clip to paczka wokół jednego tematu. Ma nazwę, opis i swoje screeny." />
          <Step number="03" title="Wracaj bez szukania" text="Otwierasz bibliotekę, wybierasz Clipa i masz wszystkie materiały razem." />
        </div>
        <div className="showcase-grid">
          <PhoneMockup src={screenshots.clips} alt="Lista Clipów w ScreenClips" />
          <div className="showcase-copy">
            <span className="kicker">Od chaosu do sensu</span>
            <h2>Biblioteki i Clipy zamiast jednego wielkiego śmietnika.</h2>
            <p>ScreenClips nie próbuje zgadywać za Ciebie. Daje prostą strukturę: biblioteka na temat, Clip na konkretną sprawę, screeny i zdjęcia w środku.</p>
            <div className="mini-list">
              <span>✓ nazwa i opis Clipa</span>
              <span>✓ screeny oraz zdjęcia w jednym miejscu</span>
              <span>✓ szybki powrót do materiałów</span>
            </div>
          </div>
        </div>
      </section>

      <section className="use-cases section-shell compact">
        <div className="section-heading narrow">
          <span className="kicker">Przykłady</span>
          <h2>Na rzeczy, które naprawdę zapisujesz screenami.</h2>
        </div>
        <div className="use-case-grid">
          <UseCase icon="▤" label="Rachunki" count="faktury, paragony" />
          <UseCase icon="✈" label="Podróże" count="bilety, adresy, rezerwacje" />
          <UseCase icon="☕" label="Przepisy" count="z internetu i od mamy" />
          <UseCase icon="◈" label="Pomysły" count="inspiracje i research" />
          <UseCase icon="Aa" label="Nauka" count="słówka, notatki, materiały" />
          <UseCase icon="☺" label="Memy" count="bo cywilizacja upadła, ale chociaż śmiesznie" />
        </div>
      </section>

      <section id="funkcje" className="features section-shell">
        <div className="feature-layout">
          <div className="feature-copy">
            <span className="kicker">Funkcje</span>
            <h2>Wszystko, czego potrzebujesz do ogarnięcia screenshotów. Bez nadęcia.</h2>
            <div className="feature-list">
              <FeatureCard icon="＋" title="Dodawaj screeny i zdjęcia" text="Zbieraj materiały w Clipach i uzupełniaj je, gdy temat rośnie." />
              <FeatureCard icon="⇪" title="Eksportuj do PDF" text="Zamień Clipa w czytelny plik, gdy chcesz coś wysłać lub zachować poza aplikacją." />
              <FeatureCard icon="♡" title="Oznaczaj ważne rzeczy" text="Ulubione, flagi i porządek tam, gdzie wcześniej była tylko przewijana rozpacz." />
            </div>
          </div>
          <PhoneMockup src={screenshots.detail} alt="Szczegół Clipa z dodawaniem screenów, zdjęć i eksportem PDF" />
        </div>
      </section>

      <section id="prywatnosc" className="privacy section-shell compact">
        <div className="privacy-card">
          <div>
            <span className="kicker light">Prywatność</span>
            <h2>Twoje screeny zostają u Ciebie.</h2>
            <p>ScreenClips działa lokalnie. Nie potrzebujesz konta, żeby zrobić porządek. Nie musisz oddawać swoich paragonów, notatek i planów w ręce kolejnej usługi, która bardzo chce „poprawiać doświadczenie”.</p>
          </div>
          <div className="privacy-points">
            <span>Bez konta</span>
            <span>Bez chmury</span>
            <span>Bez reklam</span>
          </div>
        </div>
      </section>

      <section className="premium section-shell">
        <div className="premium-copy">
          <span className="kicker">Premium</span>
          <h2>Zacznij od porządku. Odblokuj więcej miejsca, gdy ScreenClips stanie się Twoim systemem.</h2>
          <p>Premium nie komplikuje aplikacji. Daje więcej przestrzeni na biblioteki, Clipy i screeny. Cena jest widoczna w App Store.</p>
          <AppStoreButton />
        </div>
        <PhoneMockup src={screenshots.paywall} alt="Ekran Premium w ScreenClips" />
      </section>

      <section className="faq section-shell compact">
        <div className="section-heading narrow">
          <span className="kicker">FAQ</span>
          <h2>Krótko, bo życie jest już wystarczająco długie.</h2>
        </div>
        <div className="faq-list">
          <details open>
            <summary>Czy ScreenClips usuwa moje zdjęcia z galerii?</summary>
            <p>Nie. Usunięcie materiału z Clipa nie oznacza usunięcia oryginału ze Zdjęć.</p>
          </details>
          <details>
            <summary>Czy aplikacja działa bez internetu?</summary>
            <p>Tak. ScreenClips jest zaprojektowany jako lokalny organizer na iPhonie.</p>
          </details>
          <details>
            <summary>Czy muszę zakładać konto?</summary>
            <p>Nie. ScreenClips nie potrzebuje konta do porządkowania Twoich Clipów.</p>
          </details>
          <details>
            <summary>Czy mogę dodać zwykłe zdjęcia?</summary>
            <p>Tak. Możesz dodawać screeny i zdjęcia, jeśli pasują do danego Clipa.</p>
          </details>
        </div>
      </section>

      <section className="final-cta section-shell">
        <div className="final-card">
          <AppIcon />
          <h2>Przestań szukać screenów. Zacznij do nich wracać.</h2>
          <p>ScreenClips porządkuje rzeczy, które zapisujesz „na potem”. Tym razem potem naprawdę je znajdziesz.</p>
          <AppStoreButton />
        </div>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} ScreenClips</span>
        <div>
          <a href="#">Polityka prywatności</a>
          <a href="#">Warunki</a>
          <a href="mailto:hello@screenclips.app">Kontakt</a>
        </div>
      </footer>
    </main>
  )
}

export default App
