/* --- GENERAL STYLES & CONFIGURATION --- */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    scroll-behavior: smooth;
}

body {
    background: radial-gradient(circle at center, #111726 0%, #07090e 100%);
    color: #ffffff;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
}

/* --- BACKGROUND GLOW EFFECTS (Red and Blue) --- */
body::before, body::after {
    content: "";
    position: fixed;
    width: 350px;
    height: 350px;
    border-radius: 50%;
    filter: blur(120px);
    z-index: -1;
    opacity: 0.4;
    animation: floatGlow 8s ease-in-out infinite alternate;
}

body::before {
    background: #ff2a2a;
    top: -50px;
    left: -50px;
}

body::after {
    background: #0055ff;
    bottom: -50px;
    right: -50px;
    animation-delay: 4s;
}

@keyframes floatGlow {
    0% { transform: translate(0, 0) scale(1); }
    100% { transform: translate(30px, 20px) scale(1.2); }
}

/* --- ANIMATION EFFECTS --- */
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-30px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes pulseGlow {
    0% { text-shadow: 0 0 10px rgba(0, 85, 255, 0.5), 0 0 20px rgba(255, 42, 42, 0.3); }
    100% { text-shadow: 0 0 20px rgba(0, 85, 255, 0.8), 0 0 40px rgba(255, 42, 42, 0.6); }
}

/* --- HEADER BAR --- */
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 15px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    background: rgba(7, 9, 14, 0.85);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    animation: fadeInDown 1s ease-out;
}

.logo-container {
    display: flex;
    align-items: center;
}

.logo-img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid rgba(255, 42, 42, 0.6);
    background: rgba(0, 85, 255, 0.1);
    transition: all 0.3s ease;
}

.logo-img:hover {
    transform: scale(1.05);
    border-color: #0055ff;
    box-shadow: 0 0 15px rgba(0, 85, 255, 0.4);
}

.nav-right-box {
    display: flex;
    align-items: center;
    gap: 25px;
}

nav {
    display: flex;
    gap: 20px;
}

nav a {
    color: #e0e6ed;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    transition: color 0.3s ease;
    position: relative;
    padding: 5px 0;
}

nav a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #0055ff, #ff2a2a);
    transition: width 0.3s ease;
}

nav a:hover { color: #ffffff; }
nav a:hover::after { width: 100%; }

.search-container {
    position: relative;
    display: flex;
    align-items: center;
}

.search-box {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(0, 85, 255, 0.4);
    padding: 6px 35px 6px 12px;
    border-radius: 20px;
    color: #fff;
    font-size: 13px;
    width: 190px;
    height: 32px;
    outline: none;
    transition: all 0.3s ease;
}

.search-box:focus {
    width: 230px;
    border-color: #ff2a2a;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 10px rgba(255, 42, 42, 0.2);
}

.search-container i {
    position: absolute;
    right: 12px;
    color: rgba(255, 255, 255, 0.6);
    font-size: 13px;
    pointer-events: none;
}

/* --- HERO SECTION --- */
.hero-section {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 20px;
    animation: fadeInUp 1.2s cubic-bezier(0.25, 1, 0.5, 1);
}

.company-name {
    font-size: 65px;
    font-weight: 900;
    letter-spacing: 4px;
    background: linear-gradient(135deg, #ffffff 30%, #a4b3d6 60%, #ff2a2a 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 10px;
    animation: pulseGlow 3s ease-in-out infinite alternate;
}

.subtitle {
    font-size: 16px;
    color: #0055ff;
    text-transform: uppercase;
    letter-spacing: 6px;
    font-weight: 700;
    margin-bottom: 30px;
}

/* --- CONTENT BLOCKS --- */
section.content-block {
    padding: 100px 24px 60px 24px;
    max-width: 1200px;
    margin: 0 auto;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
}

section h2 {
    font-size: 28px;
    margin-bottom: 20px;
    color: #ffffff;
    border-left: 4px solid #ff2a2a;
    padding-left: 15px;
    text-transform: uppercase;
}

section p {
    color: #a0a5b5;
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 20px;
}

/* --- BARRA DE CREDENCIALES LEGALES Y DIRECCIÓN --- */
.legal-info-bar {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px dashed rgba(0, 85, 255, 0.3);
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 30px;
    justify-content: space-around;
    align-items: center;
}

.legal-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 15px;
    color: #e0e6ed;
}

.legal-item i {
    color: #ff2a2a;
    font-size: 18px;
}

/* Truck Service Grid */
.truck-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin-top: 30px;
}

.truck-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    padding: 25px;
    transition: all 0.3s ease;
}

.truck-card:hover {
    transform: translateY(-5px);
    border-color: #0055ff;
    background: rgba(0, 85, 255, 0.05);
}

.truck-card h3 {
    color: #ff2a2a;
    margin-bottom: 10px;
}

/* --- PERSONNEL / TEAM SECTION --- */
.team-grid {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 40px;
    flex-wrap: wrap;
}

.team-card {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    padding: 30px;
    width: 280px;
    text-align: center;
    transition: all 0.3s ease;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.team-card:hover {
    transform: translateY(-8px);
    border-color: #ff2a2a;
    background: rgba(255, 42, 42, 0.02);
    box-shadow: 0 15px 35px rgba(255, 42, 42, 0.1);
}

/* ID Frame Size Layout (Carnet Style) */
.photo-frame {
    width: 135px;
    height: 170px;
    margin: 0 auto 20px auto;
    overflow: hidden;
    border-radius: 8px;
    border: 2px solid rgba(0, 85, 255, 0.4);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transition: border-color 0.3s ease;
}

.team-card:hover .photo-frame {
    border-color: #ff2a2a;
}

.team-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
}

.team-card:hover .team-photo {
    transform: scale(1.1);
}

.team-card h3 {
    font-size: 18px;
    color: #ffffff;
    margin-bottom: 5px;
}

.team-card .role {
    display: inline-block;
    font-size: 12px;
    text-transform: uppercase;
    color: #0055ff;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 12px;
}

.team-card p {
    font-size: 14px;
    color: #a0a5b5;
    line-height: 1.4;
    margin-bottom: 0;
}

/* --- CONTACT FORM --- */
.contact-form {
    max-width: 600px;
    background: rgba(255, 255, 255, 0.02);
    padding: 25px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.contact-form input, .contact-form textarea {
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    border-radius: 6px;
    outline: none;
}

.contact-form input:focus, .contact-form textarea:focus {
    border-color: #0055ff;
}

.contact-form button {
    background: linear-gradient(90deg, #ff2a2a, #0055ff);
    color: white;
    border: none;
    padding: 12px 30px;
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;
    transition: opacity 0.3s;
    width: 100%;
}

@media (min-width: 480px) {
    .contact-form button { width: auto; }
}

footer {
    text-align: center;
    padding: 30px 20px;
    color: #555c6d;
    font-size: 13px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
}

/* --- RESPONSIVE MEDIA QUERY --- */
@media (max-width: 768px) {
    header {
        position: absolute;
        padding: 15px 20px;
        flex-direction: column;
        gap: 15px;
        text-align: center;
    }

    .nav-right-box {
        flex-direction: column;
        gap: 15px;
        width: 100%;
    }

    nav {
        gap: 15px;
        justify-content: center;
        flex-wrap: wrap;
    }

    nav a { font-size: 13px; }
    .search-container { width: 100%; max-width: 300px; }
    .search-box { width: 100%; }
    .search-box:focus { width: 100%; }

    .hero-section {
        padding-top: 180px;
        height: auto;
        min-height: 100vh;
    }

    .company-name {
        font-size: 38px;
        letter-spacing: 2px;
    }

    .subtitle {
        font-size: 13px;
        letter-spacing: 3px;
    }
    
    section.content-block { padding-top: 60px; }
    section h2 { font-size: 22px; }

    .team-grid { gap: 20px; }
    
    .legal-info-bar {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }
}
