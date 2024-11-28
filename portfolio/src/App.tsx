import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/ui/Section';
import ProjectList from './components/projects/ProjectList';
import SkillList from './components/skills/SkillList';
import ContactForm from './components/contact/ContactForm';
import ContactInfo from './components/contact/ContactInfo';
import { useTheme } from './utils/theme';

function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Section
          id="projects"
          title="Featured Projects"
          description="Here are some of my recent projects that showcase my skills and interests."
          className="bg-gray-50 dark:bg-gray-900"
        >
          <ProjectList />
        </Section>
        <Section
          id="skills"
          title="Technical Skills"
          description="A comprehensive overview of my technical expertise and capabilities."
          className="bg-white dark:bg-gray-800"
        >
          <SkillList />
        </Section>
        <Section
          id="contact"
          title="Get in Touch"
          description="Feel free to reach out for collaborations or just a friendly hello"
          className="bg-gray-50 dark:bg-gray-900"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </Section>
      </main>
      <footer className="bg-white dark:bg-gray-800 py-8 text-center text-gray-600 dark:text-gray-300">
        <p>© {new Date().getFullYear()} Jane Smith. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;