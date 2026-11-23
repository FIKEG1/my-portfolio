import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'

// The demo pages are separate chunks so the portfolio itself loads without them.
const KetariPage = lazy(() => import('./pages/KetariPage.jsx'))
const ShopApp = lazy(() => import('./shop/ShopApp.jsx'))

function PageLoading() {
  return (
    <div className="grid min-h-screen place-items-center text-sm muted" role="status">
      Loading…
    </div>
  )
}

export default function App() {
  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        <Route path="/ketari" element={<KetariPage />} />
        <Route path="/aura/*" element={<ShopApp />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
