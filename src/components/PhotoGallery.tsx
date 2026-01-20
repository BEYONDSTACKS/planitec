import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1726866492047-7f9516558c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzY4OTM0NDIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Instalação comercial',
    frameType: 'dual' // cyan + green
  },
  {
    image: 'https://images.unsplash.com/photo-1616662072452-9a7a6d41a029?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwcHJvamVjdHxlbnwxfHx8fDE3Njg5MzQ0MjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Projeto industrial',
    frameType: 'cyan'
  },
  {
    image: 'https://images.unsplash.com/photo-1716915372367-c170ee1e7d24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3YXJlaG91c2V8ZW58MXx8fHwxNzY4ODQwODQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Instalação em warehouse',
    frameType: 'green'
  }
];

export function PhotoGallery() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-['Nunito'] font-bold text-4xl text-[#1a1a1a] mb-4">
            Projetos Executados
          </h2>
          <div className="w-24 h-1 bg-[#5DAECD] mx-auto"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="relative group">
              {project.frameType === 'dual' ? (
                <>
                  {/* Dual-color frame */}
                  <div className="absolute -top-2 -left-2 right-2 bottom-2 border-t-[6px] border-l-[6px] border-[#5DAECD] rounded-[16px]"></div>
                  <div className="absolute top-2 left-2 -right-2 -bottom-2 border-b-[6px] border-r-[6px] border-[#ACCC3A] rounded-[16px]"></div>
                  <ImageWithFallback
                    src={project.image}
                    alt={project.alt}
                    className="relative z-10 w-full h-80 object-cover rounded-[16px]"
                  />
                </>
              ) : (
                <div
                  className="border-[6px] rounded-[16px] overflow-hidden"
                  style={{ borderColor: project.frameType === 'cyan' ? '#5DAECD' : '#ACCC3A' }}
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-80 object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
