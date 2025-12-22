import type { Service } from '../data/services';

type Props = {
  service: Service;
  onAdd: (service: Service) => void;
  isAdded: boolean;
};

export const ServiceItem = ({ service, onAdd, isAdded }: Props) => {
  return (
    <div className="service-card">
      <div>
        <h3>{service.title}</h3>
        <p>{service.price} ₽</p>
      </div>

      <button
        onClick={() => onAdd(service)}
        disabled={isAdded}
      >
        {isAdded ? 'Добавлено' : 'Добавить'}
      </button>
    </div>
  );
};