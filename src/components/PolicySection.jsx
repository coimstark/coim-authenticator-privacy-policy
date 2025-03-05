import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionContainer = styled(motion.section)`
  margin-bottom: 80px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 12px 40px rgba(108, 99, 255, 0.2);
    transform: translateY(-5px);
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;

const IconWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: linear-gradient(135deg, #6C63FF 0%, #4ECDC4 100%);
  margin-right: 20px;
  font-size: 28px;
  color: white;
  box-shadow: 0 8px 16px rgba(108, 99, 255, 0.25);
`;

const SectionTitle = styled(motion.h2)`
  font-size: 28px;
  color: #ffffff;
  margin: 0;
  font-weight: 600;
`;

const ContentWrapper = styled(motion.div)`
  line-height: 1.8;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.85);
`;

const PolicySection = ({ title, content, icon, index }) => {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut",
                delay: index * 0.1
            }
        }
    };

    const iconVariants = {
        hidden: { scale: 0.5, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.2 + index * 0.1
            }
        }
    };

    const contentVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: 0.4 + index * 0.1
            }
        }
    };

    return (
        <SectionContainer
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
            <SectionHeader>
                <IconWrapper
                    variants={iconVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {icon}
                </IconWrapper>
                <SectionTitle
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                    {title}
                </SectionTitle>
            </SectionHeader>
            <ContentWrapper
                variants={contentVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </SectionContainer>
    );
};

export default PolicySection;