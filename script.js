document.addEventListener("DOMContentLoaded", function() {
    alert("点开这个按钮的人是狗");
});
// script.js
document.addEventListener("DOMContentLoaded", function() {
    // 获取按钮和隐藏的内容
    const toggleButton = document.getElementById('toggleButton');
    const hiddenContent = document.getElementById('hiddenContent');

    // 当按钮被点击时，切换内容显示状态
    toggleButton.addEventListener('click', function() {
        if (hiddenContent.style.display === 'none') {
            hiddenContent.style.display = 'block'; // 显示内容
            toggleButton.textContent = '收起'; // 改变按钮文字
        } else {
            hiddenContent.style.display = 'none'; // 隐藏内容
            toggleButton.textContent = '查看更多'; // 改变按钮文字
        }
    });
});
// script.js
document.addEventListener("DOMContentLoaded", function() {
    const hoverButton = document.getElementById('hoverButton');

    // 鼠标悬停时改变颜色
    hoverButton.addEventListener('mouseenter', function() {
        hoverButton.style.backgroundColor = 'orange';
        hoverButton.style.color = 'white';
    });

    // 鼠标移开时恢复原状
    hoverButton.addEventListener('mouseleave', function() {
        hoverButton.style.backgroundColor = '';
        hoverButton.style.color = '';
    });

    // 鼠标点击时显示信息
    hoverButton.addEventListener('click', function() {
        alert('你是狗吧说了不要点开');
    });
});
