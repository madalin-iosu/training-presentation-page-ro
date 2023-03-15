import React from "react";
import { Link } from "react-router-dom";
import "./header.css"

function Header() {
    return (
        <header className="hero-background">
            <h1 className="hero-title hero-item">Urmatorul pas al carierei tale începe cu noi</h1>
            <h2 className="hero-description hero-item">Nu știi ce specializare ți se potrivește cel mai bine? <strong>Advance</strong> iți vine în ajutor cu o mulțime de <strong>cursuri</strong> dintre care unul sigur e pentru tine</h2>
            <Link to="cursuri"><button className="hero-button hero-item">GĂSESTE CURSUL PERFECT</button></Link>
        </header>
    )
}

export default Header;