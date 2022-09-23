interface TabProps extends React.HTMLAttributes<HTMLLIElement> {
  active?: boolean;
}

export const Tab = ({ ...props }) => {
  return (
    <nav>
      <ul className="flex gap-2 md:gap-6 border-b border-tertiary mb-1 md:mb-2 overflow-x-auto">{props.children}</ul>
    </nav>
  );
};

const Item: React.FC<TabProps> = ({ active = false, ...props }) => {
  return (
    <li
      className={`text-xs md:text-base text-muted font-medium hover:border-b-2 hover:border-primary py-2 cursor-pointer ${
        active ? 'border-b-2 border-primary' : ''
      }`}
      {...props}
    >
      {props.children}
    </li>
  );
};

Tab.Item = Item;
