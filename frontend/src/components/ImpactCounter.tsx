"use client";

import { useEffect, useState } from "react";
import { Recycle, Home, Factory, Users } from "lucide-react";

export type Stat = {
  id: string;
  name: string;
  value: number;
  iconName?: string;
};

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

export default function ImpactCounter({ stats }: { stats: Stat[] }) {
  return (
    <div className="bg-[var(--color-primary)] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Impact in Numbers
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--color-secondary)]">
              Every piece of plastic we recycle brings us closer to a sustainable future for Nepal.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
              return (
                <div key={stat.id} className="flex flex-col bg-white/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-[var(--color-surface)]">
                    <div className="flex justify-center mb-4">
                      {/* For simplicity we map icon names to icons, defaulting to Recycle */}
                      {stat.iconName === 'Users' ? <Users className="h-8 w-8 text-[var(--color-secondary)]" /> :
                       stat.iconName === 'Home' ? <Home className="h-8 w-8 text-[var(--color-secondary)]" /> :
                       stat.iconName === 'Factory' ? <Factory className="h-8 w-8 text-[var(--color-secondary)]" /> :
                       <Recycle className="h-8 w-8 text-[var(--color-secondary)]" />}
                    </div>
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white mb-2">
                    <Counter endValue={stat.value} />
                    {stat.id === 'total_plastic_recycled' && "+"}
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
