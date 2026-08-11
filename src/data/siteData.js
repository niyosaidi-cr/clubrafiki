// ─── CERTIFICATES & AWARDS ───────────────────────────────────────────────────
// To add a new certificate: copy one object, change the fields, add your image URL.
// When Decap CMS is set up, this will be editable from the admin panel.
export const certificates = [
  {
    img: '/assets/Club Rafiki RGB Certificate.jpg',
    title: 'Certificate of Registration',
    issuer: 'Rwanda Governance Board (RGB)',
    year: '2011',
    description: 'Official registration as a Community-Based Organization by the Rwanda Governance Board, recognizing Club Rafiki as a legitimate non-profit serving the youth of Nyarugenge Distric...'
  },
  {
    img: '/assets/certificate-ecw.jpg',
    title: 'English Corner Workshop certificate of Participation',
    issuer: 'City of Kigali',
    year: '2017',
    description: 'Awarded in gratitude for outstanding participation and hard work during the Intore mu biruhuko program.'
  },
  {
    img: '/assets/certificate-urban-dance.jpg',
    title: 'Urban Dance School certificate of Participation',
    issuer: 'City of Kigali',
    year: '2017',
    description: 'Awarded in gratitude for outstanding participation and hard work during the Intore mu biruhuko program.'
  },
  {
    img: '/assets/certificate-club-rafiki-library.jpg',
    title: 'certificate of participation',
    issuer: 'MINISPOC',
    year: '2018',
    description: 'Awarded in recognition of our participation to the Literacy Week.'
  },
  {
    img: '/assets/Koica-Certificate-of-appreciation.jpg',
    title: 'Certificate of Appreciation',
    issuer: 'KOICA Rwanda',
    year: '2024',
    description: 'Certificate of appreciation in acknolodgement of the best cooperative institution.'
  }
];

export const stats = [
  { value: '5,000+', label: 'Youth Reached Annually' },
  { value: '50+',    label: 'Years of Service' },
  { value: '500+',   label: 'Youth Trained in ICT' },
  { value: '1,000+', label: 'Youth in Sports Programs' }
];

export const heroSlides = [
  {
    img: 'https://i.ibb.co/RTggy2pK/dsc-7517-scaled.jpg',
    tag: 'Training & Education',
    program: 'training',
    link: 'https://clubrafiki.org/programs?program=training',
    title: 'Empowering the Youth of Nyamirambo',
    sub: 'Providing skills, opportunities, and a safe space for children and youth since 1974.'
  },
  {
    img: 'https://i.ibb.co/35x8RJ9W/52112159933-8dee1762f0-c.jpg',
    tag: 'Sport & Recreation',
    program: 'sports',
    link: 'https://clubrafiki.org/programs?program=sports',
    title: 'Building Champions On and Off the Court',
    sub: 'Basketball, volleyball, martial arts and more to develop discipline and teamwork.'
  },
  {
    img: 'https://i.ibb.co/CKBGq1mr/cropped-dsc-08142.jpg',
    tag: 'Cultural Initiatives',
    program: 'cultural',
    link: 'https://clubrafiki.org/programs?program=cultural',
    title: 'Celebrating Rwandan Heritage & Identity',
    sub: 'Traditional dance, drama, and the arts keep our culture alive for the next generation.'
  },
  {
    img: 'https://i.ibb.co/HpYNKtq4/Semester-report-2024-photo.png',
    tag: 'Girls Empowerment',
    program: 'girls',
    link: 'https://clubrafiki.org/programs?program=girls',
    title: 'Lifting Every Girl to Her Full Potential',
    sub: 'The Girl Up program equips young women with leadership, skills, and confidence.'
  },
  {
    img: 'https://i.ibb.co/PsjqzjV4/Music-2-1.png',
    tag: 'Youth Arts',
    program: 'arts',
    link: 'https://clubrafiki.org/programs?program=arts',
    title: 'Where Creativity Meets Community',
    sub: 'Music, fashion, urban dance, and film — creative expression for every young person.'
  },
  {
    img: 'https://i.ibb.co/ccb1JwML/Health-pictures.png',
    tag: 'Health Outreach',
    program: 'health',
    link: 'https://clubrafiki.org/programs?program=health',
    title: 'Safeguarding Youth Health & Well-Being',
    sub: 'Comprehensive health education, HIV prevention, and community wellness programs.'
  }
];

export const programs = [
  {
    id: 'training',
    label: 'Training & Education',
    img: 'https://i.ibb.co/RTggy2pK/dsc-7517-scaled.jpg',
    title: 'Training & Education',
    desc: 'We equip youth with vocational skills, languages, ICT, and entrepreneurship to build a solid foundation for their future careers and foster job creation.',
    items: ['Information & Communication Technology (ICT)', 'Language & Literacy Classes', 'Entrepreneurship & Job Creation Workshops', 'Career Guidance & Mentorship']
  },
  {
    id: 'cultural',
    label: 'Cultural Initiatives',
    img: 'https://i.ibb.co/CKBGq1mr/cropped-dsc-08142.jpg',
    title: 'Cultural Initiatives',
    desc: 'Our cultural programs provide a platform for creative expression, preserving Rwandan heritage, and fostering critical dialogue on important community issues.',
    items: ['Library & Youth Publication (Journal Rafiki)', 'Traditional Dance, Drama, and Visual Arts', 'Community Debates & Public Speaking', 'HIV/Genocide Awareness through Creative Arts']
  },
  {
    id: 'health',
    label: 'Health Outreach',
    img: 'https://i.ibb.co/ccb1JwML/Health-pictures.png',
    title: 'Health Outreach',
    desc: 'We are committed to the well-being of our youth, providing vital health education and support services in a safe, confidential, and accessible manner.',
    items: ['Sexual and Reproductive Health & Rights (SRHR)', 'HIV Prevention & Awareness Campaigns', 'Peer-to-Peer Counseling Services', 'Mobile Voluntary Counseling & Testing Units']
  },
  {
    id: 'sports',
    label: 'Sport & Recreation',
    img: 'https://i.ibb.co/35x8RJ9W/52112159933-8dee1762f0-c.jpg',
    title: 'Sport & Recreation',
    desc: 'Sports serve as our primary outreach tool — engaging youth, promoting physical fitness, and instilling values of teamwork, discipline, and leadership.',
    items: ['Team Sports: Basketball, Volleyball, Badminton', 'Martial Arts: Karate, Kung-Fu, Boxing', 'Modern Dance, Table Tennis, Board Games', 'Community Events & Film Screenings']
  },
  {
    id: 'girls',
    label: 'Girls Empowerment',
    img: 'https://i.ibb.co/HpYNKtq4/Semester-report-2024-photo.png',
    title: 'Girls Empowerment',
    desc: 'Creating a safe and empowering environment where girls build confidence, access tailored opportunities, and develop skills to champion their futures.',
    items: ['"Girl Up" Leadership & Mentorship Circles', 'Specialized Vocational & Financial Literacy', 'Safe Spaces for Health & Social Support', "Advocacy for Girls' Rights & Education"]
  }
];

export const testimonials = [
  {
    img: '/assets/PK.jpg',
    quote: 'Young people of Africa have a lot of talent that may not come out without the kind of opportunities provided by such projects.',
    name: 'H.E Paul Kagame',
    title: 'President of the Republic of Rwanda'
  },
  {
    img: '/assets/Massai-Ujiri.jpg',
    quote: 'Rafiki is my home. We must continue to DREAM BIG even in hard times. Blessings from Giants of Africa — we think of you always.',
    name: 'Masai Ujiri',
    title: 'President, Toronto Raptors & Giants of Africa'
  },
  {
    img: '/assets/Christian-Inwali.jpg',
    quote: 'Club Rafiki helped many of us. After school and during holidays we had a place to play games that open the mind and learn together as a community.',
    name: 'Christian INTWALI',
    title: 'Founder, Our Past Initiative'
  }
];

export const news = [
  { 
    img: 'https://i.ibb.co/RTggy2pK/dsc-7517-scaled.jpg', 
    tag: 'Education', 
    title: 'New ICT Lab Opens for Youth Training', 
    desc: 'Over 80 students enrolled in our new digital skills program, covering essential computer operations and software programming basics.' 
  },
  { 
    img: 'https://i.ibb.co/35x8RJ9W/52112159933-8dee1762f0-c.jpg', 
    tag: 'Sports', 
    title: 'Giants of Africa Basketball Camp Returns', 
    desc: 'In partnership with the Giants of Africa foundation, 120 young players received elite coaching and leadership mentoring.' 
  },
  { 
    img: 'https://i.ibb.co/HpYNKtq4/Semester-report-2024-photo.png', 
    tag: 'Empowerment', 
    title: 'Girl Up Leadership Circle — Semester Report', 
    desc: 'Our girls empowerment program graduates 45 participants trained in advocacy, financial literacy, and social leadership.' 
  },
  { 
    img: 'https://i.ibb.co/ccb1JwML/Health-pictures.png', 
    tag: 'Health', 
    title: 'Mobile VCT Campaign Reaches 1,200 in Nyamirambo', 
    desc: 'Our health outreach team conducted a major voluntary HIV counseling and testing campaign across local neighborhoods.' 
  },
  { 
    img: 'https://i.ibb.co/CKBGq1mr/cropped-dsc-08142.jpg', 
    tag: 'Culture', 
    title: 'Annual Cultural Festival Celebrates Rwandan Heritage', 
    desc: 'Our youth performed traditional dance and drama acts highlighting historical heritage and community values.' 
  },
  { 
    img: 'https://i.ibb.co/PsjqzjV4/Music-2-1.png', 
    tag: 'Arts', 
    title: 'Urban Dance School Performs at Kigali Arena', 
    desc: 'Students from our urban dance school took the stage at Kigali Arena, showcasing modern creative talent.' 
  }
];

export const impactStats = [
  { number: '50+', label: 'Years Serving Kigali Youth' },
  { number: '5,000+', label: 'Youth Reached Each Year' },
  { number: '500+', label: 'Youth Trained in ICT' },
  { number: '1,000+', label: 'Active Sports Participants' },
  { number: '45+', label: 'Girl Up Graduates (2024)' },
  { number: '6', label: 'Neighborhoods Reached by VCT' },
  { number: '1,200+', label: 'HIV Tests Conducted' },
  { number: '500+', label: 'Cultural Event Attendees' }
];

export const partners = [
  { img: '/assets/Minstry of youth and arts.svg', name: 'Ministry of Youth and Arts', url: 'https://www.moya.gov.rw/' },
  { img: '/assets/City of Kigali.jpg', name: 'City of Kigali', url: 'https://www.kigalicity.gov.rw/' },
  { img: '/assets/National Youth Council.png', name: 'National Youth Council', url: 'https://www.nyc.gov.rw/' },
  { img: '/assets/Giants of Africa.png', name: 'Giants of Africa', url: 'https://giantsofafrica.org/' },
  { img: '/assets/Ineza foundation.jpg', name: 'Ineza Foundation', url: 'https://www.inezafoundation.org/' },
  { img: '/assets/indigo-foundation.png', name: 'Indigo Foundation', url: 'https://indigofoundation.org/' },
  { img: '/assets/Imbuto foundation.png', name: 'Imbuto Foundation', url: 'https://imbutofoundation.org/' },
  { img: '/assets/Rafikikidsa.png', name: 'Rafikikidsa', url: 'https://rafikids-basketball.be/' },
  { img: '/assets/KOICA.jpg', name: 'KOICA', url: 'https://www.koica.go.kr/sites/rwa_en/index.do' },
  { img: '/assets/RBC logo.png', name: 'Rwanda Governance Board (RBC)', url: 'https://www.rbc.gov.rw/' }
];

export const galleryImages = [
  'https://live.staticflickr.com/65535/54686457129_fbb8f028a2_n.jpg',
  'https://live.staticflickr.com/65535/54686439848_0d2ace4661.jpg',
  'https://live.staticflickr.com/65535/54686439793_4359b82ccd.jpg',
  'https://live.staticflickr.com/65535/54686447569_93de21027d_n.jpg',
  'https://live.staticflickr.com/65535/54686540075_47c803c5ec.jpg',
  'https://live.staticflickr.com/65535/5468208721_9dd0132b96_z.jpg',
  'https://live.staticflickr.com/65535/5468208726_e869abaf43_z.jpg',
  'https://live.staticflickr.com/65535/54686540005_a124f4641a_z.jpg',
  'https://live.staticflickr.com/65535/5468208661_e84558523c_z.jpg',
  'https://live.staticflickr.com/65535/54685386352_61d15c8013_z.jpg',
  'https://live.staticflickr.com/65535/54685386307_d232e97183_z.jpg',
  'https://live.staticflickr.com/65535/54686447209_7a27a6f27b_w.jpg'
];
