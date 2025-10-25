import Main from "@/components/Main";
import Hero from "@/components/section/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="mt-16 ">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Kamar & <span className="text-blue-600">Harga</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">Temukan kamar yang sesuai dengan kebutuhan Anda dengan fasilitas terbaik dan harga kompetitif</p>
        </div>
        <Main />
      </div>
    </div>
  );
}
