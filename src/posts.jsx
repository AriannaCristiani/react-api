import tulipaniSrc from './assets/tulipani.jpg'
import gigliSrc from './assets/gigli.jpg'
import girasoliSrc from './assets/girasoli.jpg'
import crisantemiSrc from './assets/crisantemi.jpg'


export const posts = [
    {
        id: 1,
        title: 'Tulipani',
        image: tulipaniSrc,
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
        category: 'Fiori',
        tags: ['fiori', 'piante'],
        published: true,
    },
    {
        id: 2,
        title: 'Salice',
        image: undefined,
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
        category: 'Alberi',
        tags: ['giardino', 'piante'],
        published: false,
    },
    {
        id: 3,
        title: 'Gigli',
        image: gigliSrc,
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
        category: 'Fiori',
        tags: ['giardino', 'esterno'],
        published: true,
    },
    {
        id: 4,
        title: 'Monstera',
        image: undefined,
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
        category: 'piante',
        tags: ['fiori'],
        published: true,
    },
    {
        id: 5,
        title: 'Girasoli',
        image: girasoliSrc,
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
        category: 'Fiori',
        tags: ['fiori'],
        published: true,
    },
    {
        id: 6,
        title: 'Crisantemi',
        image: crisantemiSrc,
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
        category: 'Fiori',
        tags: ['fiori', 'piante'],
        published: false,
    },
]


export default posts