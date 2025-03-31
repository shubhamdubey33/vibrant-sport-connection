
import { motion } from "framer-motion";

interface CategoryTitleProps {
  title: string;
  description: string;
}

const CategoryTitle = ({ title, description }: CategoryTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
      <p className="text-lg text-gray-600 mb-10 max-w-2xl">{description}</p>
    </motion.div>
  );
};

export default CategoryTitle;
