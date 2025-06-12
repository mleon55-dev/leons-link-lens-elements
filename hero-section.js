class HeroSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="hero-section">
        <div class="hero-container">
          <div class="hero-content">
            <h1 class="hero-title">Stop Wasting Time on Manual Link Analysis</h1>
            <p class="hero-subtitle">Leon's Link Lens instantly scans external links, identifies dofollow/nofollow attributes, and detects critical robots meta tags. Save 20+ hours per month with professional link analysis.</p>
            
            <div class="hero-features">
              <div class="feature-check">✅ Instant Link Scanning</div>
              <div class="feature-check">✅ Dofollow/Nofollow Detection</div>
              <div class="feature-check">✅ Robots Meta Tag Warnings</div>
            </div>
            
            <div class="hero-cta">
              <a href="#" class="cta-button primary">Add to Chrome - $6.99 One-Time</a>
              <p class="guarantee">30-day money-back guarantee • Lifetime updates</p>
            </div>
          </div>
          
          <div class="hero-image">
            <div class="browser-mockup">
              <div class="browser-header">
                <div class="browser-dots">
                  <span></span><span></span><span></span>
                </div>
                <div class="browser-url">Leon's Link Lens</div>
              </div>
              <div class="browser-content">
                <div class="extension-demo">
                  <div class="demo-tabs">
                    <div class="demo-tab active">All Links</div>
                    <div class="demo-tab">Dofollow</div>
                    <div class="demo-tab">Nofollow</div>
                  </div>
                  <div class="demo-warning">⚠️ WARNING: noindex, nofollow detected</div>
                  <div class="demo-links">
                    <div class="demo-link">
                      <span class="link-text">example.com/page1</span>
                      <span class="link-badge dofollow">(dofollow)</span>
                    </div>
                    <div class="demo-link">
                      <span class="link-text">external-site.com</span>
                      <span class="link-badge nofollow">(nofollow)</span>
                    </div>
                    <div class="demo-link">
                      <span class="link-text">partner-link.org</span>
                      <span class="link-badge dofollow">(dofollow)</span>
                    </div>
                  </div>
                  <div class="demo-attribution">Created by Michael Leon</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        .hero-section {
          background: linear-gradient(135deg, #2B4B6F 0%, #1E3754 100%);
          color: #FFFFFF;
          padding: 80px 20px;
          min-height: 600px;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 70%, rgba(255, 107, 53, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-content {
          animation: slideInLeft 0.8s ease-out;
        }

        .hero-title {
          font-size: 3.2rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 24px;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .hero-subtitle {
          font-size: 1.3rem;
          line-height: 1.6;
          margin-bottom: 32px;
          opacity: 0.95;
        }

        .hero-features {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 40px;
        }

        .feature-check {
          font-size: 1.1rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .hero-cta {
          text-align: left;
        }

        .cta-button {
          display: inline-block;
          background: linear-gradient(135deg, #FF6B35, #e55a2b);
          color: #FFFFFF;
          padding: 18px 36px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.2rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
          margin-bottom: 16px;
          cursor: pointer;
        }

        .cta-button:hover {
          background: linear-gradient(135deg, #e55a2b, #d14d1f);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 107, 53, 0.4);
        }

        .guarantee {
          font-size: 0.9rem;
          opacity: 0.8;
          margin: 0;
        }

        .hero-image {
          display: flex;
          justify-content: center;
          animation: slideInRight 0.8s ease-out;
        }

        .browser-mockup {
          background: #FFFFFF;
          border-radius: 12px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
          overflow: hidden;
          max-width: 480px;
          width: 100%;
          transform: perspective(1000px) rotateY(-10deg);
          transition: transform 0.3s ease;
        }

        .browser-mockup:hover {
          transform: perspective(1000px) rotateY(0deg);
        }

        .browser-header {
          background: #f5f5f5;
          padding: 16px 20px;
          border-bottom: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .browser-dots {
          display: flex;
          gap: 8px;
        }

        .browser-dots span {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ddd;
        }

        .browser-dots span:nth-child(1) { background: #ff5f56; }
        .browser-dots span:nth-child(2) { background: #ffbd2e; }
        .browser-dots span:nth-child(3) { background: #27ca3f; }

        .browser-url {
          background: #e8e8e8;
          padding: 6px 12px;
          border-radius: 16px;
          font-size: 0.8rem;
          color: #666;
          flex: 1;
        }

        .browser-content {
          padding: 24px;
          background: #FFFFFF;
        }

        .extension-demo {
          color: #333;
        }

        .demo-tabs {
          display: flex;
          gap: 4px;
          margin-bottom: 16px;
        }

        .demo-tab {
          padding: 8px 16px;
          background: #f8f9fa;
          border-radius: 6px 6px 0 0;
          font-size: 0.9rem;
          border: 1px solid #e9ecef;
          border-bottom: none;
          flex: 1;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .demo-tab.active {
          background: #FFFFFF;
          border-color: #2B4B6F;
          color: #2B4B6F;
          font-weight: 600;
        }

        .demo-warning {
          background: #fff3cd;
          color: #856404;
          padding: 12px;
          border-radius: 6px;
          margin-bottom: 16px;
          font-size: 0.85rem;
          border: 1px solid #ffeaa7;
          animation: pulse 2s infinite;
        }

        .demo-links {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 16px;
        }

        .demo-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px;
          background: #f8f9fa;
          border-radius: 6px;
          border-left: 4px solid #2B4B6F;
          transition: transform 0.2s ease;
        }

        .demo-link:hover {
          transform: translateX(4px);
        }

        .link-text {
          font-size: 0.85rem;
          color: #495057;
          flex: 1;
          word-break: break-all;
        }

        .link-badge {
          font-size: 0.8rem;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 12px;
          margin-left: 8px;
        }

        .link-badge.dofollow {
          background: #d4edda;
          color: #155724;
        }

        .link-badge.nofollow {
          background: #f8d7da;
          color: #721c24;
        }

        .demo-attribution {
          text-align: center;
          font-size: 0.8rem;
          color: #6C757D;
          border-top: 1px solid #e9ecef;
          padding-top: 12px;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }
          
          .hero-title {
            font-size: 2.4rem;
          }
          
          .hero-subtitle {
            font-size: 1.1rem;
          }
          
          .browser-mockup {
            max-width: 100%;
            transform: none;
          }
          
          .hero-section {
            padding: 60px 20px;
          }

          .hero-cta {
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .cta-button {
            padding: 16px 28px;
            font-size: 1.1rem;
            width: 100%;
            max-width: 300px;
          }
          
          .hero-features {
            text-align: left;
            max-width: 300px;
            margin: 0 auto 40px;
          }
        }
      </style>
    `;
  }
}

customElements.define('hero-section', HeroSection);
