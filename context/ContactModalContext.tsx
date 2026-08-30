'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export interface ContactModalConfig {
  title?: string;
  subtitle?: string;
  defaultMessage?: string;
  submitButtonText?: string;
  contextTag?: string;
}

interface ContactModalContextType {
  isOpen: boolean;
  modalConfig: ContactModalConfig;
  openContactModal: (config?: ContactModalConfig) => void;
  closeContactModal: () => void;
}

const defaultContext: ContactModalContextType = {
  isOpen: false,
  modalConfig: {},
  openContactModal: () => {},
  closeContactModal: () => {},
};

const ContactModalContext = createContext<ContactModalContextType>(defaultContext);

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState<ContactModalConfig>({});

  const openContactModal = useCallback((config?: ContactModalConfig) => {
    setModalConfig(config || {});
    setIsOpen(true);
  }, []);

  const closeContactModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <ContactModalContext.Provider
      value={{
        isOpen,
        modalConfig,
        openContactModal,
        closeContactModal,
      }}
    >
      {children}
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error('useContactModal must be used within a ContactModalProvider');
  }
  return context;
}
