"use client";
import React from "react";
import Image from "next/image";
import { IItemCardv1 } from "./interface/itemCardv1.interface";

export interface ItemCardv2Props {
  payload: IItemCardv1;
  onClick?: () => void;
}

export const ItemCardv2: React.FC<ItemCardv2Props> = ({ payload, onClick }) => {
  return (
    <a
      href={payload.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="group focus:outline-none"
    >
      <div className="rounded-xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 overflow-hidden">
        
        {/* Full width image */}
        <div className="w-full h-24 bg-gray-400 overflow-hidden">
          <Image
            src={payload.icon}
            alt={payload.name}
            width={300}
            height={96}
            className="w-full h-full object-contain p-3"
          />
        </div>

        {/* Bottom label */}
        <div className="flex items-center justify-between px-3 py-2 border-t border-gray-100">
          <span className="text-sm font-medium text-gray-800 truncate group-hover:text-gray-900">
            {payload.name}
          </span>
          <div className="flex-shrink-0 text-gray-300 group-hover:text-gray-400 group-hover:translate-x-0.5 transition-transform duration-200">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </div>
        </div>

      </div>
    </a>
  );
};

export default ItemCardv2;