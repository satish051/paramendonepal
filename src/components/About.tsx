import { Calendar, Users, Recycle, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">About us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Paramendo Nepal
          </p>
          <div className="mt-6 text-lg text-slate-600 text-left md:text-center space-y-4">
            <p>
              Paramendo Nepal is a waste management company that focuses on plastic waste and turns it into usable recycled products.
            </p>
            <p>
              Paramendo aims to solve the problem of both plastic and other recyclable waste in the villages of Nepal with the collaboration of local people and local government. The company aims to empower the people of the village by giving them awareness about problems with plastics and employment and creating a circular economy within the community by selling recycled and up-cycled products created in the village.
            </p>
          </div>
          <div className="mt-8">
            <a href="#work" className="inline-flex items-center text-green-600 font-medium hover:text-green-700">
              Learn More <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900">How It All Began</h3>
          </div>
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 md:-ml-0.5 w-1 h-full bg-green-200 rounded-full"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 border-4 border-white shadow absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                  <h4 className="text-xl font-bold text-slate-800">November 2022</h4>
                  <p className="mt-2 text-slate-600">
                    A group of passionate individuals came together during the <strong>Plastic to Ghar (P2G) Makeathon</strong>. We recognized the increasing plastic waste in Ree, Dhading, and set out to develop practical and sustainable solutions.
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-row items-center md:flex-row-reverse">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 border-4 border-white shadow absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pl-12">
                  <h4 className="text-xl font-bold text-slate-800">Partnerships Formed</h4>
                  <p className="mt-2 text-slate-600">
                    With support from <strong>Monaco Aide & Presence (MAP)</strong> and <strong>Doko Recyclers</strong>, we gained the resources and knowledge needed to turn our vision into reality.
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 border-4 border-white shadow absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                  <Recycle className="w-4 h-4 text-white" />
                </div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                  <h4 className="text-xl font-bold text-slate-800">Community Recycling Center (CRC)</h4>
                  <p className="mt-2 text-slate-600">
                    We established the CRC—a dedicated space for collecting, sorting, and processing plastic waste.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
