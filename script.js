// 这里可以添加网站所需的JavaScript代码
// 目前原HTML中没有JavaScript代码，您可以在这里添加交互功能

// 示例：添加页面加载完成后的提示
document.addEventListener('DOMContentLoaded', function() {
    // 可以在这里添加初始化代码
    console.log('BLOCK-SOFT网站加载完成');
    
    // 示例：为导航链接添加点击事件
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('导航到: ' + this.href);
            // 可以在这里添加自定义导航行为
        });
    });
});
