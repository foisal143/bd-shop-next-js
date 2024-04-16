import Image from 'next/image';
import HeroSection from './HeroSection/HeroSection';
import Category from '@/components/Category';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <HeroSection />
      <Category />
    </main>
  );
}
