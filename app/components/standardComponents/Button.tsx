import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  bgColor?: string;
  textColor?: string;
  border?: string;
  hoverEffect?: string;
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  bgColor = "bg-blue-600",
  textColor = "text-white",
  border = "",
  hoverEffect = "hover:bg-blue-700",
  size = "md",
  isLoading = false,
  disabled = false,
  className = "",
}) => {
  const baseStyles =
    "flex items-center justify-center rounded-md font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2";

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${
        sizes[size]
      } ${bgColor} ${textColor} ${border} ${hoverEffect} ${
        disabled || isLoading ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default Button;
