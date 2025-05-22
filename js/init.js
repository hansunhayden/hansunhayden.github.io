// 原生 JS 实现的功能
document.addEventListener('DOMContentLoaded', function () {
    // 页面过渡
    function handlePageTransition() {
        const sections = document.querySelectorAll('.tokyo_tm_section');
        const links = document.querySelectorAll('.transition_link a');

        links.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const href = this.getAttribute('href');
                const targetSection = document.querySelector(href);

                if (targetSection) {
                    sections.forEach(section => {
                        section.classList.add('hidden');
                    });
                    targetSection.classList.remove('hidden');
                    targetSection.classList.add('active');
                }
            });
        });
    }

    // 模态框
    function initModalBox() {
        const modalBox = document.createElement('div');
        modalBox.className = 'tokyo_tm_modalbox';
        modalBox.innerHTML = `
            <div class="box_inner">
                <div class="close"><a href="#"><i class="icon-cancel"></i></a></div>
                <div class="description_wrap"></div>
            </div>
        `;
        document.querySelector('.tokyo_tm_all_wrap').prepend(modalBox);
    }

    // 新闻模态框
    function initNewsModal() {
        const modalBox = document.querySelector('.tokyo_tm_modalbox');
        const newsItems = document.querySelectorAll('.tokyo_tm_news ul li');

        newsItems.forEach(item => {
            const buttons = item.querySelectorAll('.details .title a, .tokyo_tm_full_link, .tokyo_tm_read_more a');
            buttons.forEach(button => {
                button.addEventListener('click', function (e) {
                    e.preventDefault();
                    const details = item.querySelector('.list_inner').innerHTML;
                    const mainImage = item.querySelector('.main');
                    const imgUrl = mainImage.dataset.imgUrl;

                    document.body.classList.add('modal');
                    modalBox.classList.add('opened');
                    modalBox.querySelector('.description_wrap').innerHTML = details;

                    const modalMainImage = modalBox.querySelector('.main');
                    if (modalMainImage) {
                        modalMainImage.style.backgroundImage = `url(${imgUrl})`;
                    }
                });
            });
        });
    }

    // 鼠标指针
    function initCursor() {
        const cursor = document.querySelector('.mouse-cursor');
        if (cursor) {
            const inner = document.querySelector('.cursor-inner');
            const outer = document.querySelector('.cursor-outer');

            document.addEventListener('mousemove', function (e) {
                outer.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
                inner.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            });
        }
    }

    // 初始化所有功能
    handlePageTransition();
    initModalBox();
    initNewsModal();
    initCursor();
});