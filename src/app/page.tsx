import LocationFinder from '@/components/LocationFinder';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8 text-slate-800 dark:text-slate-100">
          Location Finder
        </h1>
        <LocationFinder />
      </div>
    </main>
  );
}
