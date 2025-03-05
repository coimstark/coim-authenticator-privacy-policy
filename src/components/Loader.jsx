import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IoShieldCheckmarkOutline } from 'react-icons/io5';

const LoaderContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #121212 0%, #2d2d2d 100%);
  z-index: 10;
`;

const LoadingText = styled(motion.div)`
  margin-top: 24px;
  font-size: 18px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  background: linear-gradient(45deg, #6C63FF, #4ECDC4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const IconContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  color: #6C63FF;
  position: relative;
`;

const Circle = styled(motion.div)`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid transparent;
  border-top-color: #6C63FF;
  border-left-color: #4ECDC4;
  position: absolute;
`;

const loaderVariants = {
    initial: {
        opacity: 0,
        scale: 0.8
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.5
        }
    }
};

const circleVariants = {
    animate: {
        rotate: 360,
        transition: {
            duration: 2,
            ease: "linear",
            repeat: Infinity
        }
    }
};

const iconVariants = {
    animate: {
        scale: [1, 1.1, 1],
        opacity: [0.7, 1, 0.7],
        transition: {
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity
        }
    }
};

const Loader = () => {
    return (
        <LoaderContainer
            variants={loaderVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <IconContainer variants={iconVariants} animate="animate">
                <Circle variants={circleVariants} animate="animate" />
                <IoShieldCheckmarkOutline />
            </IconContainer>
            <LoadingText
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                Loading Privacy Policy...
            </LoadingText>
        </LoaderContainer>
    );
};

export default Loader;