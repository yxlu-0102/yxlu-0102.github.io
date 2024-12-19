// 获取主题切换按钮和图标
const themeToggleButton = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const currentTheme = localStorage.getItem('theme');

// 设置初始主题和图标
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    // 如果当前是深色模式，显示月亮图标
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'inline-block';
  } else {
    // 如果当前是浅色模式，显示太阳图标
    sunIcon.style.display = 'inline-block';
    moonIcon.style.display = 'none';
  }
} else {
  // 如果没有设置主题，默认使用浅色模式
  document.documentElement.setAttribute('data-theme', 'light');
  sunIcon.style.display = 'inline-block';
  moonIcon.style.display = 'none';
}

// 切换主题和图标
themeToggleButton.addEventListener('click', () => {
  let theme = document.documentElement.getAttribute('data-theme');
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    // 切换图标
    sunIcon.style.display = 'inline-block';
    moonIcon.style.display = 'none';
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    // 切换图标
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'inline-block';
    localStorage.setItem('theme', 'dark');
  }
});
