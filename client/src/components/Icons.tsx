import { HTMLAttributes } from "react";

export const Icons = {
  zap: (props: HTMLAttributes<HTMLOrSVGElement>) => {
    return (
      <svg {...props} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m24.5 31.9-4.9 16.2h12.5l-4.2 13.9 16.5-20.2h-11.9l2.9-9.9z"
          fill="#ffce31"
          transform="matrix(1.25 0 0 2 -6 -62)"
        />
      </svg>
    );
  },
};
