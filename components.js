// SmartFiQ Central Web Components & Layout Manager (components.js)

(function () {
    const rawPath = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
    let prefix = '';
    if (rawPath.includes('/industries/') || rawPath.includes('/blog/') || rawPath.includes('/case-studies/') || rawPath.includes('/services/')) {
        prefix = '../';
    }

    const activeSegment = rawPath.split('/').pop().replace('.html', '') || 'index';
    const isIndustriesActive = activeSegment === 'industries' || rawPath.includes('/industries');

    // --- 1. HEADER COMPONENT ---
    function renderHeader() {
        const headerEl = document.getElementById('site-header') || document.getElementById('smartfiq-header-container');
        if (!headerEl) return;

        const desktopNavHTML = `
            <a href="${prefix}index.html" class="relative py-1 text-[15px] font-medium tracking-[0.2px] ${activeSegment === 'index' || activeSegment === '' ? 'text-[#FF6B3D]' : 'text-[#B8B8B8] hover:text-[#FF6B3D]'} transition-colors duration-300 group">
                Home
                <span class="absolute bottom-0 left-1/2 -translate-x-1/2 ${activeSegment === 'index' || activeSegment === '' ? 'w-full' : 'w-0 group-hover:w-full'} h-[2px] bg-[#FF6B3D] rounded-full transition-all duration-300"></span>
            </a>
            <a href="${prefix}services.html" class="relative py-1 text-[15px] font-medium tracking-[0.2px] ${activeSegment === 'services' || rawPath.includes('/services') ? 'text-[#FF6B3D]' : 'text-[#B8B8B8] hover:text-[#FF6B3D]'} transition-colors duration-300 group">
                Services
                <span class="absolute bottom-0 left-1/2 -translate-x-1/2 ${activeSegment === 'services' || rawPath.includes('/services') ? 'w-full' : 'w-0 group-hover:w-full'} h-[2px] bg-[#FF6B3D] rounded-full transition-all duration-300"></span>
            </a>
            <a href="${prefix}industries.html" class="relative py-1 text-[15px] font-medium tracking-[0.2px] ${isIndustriesActive ? 'text-[#FF6B3D]' : 'text-[#B8B8B8] hover:text-[#FF6B3D]'} transition-colors duration-300 group">
                Industries
                <span class="absolute bottom-0 left-1/2 -translate-x-1/2 ${isIndustriesActive ? 'w-full' : 'w-0 group-hover:w-full'} h-[2px] bg-[#FF6B3D] rounded-full transition-all duration-300"></span>
            </a>
            <a href="${prefix}case-studies.html" class="relative py-1 text-[15px] font-medium tracking-[0.2px] ${activeSegment === 'case-studies' || rawPath.includes('/case-studies') ? 'text-[#FF6B3D]' : 'text-[#B8B8B8] hover:text-[#FF6B3D]'} transition-colors duration-300 group">
                Case Studies
                <span class="absolute bottom-0 left-1/2 -translate-x-1/2 ${activeSegment === 'case-studies' || rawPath.includes('/case-studies') ? 'w-full' : 'w-0 group-hover:w-full'} h-[2px] bg-[#FF6B3D] rounded-full transition-all duration-300"></span>
            </a>
            <a href="${prefix}blog.html" class="relative py-1 text-[15px] font-medium tracking-[0.2px] ${activeSegment === 'blog' || rawPath.includes('/blog') ? 'text-[#FF6B3D]' : 'text-[#B8B8B8] hover:text-[#FF6B3D]'} transition-colors duration-300 group">
                Blog
                <span class="absolute bottom-0 left-1/2 -translate-x-1/2 ${activeSegment === 'blog' || rawPath.includes('/blog') ? 'w-full' : 'w-0 group-hover:w-full'} h-[2px] bg-[#FF6B3D] rounded-full transition-all duration-300"></span>
            </a>
            <a href="${prefix}about-smartfiq.html" class="relative py-1 text-[15px] font-medium tracking-[0.2px] ${activeSegment === 'about-smartfiq' ? 'text-[#FF6B3D]' : 'text-[#B8B8B8] hover:text-[#FF6B3D]'} transition-colors duration-300 group">
                About
                <span class="absolute bottom-0 left-1/2 -translate-x-1/2 ${activeSegment === 'about-smartfiq' ? 'w-full' : 'w-0 group-hover:w-full'} h-[2px] bg-[#FF6B3D] rounded-full transition-all duration-300"></span>
            </a>
        `;

        const mobileNavHTML = `
            <a href="${prefix}index.html" onclick="toggleSmartfiqMobileMenu()" class="${activeSegment === 'index' || activeSegment === '' ? 'text-[#FF6B3D]' : 'text-[#B8B8B8] hover:text-[#FF6B3D]'} font-medium text-[16px] py-2 border-b border-white/5">Home</a>
            <a href="${prefix}services.html" onclick="toggleSmartfiqMobileMenu()" class="${activeSegment === 'services' || rawPath.includes('/services') ? 'text-[#FF6B3D]' : 'text-[#B8B8B8] hover:text-[#FF6B3D]'} font-medium text-[16px] py-2 border-b border-white/5">Services</a>
            <a href="${prefix}industries.html" onclick="toggleSmartfiqMobileMenu()" class="${isIndustriesActive ? 'text-[#FF6B3D]' : 'text-[#B8B8B8] hover:text-[#FF6B3D]'} font-medium text-[16px] py-2 border-b border-white/5">Industries</a>
            <a href="${prefix}case-studies.html" onclick="toggleSmartfiqMobileMenu()" class="${activeSegment === 'case-studies' || rawPath.includes('/case-studies') ? 'text-[#FF6B3D]' : 'text-[#B8B8B8] hover:text-[#FF6B3D]'} font-medium text-[16px] py-2 border-b border-white/5">Case Studies</a>
            <a href="${prefix}blog.html" onclick="toggleSmartfiqMobileMenu()" class="${activeSegment === 'blog' || rawPath.includes('/blog') ? 'text-[#FF6B3D]' : 'text-[#B8B8B8] hover:text-[#FF6B3D]'} font-medium text-[16px] py-2 border-b border-white/5">Blog</a>
            <a href="${prefix}about-smartfiq.html" onclick="toggleSmartfiqMobileMenu()" class="${activeSegment === 'about-smartfiq' ? 'text-[#FF6B3D]' : 'text-[#B8B8B8] hover:text-[#FF6B3D]'} font-medium text-[16px] py-2 border-b border-white/5">About</a>
        `;

        headerEl.innerHTML = `
        <header id="smartfiq-header"
            class="fixed top-[20px] left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2rem)] max-w-[1180px] h-[64px] rounded-full bg-[rgba(15,15,18,0.75)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.12)] shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-all duration-300 ease-in-out font-plus-jakarta">
            <div class="w-full h-full px-6 flex items-center justify-between relative">
                <!-- LEFT: Logo Image ONLY -->
                <a href="${prefix}index.html" class="flex items-center group">
                    <img src="${prefix}smartfiq-ai-automation-logo.png" alt="SmartFiQ Logo" class="h-8 md:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
                </a>

                <!-- CENTER: Navigation Links -->
                <nav class="hidden md:flex items-center space-x-7 lg:space-x-9">
                    ${desktopNavHTML}
                </nav>

                <!-- RIGHT: Primary CTA Button -->
                <div class="hidden md:flex items-center">
                    <button onclick="openContactModal()" class="inline-flex items-center justify-center px-[24px] py-[10px] text-[14px] font-semibold text-white bg-gradient-to-r from-[#FF6B3D] to-[#FF3D00] rounded-full transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,107,61,0.5)] active:scale-95 cursor-pointer">
                        Book Consultation &rarr;
                    </button>
                </div>

                <!-- Mobile Hamburger Menu Button -->
                <button id="mobileMenuBtn" onclick="toggleSmartfiqMobileMenu()" class="md:hidden flex flex-col justify-center items-center w-9 h-9 text-white focus:outline-none p-1 rounded-full hover:bg-white/5 transition-colors" aria-label="Toggle Navigation Menu">
                    <div id="bar1" class="w-5 h-[2px] bg-white rounded-full transition-all duration-300"></div>
                    <div id="bar2" class="w-5 h-[2px] bg-white rounded-full transition-all duration-300 my-1"></div>
                    <div id="bar3" class="w-5 h-[2px] bg-white rounded-full transition-all duration-300"></div>
                </button>

                <!-- Mobile Dropdown Menu -->
                <div id="smartfiqMobileDropdown" class="hidden md:hidden absolute top-[calc(100%+12px)] left-0 w-full bg-[rgba(15,15,18,0.95)] backdrop-blur-[24px] border border-[rgba(255,255,255,0.12)] p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col gap-4 z-50">
                    ${mobileNavHTML}
                    <button onclick="openContactModal(); toggleSmartfiqMobileMenu();" class="w-full mt-2 inline-flex items-center justify-center px-[28px] py-[12px] text-[15px] font-semibold text-white bg-gradient-to-r from-[#FF6B3D] to-[#FF3D00] rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,107,61,0.5)] active:scale-95">
                        Book Consultation &rarr;
                    </button>
                </div>
            </div>
        </header>
        `;

        // Scroll listener for Header Shrink
        let isScrolledTicking = false;
        window.addEventListener('scroll', function () {
            if (!isScrolledTicking) {
                window.requestAnimationFrame(function () {
                    const header = document.getElementById('smartfiq-header');
                    if (header) {
                        if (window.scrollY > 20) {
                            header.classList.remove('h-[64px]', 'bg-[rgba(15,15,18,0.75)]');
                            header.classList.add('h-[58px]', 'bg-[rgba(10,10,14,0.88)]', 'shadow-[0_16px_48px_rgba(0,0,0,0.45)]');
                        } else {
                            header.classList.remove('h-[58px]', 'bg-[rgba(10,10,14,0.88)]', 'shadow-[0_16px_48px_rgba(0,0,0,0.45)]');
                            header.classList.add('h-[64px]', 'bg-[rgba(15,15,18,0.75)]');
                        }
                    }
                    isScrolledTicking = false;
                });
                isScrolledTicking = true;
            }
        }, { passive: true });
    }

    // --- 2. FOOTER COMPONENT ---
    function renderFooter() {
        const footerEl = document.getElementById('site-footer') || document.getElementById('smartfiq-footer-container');
        if (!footerEl) return;

        footerEl.innerHTML = `
        <footer class="w-full pt-16 pb-8 bg-[#0E0E0E] border-t border-white/10 font-plus-jakarta text-gray-300">
            <div class="grid grid-cols-1 md:grid-cols-5 gap-10 px-6 max-w-[1280px] mx-auto">
                <div class="col-span-1 md:col-span-2">
                    <!-- Logo Image ONLY -->
                    <a href="${prefix}index.html" class="inline-block h-10 mb-6 hover:opacity-90 transition-opacity">
                        <img alt="SmartFiQ Logo" class="h-full w-auto object-contain" src="${prefix}smartfiq-ai-automation-logo.png" />
                    </a>
                    <p class="text-[#E7BDB2] text-sm max-w-xs mb-6 leading-relaxed">
                        Empowering businesses through cutting-edge AI, WhatsApp automations, and intelligent voice agents. Built for the modern enterprise.
                    </p>
                    <div class="flex items-center gap-3 mt-6">
                      <a href="https://www.instagram.com/smartfiq/" target="_blank" rel="noopener noreferrer" 
                         aria-label="SmartFiQ Instagram"
                         class="w-9 h-9 rounded-full bg-white/5 hover:bg-[#ff5625]/20 border border-white/10 hover:border-[#ff5625]/50 flex items-center justify-center text-[#E7BDB2] hover:text-[#ff5625] transition-all duration-300">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                      </a>
                      <a href="https://www.linkedin.com/company/smartfiq/" target="_blank" rel="noopener noreferrer" 
                         aria-label="SmartFiQ LinkedIn"
                         class="w-9 h-9 rounded-full bg-white/5 hover:bg-[#ff5625]/20 border border-white/10 hover:border-[#ff5625]/50 flex items-center justify-center text-[#E7BDB2] hover:text-[#ff5625] transition-all duration-300">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      </a>
                      <a href="https://www.youtube.com/@smartfiq" target="_blank" rel="noopener noreferrer" 
                         aria-label="SmartFiQ YouTube"
                         class="w-9 h-9 rounded-full bg-white/5 hover:bg-[#ff5625]/20 border border-white/10 hover:border-[#ff5625]/50 flex items-center justify-center text-[#E7BDB2] hover:text-[#ff5625] transition-all duration-300">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                      </a>
                    </div>
                </div>
                <div>
                    <h5 class="text-[#ffb5a0] font-bold text-sm uppercase tracking-wider mb-6">Services</h5>
                    <ul class="space-y-3 text-[#E7BDB2] text-sm font-medium">
                        <li><a class="hover:text-[#ff5625] transition-colors inline-block" href="${prefix}services/ai-voice-call-agents.html">AI Voice Agents</a></li>
                        <li><a class="hover:text-[#ff5625] transition-colors inline-block" href="${prefix}services/whatsapp-chatbot-setup.html">WhatsApp Automation</a></li>
                        <li><a class="hover:text-[#ff5625] transition-colors inline-block" href="${prefix}services/website-development.html">Website Development</a></li>
                        <li><a class="hover:text-[#ff5625] transition-colors inline-block" href="${prefix}services/custom-crm-systems.html">Custom CRM Systems</a></li>
                        <li><a class="hover:text-[#ff5625] transition-colors inline-block" href="${prefix}services.html">All Services</a></li>
                    </ul>
                </div>
                <div>
                    <h5 class="text-[#ffb5a0] font-bold text-sm uppercase tracking-wider mb-6">Resources</h5>
                    <ul class="space-y-3 text-[#E7BDB2] text-sm font-medium">
                        <li><a class="hover:text-[#ff5625] transition-colors inline-block" href="${prefix}case-studies.html">Case Studies</a></li>
                        <li><a class="hover:text-[#ff5625] transition-colors inline-block" href="${prefix}blog.html">Insights &amp; Blogs</a></li>
                        <li><a class="hover:text-[#ff5625] transition-colors inline-block" href="${prefix}about-smartfiq.html">About Us</a></li>
                        <li><a class="hover:text-[#ff5625] transition-colors inline-block" href="${prefix}our-story.html">Our Story</a></li>
                        <li><a class="hover:text-[#ff5625] transition-colors inline-block" href="${prefix}smartfiq-faq.html">FAQs</a></li>
                    </ul>
                </div>
                <div>
                    <h5 class="text-[#ffb5a0] font-bold text-sm uppercase tracking-wider mb-6">Legal &amp; Support</h5>
                    <ul class="space-y-3 text-[#E7BDB2] text-sm font-medium">
                        <li><a class="hover:text-[#ff5625] transition-colors inline-block" href="${prefix}privacy-policy.html">Privacy Policy</a></li>
                        <li><a class="hover:text-[#ff5625] transition-colors inline-block" href="${prefix}terms.html">Terms of Service</a></li>
                        <li>
                            <button onclick="openContactModal()" class="inline-flex items-center gap-1.5 text-[#ff5625] hover:text-white transition-colors font-bold text-xs uppercase tracking-wider mt-1">
                                <span class="material-symbols-outlined text-sm">support_agent</span> Contact Support
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="max-w-[1280px] mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-center flex flex-col md:flex-row items-center justify-between gap-4">
                <p id="footer-copyright" class="text-[#E7BDB2] text-xs">© 2026 SmartFiQ AI Solutions. All rights reserved.</p>
                <div class="flex items-center gap-6 text-xs text-[#E7BDB2]">
                    <a href="${prefix}privacy-policy.html" class="hover:text-white transition-colors">Privacy</a>
                    <span>•</span>
                    <a href="${prefix}terms.html" class="hover:text-white transition-colors">Terms</a>
                    <span>•</span>
                    <a href="${prefix}smartfiq-faq.html" class="hover:text-white transition-colors">Help Center</a>
                </div>
            </div>
        </footer>
        `;
    }

    // --- 3. CONTACT MODAL COMPONENT ---
    function renderContactModal() {
        const modalEl = document.getElementById('site-modal') || document.getElementById('smartfiq-modal-container');
        if (!modalEl) return;

        modalEl.innerHTML = `
        <div id="contactModal" style="display: none;" class="fixed inset-0 z-[200] hidden items-center justify-center bg-black/80 backdrop-blur-md p-4 transition-all duration-300 opacity-0">
            <div class="glass-card relative w-full max-w-lg bg-[#0F0F12]/95 border border-white/12 rounded-2xl p-6 md:p-8 shadow-2xl transition-all duration-300 scale-95 text-left">
                <button onclick="closeContactModal()" class="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5">
                    <span class="material-symbols-outlined">close</span>
                </button>
                <div class="mb-6">
                    <h3 class="text-2xl font-bold text-white mb-2">Book Your Free AI Consultation</h3>
                    <p class="text-gray-400 text-sm">Fill in your details below and our AI architects will contact you within 24 hours.</p>
                </div>
                <form id="modalContactForm" onsubmit="submitModalLead(event)" class="space-y-4">
                    <div>
                        <label class="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">Full Name</label>
                        <input type="text" id="modalName" required placeholder="John Doe" class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B3D] transition-colors" />
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">Work Email</label>
                        <input type="email" id="modalEmail" required placeholder="john@company.com" class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B3D] transition-colors" />
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">Phone Number</label>
                            <input type="tel" id="modalPhone" required placeholder="+91 98765 43210" class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B3D] transition-colors" />
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">Project Budget</label>
                            <select id="modalBudget" class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#FF6B3D] transition-colors">
                                <option value="< ₹50k" class="bg-[#0F0F12]">Under ₹50,000</option>
                                <option value="₹50k - ₹1.5L" class="bg-[#0F0F12]" selected>₹50k - ₹1.5 Lakhs</option>
                                <option value="₹1.5L - ₹5L" class="bg-[#0F0F12]">₹1.5L - ₹5 Lakhs</option>
                                <option value="₹5L+" class="bg-[#0F0F12]">₹5 Lakhs+</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">Requirements / Goals</label>
                        <textarea id="modalMessage" rows="3" placeholder="Tell us about your automation needs..." class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B3D] transition-colors resize-none"></textarea>
                    </div>
                    <button type="submit" id="modalSubmitBtn" class="w-full py-3.5 px-6 text-white font-semibold bg-gradient-to-r from-[#FF6B3D] to-[#FF3D00] rounded-xl hover:scale-[1.02] shadow-[0_0_20px_rgba(255,107,61,0.4)] transition-all duration-300 active:scale-95 cursor-pointer">
                        Submit & Book Call
                    </button>
                    <div id="modalFormStatus" class="hidden items-center gap-2 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-sm mt-3">
                        <span class="material-symbols-outlined text-lg">check_circle</span>
                        <span>Request submitted! We will contact you within 24 hours.</span>
                    </div>
                </form>
            </div>
        </div>
        `;
    }

    // --- Global Controls ---
    window.toggleSmartfiqMobileMenu = function () {
        const dropdown = document.getElementById('smartfiqMobileDropdown');
        if (dropdown) dropdown.classList.toggle('hidden');
    };

    window.openContactModal = function () {
        const modal = document.getElementById('contactModal');
        if (modal) {
            modal.style.display = 'flex';
            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                if (modal.children[0]) {
                    modal.children[0].classList.remove('scale-95');
                    modal.children[0].classList.add('scale-100');
                }
            }, 10);
        }
    };

    window.closeContactModal = function () {
        const modal = document.getElementById('contactModal');
        if (modal) {
            modal.classList.add('opacity-0');
            if (modal.children[0]) {
                modal.children[0].classList.remove('scale-100');
                modal.children[0].classList.add('scale-95');
            }
            setTimeout(() => {
                modal.style.display = 'none';
                modal.classList.add('hidden');
            }, 300);
        }
    };

    window.submitModalLead = function (event) {
        event.preventDefault();
        const status = document.getElementById('modalFormStatus');
        const submitBtn = document.getElementById('modalSubmitBtn');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerText = 'Submitting...';
        }
        setTimeout(() => {
            if (status) {
                status.classList.remove('hidden');
                status.classList.add('flex');
            }
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerText = 'Submit & Book Call';
            }
            setTimeout(() => {
                window.closeContactModal();
                if (status) status.classList.add('hidden');
            }, 2500);
        }, 800);
    };

    // --- Init Components ---
    function initComponents() {
        renderHeader();
        renderFooter();
        renderContactModal();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initComponents);
    } else {
        initComponents();
    }
})();
