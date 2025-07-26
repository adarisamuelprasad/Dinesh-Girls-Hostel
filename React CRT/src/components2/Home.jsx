import React from 'react';

const dineshImages = [
  '/Images/dineshh1.png',
  '/Images/dineshh2.jpg',
  '/Images/dineshh3.jpg',
  '/Images/dineshh4.jpg',
  '/Images/dineshh5.jpg'
];

function Home() {
  return (
    <div className="container">
      {/* Birthday Wishes Section */}
      <div className="birthday-section" style={{ textAlign: "center", marginBottom: "30px" }}>
        <p style={{ fontSize: "42px", fontWeight: "bold" }}>
        Welcome to <b>Dinesh Deluxe Girls👧 Hostel</b>
      </p>
        <h1 style={{ fontSize: "42px", fontWeight: "bold" }}>Happy Birthday, Dineshh Bhaiii😘😘!</h1>
        <h2 style={{ fontSize: "35px", fontWeight: "bold" }}>Dinesh Birthdayy Celebrations by his gurlss:</h2>
        <div className="images">
          {dineshImages.map((src, idx) => (
            <img src={src} alt={`Dinesh Birthday ${idx + 1}`} width="250" style={{ margin: "10px" }} key={idx} />
          ))}
        </div>
                <blockquote>
          
            Happy Birthdayy Dinesshhh! 🎉🐥<br></br>
            May your year be filled with prosperity, longevity, <br></br>
            gravity, tooth cavity, creativity, productivity, festivity, <br></br>
            and just a tiny bit of electricity (for fewer power cuts, please ⚡).<br></br>

            May you be blessed with dedication, examination, determination, <br></br>
            motivation, celebration, and survive every submission <br></br>
            without frustration or explanation! 📚💪<br></br>

            From this year onward, kindly spare the hostellers:<br></br>
            🛁 Increase hot water timings (we like warm showers, not cold reality),<br></br>
            🧺 Let the washing machine run like our emotions nonstop.<br></br>

            And please — for the love of chicken <br></br>
            stop counting pieces like it's gold! 🍗<br></br>
            Don’t be kanjoos, be generoos (yes, we made that word up for you).<br></br>

            May your age go up but your stress stay down,<br></br>
            and may your mood always be higher than your hostel Wi-Fi speed!<br></br>

            Have a legendary year ahead, sir! 😄🎂<br>
            </br>
             
        </blockquote>

        <p style={{ fontSize: "20px", fontStyle: "italic" }}> Dinesh Bava celebrations at GISMAT Suchitra Circle. All are welcome. <br></br>
          -Itlu Dinesh Veera Premikulu
        </p>
      </div>

      {/* Original Main Heading */}
      

      <p>
        Located in the heart of <strong>Maisammaguda</strong>, Dinesh Girls Deluxe Hostel is your second home — designed
        with comfort, safety, and community at its core. Whether you're a college student or a working professional,
        we offer everything you need to live stress-free and focus on your goals.
      </p>

      <div className="images">
        <img src="/Images/GorlsHostel1.jpg" alt="Girls Hostel" width="800" />
        <img src="/Images/Dinesh1.jpg" alt="Girls Hostel" width="800" />
        <img src="/Images/Dinesh2.jpg" alt="Girls Hostel" width="800" />
        <img src="/Images/Dinesh3.jpg" alt="Girls Hostel" width="800" />
        <img src="/Images/Dinesh4.jpg" alt="Girls Hostel" width="800" />
      </div>

      <h2>🏡 What We Offer</h2>
      <ul>
        <li>✅ Fully furnished rooms with personal wardrobes, study tables, and cots</li>
        <li>✅ Delicious and hygienic food served daily</li>
        <li>✅ 24/7 hot water facility (geysers in every bathroom)</li>
        <li>✅ High-speed Wi-Fi across all floors</li>
        <li>✅ Laundry services & self-use washing machines</li>
        <li>✅ CCTV security and gated entrance for your safety</li>
        <li>✅ Calm, study-friendly environment with clean surroundings</li>
        <li>✅ Regular housekeeping and daily cleaning</li>
        <li>✅ Power backup to ensure uninterrupted electricity</li>
      </ul>

      <h2>🎯 Who We Cater To</h2>
      <p>
        Our hostel is perfect for:
        <ul>
          <li>🎓 Female students studying in MREC, BITS, CMR, and other nearby colleges</li>
          <li>👩‍💼 Working women in and around Maisammaguda</li>
          <li>🧘 Women looking for a peaceful, secure, and hygienic space to live</li>
        </ul>
      </p>

      <h2>📍 Location Benefits</h2>
      <p>
        We’re located just minutes away from major colleges, supermarkets, bus stops, clinics, and eateries —
        giving you easy access to everything you need while staying in a quiet, residential zone.
      </p>

      <h2>📞 Book Your Bed Today!</h2>
      <p>
        Rooms are limited and fill up quickly during academic admissions. Don’t miss your chance to experience
        a comfortable and caring living space.
        <br />
        👉 <strong>Contact A. Dinesh at 7671981815</strong> to schedule a visit or reserve your room now!
      </p>
    </div>
  );
}

export default Home;
