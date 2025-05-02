import { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';

type LinkProps = {
  to: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
};

const Link = ({ to, children, className = '', external = false }: LinkProps) => {
  if (external) {
    return (
      <a 
        href={to} 
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  
  return (
    <RouterLink to={to} className={className}>
      {children}
    </RouterLink>
  );
};

export { Link };
export default Link;