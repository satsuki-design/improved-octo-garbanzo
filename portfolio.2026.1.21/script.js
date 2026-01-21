// Scroll Event for Header
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Intersection Observer for Section Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.section-title').forEach(el => {
    observer.observe(el);
});

/*
 * INTERNATIONALIZATION (i18n)
 */
const translations = {
    jp: {
        nav_about: "About",
        nav_works: "Works",
        nav_services: "Services",
        nav_contact: "Contact",

        hero_title_1: "Designing the",
        hero_title_2: "Digital Future",
        hero_desc: "美しさと機能性を融合させた、唯一無二のWeb体験を創造します。<br>あなたのブランドを次のレベルへ。",
        hero_cta: "View Works",

        about_title: "About Me",
        about_desc: "東京を拠点に活動するフリーランスWebデザイナー。<br>5年以上の経験を持ち、スタートアップから大手企業まで幅広いクライアントのデジタルプロダクトを手掛けてきました。<br><br>「ただ美しいだけでなく、ビジネスの課題を解決するデザイン」をモットーに、UI/UX設計から実装まで一貫して担当することが可能です。常に最新のトレンドと技術を学び、最高のクオリティを提供します。",
        about_exp_years: "Years Experience",
        about_exp_projects: "Projects Done",

        works_title: "Selected Works",
        work1_cat: "E-Commerce",
        work1_title: "Lumina Apparel",
        work1_desc: "ミニマルで洗練されたアパレルブランドのECサイトリニューアル。CVRを150%向上させました。",
        view_case1: "View Case Study →",
        work2_cat: "SaaS Platform",
        work2_title: "Nexus Analytics",
        work2_desc: "複雑なデータを直感的に理解できるダッシュボードデザイン。ダークモード最適化。",
        view_case2: "View Case Study →",
        work3_cat: "Brand Site",
        work3_title: "Komorebi Coffee",
        work3_desc: "温かみのあるブランディングサイト。写真撮影からディレクションまで担当。",
        view_case3: "View Case Study →",

        services_title: "My Services",
        service1_title: "UI/UX Design",
        service1_desc: "ユーザー心理に基づいた使いやすく美しいインターフェースを設計します。Figmaを使用したプロトタイピングも。",
        service2_title: "Web Development",
        service2_desc: "HTML/CSS/JSを用いたセマンティックでパフォーマンスの高いコーディング。モダンなアニメーション実装。",
        service3_title: "Branding",
        service3_desc: "ロゴ制作からカラーパレットの選定まで、ブランドの世界観を構築するお手伝いをします。",

        contact_title: "Get in Touch",
        contact_desc: "プロジェクトのご相談やご質問など、お気軽にお問い合わせください。<br>通常2営業日以内に返信いたします。",
        form_name: "Name",
        placeholder_name: "Your Name",
        form_email: "Email",
        placeholder_email: "your@email.com",
        form_message: "Message",
        placeholder_message: "Tell me about your project...",
        form_btn: "Send Message",

        contact_alert: "お問い合わせありがとうございます。デモのため送信されません。"
    },
    en: {
        nav_about: "About",
        nav_works: "Works",
        nav_services: "Services",
        nav_contact: "Contact",

        hero_title_1: "Designing the",
        hero_title_2: "Digital Future",
        hero_desc: "creating unique web experiences that blend beauty and functionality.<br>Taking your brand to the next level.",
        hero_cta: "View Works",

        about_title: "About Me",
        about_desc: "Freelance Web Designer based in Tokyo.<br>With over 5 years of experience, I have worked on digital products for a wide range of clients, from startups to large corporations.<br><br>My motto is 'Design that not only looks beautiful but also solves business problems.' I can handle everything from UI/UX design to implementation. I constantly learn the latest trends and technologies to provide the highest quality.",
        about_exp_years: "Years Experience",
        about_exp_projects: "Projects Done",

        works_title: "Selected Works",
        work1_cat: "E-Commerce",
        work1_title: "Lumina Apparel",
        work1_desc: "Renewal of an EC site for a minimal and sophisticated apparel brand. Improved CVR by 150%.",
        view_case1: "View Case Study →",
        work2_cat: "SaaS Platform",
        work2_title: "Nexus Analytics",
        work2_desc: "Dashboard design that allows intuitive understanding of complex data. Optimized for dark mode.",
        view_case2: "View Case Study →",
        work3_cat: "Brand Site",
        work3_title: "Komorebi Coffee",
        work3_desc: "A warm branding site. Handled everything from photography to direction.",
        view_case3: "View Case Study →",

        services_title: "My Services",
        service1_title: "UI/UX Design",
        service1_desc: "I design easy-to-use and beautiful interfaces based on user psychology. Also includes prototyping using Figma.",
        service2_title: "Web Development",
        service2_desc: "Semantic and high-performance coding using HTML/CSS/JS. Modern animation implementation.",
        service3_title: "Branding",
        service3_desc: "I help build the brand's worldview, from logo creation to color palette selection.",

        contact_title: "Get in Touch",
        contact_desc: "Please feel free to contact me for project consultations or questions.<br>I usually reply within 2 business days.",
        form_name: "Name",
        placeholder_name: "Your Name",
        form_email: "Email",
        placeholder_email: "your@email.com",
        form_message: "Message",
        placeholder_message: "Tell me about your project...",
        form_btn: "Send Message",

        contact_alert: "Thank you for your inquiry. This message will not be sent as it is a demo."
    }
};

let currentLang = 'jp';

const updateContent = (lang) => {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key]; // Using innerHTML to support <br> tags
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });

    // Update Language Switcher UI
    document.getElementById('lang-jp').classList.toggle('active', lang === 'jp');
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');

    currentLang = lang;
};

// Event Listeners for Switcher
document.getElementById('lang-jp').addEventListener('click', () => updateContent('jp'));
document.getElementById('lang-en').addEventListener('click', () => updateContent('en'));

// Initialize
// document.addEventListener('DOMContentLoaded', () => updateContent('jp')); // Optional: Ensure content loads
