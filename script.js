// BLOCK-SOFT 官方网站 — 交互脚本
// 设计原则：HTML 与 CSS 已保证完整可用性，JavaScript 仅做渐进增强。

document.addEventListener('DOMContentLoaded', function () {
    console.log('BLOCK-SOFT 官方网站已加载');

    // 为所有胶囊按钮添加系统级按压微交互（scale 0.95）
    const pills = document.querySelectorAll('.btn-primary, .btn-secondary-pill, .nav-cta');
    pills.forEach(function (btn) {
        btn.addEventListener('pointerdown', function () {
            btn.style.transform = 'scale(0.95)';
        });
        btn.addEventListener('pointerup', function () {
            btn.style.transform = '';
        });
        btn.addEventListener('pointerleave', function () {
            btn.style.transform = '';
        });
    });

    // 导航栏：滚动后收紧阴影/背景（渐进增强，无 JS 也不影响使用）
    const nav = document.querySelector('.global-nav');
    if (nav) {
        let ticking = false;
        window.addEventListener('scroll', function () {
            if (!ticking) {
                window.requestAnimationFrame(function () {
                    if (window.scrollY > 8) {
                        nav.style.boxShadow = '0 1px 0 rgba(255,255,255,0.08)';
                    } else {
                        nav.style.boxShadow = 'none';
                    }
                    ticking = false;
                });
                ticking = true;
            }
        });
    }
});
