const MenuButton = document.querySelector('.Menu-Button');
const CloseButton = document.querySelector('.Close-Button');
const OverRayMenu = document.querySelector('.Overray-Menu');

// メニューを開く処理
MenuButton.addEventListener('click', () => {
    OverRayMenu.style.display = 'flex'; 
});

// メニューを閉じる処理
CloseButton.addEventListener('click', () => {
    OverRayMenu.style.display = 'none';
});