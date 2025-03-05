import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IoShieldCheckmarkOutline } from 'react-icons/io5';

const HeaderContainer = styled.header`
  padding: 100px 0 60px;
  text-align: center;
`;

const LogoContainer = styled(motion.div)`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 50px;
  color: #6C63FF;
  background: linear-gradient(45deg, #6C63FF, #4ECDC4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled(motion.h1)`
  font-size: 48px;
  margin-bottom: 20px;
  background: linear-gradient(45deg, #6C63FF, #4ECDC4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  letter-spacing: -1px;
`;

const Description = styled(motion.p)`
  font-size: 18px;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #e0e0e0;
  line-height: 1.6;
`;

const InfoBar = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 40px;
  flex-wrap: wrap;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <LogoContainer
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.2
                }}
            >
                <Logo>
                    <IoShieldCheckmarkOutline size={80} />
                </Logo>
            </LogoContainer>

            <Title
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                COIM Authenticator Privacy Policy
            </Title>

            <Description
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
            >
                We are committed to protecting your privacy and providing a secure authentication experience.
                This document outlines how we handle your information when you use our COIM Authenticator app.
            </Description>
        </HeaderContainer>
    );
};

export default Header;