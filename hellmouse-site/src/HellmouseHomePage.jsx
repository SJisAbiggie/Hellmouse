import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HellmouseHomePage() {
  return (
    <div className="min-h-screen bg-black text-white p-6 font-sans">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold tracking-tight text-red-600">HELLMOUSE</h1>
        <p className="text-xl text-gray-300 mt-2">Built for fear. Engineered for power. Forged in madness.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {models.map((model, index) => (
          <motion.div
            key={model.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="bg-zinc-900 border-red-600 border-2">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-red-500 mb-2">{model.name}</h2>
                <p className="text-gray-300 mb-4">{model.description}</p>
                <p className="text-lg font-bold text-white">Starting at ${model.price.toLocaleString()}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      <footer className="text-center mt-16 text-gray-600 text-sm">
        <p>&copy; 2025 T&N Motors. All rights reserved.</p>
      </footer>
    </div>
  );
}

const models = [
  {
    name: "Hellmouse",
    description: "Demon 170-powered street terror. Carbon touches. Targa top. Pure rage.",
    price: 120000,
  },
  {
    name: "Hellmouse X",
    description: "Single turbo boost added. Flame tune. More bite, same mouse.",
    price: 185000,
  },
  {
    name: "Hellmouse X2",
    description: "Twin turbo, blower combo. All carbon widebody. Drag legend.",
    price: 320000,
  },
  {
    name: "Hellmouse X2R",
    description: "Top Fuel-class monster. Twin turbos, dual superchargers, parachute-equipped.",
    price: 1100000,
  },
];
