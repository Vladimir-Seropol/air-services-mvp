import { services } from './data/services';
import { ServiceList } from './components/ServiceList';
import { Summary } from './components/Summary';
import { useServices } from './hooks/useServices';

function App  ()  {
  const {
    selectedServices,
    addService,
    removeService,
    checkout,
  } = useServices();

  return (
    <main className="container">

      <ServiceList
        services={services}
        selected={selectedServices}
        onAdd={addService}
      />

      <Summary
        selected={selectedServices}
        onRemove={removeService}
        onCheckout={checkout}
      />
    </main>
  );
};

export default App;
