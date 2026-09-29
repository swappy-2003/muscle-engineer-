export interface Trainer {
  slug: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  image: string;
  bio: string;
  philosophy: string;
  certifications: string[];
  specialties: string[];
  highlights: { label: string; value: string }[];
}

export const trainersData: Trainer[] = [
  {
    slug: "roshan-mandre",
    name: "Roshan Mandre",
    role: "Head Strength Coach",
    specialty: "Hypertrophy & Powerlifting",
    experience: "8+ Years Experience",
    image: "/images/trainers/roshan-mandre.png",
    bio: "Roshan brings over 8 years of hands-on experience coaching athletes and everyday lifters through structured strength programs. As Head Strength Coach at Muscle Engineers, he leads the training floor with an approach rooted in progressive overload and disciplined periodization. His coaching philosophy centers on building lasting strength through sound mechanics and intelligent programming.",
    philosophy: "Strength is earned through consistency, not shortcuts. Every rep should have purpose, every session should push you closer to what you're capable of.",
    certifications: [
      "Certified Strength & Conditioning Specialist",
      "Advanced Powerlifting Coach",
      "Sports Nutrition Fundamentals",
    ],
    specialties: [
      "Barbell Strength Training",
      "Powerlifting Programming",
      "Hypertrophy Periodization",
      "Competition Prep",
    ],
    highlights: [
      { label: "Clients Coached", value: "500+" },
      { label: "Years Active", value: "8+" },
      { label: "Focus Area", value: "Strength" },
    ],
  },
  {
    slug: "suresh-tumbade",
    name: "Suresh Tumbade",
    role: "Senior Fitness Coach",
    specialty: "Functional Movement & Conditioning",
    experience: "7+ Years Experience",
    image: "/images/trainers/suresh-tumbade.png",
    bio: "Suresh is a Senior Fitness Coach with 7+ years of experience in functional training and conditioning. He specializes in bridging the gap between gym performance and real-world movement quality. His sessions are structured to build athleticism, improve joint health, and develop the kind of conditioning that translates beyond the gym walls.",
    philosophy: "Fitness should make your life easier, not harder. I design training that builds bodies ready for anything — in the gym and outside it.",
    certifications: [
      "Functional Movement Screen (FMS) Certified",
      "Certified Personal Trainer",
      "Kettlebell Training Specialist",
    ],
    specialties: [
      "Functional Movement Patterns",
      "Metabolic Conditioning",
      "Mobility & Joint Health",
      "Athletic Performance",
    ],
    highlights: [
      { label: "Clients Coached", value: "400+" },
      { label: "Years Active", value: "7+" },
      { label: "Focus Area", value: "Conditioning" },
    ],
  },
  {
    slug: "suraj-sharma",
    name: "Suraj Sharma",
    role: "Physique & Transformation Specialist",
    specialty: "Body Recomposition & Fat Loss",
    experience: "6+ Years Experience",
    image: "/images/trainers/suraj-sharma.png",
    bio: "Suraj has spent 6+ years helping clients achieve dramatic, sustainable body transformations. He combines precise nutrition guidance with intelligent training design to deliver measurable recomposition results. His structured approach ensures clients shed fat while preserving or building muscle — no crash diets, no guesswork.",
    philosophy: "Transformation isn't about deprivation — it's about building the right habits. I help people change how they look by changing how they think about food and training.",
    certifications: [
      "Certified Nutrition Coach",
      "Body Transformation Specialist",
      "Certified Personal Trainer",
    ],
    specialties: [
      "Body Recomposition",
      "Fat Loss Programming",
      "Physique Development",
      "Nutrition Planning",
    ],
    highlights: [
      { label: "Transformations", value: "300+" },
      { label: "Years Active", value: "6+" },
      { label: "Focus Area", value: "Physique" },
    ],
  },
  {
    slug: "sudhir-mankar",
    name: "Sudhir Mankar",
    role: "Strength & Mobility Coach",
    specialty: "Biomechanics & Injury Prevention",
    experience: "6+ Years Experience",
    image: "/images/trainers/sudhir-mankar.png",
    bio: "Sudhir focuses on the intersection of strength training and movement quality. With 6+ years of coaching experience, he has developed a keen eye for biomechanical inefficiency and works to correct imbalances before they become injuries. His training approach prioritizes longevity — building strength that serves you for decades, not just months.",
    philosophy: "The strongest body is the one that moves well. I coach movement first, load second — because sustainable progress demands healthy joints and balanced mechanics.",
    certifications: [
      "Corrective Exercise Specialist",
      "Biomechanics Assessment Certified",
      "Certified Strength Coach",
    ],
    specialties: [
      "Injury Prevention",
      "Corrective Exercise",
      "Movement Screening",
      "Strength & Stability",
    ],
    highlights: [
      { label: "Clients Coached", value: "350+" },
      { label: "Years Active", value: "6+" },
      { label: "Focus Area", value: "Mobility" },
    ],
  },
  {
    slug: "sagar-salawat",
    name: "Sagar Salawat",
    role: "Athletic Performance Coach",
    specialty: "Endurance & Explosive Power",
    experience: "5+ Years Experience",
    image: "/images/trainers/sagar-salawat.png",
    bio: "Sagar coaches clients looking to push their physical limits through explosive power and endurance training. With 5+ years of experience, he combines plyometrics, sprint conditioning, and strength circuits into programs designed for peak athletic output. Whether you're training for sport or simply want to feel more powerful, Sagar builds programs that deliver.",
    philosophy: "Athletic performance isn't reserved for athletes. Anyone can train to be faster, more explosive, and more resilient — the programming just has to match the person.",
    certifications: [
      "Sports Performance Coach",
      "Plyometrics & Speed Training Certified",
      "Certified Personal Trainer",
    ],
    specialties: [
      "Explosive Power Development",
      "Sprint & Agility Training",
      "Endurance Programming",
      "Sport-Specific Conditioning",
    ],
    highlights: [
      { label: "Athletes Trained", value: "200+" },
      { label: "Years Active", value: "5+" },
      { label: "Focus Area", value: "Performance" },
    ],
  },
  {
    slug: "manish-pawar",
    name: "Manish Pawar",
    role: "Personal Transformation Coach",
    specialty: "Custom Training & Lifestyle Coaching",
    experience: "5+ Years Experience",
    image: "/images/trainers/manish-pawar.png",
    bio: "Manish is a Personal Transformation Coach who blends custom training with lifestyle coaching to create sustainable change. Over 5+ years, he has guided clients through complete health overhauls — from sedentary beginners to confident, active individuals. His strength lies in understanding each person's unique lifestyle challenges and designing training that fits seamlessly around them.",
    philosophy: "Real transformation starts with understanding someone's life, not just their body. I design training that fits into your day and builds habits that last.",
    certifications: [
      "Certified Personal Trainer",
      "Lifestyle & Wellness Coach",
      "Weight Management Specialist",
    ],
    specialties: [
      "Personalized Training Plans",
      "Beginner-Friendly Coaching",
      "Lifestyle Integration",
      "Habit Building & Accountability",
    ],
    highlights: [
      { label: "Clients Coached", value: "250+" },
      { label: "Years Active", value: "5+" },
      { label: "Focus Area", value: "Lifestyle" },
    ],
  },
];

export function getTrainerBySlug(slug: string): Trainer | undefined {
  return trainersData.find((t) => t.slug === slug);
}

export function getAllTrainerSlugs(): string[] {
  return trainersData.map((t) => t.slug);
}
