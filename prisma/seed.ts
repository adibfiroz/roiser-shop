import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        images: [
          "https://images.pexels.com/photos/18105/pexels-photo.jpg",
          "https://images.pexels.com/photos/258293/pexels-photo-258293.jpeg",
          "https://images.pexels.com/photos/163114/office-desk-workspace-coworking.jpg",
        ],
        title: "Ergonomic Office Chair",
        price: 199.99,
        description: "Adjustable lumbar support and breathable mesh back.",
        category: "Home & Office",
      },
      {
        images: [
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
          "https://images.unsplash.com/photo-1522826657326-0466ba28c41f",
          "https://images.unsplash.com/photo-1493770348161-369560ae357d",
        ],
        title: "4K Ultra HD Monitor",
        price: 329.99,
        description: "27-inch IPS display with HDR support.",
        category: "Computers",
      },
      {
        images: [
          "https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg",
          "https://images.pexels.com/photos/159539/brewing-coffee-cup-coffee-maker-159539.jpeg",
          "https://images.pexels.com/photos/3036367/pexels-photo-3036367.jpeg",
        ],
        title: "Smart Coffee Maker",
        price: 99.99,
        description: "Wi-Fi enabled coffee maker with scheduled brewing.",
        category: "Home & Kitchen",
      },
      {
        images: [
          "https://images.unsplash.com/photo-1574396211643-b88da050374b",
          "https://images.unsplash.com/photo-1518770660439-4636190af475",
          "https://images.pexels.com/photos/5052877/pexels-photo-5052877.jpeg",
        ],
        title: "Portable Power Bank",
        price: 29.99,
        description: "10,000mAh power bank with fast charging.",
        category: "Accessories",
      },
      {
        images: [
          "https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg",
          "https://images.pexels.com/photos/8541471/pexels-photo-8541471.jpeg",
          "https://images.unsplash.com/photo-1560964644-65c9bbf1f6b9",
        ],
        title: "Foldable Treadmill",
        price: 499.99,
        description: "Compact treadmill with built-in Bluetooth speakers.",
        category: "Fitness",
      },
      {
        images: [
          "https://images.unsplash.com/photo-1498021561983-b96223d7cd14",
          "https://images.unsplash.com/photo-1559948834-17637b36fd4d",
          "https://images.pexels.com/photos/3736200/pexels-photo-3736200.jpeg",
        ],
        title: "Professional Camera Drone",
        price: 799.99,
        description: "4K UHD camera with 3-axis gimbal stabilization.",
        category: "Electronics",
      },
      {
        images: [
          "https://images.pexels.com/photos/3184450/pexels-photo-3184450.jpeg",
          "https://images.pexels.com/photos/158771/lamp-table-lantern-decoration-158771.jpeg",
          "https://images.unsplash.com/photo-1603145733145-9434091b26f2",
        ],
        title: "Electric Standing Desk",
        price: 349.99,
        description: "Adjustable height standing desk with memory presets.",
        category: "Home & Office",
      },
      {
        images: [
          "https://images.pexels.com/photos/3394653/pexels-photo-3394653.jpeg",
          "https://images.pexels.com/photos/4034423/pexels-photo-4034423.jpeg",
          "https://images.pexels.com/photos/3946683/pexels-photo-3946683.jpeg",
        ],
        title: "Noise-Reducing Sleeping Headphones",
        price: 49.99,
        description: "Ultra-thin Bluetooth headphones designed for sleep.",
        category: "Personal Care",
      },
      {
        images: [
          "https://images.pexels.com/photos/5410403/pexels-photo-5410403.jpeg",
          "https://images.unsplash.com/photo-1591115765140-1e48c84f78b2",
          "https://images.unsplash.com/photo-1515096788706-ae18c195c827",
        ],
        title: "Compact Air Fryer",
        price: 79.99,
        description: "Oil-free fryer with digital temperature control.",
        category: "Home & Kitchen",
      },
      {
        images: [
          "https://images.unsplash.com/photo-1523473827532-2a64d0c3ac36",
          "https://images.unsplash.com/photo-1615224717873-3c02b3d6fc97",
          "https://images.pexels.com/photos/6430734/pexels-photo-6430734.jpeg",
        ],
        title: "Wireless Mechanical Keyboard",
        price: 109.99,
        description: "Compact 65% layout with hot-swappable switches.",
        category: "Computers",
      },
      {
        images: [
          "https://images.pexels.com/photos/2775263/pexels-photo-2775263.jpeg",
          "https://images.unsplash.com/photo-1614949822332-5c2db456e53d",
          "https://images.pexels.com/photos/3860093/pexels-photo-3860093.jpeg",
        ],
        title: "Smart Mirror",
        price: 249.99,
        description: "LED mirror with touch controls and smart display.",
        category: "Personal Care",
      },
      {
        images: [
          "https://images.pexels.com/photos/1547246/pexels-photo-1547246.jpeg",
          "https://images.pexels.com/photos/3831846/pexels-photo-3831846.jpeg",
          "https://images.pexels.com/photos/4046315/pexels-photo-4046315.jpeg",
        ],
        title: "Adjustable Weight Bench",
        price: 179.99,
        description: "Heavy-duty workout bench for home gyms.",
        category: "Fitness",
      },
      {
        images: [
          "https://images.pexels.com/photos/1650892/pexels-photo-1650892.jpeg",
          "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb",
          "https://images.pexels.com/photos/6340052/pexels-photo-6340052.jpeg",
        ],
        title: "Outdoor Solar String Lights",
        price: 39.99,
        description: "Weatherproof LED string lights for patios.",
        category: "Home & Garden",
      },
      {
        images: [
          "https://images.pexels.com/photos/6390465/pexels-photo-6390465.jpeg",
          "https://images.pexels.com/photos/5648356/pexels-photo-5648356.jpeg",
          "https://images.unsplash.com/photo-1623301972451-f5243bffc067",
        ],
        title: "Smart Air Purifier",
        price: 129.99,
        description: "Wi-Fi enabled air purifier with HEPA filter.",
        category: "Home & Office",
      },
      {
        images: [
          "https://images.pexels.com/photos/238547/pexels-photo-238547.jpeg",
          "https://images.pexels.com/photos/4515786/pexels-photo-4515786.jpeg",
          "https://images.unsplash.com/photo-1512766886146-1cc16f4e17d0",
        ],
        title: "Compact Travel Backpack",
        price: 59.99,
        description: "Water-resistant backpack with laptop compartment.",
        category: "Accessories",
      },
    ],
  });

  console.log("Seed data added successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
