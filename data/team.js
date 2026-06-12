const defaultDetailData = {
  bio: "As a board-certified physician, Dr. Elizabeth Foster has a profound commitment to delivering exceptional healthcare services. Her leadership and strategic vision have been instrumental in shaping our medical facility into a center of excellence. Patients appreciate her warm bedside manner, and she takes the time to listen to their concerns, ensuring that each individual receives personalized care tailored to their unique needs.",
  short_bio: "Dr. Elizabeth Foster is a highly accomplished and compassionate physician, serving as our Chief Medical Officer. With over 20 years of experience in various medical specialties, she brings a wealth of knowledge and expertise to our healthcare team.",
  checklist: [
    "mental health solutions",
    "rapid patient improvement",
    "world class treatment",
    "medical research professionals",
    "medical advices & check ups",
    "trusted medical treatment",
    "emergency help available 24/7"
  ],
  education: [
    {
      degree: "MBBS",
      details: "Passing Year is 2012\nRoyal College of Surgeons of Harvard"
    },
    {
      degree: "BHMS",
      details: "Passing Year is 2017\nesteemed University"
    }
  ],
  awards: [
    {
      title: "Patient Choice Honors",
      body: "Remarkable humanitarian service."
    },
    {
      title: "Patient Choice Honors",
      body: "Expert in minimally invasive procedures."
    },
    {
      title: "Patient Choice Honors",
      body: "Outstanding medical research contributions."
    }
  ],
  skills: [
    { label: "Clinical Diagnosis", percentage: 70 },
    { label: "Surgical Expertise", percentage: 50 },
    { label: "Public Health Knowledge", percentage: 90 }
  ],
  schedule: [
    { day: "Monday - Friday", time: "8:00 - 7:00 pm" },
    { day: "Saturday", time: "9:00 - 8:00 pm" },
    { day: "Sunday", time: "10:00 - 9:00 pm" }
  ]
};

export const teamData = [
  {
    slug: "dr-elizabeth-foster",
    image: "/our_team/JPG/team-1.jpg",
    specialty: "Family Physician",
    name: "Dr. Elizabeth Foster",
    tagline: "Compassionate care for all ages.",
    has_detail: true,
    detail_image: "/ourTeam-detail/JPG/team-1.jpg",
    ...defaultDetailData
  },
  {
    slug: "dr-david-lee",
    image: "/our_team/JPG/team-2.jpg",
    specialty: "Surgeon",
    name: "Dr. David Lee",
    tagline: "Skillful hands, transforming lives.",
    has_detail: true,
    detail_image: "/our_team/JPG/team-2.jpg",
    ...defaultDetailData
  },
  {
    slug: "dr-ava-white",
    image: "/our_team/JPG/team-3.jpg",
    specialty: "Cardiologist",
    name: "Dr. Ava White",
    tagline: "Specializes in heart-related conditions.",
    has_detail: true,
    detail_image: "/our_team/JPG/team-3.jpg",
    ...defaultDetailData
  },
  {
    slug: "dr-daniel-brown",
    image: "/our_team/JPG/team-4.jpg",
    specialty: "Dermatologist",
    name: "Dr. Daniel Brown",
    tagline: "Focuses on skin, hair disorders.",
    has_detail: true,
    detail_image: "/our_team/JPG/team-4.jpg",
    ...defaultDetailData
  },
  {
    slug: "dr-jennifer-lee",
    image: "/our_team/JPG/team-5.jpg",
    specialty: "Rheumatologist",
    name: "Dr. Jennifer Lee",
    tagline: "Focuses on autoimmune diseases.",
    has_detail: false
  },
  {
    slug: "dr-samantha-taylor",
    image: "/our_team/JPG/team-6.jpg",
    specialty: "Orthopedic Surgeon",
    name: "Dr. Samantha Taylor",
    tagline: "Deals with conditions and injuries related.",
    has_detail: false
  },
  {
    slug: "dr-michael-johnson",
    image: "/our_team/JPG/team-7.jpg",
    specialty: "Neurologist",
    name: "Dr. Michael Johnson",
    tagline: "Treats disorders of the nervous system.",
    has_detail: false
  },
  {
    slug: "dr-laura-robinson",
    image: "/our_team/JPG/team-8.jpg",
    specialty: "General Surgeon",
    name: "Dr. Laura Robinson",
    tagline: "Common medical conditions, and refers.",
    has_detail: false
  },
  {
    slug: "dr-robert-jones",
    image: "/our_team/JPG/team-9.jpg",
    specialty: "General Practitioner",
    name: "Dr. Robert Jones",
    tagline: "Provides primary care and guiding.",
    has_detail: false
  }
];
