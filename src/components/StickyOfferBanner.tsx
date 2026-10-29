import React, { useState } from 'react';

interface StickyOfferBannerProps {
  onClaimOffer?: () => void;
}

export const StickyOfferBanner: React.FC<StickyOfferBannerProps> = ({ onClaimOffer }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="sticky-offer-banner" id="stickyOfferBanner">
      <span>Get ₹3050 worth for just ₹1425 with Exclusive Launch Offer 🎉</span>
      <button
        className="offer-btn"
        id="offerCtaBtn"
        onClick={() => {
          if (onClaimOffer) {
            onClaimOffer();
          } else {
            alert('🎉 Special Launch Offer applied! ₹1000 Ad Credits + 50% OFF unlocked.');
          }
        }}
      >
        Check Offer Now
      </button>
      <button
        className="offer-close"
        id="offerCloseBtn"
        onClick={() => setIsVisible(false)}
        aria-label="Close offer banner"
      >
        &times;
      </button>
    </div>
  );
};
