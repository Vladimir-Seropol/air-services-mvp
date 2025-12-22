import { useState } from 'react';
import { services, type Service } from './data/services';
import { ServiceList } from './components/ServiceList';
import { Summary } from './components/Summary';

function App() {
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);

  const handleAddService = (service: Service) => {
    setSelectedServices(prev => [...prev, service]);
  };

  return (
    <main className="container">
     <ServiceList
  services={services}
  selected={selectedServices}
  onAdd={handleAddService}
/>

      <Summary selected={selectedServices} />
    </main>
  );
};


export default App
