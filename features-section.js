# Create Features Section Custom Element
features_js = """
class FeaturesSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="features-section">
        <div class="features-container">
          <div class="features-header">
            <h2 class="features-title">Why SEO Professionals Choose Leon's Link Lens</h2>
            <p class="features-subtitle">Save hours of manual inspection with automated link analysis and instant insights</p>
          </div>
          
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="currentColor"/>
                </svg>
              </div>
              <h3 class="feature-title">Lightning-Fast Scanning</h3>
              <p class="feature-description">Analyze 500+ external links in under 2 seconds. No more manual right-clicking and inspecting source code.</p>
              <ul class="feature-benefits">
                <li>Instant results on any webpage</li>
                <li>Bulk link processing</li>
                <li>Real-time analysis</li>
              </ul>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
                </svg>
              </div>
              <h3 class="feature-title">Smart Link Classification</h3>
              <p class="feature-description">Automatically categorize links as dofollow or nofollow with 99.8% accuracy. Perfect for link audits and SEO analysis.</p>
              <ul class="feature-benefits">
                <li>Precise rel attribute detection</li>
                <li>Organized link categorization</li>
                <li>Export-ready results</li>
              </ul>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" fill="currentColor"/>
                </svg>
              </div>
              <h3 class="feature-title">Robots Meta Tag Alerts</h3>
              <p class="feature-description">Instantly detect critical robots meta tags including noindex, nofollow, and noimageindex directives.</p>
              <ul class="feature-benefits">
                <li>Real-time SEO warnings</li>
                <li>Indexing issue detection</li>
                <li>Compliance monitoring</li>
              </ul>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
                </svg>
              </div>
              <h3 class="feature-title">Time-Saving Efficiency</h3>
              <p class="feature-description">Replace hours of manual work with one-click analysis. Increase your productivity by 10x with automated workflows.</p>
              <ul class="feature-benefits">
                <li>Save 20+ hours per month</li>
                <li>Streamlined SEO audits</li>
                <li>Professional reporting</li>
              </ul>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
                </svg>
              </div>
              <h3 class="feature-title">Professional Interface</h3>
              <p class="feature-description">Clean, intuitive design built for SEO professionals. Easy-to-read results with organized tabbed interface.</p>
              <ul class="feature-benefits">
                <li>User-friendly design</li>
                <li>Organized data presentation</li>
                <li>Mobile-optimized interface</li>
              </ul>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" fill="currentColor"/>
                </svg>
              </div>
              <h3 class="feature-title">Lifetime Value</h3>
              <p class="feature-description">One-time payment includes lifetime updates and support. No subscription fees or hidden costs.</p>
              <ul class="feature-benefits">
                <li>$6.99 one-time payment</li>
                <li>Lifetime software updates</li>
                <li>Priority email support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>
        .features-section {
          background: #F8F9FA;
          padding: 100px 20px;
          position: relative;
        }

        .features-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .features-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .features-title {
          font-size: 2.8rem;
          font-weight: 700;
          color: #2B4B6F;
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .features-subtitle {
          font-size: 1.3rem;
          color: #6C757D;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
        }

        .feature-card {
          background: #FFFFFF;
          padding: 40px 32px;
          border-radius: 16px;
          box-shadow: 0 4px 24px rgba(43, 75, 111, 0.08);
          transition: all 0.3s ease;
          border: 1px solid rgba(43, 75, 111, 0.1);
          position: relative;
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #FF6B35, #e55a2b);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(43, 75, 111, 0.15);
          border-color: #FF6B35;
        }

        .feature-card:hover::before {
          transform: scaleX(1);
        }

        .feature-icon {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, #FF6B35, #e55a2b);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          color: white;
          transition: transform 0.3s ease;
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.1);
        }

        .feature-icon svg {
          width: 32px;
          height: 32px;
        }

        .feature-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #2B4B6F;
          margin-bottom: 16px;
          line-height: 1.3;
        }

        .feature-description {
          font-size: 1rem;
          color: #6C757D;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .feature-benefits {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .feature-benefits li {
          position: relative;
          padding-left: 24px;
          margin-bottom: 12px;
          color: #495057;
          font-size: 0.95rem;
          line-height: 1.5;
          opacity: 0;
          animation: fadeInUp 0.6s ease forwards;
        }

        .feature-benefits li:nth-child(1) { animation-delay: 0.1s; }
        .feature-benefits li:nth-child(2) { animation-delay: 0.2s; }
        .feature-benefits li:nth-child(3) { animation-delay: 0.3s; }

        .feature-benefits li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #FF6B35;
          font-weight: 600;
          font-size: 1rem;
        }

        .feature-benefits li:last-child {
          margin-bottom: 0;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .features-section {
            padding: 80px 20px;
          }
          
          .features-title {
            font-size: 2.2rem;
          }
          
          .features-subtitle {
            font-size: 1.1rem;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          
          .feature-card {
            padding: 32px 24px;
          }
          
          .features-header {
            margin-bottom: 60px;
          }
        }

        @media (max-width: 480px) {
          .features-title {
            font-size: 1.9rem;
          }
          
          .feature-title {
            font-size: 1.3rem;
          }
          
          .feature-card {
            padding: 28px 20px;
          }
          
          .feature-icon {
            width: 56px;
            height: 56px;
          }
          
          .feature-icon svg {
            width: 28px;
            height: 28px;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
      </style>
    `;
  }
}

customElements.define('features-section', FeaturesSection);
"""

print("Features Section JavaScript file created successfully!")
print(f"File length: {len(features_js)} characters")