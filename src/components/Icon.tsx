import React from 'react';
import { icons } from 'lucide-react';

// @ts-ignore - relaxing type constraint for dynamic icon names
export type IconName = string;

interface IconProps {
  name: IconName;
  color?: string;
  size?: number;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, color, size = 24, className }) => {
  const LucideIcon = icons[name as keyof typeof icons];

  if (!LucideIcon) {
    return null;
  }

  return <LucideIcon color={color} size={size} className={className} />;
};
