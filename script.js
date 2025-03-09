// 语言数据
const translations = {
    zh: {
        'nav-home': '主页',
        'nav-advantages': '我们的优势',
        'nav-works': '我们的作品',
        'nav-contact': '联系我们',
        'home-title': '东篱互娱网络科技助力竖屏短剧走向世界',
        'home-text': '全球领先的竖屏短剧内容提供商，随时随地为您带来短剧的沉浸式娱乐',
        'advantages-title': '我们的优势',
        'advantage-1-title': '全球覆盖',
        'advantage-1-text': '服务遍布世界各地，触达亿万观众。',
        'advantage-2-title': '丰富内容',
        'advantage-2-text': '千部短剧库存 每月更新百部 时刻先人一步',
        'advantage-3-title': '优质服务',
        'advantage-3-text': '7*24小时服务 提供样片 免费咨询',
        'works-title': '我们的作品',
        'contact-title': '联系我们',
        'contact-company': '东篱互娱网络科技公司 / DonLi Mutual Entertainment Beijing Technology Co., Ltd',
        'contact-phone': '电话: 0086-18611356271',
        'contact-email': '邮箱: mengyang7544@gmail.com',
        'contact-wechat': 'Wechat: 18611356271',
        'contact-address': '地址: G169, Room 703, Building 5, No.98 Lianshi Lake West Road, Mentougou District, Beijing'
    },
    en: {
        'nav-home': 'Home',
        'nav-advantages': 'Our Advantages',
        'nav-works': 'Our Works',
        'nav-contact': 'Contact Us',
        'home-title': 'DonLi Mutual Entertainment Empowers Vertical Short Dramas to Go Global',
        'home-text': 'World-leading vertical short drama content provider, delivering immersive short drama entertainment anytime, anywhere.',
        'advantages-title': 'Our Advantages',
        'advantage-1-title': 'Global Reach',
        'advantage-1-text': 'Serving audiences worldwide, reaching billions.',
        'advantage-2-title': 'Rich Content',
        'advantage-2-text': 'Thousands of short dramas in stock, updated with hundreds monthly, always one step ahead.',
        'advantage-3-title': 'Premium Service',
        'advantage-3-text': '7*24-hour service, sample clips provided, free consultation.',
        'works-title': 'Our Works',
        'contact-title': 'Contact Us',
        'contact-company': 'DonLi Mutual Entertainment Beijing Technology Co., Ltd',
        'contact-phone': 'Phone: 0086-18611356271',
        'contact-email': 'Email: mengyang7544@gmail.com',
        'contact-wechat': 'Wechat: 18611356271',
        'contact-address': 'Address: G169, Room 703, Building 5, No.98 Lianshi Lake West Road, Mentougou District, Beijing'
    },
    ja: {
        'nav-home': 'ホーム',
        'nav-advantages': '私たちの強み',
        'nav-works': '私たちの作品',
        'nav-contact': 'お問い合わせ',
        'home-title': '東籬互娯網絡科技が縦型ショートドラマを世界に広める',
        'home-text': '世界をリードする縦型短編ドラマコンテンツプロバイダー、いつでもどこでもショートドラマの没入型エンターテインメントをお届けします。',
        'advantages-title': '私たちの強み',
        'advantage-1-title': 'グローバル展開',
        'advantage-1-text': '世界中でサービスを展開し、何十億もの視聴者にリーチ。',
        'advantage-2-title': '豊富なコンテンツ',
        'advantage-2-text': '数千の短編ドラマ在庫、毎月数百本更新、常に一歩先を行く。',
        'advantage-3-title': 'プレミアムサービス',
        'advantage-3-text': '7*24時間サービス、サンプル動画提供、無料相談。',
        'works-title': '私たちの作品',
        'contact-title': 'お問い合わせ',
        'contact-company': '東籬互娯網絡科技有限公司 / DonLi Mutual Entertainment Beijing Technology Co., Ltd',
        'contact-phone': '電話: 0086-18611356271',
        'contact-email': 'メール: mengyang7544@gmail.com',
        'contact-wechat': 'Wechat: 18611356271',
        'contact-address': '住所: 北京市門頭溝区蓮石湖西路98号5号ビル703室G169'
    }
};

// 更新语言函数
function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// 确保 DOM 加载完成后绑定事件
document.addEventListener('DOMContentLoaded', function() {
    // 默认加载中文
    updateLanguage('zh');

    // 语言切换
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            const selectedLang = this.value;
            updateLanguage(selectedLang);
        });
    } else {
        console.error('Language select element not found');
    }

    // 平滑滚动
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            } else {
                console.error(`Target section #${targetId} not found`);
            }
        });
    });

    // 暗色模式切换
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            const isDarkMode = document.body.classList.contains('dark-mode');
            themeToggle.textContent = isDarkMode ? '亮色模式' : '暗色模式';
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        });

        // 检查本地存储中的主题偏好
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            themeToggle.textContent = '亮色模式';
        }
    } else {
        console.error('Theme toggle button not found');
    }

    // 轮播逻辑
    const carouselInner = document.querySelector('.carousel-inner');
    const posters = document.querySelectorAll('.poster');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    let currentIndex = 0;
    const totalPosters = posters.length;
    const posterWidth = 220;
    let autoSlide;

    function updateCarousel() {
        const offset = -currentIndex * posterWidth;
        carouselInner.style.transform = `translateX(${offset}px)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalPosters;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalPosters) % totalPosters;
        updateCarousel();
    }

    function startAutoSlide() {
        autoSlide = setInterval(nextSlide, 3000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlide);
    }

    nextBtn.addEventListener('click', () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });

    carouselInner.addEventListener('mouseenter', stopAutoSlide);
    carouselInner.addEventListener('mouseleave', startAutoSlide);

    updateCarousel();
    startAutoSlide();
});