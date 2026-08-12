window.SiteContent = {
  header: `<header class="site-header" id="top">
    <nav class="nav container" aria-label="Main navigation">
      <button class="nav-toggle" aria-expanded="false" aria-controls="nav-menu" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
      <a href="index.html" class="brand" aria-label="Raminta Coaching home">
        <span class="brand-mark" aria-hidden="true">R</span>
        <span class="brand-name">Raminta <em>Coaching</em></span>
      </a>
      <a class="btn btn-primary btn-header-cta" href="https://app.hubfit.com/plans/688387865c56841b3dd9c6ea" target="_blank" rel="noopener" data-track="nav_cta_click" data-track-label="Start Today — nav">Start Today</a>
      <ul class="nav-menu" id="nav-menu">
        <li><a href="index.html#about">About</a></li>
        <li><a href="index.html#journey">How It Works</a></li>
        <li><a href="index.html#online-coaching">Online Coaching</a></li>
        <li><a href="index.html#personal-training">Personal Training</a></li>
        <li><a href="calculator.html">Calculator</a></li>
        <li><a href="store.html">Shop</a></li>
        <li><a href="index.html#contact">Contact</a></li>
      </ul>
    </nav>
  </header>`,
  footer: `<footer id="footer" class="site-footer">
    <div class="container footer-grid">
      <div>
        <a href="index.html" class="brand footer-brand">
          <span class="brand-mark" aria-hidden="true">R</span>
          <span class="brand-name">Raminta <em>Coaching</em></span>
        </a>
        <p class="footer-tag">Online fitness &amp; nutrition coach. Personal trainer in Welwyn Garden City, Hertfordshire.</p>
      </div>
      <div>
        <h3>Get in touch</h3>
        <ul class="footer-links">
          <li><a href="mailto:info@raminta.coach">info@raminta.coach</a></li>
          <li>Welwyn Garden City, Hertfordshire, UK</li>
        </ul>
      </div>
      <div>
        <h3>Follow</h3>
        <ul class="footer-links social-links">
          <li>
            <a href="https://www.instagram.com/ramintacoaching/" target="_blank" rel="noopener">
              <svg class="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg>
              Instagram
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@ramintacoaching" target="_blank" rel="noopener">
              <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.6 3c.4 2 1.7 3.4 3.9 3.6v3c-1.5 0-2.8-.4-3.9-1.2v5.9c0 3.7-2.5 6.1-5.8 6.1-3 0-5.3-2.2-5.3-5.1 0-2.9 2.2-5 5.3-5 .3 0 .7 0 1 .1v3.1a2.6 2.6 0 0 0-1-.2c-1.4 0-2.4.9-2.4 2.1 0 1.3 1 2.1 2.3 2.1 1.6 0 2.7-1.1 2.7-3.2V3h3.2z"/></svg>
              TikTok
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@ramintacoaching" target="_blank" rel="noopener">
              <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12c0 1.6.1 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.3-1.6.4-3.2.4-4.8s-.1-3.2-.4-4.8zM10 15V9l5.2 3L10 15z"/></svg>
              YouTube
            </a>
          </li>
          <li>
            <a href="https://linktr.ee/ramintacoaching" target="_blank" rel="noopener">
              <svg class="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M12 3v18M12 8l-5-4M12 8l5-4M12 14l-5-4M12 14l5-4"/></svg>
              Linktree
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3>Coaching</h3>
        <ul class="footer-links">
          <li><a href="https://app.hubfit.com/plans/688387865c56841b3dd9c6ea" target="_blank" rel="noopener">Coaching Plans (Hubfit)</a></li>
          <li><a href="index.html#online-coaching">Online Coaching</a></li>
          <li><a href="index.html#personal-training">Personal Training WGC</a></li>
          <li><a href="store.html">Shop — Raminta&rsquo;s Picks</a></li>
          <li><a href="client.html">Client Portal (beta)</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom container">
      <p>&copy; <span id="year">2026</span> Raminta Coaching. All rights reserved.</p>
      <p class="powered-by">Powered by <a href="https://alec.today/" target="_blank" rel="noopener">Alec Doran-Twyford (Alectronic&trade;)</a></p>
    </div>
  </footer>`,
  sections: {
    ctaOverlay: `<!-- CTA Drawer Overlay -->
    <div class="cta-overlay" id="cta-overlay" aria-modal="true" role="dialog" aria-label="Get your personalised plan">
      <div class="cta-backdrop" id="cta-backdrop"></div>
      <div class="cta-drawer" id="cta-drawer">
        <div class="cta-drawer-handle" aria-hidden="true"></div>
        <button class="cta-drawer-close" id="cta-close-btn" aria-label="Close">
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <div id="cta-form-state">
          <h2>Get your personalised plan &#127807;</h2>
          <p class="cta-sub">Your calorie targets are a great starting point. Share a few details and Raminta will reach out with a plan tailored specifically to you &mdash; no obligation, no pressure.</p>

          <form class="cta-form" id="cta-enquiry-form"
                action="https://formsubmit.co/info@raminta.coach"
                method="POST">

            <input type="hidden" name="_subject" value="Calculator Lead &mdash; Personalised Plan Request">
            <input type="hidden" name="_template" value="table">
            <input type="hidden" name="_captcha" value="false">
            <input type="hidden" name="_next" value="https://raminta.coach/thanks.html">
            <input type="text" name="_honey" class="honeypot" tabindex="-1" autocomplete="off" aria-hidden="true" style="display:none;">
            <input type="hidden" name="Calorie Results" id="hidden-results">

            <div class="form-row-2">
              <label>
                Your name
                <input type="text" name="name" required autocomplete="name" placeholder="Jane Smith">
              </label>
              <label>
                Your email
                <input type="email" name="email" required autocomplete="email" placeholder="you@example.com">
              </label>
            </div>

            <label>
              Your goal
              <select name="goal">
                <option value="">Select your main goal&hellip;</option>
                <option>Lose weight / body fat</option>
                <option>Build muscle &amp; tone up</option>
                <option>Improve overall fitness</option>
                <option>Improve nutrition habits</option>
                <option>Something else</option>
              </select>
            </label>

            <label>
              I'm interested in
              <select name="interest">
                <option>Online Coaching</option>
                <option>Personal Training (Welwyn Garden City)</option>
                <option>Online Coaching + Personal Training</option>
                <option>Just curious / not sure yet</option>
              </select>
            </label>

            <label>
              Anything else you'd like to share? <span class="text-optional">(optional)</span>
              <textarea name="message" rows="3" placeholder="e.g. current struggles, schedule, questions for Raminta&hellip;"></textarea>
            </label>

            <div class="cta-results-badge" id="cta-results-badge">
              <span class="badge-label">&#128202; Your calculator results</span>
              <div class="badge-lines" id="cta-results-summary"></div>
            </div>

            <button type="submit" class="btn btn-primary btn-lg btn-cta-submit">
              Send to Raminta &rarr;
            </button>

            <p class="privacy-note">
              Your details are only used to respond to your enquiry. &nbsp;<a href="mailto:info@raminta.coach">info@raminta.coach</a>
            </p>
          </form>
        </div>

        <div class="cta-success" id="cta-success-state">
          <div class="success-icon">
            <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <h3>You're all set!</h3>
          <p>Raminta will be in touch shortly.</p>
        </div>
      </div>
    </div>`,
    hero: `
    <section class="hero">
      <div class="container hero-inner">
        <div class="hero-copy reveal">
          <p class="eyebrow">Online Coaching &middot; Welwyn Garden City &middot; Hertfordshire</p>
          <h1>Online Fitness &amp; Nutrition Coach<br><span class="accent">Helping You Lose Fat, Not Muscle</span></h1>
          <p class="lead">
            Personalised training and real nutrition science &mdash; for anyone rebuilding strength after falling off, or navigating a GLP-1 journey the right way. Local to Welwyn Garden City? Add in-person personal training too.
          </p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="https://app.hubfit.com/plans/688387865c56841b3dd9c6ea" target="_blank" rel="noopener" data-track="hero_cta_click" data-track-label="View Coaching Plans — hero">View Coaching Plans</a>
            <a class="btn btn-ghost" href="#contact" data-track="hero_cta_click" data-track-label="Book a Free Consultation — hero">Book a Free Consultation</a>
          </div>
          <ul class="hero-points">
            <li>No strict diets</li>
            <li>Plans built around your schedule</li>
            <li>Message your coach anytime</li>
          </ul>
        </div>
        <div class="hero-visual reveal" aria-hidden="true">
          <div class="hero-card">
            <div class="hero-card-leaf">
              <svg aria-hidden="true" viewBox="0 0 64 64" width="52" height="52" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                <path d="M32 56 C32 34 40 18 56 8 C56 32 46 48 32 56 Z"/>
                <path d="M32 56 C32 40 26 28 12 20 C13 38 21 50 32 56 Z"/>
              </svg>
            </div>
            <p class="hero-card-quote">&ldquo;No guesswork. Just structure, support, and progress.&rdquo;</p>
            <p class="hero-card-sign">— Raminta</p>
          </div>
        </div>
      </div>
    </section>`,

    about: `
    <section class="section" id="about">
      <div class="container grid-2">
        <div class="reveal">
          <p class="eyebrow">About Raminta</p>
          <h2>Hi, I&rsquo;m Raminta — your fitness &amp; nutrition coach</h2>
          <p>
            Trying to lose weight, but ending up smaller and softer instead of leaner and stronger? You're not doing anything wrong — you're just missing the plan that protects your muscle while the fat comes off. That's exactly what I coach.
          </p>
          <p>
            I help you rebuild strength, fix your nutrition, and lose fat properly — built around your real life, whether you're training naturally or navigating a GLP-1 journey.
          </p>
          <p>
            Coaching is mainly online: a personalised plan in my app, regular check-ins so you're never doing this alone, and nutrition built around eating enough — not another restrictive diet. In-person sessions are also available in Welwyn Garden City, spaces limited.
          </p>
          <p>
            Lose the fat. Keep the strength. Feel in control of your body again.
          </p>
          <a class="btn btn-ghost" href="https://www.instagram.com/ramintacoaching/" target="_blank" rel="noopener">Follow my journey on Instagram</a>
        </div>
        <div class="about-side reveal">
          <figure class="photo-frame">
            <img src="assets/img/raminta.jpg" alt="Raminta, fitness and nutrition coach" loading="lazy" onerror="this.parentElement.style.display='none'">
          </figure>
          <div class="about-panel">
          <h3>My coaching is for you if&hellip;</h3>
          <ul class="check-list">
            <li>You're losing weight but feel smaller and softer, not leaner and stronger</li>
            <li>You've tried strict diets that never last</li>
            <li>You've hit a plateau and the scale won't move, no matter what you try</li>
            <li>You want to protect your muscle while the fat comes off, not just watch the scale drop</li>
            <li>You have regular access to a gym or a well-equipped home setup</li>
            <li>You want real accountability — not just a PDF plan</li>
            <li>You want to feel strong, confident, and energised again</li>
          </ul>
          </div>
        </div>
      </div>
    </section>`,
    journey: `
    <section class="section section-tinted" id="journey">
      <div class="container">
        <div class="section-head reveal">
          <p class="eyebrow">How It Works</p>
          <h2>Your coaching journey</h2>
          <p class="section-sub">Four simple steps from first chat to lasting results — without losing the muscle you've worked for.</p>
        </div>
        <div class="steps">
          <article class="step reveal">
            <span class="step-num">1</span>
            <h3>Consultation</h3>
            <p>We talk through your goals, your history with dieting, and where muscle loss has caught you out before. Together we build a plan where nutrition, training, and your real schedule actually work together — not against each other.</p>
          </article>
          <article class="step reveal">
            <span class="step-num">2</span>
            <h3>Nutrition Strategy</h3>
            <p>I calculate your protein and calorie targets, build a realistic eating plan around them, and make sure you're eating enough to protect your muscle — not just less. No strict diets. No crash cuts. Just structure that actually holds.</p>
          </article>
          <article class="step reveal">
            <span class="step-num">3</span>
            <h3>Training Program</h3>
            <p>We build a program around progressive overload — the training stimulus that tells your body to hold onto what you've built while the fat comes off. Personalised, realistic, and designed for strength, not just calories burned.</p>
          </article>
          <article class="step reveal">
            <span class="step-num">4</span>
            <h3>Accountability</h3>
            <p>Weekly check-ins to see how things are actually trending, not just guessing. Daily touchpoints to keep you consistent. Full access to message me anytime. You're supported every step of losing the fat and keeping what you've built.</p>
          </article>
        </div>
      </div>
    </section>`,
    onlineCoaching: `
    <section class="section" id="online-coaching">
      <div class="container">
        <div class="section-head reveal">
          <p class="eyebrow">Signature Service</p>
          <h2>Online Fitness &amp; Nutrition Coaching</h2>
          <p class="section-sub">Everything you need to lose fat and keep your strength — training, nutrition, and support delivered through my app, wherever you are.</p>
        </div>
        <div class="services-grid">
          <div class="service-card reveal">
            <div class="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            </div>
            <h3>Personalised Training Plan</h3>
            <p>Built around progressive overload and your access to a gym or well-equipped home setup — so a deficit costs you fat, not the strength you've built.</p>
          </div>
          <div class="service-card reveal">
            <div class="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h3>Nutrition &amp; Macros</h3>
            <p>Targets built around how you actually eat — whether that means eating more consistently or reeling it in — plus a food logger and meal ideas that keep you on track without restriction.</p>
          </div>
          <div class="service-card reveal">
            <div class="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <h3>Weekly Check-ins</h3>
            <p>A real review of your progress — strength, energy, and the scale — with your plan adjusted as you go, not left on autopilot.</p>
          </div>
          <div class="service-card reveal">
            <div class="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            </div>
            <h3>Daily Accountability</h3>
            <p>App tracking and full access to message me anytime — questions, struggles, or wins. Support every day, not just once a week.</p>
          </div>
        </div>
        <div class="center reveal" style="margin-top: 3rem;">
          <a class="btn btn-primary btn-lg" href="https://app.hubfit.com/plans/688387865c56841b3dd9c6ea" target="_blank" rel="noopener">Start Online Coaching</a>
        </div>
      </div>
    </section>`,
    personalTraining: `
    <section class="section section-tinted" id="personal-training">
      <div class="container grid-2">
        <div class="reveal">
          <p class="eyebrow">Private In-Person Coaching</p>
          <h2>Personal Trainer in Welwyn Garden City</h2>
          <p class="lead">By application only. Currently 1–2 spots available, minimum 6-month commitment.</p>
          <p>
            Most of my coaching capacity goes to my online clients — in-person spots are deliberately kept small, and right now I only have room for one or two new clients ready to commit for at least 6 months.
          </p>
          <p>
            If you're local and ready for that kind of commitment, apply below and I'll be in touch to see if it's the right fit on both sides.
          </p>
          <a class="btn btn-primary" href="#contact" data-track="pt_cta_click" data-track-label="Apply for In-Person Coaching">Apply for In-Person Coaching</a>
        </div>
        <div class="reveal pt-image-col">
          <figure class="photo-frame">
            <img src="assets/img/pt-session.jpg" alt="Raminta coaching a client in the gym" loading="lazy" onerror="this.parentElement.style.display='none'">
          </figure>
        </div>
      </div>
      <div class="container map-block reveal">
        <div id="gym-map" class="gym-map" aria-label="Map of training locations in Welwyn Garden City"></div>
        <noscript>
          <p>Enable JavaScript to see the map, or open the locations directly:
            <a href="https://www.google.com/maps/search/?api=1&amp;query=Norton+Gym+26-28+Hyde+Way+Welwyn+Garden+City+AL7+3UQ">Norton Gym</a> &middot;
            <a href="https://www.google.com/maps/search/?api=1&amp;query=Anytime+Fitness+Welwyn+Garden+City">Anytime Fitness Welwyn Garden City</a>
          </p>
        </noscript>
      </div>
    </section>`,
    newsletter: `
    <section class="section" id="newsletter">
      <div class="container">
        <div class="section-head reveal">
          <p class="eyebrow">Newsletter</p>
          <h2>The Research</h2>
          <p class="section-sub">Case studies, the science behind fat loss and muscle maintenance, and what I'm actually seeing work with clients — straight to your inbox.</p>
        </div>
        <div class="reveal" style="text-align: center; max-width: 700px; margin: 0 auto 3rem auto;">
          <p>I go deeper here than a caption or a reel ever could — breaking down studies on protein, training, and GLP-1s, and sharing real client case studies (with permission) so you can see what actually works, not just what sounds good.</p>
        </div>
        <div class="center reveal">
          <a class="btn btn-primary btn-lg" href="https://blog.raminta.coach" target="_blank" rel="noopener">Subscribe on Substack</a>
        </div>
      </div>
    </section>`,
    testimonials: `
    <section class="section section-tinted" id="social-proof">
      <div class="container">
        <div class="section-head reveal">
          <p class="eyebrow">Social Proof</p>
          <h2>Real Results &amp; Testimonials</h2>
          <p class="section-sub">What my clients are saying</p>
        </div>
        <div class="testimonials">
          <blockquote class="testimonial reveal">
            <p>"Raminta is a great trainer, I feel much more equipped to manage my workout schedule after only a few sessions. I’ve made good progress in a short amount of time. Speaking from experience as a relative beginner, it’s much easier to stay motivated and go to the gym regularly when you have sessions and check-ins with Minty compared to going on your own. Minty is super friendly and always willing to give advice — highly recommended!"</p>
            <footer>— Angus</footer>
          </blockquote>
          <blockquote class="testimonial reveal">
            <p>"If there were 10 stars Raminta would have them. Where do I start? Having trained with her and worked through my personal goals I have seen signs and gains of not just physical strength, but overall health and fitness. So that’s a lifestyle change and check for me. Combining fitness and nutrition in every aspect of my day. Raminta is unlike any other trainer I’ve had before and along with her positive attitude, energy and enthusiasm I could not recommend her highly enough. 10/10"</p>
            <footer>— Christopher</footer>
          </blockquote>
          <blockquote class="testimonial reveal">
            <p>"I’ve had sessions with various trainers over the years but I can honestly say that Raminta is one of the best I have ever found. She really takes the time to understand her clients and builds programmes that are attainable but work towards your goals. I’ve never been so motivated to keep going back to the gym. I’m actually enjoying working out and I already feel fitter, stronger and more energetic. If you need to kick-start your training just book a session — you won’t be disappointed."</p>
            <footer>— Andrew</footer>
          </blockquote>
          <blockquote class="testimonial reveal">
            <p>"I cannot recommend Raminta as a trainer highly enough. I have worked with her for two and a half years now and have achieved results both physically and mentally that I once never thought possible. I hope you will get to experience your best self with the support and guidance of this remarkable human."</p>
            <footer>— James</footer>
          </blockquote>
        </div>
        
        <!-- <div class="section-head reveal" style="margin-top: 4rem;">
          <h2>Progress Photos</h2>
        </div>
        <div class="cards newsletter-cards">
           <article class="card reveal" style="min-height: 200px; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.05);">
             <p>[Before / after photo]</p>
           </article>
           <article class="card reveal" style="min-height: 200px; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.05);">
             <p>[Before / after photo]</p>
           </article>
           <article class="card reveal" style="min-height: 200px; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.05);">
             <p>[Before / after photo]</p>
           </article>
           <article class="card reveal" style="min-height: 200px; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.05);">
             <p>[Before / after photo]</p>
           </article>
        </div> -->
      </div>
    </section>`,
    different: `
    <section class="section" id="different">
      <div class="container">
        <div class="section-head reveal">
          <h2>What makes this different</h2>
          <p class="section-sub">Not another generic plan</p>
        </div>
        <ul class="diff-list reveal" style="max-width: 700px; margin: 0 auto; list-style: none; padding: 0;">
          <li style="margin-bottom: 1rem;">&#10007; No random workouts pulled from an app</li>
          <li style="margin-bottom: 1rem;">&#10007; No influencer gimmicks or crash-diet promises</li>
          <li style="margin-bottom: 1rem;">&#10007; No guessing whether you're eating enough</li>
          <li style="margin-bottom: 1rem;"><strong>&#10003; Real coaching, built around progressive overload, protein, and your actual life &mdash; so the fat comes off and the muscle stays.</strong></li>
        </ul>
      </div>
    </section>`,
    roadmap: `
    <section class="section section-tinted" id="roadmap">
      <div class="container">
        <div class="section-head reveal">
          <p class="eyebrow">Your Program Roadmap</p>
          <h2>Three phases, twelve weeks</h2>
          <p class="section-sub">A clear path, not a vague promise &mdash; so progress always feels visible, not distant.</p>
        </div>
        <div class="steps">
          <article class="step reveal">
            <span class="step-num">1</span>
            <h3>Weeks 1&ndash;4 &mdash; Build The Floor</h3>
            <p>Non-negotiable minimums: consistent training sessions, protein at every meal, the simplest possible structure. Goal: don't let a bad week become a bad month.</p>
          </article>
          <article class="step reveal">
            <span class="step-num">2</span>
            <h3>Weeks 5&ndash;8 &mdash; Add Capacity</h3>
            <p>With the floor holding, we build strength and nutrition structure further &mdash; progressive overload increases, and your plan adapts to what's actually working.</p>
          </article>
          <article class="step reveal">
            <span class="step-num">3</span>
            <h3>Weeks 9&ndash;12 &mdash; Make It Yours</h3>
            <p>You start adapting the system to your own life without needing me to micromanage it. The real deliverable: independence, not just a number on the scale.</p>
          </article>
        </div>
      </div>
    </section>`,
    after12Weeks: `
    <section class="section" id="after-12-weeks">
      <div class="container reveal">
        <div class="section-head">
          <h2>After the 12 weeks</h2>
        </div>
        <div style="max-width: 800px; margin: 0 auto;">
          <p class="lead">By the end of the 12 weeks, many clients have lost up to 10kg or more &mdash; fat, not muscle &mdash; while building a routine that actually holds. But you're never just left there once the plan ends. You'll have two clear options:</p>
          <ol style="margin-top: 2rem; line-height: 1.6;">
            <li style="margin-bottom: 1.5rem;"><strong>Graduate with your plan</strong> &mdash; I'll leave you with a full plan to follow on your own: your training program, nutrition structure, and everything you need to keep going independently.</li>
            <li><strong>Stay on for ongoing support</strong> &mdash; Continue on a lower-cost maintenance plan, with lighter check-ins and continued accountability, if you'd rather keep the support without the full coaching intensity.</li>
          </ol>
        </div>
      </div>
    </section>`,

    inPerson: `
    <section class="section section-tinted" id="personal-training">
      <div class="container grid-2">
        <div class="reveal">
          <p class="eyebrow">Local Add-on</p>
          <h2>Personal Trainer in Welwyn Garden City</h2>
          <p>
            <strong>Do you offer in-person sessions?</strong><br>
            Yes, in Welwyn Garden City &mdash; currently by application only.
          </p>
          <p>
            For clients who want hands-on technique coaching or simply train better with someone beside them, I offer limited spaces at Norton Gym and Anytime Fitness as an add-on to online coaching.
          </p>
          <a class="btn btn-primary" href="mailto:info@raminta.coach?subject=Personal%20Training%20in%20Welwyn%20Garden%20City" data-track="contact_click" data-track-label="Enquire About PT Sessions">Enquire About PT Sessions</a>
        </div>
        <div class="about-panel reveal">
          <h3>Where we train</h3>
          <ul class="location-list">
            <li>
              <img class="gym-logo" src="assets/norton-gym.png" alt="Norton Gym logo" width="28" height="28">
              <div>
                <strong>Norton Gym</strong>
                <span>26–28 Hyde Way, Welwyn Garden City AL7 3UQ</span>
                <a href="https://www.google.com/maps/search/?api=1&amp;query=Norton+Gym+26-28+Hyde+Way+Welwyn+Garden+City+AL7+3UQ" target="_blank" rel="noopener">Open in Google Maps</a>
              </div>
            </li>
            <li>
              <img class="gym-logo" src="assets/anytime-fitness.png" alt="Anytime Fitness logo" width="28" height="28">
              <div>
                <strong>Anytime Fitness</strong>
                <span>Welwyn Garden City</span>
                <a href="https://www.google.com/maps/search/?api=1&amp;query=Anytime+Fitness+Welwyn+Garden+City" target="_blank" rel="noopener">Open in Google Maps</a>
              </div>
            </li>
          </ul>
          <p class="panel-note">Currently by application only, with limited spaces available.</p>
        </div>
      </div>
      <div class="container map-block reveal">
        <div id="gym-map" class="gym-map" aria-label="Map of training locations in Welwyn Garden City"></div>
        <noscript>
          <p>Enable JavaScript to see the map, or open the locations directly:
            <a href="https://www.google.com/maps/search/?api=1&amp;query=Norton+Gym+26-28+Hyde+Way+Welwyn+Garden+City+AL7+3UQ">Norton Gym</a> &middot;
            <a href="https://www.google.com/maps/search/?api=1&amp;query=Anytime+Fitness+Welwyn+Garden+City">Anytime Fitness Welwyn Garden City</a>
          </p>
        </noscript>
      </div>
    </section>`,
    faq: `
    <section class="section" id="faq">
      <div class="container container-narrow">
        <div class="section-head reveal">
          <p class="eyebrow">FAQ</p>
          <h2>Common Questions</h2>
        </div>
        <div class="faq reveal">
          <details>
            <summary>Do I need a gym?</summary>
            <p>Regular access to a gym or a well-equipped home setup works best for how I coach — it doesn't need to be fancy, just consistent.</p>
          </details>
          <details>
            <summary>Will this interfere with my GLP-1 medication?</summary>
            <p>No — I don't advise on your medication itself, that stays between you and your prescriber. My role is the training and nutrition around it, built to protect your muscle while you lose fat.</p>
          </details>
          <details>
            <summary>What if I've never trained before?</summary>
            <p>That's fine — your plan is built around where you're starting from, not where anyone else is.</p>
          </details>
          <details>
            <summary>How is this different from a generic app?</summary>
            <p>An app can't tell when you're under-eating, over-training, or stuck. I can — and I adjust your plan as we go, not on a fixed script.</p>
          </details>
          <details>
            <summary>What if I'm not on a GLP-1?</summary>
            <p>This coaching works whether you're on a GLP-1 or losing fat the natural way — the same principles (protein, progressive overload, real accountability) apply either way.</p>
          </details>
          <details>
            <summary>Do you offer in-person sessions?</summary>
            <p>Yes, in Welwyn Garden City — currently by application only, with very limited availability.</p>
          </details>
        </div>
        
        <div class="faq-disclaimer reveal" style="margin-top: 2rem; padding: 1rem; background: rgba(0,0,0,0.03); border-radius: 8px; font-size: 0.9em;">
          <strong>Medical disclaimer</strong><br>
          I provide fitness and nutrition coaching only — not medical advice. I don't diagnose conditions or manage medications, including GLP-1s. Always consult your GP or prescriber before starting or changing any exercise program or medication.
        </div>
      </div>
    </section>`,
    calorieCalculator: `<!-- ===== Calorie Calculator ===== -->
    <section class="section" id="calorie-calculator">
      <div class="container">
        <div class="section-head reveal">
          <p class="eyebrow">Nutrition Tool</p>
          <h2 class="section-title-with-share">
            Free Weight Loss Calorie Calculator
            <button type="button" class="copy-anchor-btn" data-anchor="calorie-calculator" title="Copy link to this section" aria-label="Copy link to this section">
              <svg aria-hidden="true" class="icon-link" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
              <svg aria-hidden="true" class="icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display: none;">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </button>
          </h2>
          <p class="section-sub">Find your personalised daily calorie target and macro breakdown to lose fat, retain lean muscle, and stay consistent.</p>
        </div>
        
        <!-- Wrapped in a single card container -->
        <div class="calc-card calculator-container reveal">
          <div class="calculator-layout height-mode-cm weight-mode-kg">
            <!-- Inputs Column -->
             <div class="calc-column calc-inputs">
              <form id="calorie-form" novalidate>
                <!-- Sex and Age Row -->
                <div class="calc-row-sex-age">
                  <div class="sex-toggle-container">
                    <span class="input-group-label">Biological Sex</span>
                    <div class="toggle-group button-toggle" id="gender-toggle">
                      <input type="radio" id="gender-male" name="gender" value="male">
                      <label for="gender-male" class="toggle-btn">Male</label>

                      <input type="radio" id="gender-female" name="gender" value="female" checked>
                      <label for="gender-female" class="toggle-btn">Female</label>
                    </div>
                  </div>

                  <label for="calc-age">
                    Age
                    <input type="number" id="calc-age" min="15" max="100" placeholder="years" required>
                  </label>
                </div>

                <!-- Height: label above, toggle + input below -->
                <div class="field-group">
                  <span class="input-group-label">Height</span>
                  <div class="field-controls-row">
                    <div class="toggle-group button-toggle" id="height-unit-toggle">
                      <input type="radio" id="height-unit-cm" name="heightUnits" value="cm" checked>
                      <label for="height-unit-cm" class="toggle-btn">cm</label>

                      <input type="radio" id="height-unit-ft" name="heightUnits" value="ft">
                      <label for="height-unit-ft" class="toggle-btn">ft/in</label>
                    </div>

                    <!-- Metric Height -->
                    <div class="height-only-cm field-input-wrap">
                      <input type="number" id="calc-height" min="100" max="250" placeholder="cm" required>
                    </div>
                    <!-- Imperial Height -->
                    <div class="height-only-ft field-input-wrap">
                      <div class="height-ft-in-inputs">
                        <input type="number" id="calc-height-ft" min="3" max="8" placeholder="ft">
                        <input type="number" id="calc-height-in" min="0" max="11" placeholder="in">
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Weight: label above, toggle inline below -->
                <div class="weight-section-container">
                  <span class="input-group-label">Weight</span>
                  <div class="weight-header-row">
                    <div class="toggle-group button-toggle" id="weight-unit-toggle">
                      <input type="radio" id="weight-unit-kg" name="weightUnits" value="kg" checked>
                      <label for="weight-unit-kg" class="toggle-btn">kg</label>

                      <input type="radio" id="weight-unit-st" name="weightUnits" value="st">
                      <label for="weight-unit-st" class="toggle-btn">st/lb</label>

                      <input type="radio" id="weight-unit-lbs" name="weightUnits" value="lbs">
                      <label for="weight-unit-lbs" class="toggle-btn">lbs</label>
                    </div>
                  </div>

                  <div class="weight-inputs-grid">
                    <!-- Current Weight Input Area -->
                    <div class="weight-input-box">
                      <!-- KG Mode -->
                      <label for="calc-weight" class="weight-only-kg">
                        Current
                        <input type="number" id="calc-weight" min="30" max="300" placeholder="kg" required>
                      </label>
                      <!-- Stone + Lbs Mode -->
                      <div class="weight-only-st">
                        <span class="weight-sublabel">Current</span>
                        <div class="height-ft-in-inputs">
                          <input type="number" id="calc-weight-st" min="4" max="50" placeholder="st">
                          <input type="number" id="calc-weight-st-lbs" min="0" max="13" placeholder="lbs">
                        </div>
                      </div>
                      <!-- Lbs Mode -->
                      <label for="calc-weight-lbs" class="weight-only-lbs">
                        Current
                        <input type="number" id="calc-weight-lbs" min="60" max="600" placeholder="lbs">
                      </label>
                    </div>

                    <!-- Target Weight Input Area -->
                    <div class="weight-input-box">
                      <!-- KG Mode -->
                      <label for="calc-target-weight" class="weight-only-kg">
                        Target
                        <input type="number" id="calc-target-weight" min="30" max="300" placeholder="kg">
                      </label>
                      <!-- Stone + Lbs Mode -->
                      <div class="weight-only-st">
                        <span class="weight-sublabel">Target</span>
                        <div class="height-ft-in-inputs">
                          <input type="number" id="calc-target-weight-st" min="4" max="50" placeholder="st">
                          <input type="number" id="calc-target-weight-st-lbs" min="0" max="13" placeholder="lbs">
                        </div>
                      </div>
                      <!-- Lbs Mode -->
                      <label for="calc-target-weight-lbs" class="weight-only-lbs">
                        Target
                        <input type="number" id="calc-target-weight-lbs" min="60" max="600" placeholder="lbs">
                      </label>
                    </div>
                  </div>
                </div>

                <!-- Activity Level (Takes full width) -->
                <div>
                  <label for="calc-activity">
                    Activity Level
                    <select id="calc-activity" required>
                      <option value="1.2">Sedentary (Little/no exercise)</option>
                      <option value="1.375">Lightly Active (1-3 days/week)</option>
                      <option value="1.55" selected>Moderately Active (3-5 days/week)</option>
                      <option value="1.725">Very Active (6-7 days/week)</option>
                      <option value="1.9">Extremely Active (Daily hard training/job)</option>
                    </select>
                  </label>
                </div>

                <div class="calc-actions-row">
                  <button type="submit" class="btn btn-primary btn-lg btn-calc-submit">Calculate My Targets</button>
                  <button type="button" id="calc-clear-btn" class="btn btn-ghost btn-lg btn-calc-clear">Clear</button>
                </div>
                
                <p class="form-note">
                  Calculations are based on the Mifflin-St Jeor equation, the most accurate standard for BMR estimation.
                </p>
              </form>
            </div>

            <!-- Results Column -->
            <div class="calc-column calc-results" id="calculator-results">
              <div class="results-prompt">
                <div class="prompt-icon" aria-hidden="true">
                  <svg aria-hidden="true" viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                    <rect x="12" y="8" width="40" height="48" rx="4"/>
                    <line x1="20" y1="20" x2="44" y2="20"/>
                    <line x1="20" y1="28" x2="44" y2="28"/>
                    <line x1="20" y1="36" x2="32" y2="36"/>
                    <circle cx="40" cy="44" r="4" stroke-width="2.5"/>
                    <line x1="43" y1="47" x2="48" y2="52" stroke-width="2.5"/>
                  </svg>
                </div>
                <h3>Ready to Calculate</h3>
                <p>Enter your details and click calculate to view your personalised daily calorie deficit target and macro split.</p>
              </div>
              
              <div class="results-content" style="display: none;">
                <div class="tdee-banner">
                  <span>Daily Maintenance:</span>
                  <strong id="results-tdee">2,350 kcal</strong>
                </div>

                <!-- Deficit Tabs -->
                <h3 class="results-heading">Choose Your Weight Loss Goal:</h3>
                <div class="deficit-tabs">
                  <button type="button" class="deficit-tab active" data-deficit="500">
                    <div class="deficit-info">
                      <span class="tab-title">Standard Deficit</span>
                      <span class="tab-rate">Lose ~0.5 kg (1 lb) / week</span>
                    </div>
                    <span class="tab-calories" id="calories-standard">1,850 kcal</span>
                  </button>
                  <button type="button" class="deficit-tab" data-deficit="250">
                    <div class="deficit-info">
                      <span class="tab-title">Mild Deficit</span>
                      <span class="tab-rate">Lose ~0.25 kg (0.5 lb) / week</span>
                    </div>
                    <span class="tab-calories" id="calories-mild">2,100 kcal</span>
                  </button>
                  <button type="button" class="deficit-tab" data-deficit="1000">
                    <div class="deficit-info">
                      <span class="tab-title">Extreme Deficit</span>
                      <span class="tab-rate">Lose ~1.0 kg (2 lbs) / week</span>
                    </div>
                    <span class="tab-calories" id="calories-extreme">1,350 kcal</span>
                  </button>
                </div>


                <!-- Weight Progress Graph -->
                <div class="weight-progress-card" id="weight-progress-section" style="display: none;">
                  <div class="weight-progress-header">
                    <span>Target Timeline:</span>
                    <strong id="weight-loss-duration">20 weeks</strong>
                  </div>
                  <div class="weight-progress-bar-container">
                    <div class="weight-progress-node start-node">
                      <span class="node-label">Current</span>
                      <strong class="node-val" id="weight-start-val">85 kg</strong>
                    </div>
                    <div class="weight-progress-line-wrapper">
                      <div class="weight-progress-line">
                        <div class="weight-progress-fill"></div>
                        <div class="weight-progress-flag">
                          <span id="weight-loss-total">-10 kg</span>
                        </div>
                      </div>
                    </div>
                    <div class="weight-progress-node target-node">
                      <span class="node-label">Target</span>
                      <strong class="node-val" id="weight-target-val">75 kg</strong>
                    </div>
                  </div>
                </div>

                <!-- Safe minimum warning -->
                <div id="safety-warning" class="safety-warning" style="display: none;">
                  <strong>⚠️ Note on Safety:</strong> We have adjusted this target to a healthy baseline floor (<span id="safety-limit">1,200</span> kcal). Going below this is not recommended.
                </div>

                <!-- Macros section -->
                <div class="macros-breakdown">
                  <h3 class="results-heading">Daily Macronutrient Targets (<span id="active-deficit-calories">1,850 kcal</span>):</h3>
                  <div class="macro-bars">
                    <div class="macro-bar-item">
                      <div class="macro-info">
                        <strong class="macro-name">Protein (30%)</strong>
                        <span class="macro-val" id="macro-protein">139g</span>
                      </div>
                      <div class="progress-bg"><div class="progress-bar bar-protein"></div></div>
                      <span class="macro-desc">Supports muscle retention &amp; satiety</span>
                    </div>
                    <div class="macro-bar-item">
                      <div class="macro-info">
                        <strong class="macro-name">Fats (30%)</strong>
                        <span class="macro-val" id="macro-fat">62g</span>
                      </div>
                      <div class="progress-bg"><div class="progress-bar bar-fat"></div></div>
                      <span class="macro-desc">Essential for hormone &amp; joint health</span>
                    </div>
                    <div class="macro-bar-item">
                      <div class="macro-info">
                        <strong class="macro-name">Carbohydrates (40%)</strong>
                        <span class="macro-val" id="macro-carb">185g</span>
                      </div>
                      <div class="progress-bg"><div class="progress-bar bar-carb"></div></div>
                      <span class="macro-desc">Fuel for energy &amp; workout performance</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Post-results CTA band -->
              <div class="calc-post-results-cta" id="post-results-cta">
                <p class="cta-nudge">
                  <strong>Want a personalised plan built around these numbers?</strong>
                  Send your results to Raminta and she'll reach out with next steps &mdash; no obligation.
                </p>
                <button type="button" id="open-cta-btn" class="btn btn-primary btn-lg">
                  Get My Personalised Plan &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`,
    contact: `
    <section class="section" id="contact">
      <div class="container container-narrow">
        <div class="section-head reveal">
          <p class="eyebrow">Lead Quiz</p>
          <h2>Find Your Right Fit</h2>
          <p class="section-sub">Short interactive quiz to get a personalised package recommendation.</p>
        </div>
        
        <div class="quiz-container reveal" id="lead-quiz-container" style="background: white; padding: 2.5rem; border-radius: 12px; box-shadow: 0 8px 30px rgba(0,0,0,0.08);">
          <form id="lead-quiz-form" onsubmit="event.preventDefault(); window.processQuiz();">
            <!-- Step 1 -->
            <div class="quiz-step" id="q-step-1">
              <h3 style="margin-bottom: 1.5rem; font-size: 1.25rem;">1. What's your main goal right now?</h3>
              <div class="quiz-options" style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 2rem;">
                <label style="display: flex; align-items: center; gap: 0.75rem; padding: 1rem; border: 1px solid #eaeaea; border-radius: 8px; cursor: pointer; transition: all 0.2s;"><input type="radio" name="q1" value="Lose fat" required> Lose fat without losing muscle</label>
                <label style="display: flex; align-items: center; gap: 0.75rem; padding: 1rem; border: 1px solid #eaeaea; border-radius: 8px; cursor: pointer; transition: all 0.2s;"><input type="radio" name="q1" value="Plateau"> Break through a plateau</label>
                <label style="display: flex; align-items: center; gap: 0.75rem; padding: 1rem; border: 1px solid #eaeaea; border-radius: 8px; cursor: pointer; transition: all 0.2s;"><input type="radio" name="q1" value="Strength"> Build strength</label>
                <label style="display: flex; align-items: center; gap: 0.75rem; padding: 1rem; border: 1px solid #eaeaea; border-radius: 8px; cursor: pointer; transition: all 0.2s;"><input type="radio" name="q1" value="Confidence"> Feel confident in my body again</label>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="quiz-step" id="q-step-2" style="display: none;">
              <h3 style="margin-bottom: 1.5rem; font-size: 1.25rem;">2. Are you currently on a GLP-1 medication?</h3>
              <div class="quiz-options" style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 2rem;">
                <label style="display: flex; align-items: center; gap: 0.75rem; padding: 1rem; border: 1px solid #eaeaea; border-radius: 8px; cursor: pointer;"><input type="radio" name="q2" value="Yes" required> Yes</label>
                <label style="display: flex; align-items: center; gap: 0.75rem; padding: 1rem; border: 1px solid #eaeaea; border-radius: 8px; cursor: pointer;"><input type="radio" name="q2" value="No"> No</label>
                <label style="display: flex; align-items: center; gap: 0.75rem; padding: 1rem; border: 1px solid #eaeaea; border-radius: 8px; cursor: pointer;"><input type="radio" name="q2" value="Considering"> Considering it</label>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="quiz-step" id="q-step-3" style="display: none;">
              <h3 style="margin-bottom: 1.5rem; font-size: 1.25rem;">3. What's your training experience?</h3>
              <div class="quiz-options" style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 2rem;">
                <label style="display: flex; align-items: center; gap: 0.75rem; padding: 1rem; border: 1px solid #eaeaea; border-radius: 8px; cursor: pointer;"><input type="radio" name="q3" value="Beginner" required> Complete beginner</label>
                <label style="display: flex; align-items: center; gap: 0.75rem; padding: 1rem; border: 1px solid #eaeaea; border-radius: 8px; cursor: pointer;"><input type="radio" name="q3" value="Fell off"> Used to train, fell off</label>
                <label style="display: flex; align-items: center; gap: 0.75rem; padding: 1rem; border: 1px solid #eaeaea; border-radius: 8px; cursor: pointer;"><input type="radio" name="q3" value="Currently"> Currently training</label>
              </div>
            </div>

            <!-- Step 4 -->
            <div class="quiz-step" id="q-step-4" style="display: none;">
              <h3 style="margin-bottom: 1.5rem; font-size: 1.25rem;">4. Do you have access to a gym or home equipment?</h3>
              <div class="quiz-options" style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 2rem;">
                <label style="display: flex; align-items: center; gap: 0.75rem; padding: 1rem; border: 1px solid #eaeaea; border-radius: 8px; cursor: pointer;"><input type="radio" name="q4" value="Gym" required> Gym</label>
                <label style="display: flex; align-items: center; gap: 0.75rem; padding: 1rem; border: 1px solid #eaeaea; border-radius: 8px; cursor: pointer;"><input type="radio" name="q4" value="Home"> Well-equipped home setup</label>
                <label style="display: flex; align-items: center; gap: 0.75rem; padding: 1rem; border: 1px solid #eaeaea; border-radius: 8px; cursor: pointer;"><input type="radio" name="q4" value="Neither"> Neither yet</label>
              </div>
            </div>

            <!-- Step 5 -->
            <div class="quiz-step" id="q-step-5" style="display: none;">
              <h3 style="margin-bottom: 1.5rem; font-size: 1.25rem;">5. How ready are you to commit to a plan?</h3>
              <div class="quiz-options" style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 2rem;">
                <label style="display: flex; align-items: center; gap: 0.75rem; padding: 1rem; border: 1px solid #eaeaea; border-radius: 8px; cursor: pointer;"><input type="radio" name="q5" value="Ready" required> Ready now</label>
                <label style="display: flex; align-items: center; gap: 0.75rem; padding: 1rem; border: 1px solid #eaeaea; border-radius: 8px; cursor: pointer;"><input type="radio" name="q5" value="Exploring"> Exploring my options</label>
                <label style="display: flex; align-items: center; gap: 0.75rem; padding: 1rem; border: 1px solid #eaeaea; border-radius: 8px; cursor: pointer;"><input type="radio" name="q5" value="Curious"> Just curious for now</label>
              </div>
            </div>

            <!-- Step 6 (Final) -->
            <div class="quiz-step" id="q-step-6" style="display: none;">
              <h3 style="margin-bottom: 1.5rem; font-size: 1.25rem;">6. Where should I send your result?</h3>
              <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
                <input type="text" id="q-name" placeholder="Your Name" required style="padding: 1rem; border: 1px solid #eaeaea; border-radius: 8px; width: 100%; font-family: inherit;">
                <input type="email" id="q-email" placeholder="Your Email" required style="padding: 1rem; border: 1px solid #eaeaea; border-radius: 8px; width: 100%; font-family: inherit;">
              </div>
            </div>

            <!-- Controls -->
            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #eaeaea; padding-top: 1.5rem;">
              <button type="button" class="btn btn-ghost" id="quiz-back-btn" style="display: none;" onclick="window.quizBack()">Back</button>
              <div style="flex-grow: 1;"></div>
              <button type="button" class="btn btn-primary" id="quiz-next-btn" onclick="window.quizNext()">Next</button>
              <button type="submit" class="btn btn-primary" id="quiz-submit-btn" style="display: none;">Get My Recommendation</button>
            </div>
          </form>

          <!-- Result Area -->
          <div id="quiz-result" style="display: none; text-align: center; padding: 1rem 0;">
             <h3 id="result-title" style="margin-bottom: 1rem;">Your Recommendation</h3>
             <p id="result-desc" style="margin-bottom: 2rem;"></p>
             <a id="result-link" class="btn btn-primary btn-lg" href="#" target="_blank" rel="noopener">Take the Next Step</a>
          </div>
        </div>
      </div>
    </section>
    
    `,
    start: `
    <section class="section cta-band" id="start">
      <div class="container reveal">
        <h2>Ready to feel consistent again?</h2>
        <p>Start your coaching journey today — your plan, your pace, my support every step of the way.</p>
        <div class="hero-actions center">
          <a class="btn btn-light btn-lg" href="https://app.hubfit.com/plans/688387865c56841b3dd9c6ea" target="_blank" rel="noopener" data-track="coaching_plans_click" data-track-label="Start Today — final CTA">Start Today</a>
          <a class="btn btn-outline-light" href="mailto:info@raminta.coach">Email info@raminta.coach</a>
        </div>
      </div>
    </section>`
  }
};