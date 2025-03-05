import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { IoSettingsOutline, IoChevronDown, IoChevronUp } from 'react-icons/io5';

const PanelContainer = styled(motion.div)`
  margin: 40px auto 80px;
  width: 100%;
  max-width: 800px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

const PanelHeader = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  background: linear-gradient(90deg, rgba(108, 99, 255, 0.1) 0%, rgba(78, 205, 196, 0.1) 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const PanelIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(135deg, #6C63FF 0%, #4ECDC4 100%);
  color: white;
  font-size: 20px;
`;

const PanelTitle = styled.h3`
  font-weight: 600;
  color: #ffffff;
`;

const PanelContent = styled(motion.div)`
  padding: 0;
  overflow: hidden;
`;

const ControlsContainer = styled(motion.div)`
  padding: 20px;
`;

const ControlItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  &:last-child {
    border-bottom: none;
  }
`;

const ControlLabel = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  font-weight: 500;
  color: #ffffff;
`;

const Description = styled.span`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 4px;
`;

const ToggleSwitch = styled.div`
  position: relative;
  width: 50px;
  height: 26px;
  border-radius: 13px;
  background: ${props => props.checked
        ? 'linear-gradient(135deg, #6C63FF 0%, #4ECDC4 100%)'
        : 'rgba(255, 255, 255, 0.15)'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:after {
    content: '';
    position: absolute;
    left: ${props => props.checked ? '26px' : '3px'};
    top: 3px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: white;
    transition: all 0.3s ease;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

const contentVariants = {
    hidden: {
        height: 0,
        opacity: 0
    },
    visible: {
        height: 'auto',
        opacity: 1,
        transition: {
            height: {
                duration: 0.4
            },
            opacity: {
                duration: 0.3,
                delay: 0.1
            }
        }
    }
};

const PrivacyControlPanel = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [settings, setSettings] = useState({
        dataSyncEnabled: true,
        analyticsEnabled: false,
        biometricEnabled: true,
        notificationsEnabled: true,
    });

    const toggleSetting = (setting) => {
        setSettings({
            ...settings,
            [setting]: !settings[setting]
        });
    };

    return (
        <PanelContainer
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
        >
            <PanelHeader onClick={() => setIsOpen(!isOpen)}>
                <HeaderTitle>
                    <PanelIcon>
                        <IoSettingsOutline />
                    </PanelIcon>
                    <PanelTitle>Interactive Privacy Controls</PanelTitle>
                </HeaderTitle>
                {isOpen ? <IoChevronUp size={24} /> : <IoChevronDown size={24} />}
            </PanelHeader>

            <AnimatePresence>
                {isOpen && (
                    <PanelContent
                        key="content"
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <ControlsContainer>
                            <ControlItem>
                                <ControlLabel>
                                    <Label>Cloud Synchronization</Label>
                                    <Description>Allow your TOTP accounts to sync across devices</Description>
                                </ControlLabel>
                                <ToggleSwitch
                                    checked={settings.dataSyncEnabled}
                                    onClick={() => toggleSetting('dataSyncEnabled')}
                                />
                            </ControlItem>

                            <ControlItem>
                                <ControlLabel>
                                    <Label>Usage Analytics</Label>
                                    <Description>Help us improve by sharing anonymous usage data</Description>
                                </ControlLabel>
                                <ToggleSwitch
                                    checked={settings.analyticsEnabled}
                                    onClick={() => toggleSetting('analyticsEnabled')}
                                />
                            </ControlItem>

                            <ControlItem>
                                <ControlLabel>
                                    <Label>Biometric Authentication</Label>
                                    <Description>Require fingerprint/face ID to access codes</Description>
                                </ControlLabel>
                                <ToggleSwitch
                                    checked={settings.biometricEnabled}
                                    onClick={() => toggleSetting('biometricEnabled')}
                                />
                            </ControlItem>

                            <ControlItem>
                                <ControlLabel>
                                    <Label>Privacy Updates Notification</Label>
                                    <Description>Get notified when our privacy policy changes</Description>
                                </ControlLabel>
                                <ToggleSwitch
                                    checked={settings.notificationsEnabled}
                                    onClick={() => toggleSetting('notificationsEnabled')}
                                />
                            </ControlItem>
                        </ControlsContainer>
                    </PanelContent>
                )}
            </AnimatePresence>
        </PanelContainer>
    );
};

export default PrivacyControlPanel;