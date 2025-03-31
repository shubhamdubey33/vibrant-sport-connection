
import { Participant } from "@/types";
import CategoryTitle from "./category/CategoryTitle";
import CategoryAnimation from "./category/CategoryAnimation";
import CategoryTeamTabs from "./category/CategoryTeamTabs";

interface CategorySectionProps {
  title: string;
  description: string;
  category: string;
  participants: Participant[];
  id: string;
  className?: string;
  backgroundElement?: React.ReactNode;
  defaultTeam?: string;
}

const CategorySection = ({
  title,
  description,
  category,
  participants,
  id,
  className,
  backgroundElement,
  defaultTeam
}: CategorySectionProps) => {
  return (
    <section id={id} className={`py-20 relative overflow-hidden ${className}`}>
      {backgroundElement}
      <CategoryAnimation category={category} />
      
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <CategoryTitle title={title} description={description} />
        <CategoryTeamTabs participants={participants} defaultTeam={defaultTeam} />
      </div>
    </section>
  );
};

export default CategorySection;
