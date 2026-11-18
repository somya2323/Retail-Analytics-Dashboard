
import { useState } from "react";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const navigationItems = [
  {
    label: "Dashboard",
    icon: (
      <path d="M3 10.5 12 3l9 7.5V21H3V10.5Z M9 21v-7h6v7" />
    ),
  },
  {
    label: "Sales Transactions",
    icon: (
      <>
        <path d="M3 3h2l2.2 11.2a2 2 0 0 0 2 1.6h8.9a2 2 0 0 0 1.9-1.4L22 8H6" />
        <circle cx="10" cy="20" r="1" />
        <circle cx="18" cy="20" r="1" />
      </>
    ),
  },
  {
    label: "Products",
    icon: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 8 9 5 9-5M3 8v9l9 5 9-5V8M12 13v9" />
      </>
    ),
  },
  {
    label: "Customers",
    icon: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="10" cy="7" r="4" />
        <path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    label: "Reports",
    icon: (
      <>
        <path d="M3 3v18h18" />
        <path d="m7 14 4-4 4 3 6-7" />
      </>
    ),
  },
];

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 h-screen overflow-y-auto flex-shrink-0 transform transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Brand */}
        <div className="px-5 py-5 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-lg">R</span>
            </div>

            <div className="flex-1 min-w-0">
              <h2 className="text-sm font-bold text-gray-900">
                Retail Analytics
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Somya Raj
              </p>
            </div>

            <button
              onClick={onToggle}
              aria-label="Toggle sidebar"
              className="text-gray-400 hover:text-gray-700 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="px-3 py-6">
          <p className="px-3 mb-3 text-[10px] font-semibold tracking-[0.16em] text-gray-400 uppercase">
            Workspace
          </p>

          <div className="space-y-1">
            {navigationItems.map((item) => {
              const isActive = activeItem === item.label;

              return (
                <button
                  key={item.label}
                  onClick={() => setActiveItem(item.label)}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-indigo-50 text-indigo-700 shadow-sm"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <svg
                    className={`w-[18px] h-[18px] flex-shrink-0 ${
                      isActive ? "text-indigo-600" : "text-gray-400"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.7}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {item.icon}
                  </svg>

                  <span>{item.label}</span>

                  {isActive && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-600" />
                  )}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 bg-white">
          <div className="rounded-xl bg-gray-50 p-3">
            <p className="text-xs font-semibold text-gray-700">
              Retail Analytics
            </p>
            <p className="text-[11px] text-gray-500 mt-1">
              Sales performance overview
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
