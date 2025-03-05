import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import PolicySection from './components/PolicySection';
import Loader from './components/Loader';
// import PrivacyControlPanel from './components/PrivacyControlPanel';
import BackgroundAnimation from './components/BackgroundAnimation';
import { privacyPolicySections } from './data/policyData';
import './styles/App.css';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #121212 0%, #2d2d2d 100%);
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
  overflow-x: hidden;
  position: relative;
`;

const ContentContainer = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

const App = () => {
  const [loading, setLoading] = useState(true);
  const [currentDate] = useState('2025-03-05 14:16:53'); // Current date
  const [currentUser] = useState('043668824'); // Current user

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  return (
    <AppContainer>
      <BackgroundAnimation />

      <AnimatePresence>
        {loading ? (
          <Loader key="loader" />
        ) : (
          <ContentContainer
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Header />
            {/* <PrivacyControlPanel /> */}
            {privacyPolicySections.map((section, index) => (
              <PolicySection
                key={index}
                index={index}
                title={section.title}
                content={section.content}
                icon={section.icon}
              />
            ))}

            <Footer />
          </ContentContainer>
        )}
      </AnimatePresence>
    </AppContainer>
  );
};

export default App;