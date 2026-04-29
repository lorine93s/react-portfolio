import { motion } from 'framer-motion'
import { 
  SiReact, 
  SiNodedotjs, 
  SiVuedotjs, 
  SiPython, 
  SiJavascript, 
  SiTypescript,
  SiNextdotjs,
  SiDocker,
  SiGraphql,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
  SiFirebase,
  SiPostgresql,
  SiAngular
} from 'react-icons/si'
import { 
  FaHospital, 
  FaMoneyBillWave, 
  FaShoppingCart, 
  FaShieldAlt,
  FaBitcoin,
  FaRobot
} from 'react-icons/fa'
import './About.css'

const About = () => {
  const techIcons = [
    // Placeholder for tech icons (can fill in as needed)
  ]

  return (
    <section id="about" className="about">
      {/* Floating Tech Icons - Full Width */}
      <div className="floating-icons">
        {techIcons.map((item, index) => (
          <motion.div
            key={index}
            className="floating-icon"
            style={item.position}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 0.6,
              delay: item.delay * 0.1,
              y: {
                duration: 4 + (index % 3),
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            whileHover={{ scale: 1.15, y: -5 }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About <span className="title-highlight">Me</span>
        </motion.h2>
        
        <div className="about-wrapper">
          <div className="about-content">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Senior Full Stack Engineer with <strong>6+ years</strong> of hands-on experience specializing in <strong>React</strong>, <strong>Next.js</strong>, and <strong>TypeScript</strong> and <strong>Node.js</strong> and <strong>Python</strong> for backend integration and end-to-end solution delivery.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Successfully led frontend development in both <strong>startup</strong> and <strong>enterprise</strong> settings, driving the creation of robust UI systems and high-impact applications across multiple industries.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Highly skilled in modern frontend architectures, state management (Context API, Redux, Zustand), TypeScript, and advanced API integrations. Experienced in integrating and collaborating with backend systems and familiar with CI/CD workflows for streamlined deployments.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Track record of leading development teams in Agile environments, architecting enterprise-grade UI solutions, and delivering applications that prioritize performance, accessibility, and outstanding user experience.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
