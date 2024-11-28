import { motion } from 'framer-motion';

interface SkillCardProps {
  category: string;
  skills: string[];
}

export default function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6"
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            whileHover={{ scale: 1.05 }}
            className="px-3 py-1 bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-full text-sm shadow-sm"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}