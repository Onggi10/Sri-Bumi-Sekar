// components/products.ts

export interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Platinum Perekat",
    image: "/images/Platinum Perekat.png",
    description: "Semen Berkualitas Premium Untuk Konstruksi Tahan Lama.",
    price: "Rp 55.000 / sak",
    category: "Semen",
  },
  {
    id: 2,
    name: "Platinum Acian",
    image: "/images/Platinum Acian.png",
    description: "Semen Untuk Acian Dinding Agar Halus.",
    price: "Rp 60.000 / sak",
    category: "Semen",
  },
  {
    id: 3,
    name: "Platinum Plaster",
    image: "/images/Platinum Plaster.jpeg",
    description: "Semen Untuk Plaster Dinding.",
    price: "Rp 50.000 / sak",
    category: "Semen",
  },
  {
    id: 4,
    name: "Platinum Tile",
    image: "/images/Platinum Tile.png",
    description: "Semen Untuk Perekat Keramik Dan Batu Alam.",
    price: "Rp 87.000 / sak",
    category: "Semen",
  },
  {
    id: 5,
    name: "Bata Ringan",
    image: "/images/bata ringan.png",
    description: "Material Ringan Dan Tahan Lama Untuk Dinding.",
    price: "Rp 700.000 / kubik",
    category: "Bata",
  },
  {
    id: 6,
    name: "Thinner",
    image: "/images/Thinner.png",
    description: "Material Ringan Dan Tahan Lama Untuk Dinding.",
    price: "Rp 700.000 / kubik",
    category: "Thinner",
  },
  {
    id: 7,
    name: "Concrete Additive",
    image: "/images/Concrete Additive.jpeg",
    description: "Produk ini merupakan aditif beton yang berfungsi untuk mempercepat pengerasan beton. Dikemas dalam botol kuning dengan tutup merah, produk ini memiliki beberapa manfaat utama",
    price: "Rp 700.000 / kubik",
    category: "Liquid",
  },
    {
    id: 8,
    name: "Multimax Seal",
    image: "/images/Multimax-Seal.jpeg",
    description: "Produk ini fungsinya untuk meningkatkan daya rekat semen agar lebih tahan air, digunakan untuk plasteran lantai serta sebagai lapisan kedap air. Beberapa keunggulannya antara lain ekonomis, mudah diaplikasikan, dan membantu mencegah beton menyerap air.",
    price: "Rp 700.000 / kubik",
    category: "Liquid",
  },

];
