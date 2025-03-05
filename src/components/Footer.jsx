import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    IoLogoGithub,
    IoMail,
    IoGlobeOutline
} from 'react-icons/io5';

const FooterContainer = styled(motion.footer)`
  margin-top: 100px;
  margin-bottom: 50px;
  text-align: center;
  position: relative;
`;

const GradientDivider = styled(motion.div)`
  height: 2px;
  background: linear-gradient(90deg, 
    rgba(108,99,255,0) 0%, 
    rgba(108,99,255,1) 50%, 
    rgba(78,205,196,1) 75%, 
    rgba(78,205,196,0) 100%
  );
  margin-bottom: 40px;
`;

const AppName = styled(motion.h3)`
  font-size: 24px;
  margin-bottom: 10px;
  background: linear-gradient(45deg, #6C63FF, #4ECDC4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
`;

const Copyright = styled(motion.p)`
  margin-bottom: 24px;
  color: rgba(255, 255, 255, 0.6);
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
`;

const IconLink = styled(motion.a)`
  color: rgba(255, 255, 255, 0.7);
  font-size: 24px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  
  &:hover {
    color: #ffffff;
    background: linear-gradient(135deg, #6C63FF 0%, #4ECDC4 100%);
    transform: translateY(-5px);
  }
`;

const FooterText = styled(motion.p)`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  max-width: 600px;
  margin: 0 auto;
`;

const Footer = () => {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                when: "beforeChildren"
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const linkVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: i => ({
            scale: 1,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                type: "spring",
                stiffness: 260,
                damping: 20
            }
        }),
        hover: {
            scale: 1.1,
            transition: { duration: 0.2 }
        }
    };

    return (
        <FooterContainer
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
            <GradientDivider
                variants={itemVariants}
            />

            <AppName variants={itemVariants}>
                COIM Authenticator
            </AppName>

            <Copyright variants={itemVariants}>
                © {new Date().getFullYear()} COIM Authenticator. All rights reserved.
            </Copyright>

            <SocialLinks variants={itemVariants}>
                <IconLink
                    href="https://github.com/your-username/totp-authenticator"
                    target="_blank"
                    rel="noopener noreferrer"
                    custom={0}
                    variants={linkVariants}
                    whileHover="hover"
                >
                    <IoLogoGithub />
                </IconLink>
                <IconLink
                    href="mailto:contact@example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    custom={1}
                    variants={linkVariants}
                    whileHover="hover"
                >
                    <IoMail />
                </IconLink>
                <IconLink
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    custom={2}
                    variants={linkVariants}
                    whileHover="hover"
                >
                    <IoGlobeOutline />
                </IconLink>
            </SocialLinks>

            <FooterText variants={itemVariants}>
                For any questions regarding this privacy policy, please contact us at privacy@example.com
            </FooterText>
        </FooterContainer>
    );
};

export default Footer;