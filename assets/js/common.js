// common.js - 用于所有页面的通用JavaScript功能

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 处理页面跳转到指定锚点时的平滑滚动 (例如从categories.html -> index.html#game)
    const hash = window.location.hash;
    if (hash) {
        // 延迟一点执行，确保页面已完全加载
        setTimeout(() => {
            const targetElement = document.querySelector(hash);
            if (targetElement) {
                scrollToElement(targetElement);
            }
        }, 100);
    }

    // 在页面加载完成后添加点击锚点时的平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // 仅处理同页面内的锚点
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetEl = document.querySelector(this.getAttribute('href'));
                if (targetEl) scrollToElement(targetEl);
            }
        });
    });
});

// 平滑滚动到目标元素
function scrollToElement(targetElement) {
    // 根据窗口宽度设置sticky header偏移
    let headerOffset = window.innerWidth < 768 ? 72 : 90;

    const elementRect = targetElement.getBoundingClientRect();
    const elementTopRelativeToDocument = elementRect.top + window.pageYOffset;
    const elementHeight = targetElement.offsetHeight;
    const viewportHeight = window.innerHeight;

    // 计算基础滚动位置
    const basePosition = elementTopRelativeToDocument - (viewportHeight / 2) + (elementHeight / 2) - headerOffset;
    // 仅在子页面（非主页）增加1/10额外滚动距离
    const multiplier = document.body.id === 'home' ? 1 : 1.45;
    const offsetPosition = basePosition * multiplier;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
} 