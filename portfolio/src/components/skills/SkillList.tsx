import SkillCard from './SkillCard';

const skills = {
  'Programming Languages': ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++'],
  'Web Technologies': ['React', 'Node.js', 'HTML5', 'CSS3', 'GraphQL'],
  'Databases': ['PostgreSQL', 'MongoDB', 'Redis'],
  'Tools & Platforms': ['Git', 'Docker', 'AWS', 'Linux', 'VS Code'],
  'Soft Skills': ['Problem Solving', 'Team Leadership', 'Communication', 'Agile Methodology']
};

export default function SkillList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Object.entries(skills).map(([category, items], index) => (
        <SkillCard key={index} category={category} skills={items} />
      ))}
    </div>
  );
}