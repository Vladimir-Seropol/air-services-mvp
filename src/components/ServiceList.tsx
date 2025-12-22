import type { Service } from '../data/services';
import { ServiceItem } from './ServiceItem';

type Props = {
  services: Service[];
  selected: Service[];
  onAdd: (service: Service) => void;
};

export const ServiceList = ({ services, selected, onAdd }: Props) => {
  return (
    <section>
      <h2>Дополнительные услуги</h2>

      {services.map(service => (
        <ServiceItem
          key={service.id}
          service={service}
          isAdded={selected.some(item => item.id === service.id)}
          onAdd={onAdd}
        />
      ))}
    </section>
  );
};
