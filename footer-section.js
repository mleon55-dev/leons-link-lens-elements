# Create Footer Section Custom Element
footer_js = """
class FooterSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="footer-section">
        <div class="footer-container">
          <div class="footer-content">
            <div class="footer-main">
              <div class="footer-brand">
                <div class="brand-logo">
                  <div class="logo-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="currentColor"/>
                      <circle cx="18" cy="6" r="3" fill="#FF6B35"/>
                      <circle cx="6" cy="18" r="2" fill="#FF6B35"/>
                    </svg>
                  </div>
                  <div class="brand-text">
                    <h3 class="brand-name">Leon's Link Lens</h3>
                    <p class="brand-tagline">Professional Link Analysis Tool</p>
                  </div>
                </div>
                <p class="brand-description">
                  Save 20+ hours per month with automated link analysis. Instantly detect dofollow/nofollow attributes and robots meta tag warnings with professional-grade accuracy.
                </p>
              </div>
              
              <div class="footer-links">
                <div class="footer-column">
                  <h4 class="column-title">Product</h4>
                  <ul class="footer-menu">
                    <li><a href="#features">Features</a></li>
                    <li><a href="#how-it-works">How It Works</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#faq">FAQ</a></li>
                  </ul>
                </div>
                
                <div class="footer-column">
                  <h4 class="column-title">Support</h4>
                  <ul class="footer-menu">
                    <li><a href="#installation">Installation Guide</a></li>
                    <li><a href="#documentation">Documentation</a></li>
                    <li><a href="#contact">Contact Support</a></li>
                    <li><a href="#refunds">Refund Policy</a></li>
                  </ul>
                </div>
                
                <div class="footer-column">
                  <h4 class="column-title">Legal</h4>
                  <ul class="footer-menu">
                    <li><a href="#privacy">Privacy Policy</a></li>
                    <li><a href="#terms">Terms of Service</a></li>
                    <li><a href="#cookies">Cookie Policy</a></li>
                    <li><a href="#license">License Terms</a></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="footer-cta">
              <div class="cta-content">
                <h3 class="cta-title">Ready to Transform Your SEO Workflow?</h3>
                <p class="cta-description">Join SEO professionals who save hours every month with Leon's Link Lens</p>
                <div class="cta-buttons">
                  <a href="#" class="cta-button primary">Add to Chrome - $6.99</a>
                  <a href="#" class="cta-button secondary">View Demo</a>
                </div>
                <div class="cta-guarantees">
                  <div class="guarantee-item">
                    <svg class="guarantee-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" fill="currentColor"/>
                    </svg>
                    <span>30-Day Money-Back Guarantee</span>
                  </div>
                  <div class="guarantee-item">
                    <svg class="guarantee-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z" fill="currentColor"/>
                    </svg>
                    <span>Secure Payment via Stripe</span>
                  </div>
                  <div class="guarantee-item">
                    <svg class="guarantee-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L3.09 8.26L4 21L12 17L20 21L20.91 8.26L12 2Z" fill="currentColor"/>
                    </svg>
                    <span>Lifetime Updates Included</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="footer-bottom">
            <div class="footer-copyright">
              <p>&copy; 2024 Leon's Link Lens. Created by Michael Leon. All rights reserved.</p>
              <p class="chrome-notice">Chrome Web Store and Chrome are trademarks of Google Inc.</p>
            </div>
            
            <div class="footer-social">
              <div class="social-links">
                <a href="#" class="social-link" aria-label="Twitter">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" fill="currentColor"/>
                  </svg>
                </a>
                <a href="#" class="social-link" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" fill="currentColor"/>
                    <circle cx="4" cy="4" r="2" fill="currentColor"/>
                  </svg>
                </a>
                <a href="#" class="social-link" aria-label="Email">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="currentColor"/>
                    <polyline points="22,6 12,13 2,6" fill="none" stroke="#2B4B6F" stroke-width="2"/>
                  </svg>
                </a>
                <a href="#" class="social-link" aria-label="GitHub">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill="currentColor"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        .footer-section {
          background: #2B4B6F;
          color: #FFFFFF;
          padding: 80px 20px 40px;
          position: relative;
        }

        .footer-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #FF6B35, #e55a2b);
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-content {
          margin-bottom: 60px;
        }

        .footer-main {
          display: grid;
          grid-template-columns: 2fr 3fr;
          gap: 80px;
          margin-bottom: 60px;
        }

        .footer-brand {
          max-width: 400px;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .logo-icon {
          width: 48px;
          height: 48px;
          color: #FFFFFF;
          position: relative;
        }

        .logo-icon svg {
          width: 100%;
          height: 100%;
        }

        .brand-name {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 4px;
          line-height: 1.2;
        }

        .brand-tagline {
          font-size: 0.9rem;
          color: #B8C5D1;
          margin: 0;
        }

        .brand-description {
          font-size: 1rem;
          line-height: 1.6;
          color: #B8C5D1;
          margin: 0;
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .column-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 20px;
          color: #FFFFFF;
        }

        .footer-menu {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-menu li {
          margin-bottom: 12px;
        }

        .footer-menu a {
          color: #B8C5D1;
          text-decoration: none;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          line-height: 1.5;
          position: relative;
        }

        .footer-menu a:hover {
          color: #FF6B35;
          text-decoration: underline;
        }

        .footer-cta {
          background: #3E5C7A;
          border-radius: 20px;
          padding: 60px 40px;
          text-align: center;
          border: 1px solid #4A6B85;
          position: relative;
          overflow: hidden;
        }

        .footer-cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at center, rgba(255, 107, 53, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .cta-content {
          position: relative;
          z-index: 1;
        }

        .cta-title {
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .cta-description {
          font-size: 1.2rem;
          color: #B8C5D1;
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.5;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          align-items: center;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .cta-button {
          padding: 16px 32px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .cta-button.primary {
          background: linear-gradient(135deg, #FF6B35, #e55a2b);
          color: #FFFFFF;
          box-shadow: 0 4px 16px rgba(255, 107, 53, 0.3);
        }

        .cta-button.primary:hover {
          background: linear-gradient(135deg, #e55a2b, #d14d1f);
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(255, 107, 53, 0.4);
        }

        .cta-button.secondary {
          background: transparent;
          color: #FFFFFF;
          border: 2px solid #FFFFFF;
        }

        .cta-button.secondary:hover {
          background: #FFFFFF;
          color: #2B4B6F;
          transform: translateY(-2px);
        }

        .cta-guarantees {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .guarantee-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          color: #B8C5D1;
        }

        .guarantee-icon {
          width: 16px;
          height: 16px;
          color: #FF6B35;
          flex-shrink: 0;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 40px;
          border-top: 1px solid #3E5C7A;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer-copyright p {
          margin: 0;
          font-size: 0.9rem;
          color: #B8C5D1;
          line-height: 1.5;
        }

        .chrome-notice {
          font-size: 0.8rem !important;
          opacity: 0.8;
        }

        .social-links {
          display: flex;
          gap: 16px;
        }

        .social-link {
          width: 40px;
          height: 40px;
          background: #3E5C7A;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #B8C5D1;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: #FF6B35;
          color: #FFFFFF;
          transform: translateY(-2px);
        }

        .social-link svg {
          width: 20px;
          height: 20px;
        }

        /* Mobile Responsive */
        @media (max-width: 968px) {
          .footer-main {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          
          .footer-links {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .footer-section {
            padding: 60px 20px 40px;
          }
          
          .footer-links {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          
          .footer-cta {
            padding: 40px 24px;
          }
          
          .cta-title {
            font-size: 1.8rem;
          }
          
          .cta-description {
            font-size: 1.1rem;
          }
          
          .cta-buttons {
            flex-direction: column;
            gap: 16px;
          }
          
          .cta-button {
            width: 100%;
            max-width: 300px;
          }
          
          .cta-guarantees {
            flex-direction: column;
            gap: 16px;
            align-items: center;
          }
          
          .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: 24px;
          }
        }

        @media (max-width: 480px) {
          .brand-logo {
            flex-direction: column;
            text-align: center;
            gap: 12px;
          }
          
          .cta-title {
            font-size: 1.5rem;
          }
          
          .cta-description {
            font-size: 1rem;
          }
          
          .footer-cta {
            padding: 32px 20px;
          }
          
          .guarantee-item {
            flex-direction: column;
            text-align: center;
            gap: 8px;
          }

          .social-links {
            justify-content: center;
          }
        }
      </style>
    `;
  }
}

customElements.define('footer-section', FooterSection);
"""

print("Footer Section JavaScript file created successfully!")
print(f"File length: {len(footer_js)} characters")