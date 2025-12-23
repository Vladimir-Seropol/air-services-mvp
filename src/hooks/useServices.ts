import { useState } from 'react';
import type { Service } from '../data/services';

export const useServices = () => {
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);

  const addService = (service: Service) => {
    setSelectedServices(prev => {
      if (prev.some(item => item.id === service.id)) {
        return prev;
      }
      return [...prev, service];
    });
  };

  const removeService = (id: number) => {
    setSelectedServices(prev =>
      prev.filter(service => service.id !== id)
    );
  };

  const checkout = () => {
    alert('Заказ оформлен');
    setSelectedServices([]);
  };

  return {
    selectedServices,
    addService,
    removeService,
    checkout,
  };
};
