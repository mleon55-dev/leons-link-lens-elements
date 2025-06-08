# Create How It Works Section Custom Element
how_it_works_js = """
class HowItWorksSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="how-it-works-section">
        <div class="how-it-works-container">
          <div class="section-header">
            <h2 class="section-title">How It Works</h2>
            <p class="section-subtitle">Get professional link analysis in 3 simple steps</p>
          </div>
          
          <div class="steps-container">
            <div class="step-item">
              <div class="step-number">1</div>
              <div class="step-content">
                <div class="step-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9H21ZM19 21H5V3H13V9H19V21Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 class="step-title">Install Extension</h3>
                <p class="step-description">Add Leon's Link Lens to Chrome from the Web Store with one click. Installation takes less than 5 seconds.</p>
              </div>
            </div>
            
            <div class="step-arrow">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.01 11H4V13H16.01V16L20 12L16.01 8V11Z" fill="currentColor"/>
              </svg>
            </div>
            
            <div class="step-item">
              <div class="step-number">2</div>
              <div class="step-content">
                <div class="step-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 class="step-title">Visit Any Webpage</h3>
                <p class="step-description">Navigate to any website you want to analyze. Leon's Link Lens works on all websites and pages.</p>
              </div>
            </div>
            
            <div class="step-arrow">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.01 11H4V13H16.01V16L20 12L16.01 8V11Z" fill="currentColor"/>
              </svg>
            </div>
            
            <div class="step-item">
              <div class="step-number">3</div>
              <div class="step-content">
                <div class="step-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3S3 5.91 3 9.5S5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 class="step-title">Click & Analyze</h3>
                <p class="step-description">Click the extension icon and hit "Scan Links" to get instant results with organized link data and SEO insights.</p>
              </div>
            </div>
          </div>
          
          <div class="demo-preview">
            <div class="demo-container">
              <div class="demo-header">
                <div class="demo-title">Live Extension Preview</div>
                <div class="demo-badge">Leon's Link Lens</div>
              </div>
              <div class="demo-scan-button">
                <button class="scan-btn">Scan Links</button>
              </div>
              <div class="demo-tabs">
                <div class="demo-tab active">All Links</div>
                <div class="demo-tab">Dofollow</div>
                <div class="demo-tab">Nofollow</div>
              </div>
              <div class="demo-warning">
                ⚠️ WARNING: The robots meta tag on this webpage includes noindex, nofollow
              </div>
              <div class="demo-results">
                <div class="demo-link">
                  <span class="link-url">https://example.com/resource</span>
                  <span class="link-type dofollow">(dofollow)</span>
                </div>
                <div class="demo-link">
                  <span class="link-url">https://partner-site.com/page</span>
                  <span class="link-type nofollow">(nofollow)</span>
                </div>
                <div class="demo-link">
                  <span class="link-url">https://external-domain.org</span>
                  <span class="link-type dofollow">(dofollow)</span>
                </div>
              </div>
              <div class="demo-attribution">Created by Michael Leon</div>
            </div>
          </div>
          
          <div class="cta-section">
            <h3 class="cta-title">Ready to save 20+ hours per month?</h3>
            <a href="#" class="cta-button">Add to Chrome - $6.99 One-Time</a>
          </div>
        </div>
      </div>

      <style>
        .how-it-works-section {
          background: #FFFFFF;
          padding: 100px 20px;
          position: relative;
        }

        .how-it-works-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-title {
          font-size: 2.8rem;
          font-weight: 700;
          color: #2B4B6F;
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .section-subtitle {
          font-size: 1.3rem;
          color: #6C757D;
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .steps-container {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 80px;
          flex-wrap: wrap;
          gap: 40px;
        }

        .step-item {
          flex: 1;
          max-width: 280px;
          min-width: 250px;
          text-align: center;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }

        .step-item:nth-child(1) { animation-delay: 0.1s; }
        .step-item:nth-child(3) { animation-delay: 0.2s; }
        .step-item:nth-child(5) { animation-delay: 0.3s; }

        .step-number {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #FF6B35, #e55a2b);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 auto 24px;
          box-shadow: 0 4px 16px rgba(255, 107, 53, 0.3);
          transition: transform 0.3s ease;
        }

        .step-item:hover .step-number {
          transform: scale(1.1);
        }

        .step-icon {
          width: 48px;
          height: 48px;
          background: #F8F9FA;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          color: #2B4B6F;
          transition: all 0.3s ease;
        }

        .step-item:hover .step-icon {
          background: #e9ecef;
          color: #FF6B35;
        }

        .step-icon svg {
          width: 24px;
          height: 24px;
        }

        .step-title {
          font-size: 1.4rem;
          font-weight: 600;
          color: #2B4B6F;
          margin-bottom: 16px;
          line-height: 1.3;
        }

        .step-description {
          font-size: 1rem;
          color: #6C757D;
          line-height: 1.6;
        }

        .step-arrow {
          color: #FF6B35;
          opacity: 0.7;
          animation: float 3s ease-in-out infinite;
        }

        .step-arrow svg {
          width: 32px;
          height: 32px;
        }

        @keyframes float {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(10px); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .demo-preview {
          background: #F8F9FA;
          padding: 60px 40px;
          border-radius: 20px;
          margin-bottom: 60px;
          display: flex;
          justify-content: center;
        }

        .demo-container {
          background: white;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(43, 75, 111, 0.1);
          padding: 24px;
          max-width: 400px;
          width: 100%;
          border: 2px solid #e9ecef;
        }

        .demo-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding-bottom: 16px;
          border-bottom: 1px solid #e9ecef;
        }

        .demo-title {
          font-weight: 600;
          color: #2B4B6F;
          font-size: 0.95rem;
        }

        .demo-badge {
          background: #FF6B35;
          color: white;
          padding: 4px 12px;
          border-radius: 16px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .demo-scan-button {
          text-align: center;
          margin-bottom: 20px;
        }

        .scan-btn {
          background: linear-gradient(135deg, #FF6B35, #e55a2b);
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .scan-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
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
          background: white;
          color: #2B4B6F;
          font-weight: 600;
          border-color: #2B4B6F;
        }

        .demo-warning {
          background: #fff3cd;
          color: #856404;
          padding: 12px;
          border-radius: 6px;
          font-size: 0.85rem;
          margin-bottom: 16px;
          border: 1px solid #ffeaa7;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        .demo-results {
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

        .link-url {
          font-size: 0.85rem;
          color: #495057;
          flex: 1;
          word-break: break-all;
        }

        .link-type {
          font-size: 0.8rem;
          font-weight: 600;
          margin-left: 8px;
          padding: 2px 8px;
          border-radius: 10px;
        }

        .link-type.dofollow {
          background: #d4edda;
          color: #155724;
        }

        .link-type.nofollow {
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

        .cta-section {
          text-align: center;
        }

        .cta-title {
          font-size: 1.8rem;
          font-weight: 600;
          color: #2B4B6F;
          margin-bottom: 32px;
          line-height: 1.3;
        }

        .cta-button {
          display: inline-block;
          background: linear-gradient(135deg, #FF6B35, #e55a2b);
          color: white;
          padding: 18px 36px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.2rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(255, 107, 53, 0.3);
        }

        .cta-button:hover {
          background: linear-gradient(135deg, #e55a2b, #d14d1f);
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(255, 107, 53, 0.4);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .how-it-works-section {
            padding: 80px 20px;
          }
          
          .section-title {
            font-size: 2.2rem;
          }
          
          .section-subtitle {
            font-size: 1.1rem;
          }
          
          .steps-container {
            flex-direction: column;
            gap: 40px;
          }
          
          .step-arrow {
            transform: rotate(90deg);
          }
          
          .demo-preview {
            padding: 40px 20px;
          }
          
          .section-header {
            margin-bottom: 60px;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 1.9rem;
          }
          
          .step-title {
            font-size: 1.2rem;
          }
          
          .cta-title {
            font-size: 1.5rem;
          }
          
          .cta-button {
            padding: 16px 28px;
            font-size: 1.1rem;
            width: 100%;
            max-width: 300px;
          }
          
          .demo-container {
            padding: 20px;
          }
        }
      </style>
    `;

    // Add interactivity for demo tabs
    this.setupTabInteraction();
  }

  setupTabInteraction() {
    setTimeout(() => {
      const tabs = this.querySelectorAll('.demo-tab');
      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          tabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
        });
      });
    }, 100);
  }
}

customElements.define('how-it-works-section', HowItWorksSection);
"""

print("How It Works Section JavaScript file created successfully!")
print(f"File length: {len(how_it_works_js)} characters")