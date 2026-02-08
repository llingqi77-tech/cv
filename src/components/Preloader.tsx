import { useEffect, useState } from 'react';

export default function Preloader() {
  const [mounted, setMounted] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/3a7a742b-3ca7-4d4e-a321-fbc815591c36',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Preloader.tsx:9',message:'Preloader useEffect',data:{readyState:document.readyState},timestamp:Date.now(),hypothesisId:'h1,h5'})}).catch(()=>{});
    // #endregion

    const hide = () => {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/3a7a742b-3ca7-4d4e-a321-fbc815591c36',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Preloader.tsx:16',message:'Preloader hide() called',data:{},timestamp:Date.now(),hypothesisId:'h1'})}).catch(()=>{});
      // #endregion
      setOpacity(0);
      setTimeout(() => {
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/3a7a742b-3ca7-4d4e-a321-fbc815591c36',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Preloader.tsx:22',message:'Preloader setMounted(false)',data:{},timestamp:Date.now(),hypothesisId:'h1'})}).catch(()=>{});
        // #endregion
        setMounted(false);
      }, 500);
    };

    // Single timeout only - no load/readyState to avoid Vite dev or StrictMode timing issues
    const t = setTimeout(hide, 1500);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/3a7a742b-3ca7-4d4e-a321-fbc815591c36',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Preloader.tsx:36',message:'Preloader returning null (unmounted)',data:{},timestamp:Date.now(),hypothesisId:'h1'})}).catch(()=>{});
    // #endregion
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#f5f5f5] dark:bg-[#0a0a0a] transition-opacity duration-500 ease-out"
      style={{ opacity }}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="h-12 w-12 animate-spin rounded-full border-2 border-[#262626] dark:border-[#404040] border-t-transparent" />
        <span className="text-sm font-medium text-[#737373] dark:text-[#a3a3a3]">
          加载中...
        </span>
      </div>
    </div>
  );
}
