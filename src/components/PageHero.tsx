import { Breadcrumb } from './Breadcrumb';

interface PageHeroProps {
    breadcrumbItems: { label: string; href?: string }[];
    title: string;
    subtitle?: string;
}

export function PageHero({ breadcrumbItems, title, subtitle }: PageHeroProps) {
    return (
        <section className="bg-[#F2F2F2] pt-32 pb-16 px-6">
            <div className="max-w-7xl mx-auto">
                <Breadcrumb items={breadcrumbItems} />
                <h1 className="font-['Nunito'] font-bold text-4xl md:text-5xl text-[#1a1a1a] mt-6 mb-4 leading-tight">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-xl text-[#7C7C7B] max-w-3xl leading-relaxed">
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    );
}
