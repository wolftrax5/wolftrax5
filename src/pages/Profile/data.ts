export const PROFILE = {
  name: 'Alejandro Medina',
  photo: 'https://cdn.wolftrax.me/me.jpg',
  role: 'Full Stack Developer',
  focus: 'Web App builder specializing in scalable software solutions',
  birthYear: 1993,
  email: '5almero5@gmail.com',
  location: 'Aguascalientes, México',
  bio: "Hi, I'm Alejandro. I build web experiences with a strong emphasis on frontend craft, motion, and clean architecture — while staying comfortable across the stack.",
};

export const MAP_GEOGRAPHY_URL =
  'https://cdn.wolftrax.me/map_110m_0_countries.json';

export const calculateAge = (birthYear: number = PROFILE.birthYear): number => {
  const now = new Date();
  return now.getFullYear() - birthYear;
};

export interface Skill {
  name: string;
  learning?: boolean;
}

export const MAIN_SKILLS: Skill[] = [
  { name: 'React' },
  { name: 'Next.js' },
  { name: 'Vue' },
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'Node.js' },
  { name: 'Rust', learning: true },
];

export interface SocialLink {
  id: string;
  label: string;
  href: string;
}

export const SOCIALS: SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/wolftrax5',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/wolftrax/',
  },
  {
    id: 'x',
    label: 'X',
    href: 'https://x.com/wolftrax05',
  },
  {
    id: 'email',
    label: 'Email',
    href: `mailto:${PROFILE.email}`,
  },
];

export type CityType = 'home' | 'visited';

export interface City {
  name: string;
  country: string;
  lat: number;
  lng: number;
  type: CityType;
}

export const CITIES: City[] = [
  {
    name: 'Aguascalientes',
    country: 'MX',
    lat: 21.8853,
    lng: -102.2916,
    type: 'home',
  },
  {
    name: 'Guadalajara',
    country: 'MX',
    lat: 20.6597,
    lng: -103.3496,
    type: 'visited',
  },
  {
    name: 'Monterrey',
    country: 'MX',
    lat: 25.6866,
    lng: -100.3161,
    type: 'visited',
  },
  {
    name: 'Puerto Vallarta',
    country: 'MX',
    lat: 20.6534,
    lng: -105.2253,
    type: 'visited',
  },
  {
    name: 'Querétaro',
    country: 'MX',
    lat: 20.5888,
    lng: -100.3899,
    type: 'visited',
  },
  {
    name: 'Puebla',
    country: 'MX',
    lat: 19.0414,
    lng: -98.2063,
    type: 'visited',
  },
  {
    name: 'Nuevo Laredo',
    country: 'MX',
    lat: 27.4761,
    lng: -99.5164,
    type: 'visited',
  },
  {
    name: 'Cancún',
    country: 'MX',
    lat: 21.1619,
    lng: -86.8515,
    type: 'visited',
  },
  {
    name: 'Acapulco',
    country: 'MX',
    lat: 16.8531,
    lng: -99.8237,
    type: 'visited',
  },
  {
    name: 'Mérida',
    country: 'MX',
    lat: 20.9674,
    lng: -89.5926,
    type: 'visited',
  },
  {
    name: 'Tijuana',
    country: 'MX',
    lat: 32.5149,
    lng: -117.0382,
    type: 'visited',
  },
  {
    name: 'San Francisco',
    country: 'US',
    lat: 37.7749,
    lng: -122.4194,
    type: 'visited',
  },
  {
    name: 'San Diego',
    country: 'US',
    lat: 32.7157,
    lng: -117.1611,
    type: 'visited',
  },
  {
    name: 'Los Angeles',
    country: 'US',
    lat: 34.0522,
    lng: -118.2437,
    type: 'visited',
  },
  {
    name: 'Dallas',
    country: 'US',
    lat: 32.7767,
    lng: -96.797,
    type: 'visited',
  },
  {
    name: 'Orlando',
    country: 'US',
    lat: 28.5383,
    lng: -81.3792,
    type: 'visited',
  },
  {
    name: 'Miami',
    country: 'US',
    lat: 25.7617,
    lng: -80.1918,
    type: 'visited',
  },
  {
    name: 'Columbus',
    country: 'US',
    lat: 39.9612,
    lng: -82.9988,
    type: 'visited',
  },
  {
    name: 'Denver',
    country: 'US',
    lat: 39.7392,
    lng: -104.9903,
    type: 'visited',
  },
  {
    name: 'San José',
    country: 'CR',
    lat: 9.9281,
    lng: -84.0907,
    type: 'visited',
  },
  {
    name: 'Liberia',
    country: 'CR',
    lat: 10.6346,
    lng: -85.4407,
    type: 'visited',
  },
  {
    name: 'Puntarenas',
    country: 'CR',
    lat: 9.9763,
    lng: -84.8384,
    type: 'visited',
  },
  {
    name: 'Lima',
    country: 'PE',
    lat: -12.0464,
    lng: -77.0428,
    type: 'visited',
  },
  {
    name: 'Cusco',
    country: 'PE',
    lat: -13.5319,
    lng: -71.9675,
    type: 'visited',
  },
  {
    name: 'Machu Picchu',
    country: 'PE',
    lat: -13.1631,
    lng: -72.545,
    type: 'visited',
  },
];
