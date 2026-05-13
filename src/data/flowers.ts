export type Category = 'classic' | 'exotic' | 'seasonal' | 'global'

export interface Flower {
  id: number
  emoji: string
  colorClass: string
  category: Category
  tag: string
  tagClass: string
  origin: string
  name: string
  desc: string
  price: number
  unit: string
}

export const flowers: Flower[] = [
  { id: 1, emoji: '🌹', colorClass: 'c1', category: 'classic', tag: 'Classic', tagClass: 'tag-classic', origin: '🇬🇧 England', name: 'Juliet Garden Rose', desc: 'A beloved English garden rose with peachy-apricot petals and a honey-sweet fragrance. Beloved by wedding planners worldwide for its full, romantic bloom.', price: 480, unit: 'per stem' },
  { id: 2, emoji: '🌷', colorClass: 'c1', category: 'classic', tag: 'Classic', tagClass: 'tag-classic', origin: '🇳🇱 Netherlands', name: 'Parrot Tulip', desc: 'Dramatically fringed petals in deep violet and crimson streaks. Grown in the tulip fields of Holland, each stem is a living work of art.', price: 320, unit: 'per stem' },
  { id: 3, emoji: '💐', colorClass: 'c1', category: 'classic', tag: 'Classic', tagClass: 'tag-classic', origin: '🇫🇷 France', name: 'Lavender Dreams', desc: 'Harvested from the sun-drenched fields of Provence, this classic lavender bundle fills any space with a calming, herbal perfume.', price: 350, unit: 'per bundle' },
  { id: 4, emoji: '🌺', colorClass: 'c2', category: 'exotic', tag: 'Exotic & Rare', tagClass: 'tag-exotic', origin: '🇿🇦 South Africa', name: 'King Protea', desc: "South Africa's national flower and nature's showstopper. With its dramatic crown of petals, the King Protea commands attention in any arrangement.", price: 890, unit: 'per stem' },
  { id: 5, emoji: '🌸', colorClass: 'c2', category: 'exotic', tag: 'Exotic & Rare', tagClass: 'tag-exotic', origin: '🇯🇵 Japan', name: 'Sakura Blossom', desc: 'Flown directly from Kyoto during peak bloom season. These ethereal cherry blossoms represent fleeting beauty — available for just a few weeks each spring.', price: 620, unit: 'per sprig' },
  { id: 6, emoji: '🪷', colorClass: 'c2', category: 'exotic', tag: 'Exotic & Rare', tagClass: 'tag-exotic', origin: '🇨🇴 Colombia', name: 'Bird of Paradise', desc: 'Named for its uncanny resemblance to a tropical bird in flight. Grown high in the Colombian highlands, this striking stem adds bold drama to any space.', price: 750, unit: 'per stem' },
  { id: 7, emoji: '🌻', colorClass: 'c3', category: 'seasonal', tag: 'Seasonal', tagClass: 'tag-seasonal', origin: '🇮🇹 Italy', name: 'Tuscan Sunflower', desc: 'Grown in the golden hills of Tuscany under the summer sun. Oversized heads and deep-yellow petals that bring warmth and joy to any room.', price: 280, unit: 'per stem' },
  { id: 8, emoji: '🌼', colorClass: 'c3', category: 'seasonal', tag: 'Seasonal', tagClass: 'tag-seasonal', origin: '🇩🇪 Germany', name: 'Alpine Chamomile', desc: 'Delicate white petals surrounding a sunny yellow centre. Harvested from the Bavarian Alps in early summer — crisp, cheerful and naturally fragrant.', price: 210, unit: 'per bunch' },
  { id: 9, emoji: '🌷', colorClass: 'c3', category: 'seasonal', tag: 'Seasonal', tagClass: 'tag-seasonal', origin: '🇮🇷 Iran', name: 'Persian Ranunculus', desc: 'Layers upon layers of silk-thin petals in vivid fuchsia and coral. A spring favourite among florists for its extraordinary petal count and lush texture.', price: 390, unit: 'per stem' },
  { id: 10, emoji: '🌏', colorClass: 'c4', category: 'global', tag: 'Global Mix', tagClass: 'tag-global', origin: '🇰🇪 Kenya', name: 'Nairobi Calla Lily', desc: "Grown on the fertile highlands around Lake Naivasha in Kenya — Africa's flower capital. Pure white trumpet blooms with an elegant, architectural form.", price: 540, unit: 'per stem' },
  { id: 11, emoji: '🌹', colorClass: 'c4', category: 'global', tag: 'Global Mix', tagClass: 'tag-global', origin: '🇪🇨 Ecuador', name: 'Ecuadorian Rainbow Rose', desc: "Hand-tinted roses from Ecuador's high-altitude farms, where longer growing days create the world's largest rose heads. A feast of colour on a single stem.", price: 680, unit: 'per stem' },
  { id: 12, emoji: '🪻', colorClass: 'c4', category: 'global', tag: 'Global Mix', tagClass: 'tag-global', origin: '🇦🇺 Australia', name: 'Waratah Bloom', desc: "Australia's most iconic wildflower — a striking crimson dome of densely packed florets. Rare, bold, and utterly unforgettable in any arrangement.", price: 820, unit: 'per stem' },
]
