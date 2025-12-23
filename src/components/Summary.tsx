import type { Service } from '../data/services';
import { BASE_TICKET_PRICE } from '../data/services';

type Props = {
  selected: Service[];
  onRemove: (id: number) => void;
  onCheckout: () => void;
};

export const Summary = ({ selected, onRemove, onCheckout }: Props) => {
  const servicesTotal = selected.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const total = BASE_TICKET_PRICE + servicesTotal;

  return (
    <aside className="summary">
      <h2>Итого</h2>

      <ul className="summary-list">
        <li className="summary-item">
          <span>Билет</span>
          <span>{BASE_TICKET_PRICE}₽</span>
        </li>

        {selected.map(item => (
          <li key={item.id} className="summary-item">
            <span className="summary-title">{item.title}</span>
            <span className="summary-price">
              {item.price}₽
              <button
                className="remove-btn"
                onClick={() => onRemove(item.id)}
              >
                ✕
              </button>
            </span>
          </li>
        ))}
      </ul>

      <p className="total">Сумма: {total} ₽</p>

      <button className="order-btn" onClick={onCheckout}>
        Оформить заказ
      </button>
    </aside>
  );
};
