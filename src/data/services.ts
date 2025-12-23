export type Service = {
  id: number;
  title: string;
  price: number;
};

export const BASE_TICKET_PRICE = 12500;


export const services: Service[] = [
  { id: 1, title: 'Сверхнормативный багаж', price: 2500 },
  { id: 2, title: 'Выбор места', price: 900 },
  { id: 3, title: 'Питание на борту', price: 1200 },
  { id: 4, title: ' VIP-обслуживание', price: 700 },
];
