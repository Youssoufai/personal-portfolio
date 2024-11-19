import Image from 'next/image';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className="px-8 py-20 flex justify-between items-center">
            <div className="max-w-xl">
                <h1 className="text-7xl font-bold text-white mb-4">
                    HI, I AM<br />
                    ROBERT GARCIA.
                </h1>
                <p className="text-gray-400 mb-8">
                    A curious mind with a mechanical engineering background who found calling in front-end development.
                </p>
                <div className="flex items-center gap-4">
                    <button className="bg-[#D3E97A] px-6 py-3 rounded-full">
                        CONTACT ME
                    </button>
                    <a href="#" className="text-[#D3E97A]"><FaLinkedin size={24} /></a>
                    <a href="#" className="text-[#D3E97A]"><FaGithub size={24} /></a>
                </div>
            </div>
            <div className="rounded-3xl overflow-hidden bg-gray-200 w-[400px] h-[400px]">
                <Image
                    src="/your-profile-image.jpg"
                    alt="Robert Garcia"
                    width={400}
                    height={400}
                    className="object-cover"
                />
            </div>
        </section>
    );
};
export default Hero;