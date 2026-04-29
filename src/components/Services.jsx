import { motion } from 'framer-motion'
import {
  SiNodedotjs,
  SiEthereum,
  SiOpenai,
  SiGraphql
} from 'react-icons/si'
import { FaCode, FaServer } from 'react-icons/fa'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: 'Frontend Development',
      description:
        'Modern, responsive UIs with HTML, CSS, JavaScript, and frameworks such as React and Next.js—component architecture, performance, accessibility, and maintainable design systems.'
    },
    {
      icon: <FaServer />,
      title: 'Backend Development',
      description:
        'Server-side logic, REST and GraphQL APIs, authentication, and data layers with Node.js, Python, and databases—built for reliability, security, and scale.'
    },
    {
      icon: <SiNodedotjs />,
      title: 'Fullstack Development',
      description:
        'End-to-end delivery from UI to API to database—integrating frontend frameworks with Node.js or Python backends, RESTful/GraphQL services, and solid data modeling.'
    },
    {
      icon: <SiEthereum />,
      title: 'Blockchain & Web3',
      description:
        'Decentralized applications (DApps), smart contracts, NFT marketplaces, and DeFi platforms using Ethereum and Solidity.'
    },
    {
      icon: <SiOpenai />,
      title: 'AI Integration',
      description:
        'Integrating OpenAI GPT, machine learning models, and intelligent automation solutions into modern web and mobile applications.'
    },
    {
      icon: <SiGraphql />,
      title: 'API Development',
      description:
        'RESTful and GraphQL API design and implementation with Node.js, Python, scalable architecture, and comprehensive documentation.'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What I Build
        </motion.h2>

        <motion.p
          className="services-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Specialized in scalable frontend and backend systems, full-stack delivery, and production-ready architecture from
          design through deployment.
        </motion.p>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card-professional"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="service-icon-professional">{service.icon}</div>
              <h3 className="service-title-professional">{service.title}</h3>
              <p className="service-description-professional">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
