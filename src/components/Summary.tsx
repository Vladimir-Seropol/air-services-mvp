import type { Service } from '../data/services';

type Props = {
  selected: Service[];
};

export const Summary = ({ selected }: Props) => {
  const total = selected.reduce((sum, item) => sum + item.price, 0);

  if (selected.length === 0) {
    return null;
  }

  return (
    <aside className="summary">
      <h2>Итого</h2>

      <ul>
        {selected.map(item => (
          <li key={item.id}>
            {item.title} — {item.price} ₽
          </li>
        ))}
      </ul>

      <p className="total">Сумма: {total} ₽</p>

      <button className="order-btn">
        Оформить заказ
      </button>
    </aside>
  );
};
