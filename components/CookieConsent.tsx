"use client";

import { useState, useEffect } from "react";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const DEFAULT_PREFERENCES: CookiePreferences = {
  essential: true,
  analytics: false,
  marketing: false,
};

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [closing, setClosing] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_PREFERENCES);
  const [hasConsented, setHasConsented] = useState(false);

  // Helper to set cookie
  const setCookie = (name: string, value: string, days: number) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
  };

  // Helper to get cookie
  const getCookie = (name: string) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };

  useEffect(() => {
    const consent = getCookie("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    } else {
      setHasConsented(true);
      try {
        const parsed = JSON.parse(consent);
        if (parsed.preferences) {
          setPreferences(parsed.preferences);
        }
      } catch (e) {
        console.error("Error parsing cookie consent", e);
      }
    }
  }, []);

  const dismiss = () => {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      setShowSettings(false);
      setClosing(false);
      setHasConsented(true);
    }, 400);
  };

  const handleAcceptAll = () => {
    const all: CookiePreferences = { essential: true, analytics: true, marketing: true };
    setCookie("cookie-consent", JSON.stringify({ decision: "accepted", preferences: all, timestamp: new Date().toISOString() }), 365);
    dismiss();
  };

  const handleDecline = () => {
    setCookie("cookie-consent", JSON.stringify({ decision: "declined", preferences: DEFAULT_PREFERENCES, timestamp: new Date().toISOString() }), 365);
    dismiss();
  };

  const handleSavePreferences = () => {
    setCookie("cookie-consent", JSON.stringify({ decision: "custom", preferences, timestamp: new Date().toISOString() }), 365);
    dismiss();
  };

  return (
    <>
      {/* Settings trigger (floating button) */}
      {hasConsented && !visible && (
        <button 
          className="cookie-trigger" 
          onClick={() => setVisible(true)}
          aria-label="Cookie settings"
          title="Cookie Settings"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10 10 10 0 0 1-10-10 10 10 0 0 1 10-10" strokeDasharray="4 4" />
            <circle cx="8" cy="9" r="1" fill="currentColor" />
            <circle cx="15" cy="8" r="1" fill="currentColor" />
            <circle cx="10" cy="14" r="1" fill="currentColor" />
            <circle cx="16" cy="13" r="1" fill="currentColor" />
          </svg>
        </button>
      )}

      {!visible ? null : (
        <>
          {/* Settings modal overlay */}
          {showSettings && (
            <div className="cookie-overlay" onClick={() => setShowSettings(false)} />
          )}

          {/* Settings modal */}
          {showSettings && (
            <div className="cookie-settings-modal">
              <div className="cookie-settings-header">
                <h3>Cookie Preferences</h3>
                <button className="cookie-close-btn" onClick={() => setShowSettings(false)} aria-label="Close settings">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
              <p className="cookie-settings-description">
                Manage your cookie preferences below. Essential cookies are required for the website to function and cannot be disabled.
              </p>

              <div className="cookie-toggle-list">
                {/* Essential */}
                <div className="cookie-toggle-item">
                  <div className="cookie-toggle-info">
                    <span className="cookie-toggle-label">Essential Cookies</span>
                    <span className="cookie-toggle-desc">Required for basic site functionality</span>
                  </div>
                  <label className="cookie-switch cookie-switch-disabled">
                    <input type="checkbox" checked disabled />
                    <span className="cookie-slider" />
                  </label>
                </div>

                {/* Analytics */}
                <div className="cookie-toggle-item">
                  <div className="cookie-toggle-info">
                    <span className="cookie-toggle-label">Analytics Cookies</span>
                    <span className="cookie-toggle-desc">Help us understand website traffic and usage patterns</span>
                  </div>
                  <label className="cookie-switch">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences((p) => ({ ...p, analytics: e.target.checked }))}
                    />
                    <span className="cookie-slider" />
                  </label>
                </div>

                {/* Marketing */}
                <div className="cookie-toggle-item">
                  <div className="cookie-toggle-info">
                    <span className="cookie-toggle-label">Marketing Cookies</span>
                    <span className="cookie-toggle-desc">Used to deliver personalized content and advertisements</span>
                  </div>
                  <label className="cookie-switch">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences((p) => ({ ...p, marketing: e.target.checked }))}
                    />
                    <span className="cookie-slider" />
                  </label>
                </div>
              </div>

              <div className="cookie-settings-actions">
                <button className="cookie-btn cookie-btn-outline" onClick={handleDecline}>
                  Decline All
                </button>
                <button className="cookie-btn cookie-btn-primary" onClick={handleSavePreferences}>
                  Save Preferences
                </button>
              </div>
            </div>
          )}

          {/* Banner */}
          <div className={`cookie-banner ${closing ? "cookie-banner-closing" : ""}`}>
            <div className="cookie-banner-inner">
              <div className="cookie-banner-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="8" cy="9" r="1" fill="var(--primary-gold)" />
                  <circle cx="15" cy="8" r="1" fill="var(--primary-gold)" />
                  <circle cx="10" cy="14" r="1" fill="var(--primary-gold)" />
                  <circle cx="16" cy="13" r="1.5" fill="var(--primary-gold)" />
                  <circle cx="12" cy="17" r="0.8" fill="var(--primary-gold)" />
                </svg>
              </div>
              <div className="cookie-banner-content">
                <h4 className="cookie-banner-headline">Enhancing Your Experience through Transparency</h4>
                <p className="cookie-banner-text">
                  At Al Aman Trust Services, we use cookies to provide you with customized solutions that address your unique needs. In line with our core value of Transparency, we use these tools to analyze website traffic and improve our business support services.
                </p>
                <p className="cookie-banner-text cookie-banner-text-secondary">
                  By clicking &ldquo;Accept,&rdquo; you agree to our use of cookies to enhance your browsing experience across our global service areas, including Labuan, Malaysia, Saudi Arabia, and the UAE. You can manage your preferences at any time.
                </p>
              </div>
              <div className="cookie-banner-actions">
                <button className="cookie-btn cookie-btn-primary" onClick={handleAcceptAll}>
                  Accept All
                </button>
                <button className="cookie-btn cookie-btn-outline" onClick={() => setShowSettings(true)}>
                  Cookie Settings
                </button>
                <button className="cookie-btn cookie-btn-ghost" onClick={handleDecline}>
                  Decline
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

