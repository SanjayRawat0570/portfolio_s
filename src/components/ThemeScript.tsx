// Runs before paint to apply the saved theme and avoid a flash of the wrong colors.
export default function ThemeScript() {
  const code = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.add('light');}}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
