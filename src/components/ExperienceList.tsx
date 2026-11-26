type ExperienceItem = {
  title: string;
  year: string;
  role: string;
  description: string;
};

type ExperienceListProps = {
  items: ExperienceItem[];
};

export default function ExperienceList({ items }: ExperienceListProps) {
  return (
    <div className="border-t border-[#D8D7D3]">
      {items.map((item) => (
        <div
          key={`${item.title}-${item.role}-${item.year}`}
          className="grid gap-4 border-b border-[#D8D7D3] py-8 md:grid-cols-[200px_1fr_80px]"
        >
          <p className="text-sm font-medium text-[#536D8A]">{item.role}</p>

          <div>
            <h3 className="text-xl font-semibold tracking-tight">
              {item.title}
            </h3>

            <p className="mt-2 max-w-2xl leading-7 text-[#686868]">
              {item.description}
            </p>
          </div>

          <p className="text-sm text-[#686868]">{item.year}</p>
        </div>
      ))}
    </div>
  );
}
