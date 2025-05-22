// 等待 DOM 加载完成
document.addEventListener('DOMContentLoaded', function () {
    // 创建预加载器元素
    const preloader = document.createElement('div');
    preloader.id = 'preloader';

    const loaderLine = document.createElement('div');
    loaderLine.className = 'loader_line';

    preloader.appendChild(loaderLine);
    document.body.appendChild(preloader);

    // 检测是否为移动设备
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    );

    if (isMobile) {
        preloader.remove();
    } else {
        setTimeout(() => {
            preloader.classList.add('preloader-hide');
            setTimeout(() => {
                preloader.remove();
            }, 800);
        }, 2000);
    }
}); 