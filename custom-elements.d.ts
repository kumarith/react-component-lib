import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      kbutton: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
    }
  }
}
