// 获取主题切换按钮
const themeToggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// 设置初始主题
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    themeToggleButton.textContent = '切换到浅色模式';
  } else {
    themeToggleButton.textContent = '切换到深色模式';
  }
} else {
  // 如果没有设置主题，默认使用浅色模式
  document.documentElement.setAttribute('data-theme', 'light');
}

// 切换主题
themeToggleButton.addEventListener('click', () => {
  let theme = document.documentElement.getAttribute('data-theme');
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggleButton.textContent = '切换到深色模式';
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggleButton.textContent = '切换到浅色模式';
    localStorage.setItem('theme', 'dark');
  }
});
