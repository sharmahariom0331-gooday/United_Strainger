
import React from 'react';

const MobileApp: React.FC = () => {
  return (
    <div className="fade-in bg-background-light min-h-screen font-sans">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row min-h-[75vh] items-center border-b border-gray-200">
        <div className="flex-1 px-8 md:px-24 py-20 bg-[#F2EFE6] flex items-center h-full">
          <div className="max-w-md">
            <h1 className="text-6xl md:text-7xl font-display text-primary mb-10 leading-[1] tracking-tight">
              Download the United Strangers Mobile App
            </h1>
            <p className="text-gray-600 font-light text-[15px] leading-relaxed mb-12">
              Explore new locations, plan your next trip, find your check-in details and meet your housemates with the United Strangers App.
            </p>
            <div className="flex gap-4">
              <button className="bg-black text-white px-6 py-2.5 rounded-sm flex items-center gap-3 transition hover:opacity-80">
                <span className="material-symbols-outlined text-2xl">apple</span>
                <div className="text-left leading-none uppercase">
                  <div className="text-[7px] font-bold opacity-60">Download on the</div>
                  <div className="text-[12px] font-bold">App Store</div>
                </div>
              </button>
              <button className="bg-black text-white px-6 py-2.5 rounded-sm flex items-center gap-3 transition hover:opacity-80">
                <span className="material-symbols-outlined text-2xl">play_arrow</span>
                <div className="text-left leading-none uppercase">
                  <div className="text-[7px] font-bold opacity-60">Get it on</div>
                  <div className="text-[12px] font-bold">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 h-full min-h-[500px] relative bg-[#BCECE0] flex items-center justify-center border-l border-gray-200 overflow-hidden">
          {/* Main Floating Phone Mockup */}
          <div className="relative w-72 md:w-80 h-[580px] bg-white rounded-[40px] shadow-2xl border-[8px] border-primary overflow-hidden transform translate-y-20">
             <img 
               src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT1NVmG52bXFNeQoUca-TT6yE2rca1H_8mHX798Np2AtjozY_0vPoyg5wvc5OaBzdgSLGgipQ4jLJJCbAPn0I1GvbXPnOBdXU1fSbqgJYGmHLLJp4wpb3q0-JiIWTS3dtiWZPAoiQqRNU_GFca4VN7KlF5hhJO55LT2tSVRSL7h4KfLHv4Zi6sa7np749CUY-q94Cw0dBTx_4IxIJGep0lIKF4oaufKVUAuahOVhWJoUBEGwebyRjafKITzygppNE33OS1m9ZJF4k" 
               alt="App Screen" 
               className="w-full h-full object-cover"
             />
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-[#FAF9F6] text-center">
         <div className="max-w-2xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-display text-primary mb-12">Available on iOS & Android.</h2>
         </div>
      </section>

      <div className="h-32 bg-background-light"></div>
    </div>
  );
};

export default MobileApp;
