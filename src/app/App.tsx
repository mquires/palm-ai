import Reader from '@/components/features/Reader/Reader';
import Header from '@/components/layout/header/Header';

const App = () => {
  return (
    <main className="flex flex-col">
      <div className="sticky inset-y-0 z-50 h-[65px] w-full">
        <Header />
      </div>
      <section className="p-4">
        <Reader />
      </section>
    </main>
  );
};

export default App;
