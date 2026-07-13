<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QUICKGOXPRESS - Company</title>
    <!-- Font Awesome for Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- External CSS Link -->
    <link rel="stylesheet" href="QGP.css">
</head>
<body>

    <header>
        <div class="logo-container">
            <a href="#home">
                <img src="logo.jpeg" alt="QUICKGOXPRESS Logo" class="logo-img">
            </a>
        </div>

        <div class="nav-right-box">
            <nav>
                <a href="#home">Home</a>
                <a href="#info">Information</a>
                <a href="#team">Personal</a>
                <a href="#contact">Contact Us</a>
            </nav>

            <div class="search-container">
                <input type="text" id="vehicleSearch" class="search-box" placeholder="Search brand (e.g. Volvo)...">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    </header>

    <div class="hero-section" id="home">
        <h1 class="company-name">QUICKGOXPRESS</h1>
        <p class="subtitle">Logistics & Heavy Duty Cargo Portfolio</p>
    </div>

    <!-- INFORMATION SECTION -->
    <section class="content-block" id="info">
        <h2>Operations Information</h2>
        <p>At <strong>QUICKGOXPRESS</strong>, we lead the mobilization of trucks and commercial transport fleets. Based in <strong>Texas, United States</strong>, we run a 100% certified and fully legal operation. We proudly provide support in both English and Spanish to ensure seamless communication with all our clients.</p>
        
        <!-- Legal & Location Credentials Bar -->
        <div class="legal-info-bar">
            <div class="legal-item">
                <i class="fa-solid fa-scale-balanced"></i>
                <span><strong>MC #</strong> 1744234-C</span>
            </div>
            <div class="legal-item">
                <i class="fa-solid fa-id-card"></i>
                <span><strong>DOT #</strong> 4432547</span>
            </div>
            <div class="legal-item">
                <i class="fa-solid fa-location-dot"></i>
                <span>4910 Talina Way, Houston, TX 77041</span>
            </div>
        </div>

        <div class="truck-grid">
            <div class="truck-card">
                <h3>Heavy Transport</h3>
                <p>Units optimized for large-scale cargo with reinforced structural support.</p>
            </div>
            <div class="truck-card">
                <h3>Active Monitoring</h3>
                <p>Continuous tracking of freight and fleet status throughout the entire route.</p>
            </div>
            <div class="truck-card">
                <h3>Logistics Efficiency</h3>
                <p>Advanced route planning strategies to significantly reduce transit times and operational costs.</p>
            </div>
        </div>
    </section>

    <!-- TEAM SECTION -->
    <section class="content-block" id="team">
        <h2>Our Personnel</h2>
        <p>Meet the professional team responsible for managing and coordinating the logistical operations of our fleet.</p>
        
        <div class="team-grid">
            <!-- First Person: Juan Rodriguez -->
            <div class="team-card">
                <div class="photo-frame">
                    <img src="persona1.jpeg" alt="Juan Rodriguez - QUICKGOXPRESS" class="team-photo">
                </div>
                <h3>Juan Rodriguez</h3>
                <span class="role">+1(718)749-8881</span>
                <p>Spanish</p>
            </div>

            <!-- Second Person: Mayra Rincon -->
            <div class="team-card">
                <div class="photo-frame">
                    <img src="persona2.jpeg" alt="Mayra Rincon - QUICKGOXPRESS" class="team-photo">
                </div>
                <h3>Mayra Rincon</h3>
                <span class="role">+1(832)566-3654</span>
                <p>Bilingual.</p>
            </div>
        </div>
    </section>

    <!-- CONTACT FORM -->
    <section class="content-block" id="contact">
        <h2>Contact Us</h2>
        <p>If you need to coordinate a heavy cargo service or want to learn more about our fleet availability, leave us a message below.</p>
        
        <form class="contact-form" action="https://formsubmit.co/quickgox@gmail.com" method="POST">
            <input type="hidden" name="_next" value="https://quickgoxpress.com">
            <input type="hidden" name="_subject" value="New Message from QUICKGOXPRESS Website">
            <input type="hidden" name="_captcha" value="false">

            <input type="text" name="Name" placeholder="Your Name" required>
            <input type="email" name="Email" placeholder="Your Email Address" required>
            <textarea name="Message" rows="4" placeholder="Detail the type of truck or logistics service you require..." required></textarea>
            
            <button type="submit">Send Message</button>
        </form>
    </section>

    <footer>
        &copy; 2026 QUICKGOXPRESS - Professional Trucking & Logistics Portfolio.
    </footer>

    <!-- External JavaScript Link -->
    <script src="QGP.js"></script>
</body>
</html>
