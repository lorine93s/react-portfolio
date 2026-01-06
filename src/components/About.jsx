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
  //   // Far Left Side
  //   { icon: <SiReact />, position: { top: '10%', left: '30%' }, delay: 0 },
  //   { icon: <SiReact />, position: { top: '25%', left: '3%' }, delay: 0.2 },
  //   { icon: <SiRedux />, position: { top: '36%', left: '17%' }, delay: 0.4 },
  //   { icon: <SiFirebase />, position: { top: '55%', left: '4%' }, delay: 0.6 },
  //   { icon: <SiDocker />, position: { top: '70%', left: '40%' }, delay: 0.8 },
  //   { icon: <FaHospital />, position: { bottom: '20%', left: '9%' }, delay: 1 },
    
  //   // Left Inner
  //   { icon: <SiJavascript />, position: { top: '5%', left: '9%' }, delay: 1.2 },
  //   { icon: <SiTypescript />, position: { top: '51%', left: '32%' }, delay: 1.4 },
  //   { icon: <SiMongodb />, position: { bottom: '3%', left: '27%' }, delay: 1.6 },
    
  //   // Center Top & Bottom
  //   // { icon: <FaMoneyBillWave />, position: { top: '8%', left: '48%' }, delay: 1.8 },
  //   { icon: <FaBitcoin />, position: { bottom: '12%', left: '46%' }, delay: 2 },
    
  //   // Far Right Side
  //   { icon: <SiNextdotjs />, position: { top: '10%', right: '30%' }, delay: 2.2 },
  //   { icon: <SiVuedotjs />, position: { top: '25%', right: '3%' }, delay: 2.4 },
  //   { icon: <SiPython />, position: { top: '36%', right: '50%' }, delay: 2.6 },
  //   { icon: <SiGraphql />, position: { top: '58%', right: '4%' }, delay: 2.8 },
  //   { icon: <SiTailwindcss />, position: { top: '73%', right: '37%' }, delay: 3 },
  //   { icon: <FaShieldAlt />, position: { bottom: '14%', right: '5%' }, delay: 3.2 },
    
  //   // Right Inner
  //   { icon: <SiAngular />, position: { top: '15%', right: '15%' }, delay: 3.4 },
  //   { icon: <SiNodedotjs />, position: { top: '48%', right: '22%' }, delay: 3.6 },
  //   { icon: <FaShoppingCart />, position: { bottom: '20%', right: '14%' }, delay: 3.8 },
  //   { icon: <FaRobot />, position: { bottom: '5%', right: '6%' }, delay: 4 }
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
              Senior Frontend Engineer with <strong>8+ years</strong> specializing in <strong>React</strong> and <strong>React Native</strong> development. 
              Expert in building scalable web applications and cross-platform mobile apps for iOS and Android.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Experienced across <strong>healthcare, fintech, SaaS, ECommerce, Insurance, Real Estate, blockchain, and AI industries</strong>. 
              Skilled in TypeScript, state management (Redux, Zustand), API integration, and modern frontend architecture. */}

              Experienced in both <strong>startup and enterprise environments</strong>, leading frontend development, creating scalable UI systems, and
              delivering high-performing applications across <strong>Healthcare, Fintech, SaaS, ECommerce, Insurance, Real Estate, Blockchain, and AI industries</strong>.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Experienced across <strong>healthcare, fintech, SaaS, ECommerce, Insurance, Real Estate, blockchain, and AI industries</strong>. 
              Skilled in TypeScript, state management (Redux, Zustand), API integration, and modern frontend architecture. */}

              Skilled in modern frontend architecture, state management using Context API, Redux, Zustand, and API integration, with some experience in <strong>backend development</strong> and <strong>CI/CD workflows</strong>. 
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Led development teams in Agile environments, architected enterprise UI systems, 
              and delivered high-performing applications with focus on performance, accessibility, and user experience.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
