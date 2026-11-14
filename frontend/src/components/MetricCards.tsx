import type { SalesSummary } from "../hooks/useSalesData";

interface Props {
  summary: SalesSummary;
}

const currency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const number = new Intl.NumberFormat("en-IN");

export default function MetricCards({ summary }: Props) {
  const metrics = [
    {
      title: "Total Revenue",
      value: currency.format(summary.totalRevenue),
      description: "Revenue from filtered transactions",
      icon: "₹",
      color: "emerald",
    },
    {
      title: "Total Orders",
      value: number.format(summary.totalOrders),
      description: "Total matching transactions",
      icon: "↗",
      color: "blue",
    },
    {
      title: "Units Sold",
      value: number.format(summary.totalUnits),
      description: "Products sold across orders",
      icon: "▦",
      color: "violet",
    },
    {
      title: "Average Order Value",
      value: currency.format(summary.averageOrderValue),
      description: "Average revenue per order",
      icon: "◈",
      color: "amber",
    },
  ];

  const styles: Record<string, string> = {
    emerald: "border-l-emerald-500 bg-emerald-50 text-emerald-700",
    blue: "border-l-blue-500 bg-blue-50 text-blue-700",
    violet: "border-l-violet-500 bg-violet-50 text-violet-700",
    amber: "border-l-amber-500 bg-amber-50 text-amber-700",
  };

  return (
    <section className="mb-6">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-slate-800">
          Business Overview
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Key performance indicators from your current selection
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.title}
            className={`rounded-xl border border-slate-200 border-l-4 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${styles[metric.color].split(" ").filter(s => s.startsWith("border-l-")).join(" ")}`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {metric.title}
                </p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                  {metric.value}
                </h3>
              </div>
              <div className={`flex h-11 w-11 items-center justify-center rounded-xl text-xl font-semibold ${styles[metric.color].replace(/border-l-\S+/, "")}`}>
                {metric.icon}
              </div>
            </div>
            <div className="mt-4 border-t border-slate-100 pt-3">
              <p className="text-xs text-slate-500">
                {metric.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
