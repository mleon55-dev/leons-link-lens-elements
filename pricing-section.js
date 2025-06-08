# Create Pricing Section Custom Element
pricing_js = """
class PricingSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="pricing-section">
        <div class="pricing-container">
          <div class="pricing-header">
            <h2 class="pricing-title">Simple, Transparent Pricing</h2>
            <p class="pricing-subtitle">One-time payment. Lifetime access. No subscriptions or hidden fees.</p>
          </div>
          
          <div class="pricing-cards">
            <div class="pricing-card featured">
              <div class="popular-badge">Best Value</div>
              <div class="pricing-header-card">
                <h3 class="plan-name">Leon's Link Lens</h3>
                <div class="price-container">
                  <span class="price">$6.99</span>
                  <span class="period">One-time payment</span>
                </div>
                <p class="plan-description">Professional link analysis tool for SEO experts and digital marketers</p>
              </div>
              
              <div class="features-list">
                <div class="feature-item">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
                  </svg>
                  <span>Unlimited website scanning</span>
                </div>
                <div class="feature-item">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
                  </svg>
                  <span>Dofollow/Nofollow detection</span>
                </div>
                <div class="feature-item">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
                  </svg>
                  <span>Robots meta tag warnings</span>
                </div>
                <div class="feature-item">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
                  </svg>
                  <span>Lightning-fast analysis (under 2 seconds)</span>
                </div>
                <div class="feature-item">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
                  </svg>
                  <span>Professional tabbed interface</span>
                </div>
                <div class="feature-item">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
                  </svg>
                  <span>Lifetime software updates</span>
                </div>
                <div class="feature-item">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
                  </svg>
                  <span>Priority email support</span>
                </div>
                <div class="feature-item">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
                  </svg>
                  <span>30-day money-back guarantee</span>
                </div>
              </div>
              
              <div class="pricing-cta">
                <a href="#" class="pricing-button">Add to Chrome Now</a>
                <p class="secure-notice">
                  <svg class="shield-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z" fill="currentColor"/>
                  </svg>
                  Secure payment processed by Stripe
                </p>
              </div>
            </div>
          </div>
          
          <div class="value-propositions">
            <div class="value-item">
              <div class="value-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
                </svg>
              </div>
              <div class="value-content">
                <h4 class="value-title">Save 20+ Hours Monthly</h4>
                <p class="value-description">Automate tedious manual link inspection work and focus on strategy instead</p>
              </div>
            </div>
            
            <div class="value-item">
              <div class="value-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L3.09 8.26L4 21L12 17L20 21L20.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <div class="value-content">
                <h4 class="value-title">No Recurring Fees</h4>
                <p class="value-description">Pay once, use forever. Unlike other tools, we don't charge monthly subscriptions</p>
              </div>
            </div>
            
            <div class="value-item">
              <div class="value-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" fill="currentColor"/>
                </svg>
              </div>
              <div class="value-content">
                <h4 class="value-title">Risk-Free Purchase</h4>
                <p class="value-description">Try it risk-free with our 30-day money-back guarantee if you're not satisfied</p>
              </div>
            </div>
          </div>
          
          <div class="faq-section">
            <h3 class="faq-title">Frequently Asked Questions</h3>
            <div class="faq-grid">
              <div class="faq-item">
                <h4 class="faq-question">What browsers are supported?</h4>
                <p class="faq-answer">Leon's Link Lens works on Chrome and all Chromium-based browsers including Edge, Brave, and Opera.</p>
              </div>
              <div class="faq-item">
                <h4 class="faq-question">Do I need technical knowledge to use it?</h4>
                <p class="faq-answer">No technical knowledge required! Simply install the extension and click "Scan Links" on any webpage.</p>
              </div>
              <div class="faq-item">
                <h4 class="faq-question">Is there a limit on scans?</h4>
                <p class="faq-answer">No limits! Scan unlimited websites and pages. Perfect for agencies and freelancers with multiple clients.</p>
              </div>
              <div class="faq-item">
                <h4 class="faq-question">What if I'm not satisfied?</h4>
                <p class="faq-answer">We offer a 30-day money-back guarantee. If you're not completely satisfied, contact us for a full refund.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        .pricing-section {
          background: #F8F9FA;
          padding: 100px 20px;
        }

        .pricing-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .pricing-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .pricing-title {
          font-size: 2.8rem;
          font-weight: 700;
          color: #2B4B6F;
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .pricing-subtitle {
          font-size: 1.3rem;
          color: #6C757D;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .pricing-cards {
          display: flex;
          justify-content: center;
          margin-bottom: 80px;
        }

        .pricing-card {
          background: #FFFFFF;
          border-radius: 20px;
          padding: 40px 32px;
          box-shadow: 0 8px 32px rgba(43, 75, 111, 0.1);
          position: relative;
          max-width: 480px;
          width: 100%;
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .pricing-card.featured {
          border-color: #FF6B35;
          transform: scale(1.02);
        }

        .pricing-card:hover {
          transform: scale(1.05);
          box-shadow: 0 16px 48px rgba(43, 75, 111, 0.15);
        }

        .popular-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #FF6B35, #e55a2b);
          color: white;
          padding: 8px 24px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
        }

        .pricing-header-card {
          text-align: center;
          margin-bottom: 40px;
        }

        .plan-name {
          font-size: 1.8rem;
          font-weight: 600;
          color: #2B4B6F;
          margin-bottom: 16px;
        }

        .price-container {
          margin-bottom: 16px;
        }

        .price {
          font-size: 3.5rem;
          font-weight: 700;
          color: #2B4B6F;
          line-height: 1;
        }

        .period {
          display: block;
          font-size: 1rem;
          color: #6C757D;
          margin-top: 8px;
        }

        .plan-description {
          font-size: 1.1rem;
          color: #6C757D;
          line-height: 1.5;
          margin: 0;
        }

        .features-list {
          margin-bottom: 40px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          font-size: 1rem;
          color: #495057;
          opacity: 0;
          animation: fadeInLeft 0.6s ease forwards;
        }

        .feature-item:nth-child(1) { animation-delay: 0.1s; }
        .feature-item:nth-child(2) { animation-delay: 0.2s; }
        .feature-item:nth-child(3) { animation-delay: 0.3s; }
        .feature-item:nth-child(4) { animation-delay: 0.4s; }
        .feature-item:nth-child(5) { animation-delay: 0.5s; }
        .feature-item:nth-child(6) { animation-delay: 0.6s; }
        .feature-item:nth-child(7) { animation-delay: 0.7s; }
        .feature-item:nth-child(8) { animation-delay: 0.8s; }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .check-icon {
          width: 20px;
          height: 20px;
          color: #28a745;
          flex-shrink: 0;
        }

        .pricing-cta {
          text-align: center;
        }

        .pricing-button {
          display: block;
          background: linear-gradient(135deg, #FF6B35, #e55a2b);
          color: white;
          padding: 18px 36px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.2rem;
          margin-bottom: 16px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(255, 107, 53, 0.3);
        }

        .pricing-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(255, 107, 53, 0.4);
        }

        .secure-notice {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 0.9rem;
          color: #6C757D;
          margin: 0;
        }

        .shield-icon {
          width: 16px;
          height: 16px;
          color: #28a745;
        }

        .value-propositions {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          margin-bottom: 80px;
        }

        .value-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          background: white;
          padding: 32px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(43, 75, 111, 0.08);
          transition: transform 0.3s ease;
        }

        .value-item:hover {
          transform: translateY(-4px);
        }

        .value-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #FF6B35, #e55a2b);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .value-icon svg {
          width: 24px;
          height: 24px;
        }

        .value-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #2B4B6F;
          margin-bottom: 8px;
          line-height: 1.3;
        }

        .value-description {
          font-size: 0.95rem;
          color: #6C757D;
          line-height: 1.5;
          margin: 0;
        }

        .faq-section {
          background: white;
          padding: 60px 40px;
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(43, 75, 111, 0.1);
        }

        .faq-title {
          font-size: 2rem;
          font-weight: 600;
          color: #2B4B6F;
          text-align: center;
          margin-bottom: 40px;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
        }

        .faq-item {
          padding: 24px;
          border-left: 4px solid #FF6B35;
          background: #f8f9fa;
          border-radius: 8px;
          transition: transform 0.3s ease;
        }

        .faq-item:hover {
          transform: translateX(4px);
        }

        .faq-question {
          font-size: 1.1rem;
          font-weight: 600;
          color: #2B4B6F;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .faq-answer {
          font-size: 0.95rem;
          color: #6C757D;
          line-height: 1.6;
          margin: 0;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .pricing-section {
            padding: 80px 20px;
          }
          
          .pricing-title {
            font-size: 2.2rem;
          }
          
          .pricing-subtitle {
            font-size: 1.1rem;
          }
          
          .pricing-card {
            margin: 0 auto;
          }
          
          .value-propositions {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          
          .value-item {
            padding: 24px;
          }
          
          .faq-section {
            padding: 40px 24px;
          }
          
          .faq-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }

        @media (max-width: 480px) {
          .pricing-title {
            font-size: 1.9rem;
          }
          
          .price {
            font-size: 2.8rem;
          }
          
          .plan-name {
            font-size: 1.5rem;
          }
          
          .pricing-card {
            padding: 32px 24px;
          }
          
          .faq-title {
            font-size: 1.7rem;
          }

          .pricing-button {
            width: 100%;
            padding: 16px 24px;
          }
        }
      </style>
    `;
  }
}

customElements.define('pricing-section', PricingSection);
"""

print("Pricing Section JavaScript file created successfully!")
print(f"File length: {len(pricing_js)} characters")