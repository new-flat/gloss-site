// メニューボタン
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

// アニメーションをトリガーする関数
function animateBorders() {
    document.querySelectorAll('.animated-border-top, .animated-border-bottom, .animated-border-left, .animated-border-right').forEach(function(element) {
        if (element.getBoundingClientRect().top < window.innerHeight && element.getBoundingClientRect().bottom > 0) {
            element.style.animationPlayState = 'running';
        } else {
            element.style.animationPlayState = 'paused';
        }
    });
}

// スクロールイベントに関数をバインド
window.addEventListener('scroll', animateBorders);

// 初回ロード時にも実行
animateBorders();
