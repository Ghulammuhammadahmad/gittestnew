import { Users, Gauge, Landmark } from 'lucide-react';

export const stats = [
  {
    title: '500k users',
    value: 500,
    suffix: 'k',
    description:
      'Finguard rapidly becoming a world-first user base of over 6,000 customers within its first year of operation',
    icon: Users,
    orange: true,
  },
  {
    title: '98%',
    value: 98,
    suffix: '%',
    description: 'Clients enjoy faster transaction processes time',
    icon: Gauge,
  },
  {
    title: '24K',
    value: 24,
    suffix: 'K',
    description: 'A network of over 200,000 partner ATMs worldwide',
    icon: Landmark,
  },
];
