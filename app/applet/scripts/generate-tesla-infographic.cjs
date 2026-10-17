const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const portraitPath = path.join(__dirname, '../src/assets/images/tesla_portrait_oval.jpg');
const portraitBuffer = fs.readFileSync(portraitPath);
const portraitBase64 = `data:image/jpeg;base64,${portraitBuffer.toString('base64')}`;

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="1600" height="900" style="background:#091426;">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bgNavy" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#081427"/>
      <stop offset="35%" stop-color="#0B1A30"/>
      <stop offset="70%" stop-color="#0A182D"/>
      <stop offset="100%" stop-color="#060E1A"/>
    </linearGradient>

    <!-- Metallic Gold Foil Gradients -->
    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDF3CF"/>
      <stop offset="20%" stop-color="#E2B755"/>
      <stop offset="45%" stop-color="#FDE8A5"/>
      <stop offset="70%" stop-color="#B78426"/>
      <stop offset="90%" stop-color="#E5BB60"/>
      <stop offset="100%" stop-color="#936416"/>
    </linearGradient>

    <linearGradient id="goldBright" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFF8DE"/>
      <stop offset="40%" stop-color="#E8BE60"/>
      <stop offset="80%" stop-color="#B27F20"/>
      <stop offset="100%" stop-color="#80570F"/>
    </linearGradient>

    <linearGradient id="goldMedal" x1="20%" y1="0%" x2="80%" y2="100%">
      <stop offset="0%" stop-color="#FFF0BE"/>
      <stop offset="30%" stop-color="#E1B553"/>
      <stop offset="65%" stop-color="#A57318"/>
      <stop offset="85%" stop-color="#DCB04F"/>
      <stop offset="100%" stop-color="#82550E"/>
    </linearGradient>

    <!-- Parchment Gradients -->
    <linearGradient id="parchmentCard" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FAF5E8"/>
      <stop offset="50%" stop-color="#F4EBD7"/>
      <stop offset="100%" stop-color="#E8DBC0"/>
    </linearGradient>

    <linearGradient id="parchmentBanner" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FDF9EE"/>
      <stop offset="40%" stop-color="#F6EEDB"/>
      <stop offset="80%" stop-color="#EDE0C5"/>
      <stop offset="100%" stop-color="#DFCFAF"/>
    </linearGradient>

    <!-- Filters -->
    <filter id="cardShadow" x="-10%" y="-10%" width="125%" height="130%">
      <feDropShadow dx="3" dy="5" stdDeviation="5" flood-color="#000000" flood-opacity="0.45"/>
    </filter>

    <filter id="frameShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="5" dy="8" stdDeviation="10" flood-color="#000000" flood-opacity="0.6"/>
    </filter>

    <filter id="textGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.7"/>
    </filter>

    <!-- Portrait Oval Clip -->
    <clipPath id="teslaOvalClip">
      <ellipse cx="270" cy="445" rx="180" ry="248"/>
    </clipPath>

    <!-- Reusable Corner Rosette Ornament -->
    <g id="cornerFlourish">
      <path d="M 0,0 C 35,5 60,30 65,65 C 50,40 40,25 0,0 Z" fill="url(#goldGradient)"/>
      <circle cx="28" cy="28" r="4" fill="#FFF2C6"/>
      <path d="M 0,28 Q 28,28 28,0" fill="none" stroke="url(#goldGradient)" stroke-width="2.5"/>
      <polygon points="50,22 53,30 61,30 55,35 57,43 50,38 43,43 45,35 39,30 47,30" fill="url(#goldBright)"/>
    </g>

    <!-- Reusable Small 5-Point Star -->
    <g id="goldStar">
      <polygon points="0,-7 2,-2 7,-2 3,2 5,7 0,3.5 -5,7 -3,2 -7,-2 -2,-2" fill="url(#goldBright)"/>
    </g>

    <!-- Reusable Corner Medallion Star -->
    <g id="cornerStarMedallion">
      <circle cx="0" cy="0" r="28" fill="none" stroke="url(#goldGradient)" stroke-width="2.5"/>
      <circle cx="0" cy="0" r="23" fill="none" stroke="url(#goldBright)" stroke-width="1" stroke-dasharray="2,3"/>
      <polygon points="0,-14 4,-4 14,-4 6,3 9,13 0,7 -9,13 -6,3 -14,-4 -4,-4" fill="url(#goldGradient)"/>
    </g>
  </defs>

  <!-- 1. DEEP NAVY BLUE BACKGROUND -->
  <rect width="1600" height="900" fill="url(#bgNavy)"/>

  <!-- Subtle Atmospheric Radial Glow -->
  <radialGradient id="centerGlow" cx="65%" cy="40%" r="55%">
    <stop offset="0%" stop-color="#162D50" stop-opacity="0.6"/>
    <stop offset="100%" stop-color="#081427" stop-opacity="0"/>
  </radialGradient>
  <rect width="1600" height="900" fill="url(#centerGlow)"/>

  <!-- 2. BORDER ENSEMBLE (NAVY & GOLD WITH STARS) -->
  <!-- Outer Solid Gold Border -->
  <rect x="24" y="24" width="1552" height="852" rx="14" fill="none" stroke="url(#goldGradient)" stroke-width="3"/>
  <!-- Dotted Star Beading Inset -->
  <rect x="34" y="34" width="1532" height="832" rx="10" fill="none" stroke="url(#goldGradient)" stroke-width="1.2" opacity="0.85"/>
  <!-- Inner Star Array Line -->
  <rect x="42" y="42" width="1516" height="816" rx="8" fill="none" stroke="url(#goldBright)" stroke-width="0.8" stroke-dasharray="3,7" opacity="0.6"/>

  <!-- Stars along top and bottom border -->
  <!-- Top stars -->
  <use href="#goldStar" x="160" y="34"/>
  <use href="#goldStar" x="220" y="34"/>
  <use href="#goldStar" x="280" y="34"/>
  <use href="#goldStar" x="340" y="34"/>
  <use href="#goldStar" x="400" y="34"/>
  <use href="#goldStar" x="460" y="34"/>
  <use href="#goldStar" x="520" y="34"/>
  <use href="#goldStar" x="580" y="34"/>
  <use href="#goldStar" x="640" y="34"/>
  <use href="#goldStar" x="700" y="34"/>
  <use href="#goldStar" x="900" y="34"/>
  <use href="#goldStar" x="960" y="34"/>
  <use href="#goldStar" x="1020" y="34"/>
  <use href="#goldStar" x="1080" y="34"/>
  <use href="#goldStar" x="1140" y="34"/>
  <use href="#goldStar" x="1200" y="34"/>
  <use href="#goldStar" x="1260" y="34"/>
  <use href="#goldStar" x="1320" y="34"/>
  <use href="#goldStar" x="1380" y="34"/>
  <use href="#goldStar" x="1440" y="34"/>

  <!-- Bottom stars -->
  <use href="#goldStar" x="160" y="866"/>
  <use href="#goldStar" x="220" y="866"/>
  <use href="#goldStar" x="280" y="866"/>
  <use href="#goldStar" x="340" y="866"/>
  <use href="#goldStar" x="400" y="866"/>
  <use href="#goldStar" x="460" y="866"/>
  <use href="#goldStar" x="520" y="866"/>
  <use href="#goldStar" x="580" y="866"/>
  <use href="#goldStar" x="640" y="866"/>
  <use href="#goldStar" x="700" y="866"/>
  <use href="#goldStar" x="760" y="866"/>
  <use href="#goldStar" x="840" y="866"/>
  <use href="#goldStar" x="900" y="866"/>
  <use href="#goldStar" x="960" y="866"/>
  <use href="#goldStar" x="1020" y="866"/>
  <use href="#goldStar" x="1080" y="866"/>
  <use href="#goldStar" x="1140" y="866"/>
  <use href="#goldStar" x="1200" y="866"/>
  <use href="#goldStar" x="1260" y="866"/>
  <use href="#goldStar" x="1320" y="866"/>
  <use href="#goldStar" x="1380" y="866"/>
  <use href="#goldStar" x="1440" y="866"/>

  <!-- Left & Right Stars -->
  <use href="#goldStar" x="34" y="140"/>
  <use href="#goldStar" x="34" y="220"/>
  <use href="#goldStar" x="34" y="300"/>
  <use href="#goldStar" x="34" y="380"/>
  <use href="#goldStar" x="34" y="460"/>
  <use href="#goldStar" x="34" y="540"/>
  <use href="#goldStar" x="34" y="620"/>
  <use href="#goldStar" x="34" y="700"/>
  <use href="#goldStar" x="34" y="780"/>

  <use href="#goldStar" x="1566" y="140"/>
  <use href="#goldStar" x="1566" y="220"/>
  <use href="#goldStar" x="1566" y="300"/>
  <use href="#goldStar" x="1566" y="380"/>
  <use href="#goldStar" x="1566" y="460"/>
  <use href="#goldStar" x="1566" y="540"/>
  <use href="#goldStar" x="1566" y="620"/>
  <use href="#goldStar" x="1566" y="700"/>
  <use href="#goldStar" x="1566" y="780"/>

  <!-- Top Center Medallion Star -->
  <g transform="translate(800, 36)">
    <circle cx="0" cy="0" r="18" fill="#081426" stroke="url(#goldGradient)" stroke-width="2"/>
    <polygon points="0,-11 3,-3 11,-3 5,2 7,10 0,5 -7,10 -5,2 -11,-3 -3,-3" fill="url(#goldBright)"/>
  </g>

  <!-- Corner Medallions & Flourishes -->
  <!-- Top Left -->
  <g transform="translate(80, 80)">
    <use href="#cornerStarMedallion"/>
    <path d="M 28,-5 C 50,0 70,15 80,35 C 65,25 45,20 28,15 Z" fill="url(#goldGradient)"/>
    <path d="M -5,28 C 0,50 15,70 35,80 C 25,65 20,45 15,28 Z" fill="url(#goldGradient)"/>
  </g>
  <!-- Top Right -->
  <g transform="translate(1520, 80)">
    <use href="#cornerStarMedallion"/>
    <path d="M -28,-5 C -50,0 -70,15 -80,35 C -65,25 -45,20 -28,15 Z" fill="url(#goldGradient)"/>
    <path d="M 5,28 C 0,50 -15,70 -35,80 C -25,65 -20,45 -15,28 Z" fill="url(#goldGradient)"/>
  </g>

  <!-- Bottom Left Corner Ornaments -->
  <g transform="translate(80, 770)">
    <!-- Ornate Fan / Tassel flourish -->
    <path d="M -5,0 C 15,25 35,35 55,40 C 35,30 20,15 0,0 Z" fill="url(#goldGradient)"/>
    <path d="M 0,-15 C 25,5 35,25 40,45 C 30,25 15,10 0,-5 Z" fill="url(#goldGradient)"/>
    <polygon points="12,18 15,24 22,24 17,28 19,34 13,30 8,34 10,28 5,24 12,24" fill="url(#goldBright)"/>
  </g>
  <!-- Bottom Right Corner Ornaments -->
  <g transform="translate(1520, 770)">
    <path d="M 5,0 C -15,25 -35,35 -55,40 C -35,30 -20,15 0,0 Z" fill="url(#goldGradient)"/>
    <path d="M 0,-15 C -25,5 -35,25 -40,45 C -30,25 -15,10 0,-5 Z" fill="url(#goldGradient)"/>
    <polygon points="-12,18 -15,24 -22,24 -17,28 -19,34 -13,30 -8,34 -10,28 -5,24 -12,24" fill="url(#goldBright)"/>
  </g>

  <!-- ======================================================== -->
  <!-- 3. LEFT COLUMN: GILDED OVAL BAROQUE FRAME & TESLA PORTRAIT -->
  <!-- ======================================================== -->
  <g filter="url(#frameShadow)">
    <!-- Ornate Gilded Outer Volutes & Acanthus Leaves -->
    <!-- Top Shell Crest -->
    <g transform="translate(270, 160)">
      <path d="M 0,-35 C -25,-30 -45,-15 -50,10 C -30,5 -10,15 0,30 C 10,15 30,5 50,10 C 45,-15 25,-30 0,-35 Z" fill="url(#goldGradient)" stroke="#7D5512" stroke-width="1.5"/>
      <circle cx="0" cy="-10" r="5" fill="#FFF2C6"/>
      <circle cx="-20" cy="5" r="3" fill="#FFF2C6"/>
      <circle cx="20" cy="5" r="3" fill="#FFF2C6"/>
    </g>

    <!-- Bottom Acanthus Cartouche & Volute -->
    <g transform="translate(270, 730)">
      <path d="M 0,35 C -30,30 -50,15 -55,-10 C -35,-5 -15,-15 0,-30 C 15,-15 35,-5 55,-10 C 50,15 30,30 0,35 Z" fill="url(#goldGradient)" stroke="#7D5512" stroke-width="1.5"/>
      <circle cx="0" cy="12" r="5" fill="#FFF2C6"/>
      <circle cx="-22" cy="-4" r="3" fill="#FFF2C6"/>
      <circle cx="22" cy="-4" r="3" fill="#FFF2C6"/>
    </g>

    <!-- Left Frame Acanthus Clusters -->
    <g transform="translate(50, 445)">
      <!-- Upper Left Scroll -->
      <path d="M 35,-120 C -5,-160 5,-230 45,-260 C 25,-210 30,-160 65,-130 Z" fill="url(#goldGradient)" stroke="#7D5512" stroke-width="1.2"/>
      <path d="M 30,-50 C -15,-80 -10,-140 25,-170 C 10,-130 15,-90 50,-65 Z" fill="url(#goldGradient)" stroke="#7D5512" stroke-width="1.2"/>
      <!-- Mid Left Flourish -->
      <path d="M 20,0 C -25,-25 -25,25 20,0 Z" fill="url(#goldBright)" stroke="#7D5512" stroke-width="1"/>
      <!-- Lower Left Scroll -->
      <path d="M 30,50 C -15,80 -10,140 25,170 C 10,130 15,90 50,65 Z" fill="url(#goldGradient)" stroke="#7D5512" stroke-width="1.2"/>
      <path d="M 35,120 C -5,160 5,230 45,260 C 25,210 30,160 65,130 Z" fill="url(#goldGradient)" stroke="#7D5512" stroke-width="1.2"/>
    </g>

    <!-- Right Frame Acanthus Clusters -->
    <g transform="translate(490, 445)">
      <!-- Upper Right Scroll -->
      <path d="M -35,-120 C 5,-160 -5,-230 -45,-260 C -25,-210 -30,-160 -65,-130 Z" fill="url(#goldGradient)" stroke="#7D5512" stroke-width="1.2"/>
      <path d="M -30,-50 C 15,-80 10,-140 -25,-170 C -10,-130 -15,-90 -50,-65 Z" fill="url(#goldGradient)" stroke="#7D5512" stroke-width="1.2"/>
      <!-- Mid Right Flourish -->
      <path d="M -20,0 C 25,-25 25,25 -20,0 Z" fill="url(#goldBright)" stroke="#7D5512" stroke-width="1"/>
      <!-- Lower Right Scroll -->
      <path d="M -30,50 C 15,80 10,140 -25,170 C -10,130 -15,90 -50,65 Z" fill="url(#goldGradient)" stroke="#7D5512" stroke-width="1.2"/>
      <path d="M -35,120 C 5,160 -5,230 -45,260 C -25,210 -30,160 -65,130 Z" fill="url(#goldGradient)" stroke="#7D5512" stroke-width="1.2"/>
    </g>

    <!-- Heavy Gold Relief Oval Moulding -->
    <!-- Tier 1: Outer Gold Rim -->
    <ellipse cx="270" cy="445" rx="225" ry="295" fill="none" stroke="url(#goldGradient)" stroke-width="18"/>
    <!-- Tier 2: Deep Shadow Groove -->
    <ellipse cx="270" cy="445" rx="212" ry="282" fill="none" stroke="#533506" stroke-width="3"/>
    <!-- Tier 3: Inner High-Relief Bullnose Moulding -->
    <ellipse cx="270" cy="445" rx="200" ry="270" fill="none" stroke="url(#goldBright)" stroke-width="14"/>
    <!-- Tier 4: Beaded Pearl Ring -->
    <ellipse cx="270" cy="445" rx="189" ry="258" fill="none" stroke="#FFE9A3" stroke-width="4.5" stroke-dasharray="4,7"/>
    <!-- Tier 5: Inner Inset Bevel -->
    <ellipse cx="270" cy="445" rx="183" ry="251" fill="none" stroke="#68420A" stroke-width="3"/>

    <!-- TESLA'S ARCHIVAL PORTRAIT (Clipped inside the gilded oval) -->
    <g clip-path="url(#teslaOvalClip)">
      <!-- Portrait Backing Tone -->
      <rect x="70" y="180" width="400" height="530" fill="#E4D5BC"/>
      <!-- High-Resolution Image -->
      <image href="${portraitBase64}" x="75" y="185" width="390" height="520" preserveAspectRatio="xMidYMid slice"/>
      <!-- Warm Vignette Shader Overlay -->
      <radialGradient id="portraitVignette" cx="50%" cy="40%" r="55%">
        <stop offset="60%" stop-color="#000000" stop-opacity="0"/>
        <stop offset="90%" stop-color="#2D1B06" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="#140902" stop-opacity="0.6"/>
      </radialGradient>
      <ellipse cx="270" cy="445" rx="180" ry="248" fill="url(#portraitVignette)"/>
    </g>
  </g>

  <!-- ======================================================== -->
  <!-- 4. TOP RIGHT: HEADER & SUBTITLE TITLES                   -->
  <!-- ======================================================== -->
  <g transform="translate(1085, 85)" text-anchor="middle">
    <!-- Main Name "NIKOLA TESLA" with 3D Gold Drop-Shadow -->
    <!-- Shadow Layer -->
    <text x="3" y="65" font-family="'Times New Roman', Times, 'Cinzel', Georgia, serif" font-size="74" font-weight="bold" letter-spacing="6" fill="#040912" opacity="0.8">NIKOLA TESLA</text>
    <!-- Mid Glow -->
    <text x="0" y="63" font-family="'Times New Roman', Times, 'Cinzel', Georgia, serif" font-size="74" font-weight="bold" letter-spacing="6" fill="#B38125">NIKOLA TESLA</text>
    <!-- Foreground Cream/Gold Lettering -->
    <text x="0" y="60" font-family="'Times New Roman', Times, 'Cinzel', Georgia, serif" font-size="74" font-weight="bold" letter-spacing="6" fill="#F7EED9">NIKOLA TESLA</text>

    <!-- Dates: "1856 – 1943" -->
    <g transform="translate(0, 105)">
      <line x1="-120" y1="-6" x2="-20" y2="-6" stroke="url(#goldGradient)" stroke-width="1.5" opacity="0.7"/>
      <circle cx="-15" cy="-6" r="2.5" fill="#E2B755"/>
      <text x="0" y="0" font-family="Georgia, 'Times New Roman', serif" font-size="28" font-weight="normal" letter-spacing="3" fill="#E5D5B8">1856 – 1943</text>
      <circle cx="15" cy="-6" r="2.5" fill="#E2B755"/>
      <line x1="20" y1="-6" x2="120" y2="-6" stroke="url(#goldGradient)" stroke-width="1.5" opacity="0.7"/>
    </g>

    <!-- Subtitle Banner / Cartouche -->
    <g transform="translate(0, 140)">
      <!-- Banner Backing Ribbon -->
      <!-- Left Ribbon Swallowtail -->
      <path d="M -290,-5 L -310,-18 L -300,0 L -310,18 L -290,5 Z" fill="#936416"/>
      <path d="M -260,-18 L -290,-18 L -280,0 L -290,18 L -260,18 Z" fill="url(#goldGradient)" stroke="#6A460A" stroke-width="1"/>
      <!-- Right Ribbon Swallowtail -->
      <path d="M 290,-5 L 310,-18 L 300,0 L 310,18 L 290,5 Z" fill="#936416"/>
      <path d="M 260,-18 L 290,-18 L 280,0 L 290,18 L 260,18 Z" fill="url(#goldGradient)" stroke="#6A460A" stroke-width="1"/>

      <!-- Center Ornate Cartouche Plate -->
      <path d="M -270,-19 
               C -255,-25 255,-25 270,-19 
               C 285,-12 285,12 270,19 
               C 255,25 -255,25 -270,19 
               C -285,12 -285,-12 -270,-19 Z" 
            fill="#081427" stroke="url(#goldGradient)" stroke-width="2.5"/>
      <!-- Inner Thin Gold Inset -->
      <path d="M -263,-14 C -250,-18 250,-18 263,-14 C 273,-9 273,9 263,14 C 250,18 -250,18 -263,14 C -273,9 -273,-9 -263,-14 Z" 
            fill="none" stroke="url(#goldBright)" stroke-width="0.8" opacity="0.8"/>

      <!-- Cartouche Decorative Left/Right Scroll Flourishes -->
      <path d="M -280,0 Q -265,-12 -255,0 Q -265,12 -280,0 Z" fill="url(#goldGradient)"/>
      <path d="M 280,0 Q 265,-12 255,0 Q 265,12 280,0 Z" fill="url(#goldGradient)"/>

      <!-- Text: VISIONARY INVENTOR & ELECTRICAL ENGINEER -->
      <text x="0" y="6" font-family="'Times New Roman', Georgia, serif" font-size="19" font-weight="bold" letter-spacing="3" fill="#F8F2E2">VISIONARY INVENTOR &amp; ELECTRICAL ENGINEER</text>
    </g>
  </g>

  <!-- ======================================================== -->
  <!-- 5. MIDDLE RIGHT: 4 PARCHMENT MILESTONE CARDS (2x2 GRID)   -->
  <!-- ======================================================== -->

  <!-- CARD 1: 1888 — AC INDUCTION MOTOR (Row 1, Col 1) -->
  <g transform="translate(680, 290)" filter="url(#cardShadow)">
    <!-- Parchment Background Plate -->
    <rect x="0" y="0" width="375" height="152" rx="10" fill="url(#parchmentCard)" stroke="#CFB68C" stroke-width="1.8"/>
    <!-- Inner Fine Border -->
    <rect x="4" y="4" width="367" height="144" rx="7" fill="none" stroke="#E1CFA9" stroke-width="1" opacity="0.8"/>
    
    <!-- Title -->
    <text x="82" y="38" font-family="'Times New Roman', Georgia, serif" font-size="18" font-weight="bold" letter-spacing="0.5" fill="#131B2A">1888: AC INDUCTION MOTOR</text>
    <!-- Divider Line -->
    <line x1="82" y1="47" x2="355" y2="47" stroke="#D1B88E" stroke-width="0.8"/>
    <!-- Description Paragraph -->
    <text x="82" y="68" font-family="Georgia, serif" font-size="13.5" fill="#2C3545" line-height="20">
      <tspan x="82" dy="0">This groundbreaking invention laid the</tspan>
      <tspan x="82" dy="19">foundation for the Alternating Current</tspan>
      <tspan x="82" dy="19">(AC) system, enabling efficient,</tspan>
      <tspan x="82" dy="19">long-distance power transmission.</tspan>
    </text>

    <!-- Gold Medallion on Left Side -->
    <g transform="translate(0, 48)">
      <!-- Outer Relief Rings -->
      <circle cx="38" cy="0" r="42" fill="url(#goldMedal)" stroke="#744D0F" stroke-width="1.5" filter="url(#cardShadow)"/>
      <circle cx="38" cy="0" r="35" fill="none" stroke="#FFE9A5" stroke-width="2"/>
      <circle cx="38" cy="0" r="31" fill="none" stroke="#875A12" stroke-width="1.2" stroke-dasharray="2,3"/>
      <!-- Inner Core -->
      <radialGradient id="medalCore1888" cx="40%" cy="30%" r="70%">
        <stop offset="0%" stop-color="#FFF5D6"/>
        <stop offset="60%" stop-color="#DDAF4A"/>
        <stop offset="100%" stop-color="#9C6B16"/>
      </radialGradient>
      <circle cx="38" cy="0" r="28" fill="url(#medalCore1888)"/>
      <!-- Year Text -->
      <text x="38" y="7" text-anchor="middle" font-family="'Times New Roman', Georgia, serif" font-size="20" font-weight="bold" fill="#221503" letter-spacing="1">1888</text>
    </g>
  </g>

  <!-- CARD 2: 1893 — NIAGARA FALLS POWER PROJECT (Row 1, Col 2) -->
  <g transform="translate(1125, 290)" filter="url(#cardShadow)">
    <!-- Parchment Background Plate -->
    <rect x="0" y="0" width="375" height="152" rx="10" fill="url(#parchmentCard)" stroke="#CFB68C" stroke-width="1.8"/>
    <!-- Inner Fine Border -->
    <rect x="4" y="4" width="367" height="144" rx="7" fill="none" stroke="#E1CFA9" stroke-width="1" opacity="0.8"/>
    
    <!-- Title -->
    <text x="82" y="32" font-family="'Times New Roman', Georgia, serif" font-size="16.5" font-weight="bold" letter-spacing="0.4" fill="#131B2A">1893: NIAGARA FALLS</text>
    <text x="82" y="50" font-family="'Times New Roman', Georgia, serif" font-size="16.5" font-weight="bold" letter-spacing="0.4" fill="#131B2A">POWER PROJECT</text>
    <!-- Divider Line -->
    <line x1="82" y1="58" x2="355" y2="58" stroke="#D1B88E" stroke-width="0.8"/>
    <!-- Description Paragraph -->
    <text x="82" y="76" font-family="Georgia, serif" font-size="13" fill="#2C3545">
      <tspan x="82" dy="0">Tesla's polyphase system was chosen</tspan>
      <tspan x="82" dy="18">to generate electricity from the falls,</tspan>
      <tspan x="82" dy="18">pioneering widespread commercial</tspan>
      <tspan x="82" dy="18">power use.</tspan>
    </text>

    <!-- Gold Medallion on Left Side -->
    <g transform="translate(0, 48)">
      <circle cx="38" cy="0" r="42" fill="url(#goldMedal)" stroke="#744D0F" stroke-width="1.5" filter="url(#cardShadow)"/>
      <circle cx="38" cy="0" r="35" fill="none" stroke="#FFE9A5" stroke-width="2"/>
      <circle cx="38" cy="0" r="31" fill="none" stroke="#875A12" stroke-width="1.2" stroke-dasharray="2,3"/>
      <circle cx="38" cy="0" r="28" fill="url(#medalCore1888)"/>
      <text x="38" y="7" text-anchor="middle" font-family="'Times New Roman', Georgia, serif" font-size="20" font-weight="bold" fill="#221503" letter-spacing="1">1893</text>
    </g>
  </g>

  <!-- CARD 3: 1898 — REMOTE-CONTROL BOAT DEMONSTRATION (Row 2, Col 1) -->
  <g transform="translate(680, 490)" filter="url(#cardShadow)">
    <!-- Parchment Background Plate -->
    <rect x="0" y="0" width="375" height="152" rx="10" fill="url(#parchmentCard)" stroke="#CFB68C" stroke-width="1.8"/>
    <!-- Inner Fine Border -->
    <rect x="4" y="4" width="367" height="144" rx="7" fill="none" stroke="#E1CFA9" stroke-width="1" opacity="0.8"/>
    
    <!-- Title -->
    <text x="82" y="32" font-family="'Times New Roman', Georgia, serif" font-size="16" font-weight="bold" letter-spacing="0.3" fill="#131B2A">1898: REMOTE-CONTROL</text>
    <text x="82" y="50" font-family="'Times New Roman', Georgia, serif" font-size="16" font-weight="bold" letter-spacing="0.3" fill="#131B2A">BOAT DEMONSTRATION</text>
    <!-- Divider Line -->
    <line x1="82" y1="58" x2="355" y2="58" stroke="#D1B88E" stroke-width="0.8"/>
    <!-- Description Paragraph -->
    <text x="82" y="76" font-family="Georgia, serif" font-size="13" fill="#2C3545">
      <tspan x="82" dy="0">He publicly demonstrated a wireless,</tspan>
      <tspan x="82" dy="18">remotely-controlled boat at Madison</tspan>
      <tspan x="82" dy="18">Square Garden, pioneering robotics</tspan>
      <tspan x="82" dy="18">and guided systems.</tspan>
    </text>

    <!-- Gold Medallion on Left Side -->
    <g transform="translate(0, 48)">
      <circle cx="38" cy="0" r="42" fill="url(#goldMedal)" stroke="#744D0F" stroke-width="1.5" filter="url(#cardShadow)"/>
      <circle cx="38" cy="0" r="35" fill="none" stroke="#FFE9A5" stroke-width="2"/>
      <circle cx="38" cy="0" r="31" fill="none" stroke="#875A12" stroke-width="1.2" stroke-dasharray="2,3"/>
      <circle cx="38" cy="0" r="28" fill="url(#medalCore1888)"/>
      <text x="38" y="7" text-anchor="middle" font-family="'Times New Roman', Georgia, serif" font-size="20" font-weight="bold" fill="#221503" letter-spacing="1">1898</text>
    </g>
  </g>

  <!-- CARD 4: c. 1901 — WARDENCLYFFE TOWER CONSTRUCTION (Row 2, Col 2) -->
  <g transform="translate(1125, 490)" filter="url(#cardShadow)">
    <!-- Parchment Background Plate -->
    <rect x="0" y="0" width="375" height="152" rx="10" fill="url(#parchmentCard)" stroke="#CFB68C" stroke-width="1.8"/>
    <!-- Inner Fine Border -->
    <rect x="4" y="4" width="367" height="144" rx="7" fill="none" stroke="#E1CFA9" stroke-width="1" opacity="0.8"/>
    
    <!-- Title -->
    <text x="82" y="32" font-family="'Times New Roman', Georgia, serif" font-size="16" font-weight="bold" letter-spacing="0.3" fill="#131B2A">c. 1901: WARDENCLYFFE</text>
    <text x="82" y="50" font-family="'Times New Roman', Georgia, serif" font-size="16" font-weight="bold" letter-spacing="0.3" fill="#131B2A">TOWER CONSTRUCTION</text>
    <!-- Divider Line -->
    <line x1="82" y1="58" x2="355" y2="58" stroke="#D1B88E" stroke-width="0.8"/>
    <!-- Description Paragraph -->
    <text x="82" y="76" font-family="Georgia, serif" font-size="13" fill="#2C3545">
      <tspan x="82" dy="0">Tesla began building a massive tower</tspan>
      <tspan x="82" dy="18">to realize his dream of wireless global</tspan>
      <tspan x="82" dy="18">communication and power</tspan>
      <tspan x="82" dy="18">transmission.</tspan>
    </text>

    <!-- Gold Medallion on Left Side -->
    <g transform="translate(0, 48)">
      <circle cx="38" cy="0" r="42" fill="url(#goldMedal)" stroke="#744D0F" stroke-width="1.5" filter="url(#cardShadow)"/>
      <circle cx="38" cy="0" r="35" fill="none" stroke="#FFE9A5" stroke-width="2"/>
      <circle cx="38" cy="0" r="31" fill="none" stroke="#875A12" stroke-width="1.2" stroke-dasharray="2,3"/>
      <circle cx="38" cy="0" r="28" fill="url(#medalCore1888)"/>
      <text x="38" y="7" text-anchor="middle" font-family="'Times New Roman', Georgia, serif" font-size="18" font-weight="bold" fill="#221503" letter-spacing="0.5">c. 1901</text>
    </g>
  </g>

  <!-- ======================================================== -->
  <!-- 6. BOTTOM BANNER: UNFURLED PARCHMENT SCROLL WITH QUOTE    -->
  <!-- ======================================================== -->
  <g transform="translate(800, 770)" filter="url(#cardShadow)">
    <!-- Curled Ribbon Swallowtails Left -->
    <g transform="translate(-720, 0)">
      <!-- Back fold -->
      <path d="M 40,40 L 0,65 L 15,35 L 0,5 L 40,30 Z" fill="#B38640"/>
      <!-- Front curl -->
      <path d="M 60,-5 C 30,-5 10,15 15,40 C 25,20 45,15 70,15 Z" fill="url(#goldGradient)" stroke="#815410" stroke-width="1"/>
    </g>

    <!-- Curled Ribbon Swallowtails Right -->
    <g transform="translate(720, 0)">
      <path d="M -40,40 L 0,65 L -15,35 L 0,5 L -40,30 Z" fill="#B38640"/>
      <path d="M -60,-5 C -30,-5 -10,15 -15,40 C -25,20 -45,15 -70,15 Z" fill="url(#goldGradient)" stroke="#815410" stroke-width="1"/>
    </g>

    <!-- Main Parchment Banner Plate -->
    <path d="M -700,5 
             C -680,-15 -620,-10 -550,-15 
             C -350,-20 350,-20 550,-15 
             C 620,-10 680,-15 700,5 
             C 715,35 690,65 670,68 
             C 500,75 -500,75 -670,68 
             C -690,65 -715,35 -700,5 Z" 
          fill="url(#parchmentBanner)" stroke="#C8AB7C" stroke-width="2"/>
    
    <!-- Inner Fine Border -->
    <path d="M -685,8 
             C -665,-9 -610,-5 -545,-9 
             C -345,-14 345,-14 545,-9 
             C 610,-5 665,-9 685,8 
             C 698,32 675,58 658,61 
             C 490,67 -490,67 -658,61 
             C -675,58 -698,32 -685,8 Z" 
          fill="none" stroke="#E7D5B2" stroke-width="1" opacity="0.9"/>

    <!-- Left & Right Gold Rosettes -->
    <circle cx="-670" cy="27" r="4.5" fill="url(#goldBright)" stroke="#744D0F" stroke-width="1"/>
    <circle cx="670" cy="27" r="4.5" fill="url(#goldBright)" stroke="#744D0F" stroke-width="1"/>

    <!-- Quote Line 1 -->
    <text x="0" y="24" text-anchor="middle" font-family="'Times New Roman', Georgia, serif" font-size="20" font-weight="bold" font-style="italic" letter-spacing="1" fill="#132035">
      “THE PROGRESS AND DEVELOPMENT OF MAN ARE ENTIRELY DEPENDENT ON THE INVENTION.”
    </text>
    <!-- Quote Author Attribution -->
    <text x="0" y="52" text-anchor="middle" font-family="Georgia, serif" font-size="17" font-style="italic" fill="#3D4B62">
      – Nikola Tesla
    </text>
  </g>
</svg>`;

// Write SVG files
const publicSvgPath = path.join(__dirname, '../public/images/nikola_tesla_infographic.svg');
const assetSvgPath = path.join(__dirname, '../src/assets/images/nikola_tesla_infographic.svg');
fs.writeFileSync(publicSvgPath, svgContent);
fs.writeFileSync(assetSvgPath, svgContent);
console.log('Saved SVG to:', publicSvgPath);

// Convert to high-res JPG via ffmpeg
const outputJpgPath = path.join(__dirname, '../src/assets/images/nikola_tesla_infographic.jpg');
const publicJpgPath = path.join(__dirname, '../public/images/nikola_tesla_infographic.jpg');
const publicKeywordJpgPath = path.join(__dirname, '../public/Nikola Tesla inventions that changed the world.jpg');

try {
  execSync(`ffmpeg -y -i "${publicSvgPath}" -q:v 2 "${outputJpgPath}"`);
  fs.copyFileSync(outputJpgPath, publicJpgPath);
  fs.copyFileSync(outputJpgPath, publicKeywordJpgPath);
  console.log('Successfully generated JPG at:', outputJpgPath);
} catch (err) {
  console.error('Error rendering JPG with ffmpeg:', err.message);
}
