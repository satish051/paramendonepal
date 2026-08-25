"use client";

import { useEffect, useState } from "react";
import { Recycle, Home, Factory, Users } from "lucide-react";

const stats = [
  { id: 1, name: "Kg Plastic Recycled", value: 15000, icon: Recycle },
  { id: 2, name: "Rural Homes Insulated", value: 50, icon: Home },
  { id: 3, name: "CRC Centers Operational", value: 1, icon: Factory },
  { id: 4, name: "Community Members Empowered", value: 120, icon: Users },
];

function Counter({ endValue }: { endValue: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = endValue / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [endValue]);

  return <>{count.toLocaleString()}</>;
}

export default function ImpactCounter() {
  return (
    <div className="bg-[var(--color-forest)] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Impact in Numbers
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--color-leaf)]">
              Every piece of plastic we recycle brings us closer to a sustainable future for Nepal.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.id} className="flex flex-col bg-white/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-[var(--color-offwhite)]">
                    <div className="flex justify-center mb-4">
                      <Icon className="h-8 w-8 text-[var(--color-leaf)]" />
                    </div>
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white mb-2">
                    <Counter endValue={stat.value} />
                    {stat.id === 1 && "+"}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
}
