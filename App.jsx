import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import HomePage from '/pages/HomePage.jsx'
import AdFormPage from '/pages/AdFormPage.jsx'
import AdInsertedPage from '/pages/AdInsertedPage.jsx'
import PrivacyPolicyPage from '/pages/PrivacyPolicyPage.jsx'
import NotFoundPage from '/pages/NotFoundPage.jsx'
import logo from '/images/logo.png'

export default function App() {
    return (
        <GoogleOAuthProvider clientId="299519458500-vk9tfbjdulaiv79cvnkulhksv1e3men2.apps.googleusercontent.com">
            <Router>
                <header>
                    <Link to="/">
                        <img src={logo} alt="logo" className="logo"/>
                        AI seznamka Zuzana
                    </Link>
                </header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Domů</Link>
                        </li>
                        <li>
                            <Link to="/vlozit-inzerat">Vložení inzerátu</Link>
                        </li>
                        <li>
                            <Link to="/zasady-zpracovani-osobnich-udaju">Zásady zpracování osobních údajů</Link>
                        </li>
                    </ul>
                </nav>
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/vlozit-inzerat" element={<AdFormPage />} />
                        <Route path="/inzerat-odeslan" element={<AdInsertedPage />} />
                        <Route path="/zasady-zpracovani-osobnich-udaju" element={<PrivacyPolicyPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>
                <footer>
                    <div>
                        Máte nějaký dotaz nebo jste narazili na problém? Neváhejte a napište nám na <a href="mailto:aiseznamka@gmail.com">aiseznamka@gmail.com</a>, společně vše vyřešíme.
                    </div>
                    <div>
                        Copyright © 2024 Ondřej Vitík, Martin Sedmihradský
                    </div>
                </footer>
            </Router>
        </GoogleOAuthProvider>
    )
}
