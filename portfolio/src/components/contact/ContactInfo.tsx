import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'jane.smith@example.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '(123) 456-7890'
  },
  {
    icon: MapPin,
    title: 'Location',
    content: 'San Francisco, CA'
  }
];

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      {contactInfo.map((item, index) => (
        <div key={index} className="flex items-start space-x-4">
          <div className="bg-white dark:bg-gray-800 p-3 rounded-full">
            <item.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{item.content}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
}