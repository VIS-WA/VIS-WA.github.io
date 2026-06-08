/* ============================================================
   app-tweaks.jsx — mounts ONLY the Tweaks panel.
   The site itself is plain HTML/CSS; this layer just flips
   data-* attributes and CSS vars on <html>.
   ============================================================ */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "direction": "signal",
  "accent": "#3b6fe0",
  "density": "regular",
  "dark": false
}/*EDITMODE-END*/;

// accent hex -> oklch hue
const ACCENT_HUE = {
  "#3b6fe0": 248,  // signal blue
  "#1f9b8e": 195,  // teal
  "#7a5cf0": 292,  // violet
  "#2f9e54": 150   // green
};

function SiteTweaks() {
  const root = document.documentElement;
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // keep the panel's dark toggle in sync with the nav button / saved theme
  React.useEffect(() => {
    const cur = root.getAttribute('data-theme') === 'dark';
    if (cur !== t.dark) setTweak('dark', cur);
    const onTheme = (e) => setTweak('dark', e.detail === 'dark');
    window.addEventListener('svk-theme', onTheme);
    return () => window.removeEventListener('svk-theme', onTheme);
    // eslint-disable-next-line
  }, []);

  // apply every tweak to the DOM
  React.useEffect(() => { root.setAttribute('data-direction', t.direction); }, [t.direction]);
  React.useEffect(() => { root.setAttribute('data-density', t.density); }, [t.density]);
  React.useEffect(() => {
    const h = ACCENT_HUE[t.accent] != null ? ACCENT_HUE[t.accent] : 248;
    root.style.setProperty('--ah', h);
  }, [t.accent]);
  React.useEffect(() => {
    if (window.__setTheme) window.__setTheme(t.dark ? 'dark' : 'light');
    else root.setAttribute('data-theme', t.dark ? 'dark' : 'light');
  }, [t.dark]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Direction">
        <TweakRadio label="Type & feel" value={t.direction}
          options={[
            { value: 'signal',    label: 'Signal' },
            { value: 'editorial', label: 'Editorial' },
            { value: 'mono',      label: 'Mono' }
          ]}
          onChange={(v) => setTweak('direction', v)} />
      </TweakSection>

      <TweakSection label="Color">
        <TweakColor label="Accent" value={t.accent}
          options={["#3b6fe0", "#1f9b8e", "#7a5cf0", "#2f9e54"]}
          onChange={(v) => setTweak('accent', v)} />
        <TweakToggle label="Dark mode" value={t.dark}
          onChange={(v) => setTweak('dark', v)} />
      </TweakSection>

      <TweakSection label="Layout">
        <TweakRadio label="Density" value={t.density}
          options={['compact', 'regular', 'roomy']}
          onChange={(v) => setTweak('density', v)} />
      </TweakSection>
    </TweaksPanel>
  );
}

(function mount() {
  const host = document.createElement('div');
  host.id = 'tweaks-root';
  document.body.appendChild(host);
  ReactDOM.createRoot(host).render(<SiteTweaks />);
})();
