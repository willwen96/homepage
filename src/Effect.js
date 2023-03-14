// function initMobileMenu() {
//     const menu = document.getElementById('mobile_menu');
//     const header = document.querySelector('header');
//     const bg = document.querySelector('body');
//     let content = document.getElementById('main_page');
//
//     let icon = document.getElementById('icon');
//     let top_line = document.getElementById('top-line');
//     let mid_line = document.getElementById('mid-line');
//     let bot_line = document.getElementById('bot-line');
//
//     let count = 0;
//
//     icon.addEventListener('click', () => {
//         if (count%2 === 0) {
//             top_line.style.top = '3px';
//             top_line.style.left = '22px';
//             top_line.style.transform = 'rotate(-135deg)';
//             top_line.style.backgroundColor = 'black';
//
//             mid_line.style.transform = 'rotate(-45deg)';
//             mid_line.style.backgroundColor = 'black';
//
//             bot_line.style.top = '13px';
//             bot_line.style.left = '32px';
//             bot_line.style.transform = 'rotate(-135deg)';
//             bot_line.style.backgroundColor = 'black';
//
//             menu.style.display = 'grid';
//             bg.style.backgroundColor = '#87CEFA';
//             bg.style.overflow = 'hidden';
//             header.style.background = 'transparent';
//             content.style.display = 'none';
//         } else {
//             top_line.style.top = '0px';
//             top_line.style.left = '20px';
//             top_line.style.transform = 'rotate(-0)';
//             top_line.style.backgroundColor = 'var(--theme-color)';
//
//             mid_line.style.transform = 'rotate(0)';
//             mid_line.style.backgroundColor = 'var(--theme-color)';
//
//             bot_line.style.top = '16px';
//             bot_line.style.left = '34px';
//             bot_line.style.transform = 'rotate(0)';
//             bot_line.style.backgroundColor = 'var(--theme-color)';
//
//             menu.style.display = 'none';
//             bg.style.backgroundColor = 'var(--background-color)';
//             bg.style.overflow = 'auto';
//             header.style.background = 'white';
//             content.style.display = 'block';
//         }
//         count++;
//     });
// }
//
// document.addEventListener('DOMContentLoaded', initMobileMenu);