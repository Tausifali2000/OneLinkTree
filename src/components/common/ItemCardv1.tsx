"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Item, ItemContent, ItemTitle } from "../ui/item";
import { IItemCardv1 } from "./interface/itemCardv1.interface";

export interface ItemCardv1Props {
  payload: IItemCardv1;
  onClick?: () => void;
}

export const ItemCardv1: React.FC<ItemCardv1Props> = ({ payload, onClick }) => {
  return (
    <a
      href={payload.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="flex items-center gap-1 rounded-4xl bg-[#ECECEB] transition-all hover:-translate-y-0.5 active:translate-y-0 focus:outline-none hover:shadow-md"
    >
      <Avatar className="size-16 rounded-full overflow-hidden border shrink-0">
        <AvatarImage
          src={payload.icon}
          alt={payload.name}
          className="object-cover w-full h-full"
        />
        <AvatarFallback className="bg-muted text-muted-foreground text-sm font-medium">
          {payload.name.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <Item className="p-3 flex w-full items-center gap-3 rounded-r-3xl">
        <ItemContent>
          <ItemTitle className="text-base font-medium">{payload.name}</ItemTitle>
        </ItemContent>
      </Item>
    </a>
  );
};

export default ItemCardv1;
