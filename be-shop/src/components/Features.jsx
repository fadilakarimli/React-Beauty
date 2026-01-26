import { GiLeafSkeleton } from "react-icons/gi";
import { MdStars } from "react-icons/md";
import { BiLeaf } from "react-icons/bi";

const Features = () => {
  return (
    <div className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 relative">
              <div className="absolute inset-0 bg-[#e8d4d8] rounded-full opacity-50 w-24 h-24"></div>
              <div className="relative flex items-center justify-center w-24 h-24">
                <div className="text-5xl text-gray-800"><GiLeafSkeleton /></div>
              </div>
            </div>
            <h3 className="text-2xl font-serif text-gray-900 mb-4">Natural</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-6 relative">
              <div className="absolute inset-0 bg-[#e8d4d8] rounded-full opacity-50 w-24 h-24"></div>
              <div className="relative flex items-center justify-center w-24 h-24">
                <div className="text-5xl text-gray-800"><MdStars /></div>
              </div>
            </div>
            <h3 className="text-2xl font-serif text-gray-900 mb-4">Quality</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-6 relative">
              <div className="absolute inset-0 bg-[#e8d4d8] rounded-full opacity-50 w-24 h-24"></div>
              <div className="relative flex items-center justify-center w-24 h-24">
                <div className="text-5xl text-gray-800"><BiLeaf /></div>
              </div>
            </div>
            <h3 className="text-2xl font-serif text-gray-900 mb-4">Natural</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Features;
