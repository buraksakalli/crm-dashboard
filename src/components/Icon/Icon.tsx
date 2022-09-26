import React from 'react';

export interface IconProps extends React.SVGAttributes<SVGElement> {
  name?: IconNameType;
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
  fill?: string;
  rotatecenter?: number;
}

export const PlusIcon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8 1V15M1 8H15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export const CloudIcon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7 14L11 10M11 10L15 14M11 10V19M19 14.7428C20.2215 13.734 21 12.2079 21 10.5C21 7.46243 18.5376 5 15.5 5C15.2815 5 15.0771 4.886 14.9661 4.69774C13.6621 2.48484 11.2544 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 10.5661 1.83545 12.4371 3.18695 13.7935"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const HomeIcon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M6 16H14M9.0177 1.764L2.23539 7.03912C1.78202 7.39175 1.55534 7.56806 1.39203 7.78886C1.24737 7.98444 1.1396 8.20478 1.07403 8.43905C1 8.70352 1 8.9907 1 9.56505V16.8C1 17.9201 1 18.4801 1.21799 18.908C1.40973 19.2843 1.71569 19.5903 2.09202 19.782C2.51984 20 3.07989 20 4.2 20H15.8C16.9201 20 17.4802 20 17.908 19.782C18.2843 19.5903 18.5903 19.2843 18.782 18.908C19 18.4801 19 17.9201 19 16.8V9.56505C19 8.9907 19 8.70352 18.926 8.43905C18.8604 8.20478 18.7526 7.98444 18.608 7.78886C18.4447 7.56806 18.218 7.39175 17.7646 7.03913L10.9823 1.764C10.631 1.49075 10.4553 1.35412 10.2613 1.3016C10.0902 1.25526 9.9098 1.25526 9.73865 1.3016C9.54468 1.35412 9.36902 1.49075 9.0177 1.764Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      />
    </svg>
  );
};

export const DotsVertical: React.FC<IconProps> = ({ ...props }) => {
  return (
    <svg width="4" height="18" viewBox="0 0 4 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M2 10C2.55228 10 3 9.55228 3 9C3 8.44772 2.55228 8 2 8C1.44772 8 1 8.44772 1 9C1 9.55228 1.44772 10 2 10Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 17C2.55228 17 3 16.5523 3 16C3 15.4477 2.55228 15 2 15C1.44772 15 1 15.4477 1 16C1 16.5523 1.44772 17 2 17Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Arrow: React.FC<IconProps> = ({ ...props }) => {
  return (
    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M7 17V1M7 1L1 7M7 1L13 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export const TasksIcon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M5 14L7 16L11.5 11.5M7 7V4.2C7 3.0799 7 2.51984 7.21799 2.09202C7.40973 1.71569 7.71569 1.40973 8.09202 1.21799C8.51984 1 9.07989 1 10.2 1H17.8C18.9201 1 19.4802 1 19.908 1.21799C20.2843 1.40973 20.5903 1.71569 20.782 2.09202C21 2.51984 21 3.0799 21 4.2V11.8C21 12.9201 21 13.4802 20.782 13.908C20.5903 14.2843 20.2843 14.5903 19.908 14.782C19.4802 15 18.9201 15 17.8 15H15M4.2 21H11.8C12.9201 21 13.4802 21 13.908 20.782C14.2843 20.5903 14.5903 20.2843 14.782 19.908C15 19.4802 15 18.9201 15 17.8V10.2C15 9.07989 15 8.51984 14.782 8.09202C14.5903 7.71569 14.2843 7.40973 13.908 7.21799C13.4802 7 12.9201 7 11.8 7H4.2C3.0799 7 2.51984 7 2.09202 7.21799C1.71569 7.40973 1.40973 7.71569 1.21799 8.09202C1 8.51984 1 9.07989 1 10.2V17.8C1 18.9201 1 19.4802 1.21799 19.908C1.40973 20.2843 1.71569 20.5903 2.09202 20.782C2.51984 21 3.07989 21 4.2 21Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      />
    </svg>
  );
};

export const UserIcon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M4.3163 18.4384C4.92462 17.0052 6.34492 16 8 16H14C15.6551 16 17.0754 17.0052 17.6837 18.4384M15 8.5C15 10.7091 13.2091 12.5 11 12.5C8.79086 12.5 7 10.7091 7 8.5C7 6.29086 8.79086 4.5 11 4.5C13.2091 4.5 15 6.29086 15 8.5ZM21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      />
    </svg>
  );
};

export const DashboardIcon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9 2H5.8C4.11984 2 3.27976 2 2.63803 2.32698C2.07354 2.6146 1.6146 3.07354 1.32698 3.63803C1 4.27976 1 5.11984 1 6.8V15.2C1 16.8802 1 17.7202 1.32698 18.362C1.6146 18.9265 2.07354 19.3854 2.63803 19.673C3.27976 20 4.11984 20 5.8 20H14.2C15.8802 20 16.7202 20 17.362 19.673C17.9265 19.3854 18.3854 18.9265 18.673 18.362C19 17.7202 19 16.8802 19 15.2V12M10 7H14V11M13.5 2.5V1M17.4393 3.56066L18.5 2.5M18.5103 7.5H20.0103M1 12.3471C1.65194 12.4478 2.31987 12.5 3 12.5C7.38636 12.5 11.2653 10.3276 13.6197 7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      />
    </svg>
  );
};

export const ProjectsIcon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1 11.0001L10.6422 15.8212C10.7734 15.8868 10.839 15.9196 10.9078 15.9325C10.9687 15.9439 11.0313 15.9439 11.0922 15.9325C11.161 15.9196 11.2266 15.8868 11.3578 15.8212L21 11.0001M1 16.0001L10.6422 20.8212C10.7734 20.8868 10.839 20.9196 10.9078 20.9325C10.9687 20.9439 11.0313 20.9439 11.0922 20.9325C11.161 20.9196 11.2266 20.8868 11.3578 20.8212L21 16.0001M1 6.00006L10.6422 1.17895C10.7734 1.11336 10.839 1.08056 10.9078 1.06766C10.9687 1.05622 11.0313 1.05622 11.0922 1.06766C11.161 1.08056 11.2266 1.11336 11.3578 1.17895L21 6.00006L11.3578 10.8212C11.2266 10.8868 11.161 10.9196 11.0922 10.9325C11.0313 10.9439 10.9687 10.9439 10.9078 10.9325C10.839 10.9196 10.7734 10.8868 10.6422 10.8212L1 6.00006Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ReportIcon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11 1C12.3132 1 13.6136 1.25866 14.8268 1.76121C16.0401 2.26375 17.1425 3.00035 18.0711 3.92893C18.9997 4.85752 19.7363 5.95991 20.2388 7.17317C20.7413 8.38643 21 9.68679 21 11M11 1V11M11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21C16.5228 21 21 16.5229 21 11M11 1C16.5228 1 21 5.47716 21 11M21 11L11 11M21 11C21 12.5781 20.6265 14.1338 19.9101 15.5399C19.1936 16.946 18.1546 18.1626 16.8779 19.0902L11 11"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Logo: React.FC<IconProps> = ({ ...props }) => {
  return (
    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M18.5 6.27783L9.99997 11.0001M9.99997 11.0001L1.49997 6.27783M9.99997 11.0001L10 20.5001M19 15.0586V6.94153C19 6.59889 19 6.42757 18.9495 6.27477C18.9049 6.13959 18.8318 6.01551 18.7354 5.91082C18.6263 5.79248 18.4766 5.70928 18.177 5.54288L10.777 1.43177C10.4934 1.27421 10.3516 1.19543 10.2015 1.16454C10.0685 1.13721 9.93146 1.13721 9.79855 1.16454C9.64838 1.19543 9.50658 1.27421 9.22297 1.43177L1.82297 5.54288C1.52345 5.70928 1.37369 5.79248 1.26463 5.91082C1.16816 6.01551 1.09515 6.13959 1.05048 6.27477C1 6.42757 1 6.59889 1 6.94153V15.0586C1 15.4013 1 15.5726 1.05048 15.7254C1.09515 15.8606 1.16816 15.9847 1.26463 16.0893C1.37369 16.2077 1.52345 16.2909 1.82297 16.4573L9.22297 20.5684C9.50658 20.726 9.64838 20.8047 9.79855 20.8356C9.93146 20.863 10.0685 20.863 10.2015 20.8356C10.3516 20.8047 10.4934 20.726 10.777 20.5684L18.177 16.4573C18.4766 16.2909 18.6263 16.2077 18.7354 16.0893C18.8318 15.9847 18.9049 15.8606 18.9495 15.7254C19 15.5726 19 15.4013 19 15.0586Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const FilterIcon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4 7H16M1 1H19M7 13H13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export const SearchIcon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M19 19L14.65 14.65M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const TrashIcon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M14 5V4.2C14 3.0799 14 2.51984 13.782 2.09202C13.5903 1.71569 13.2843 1.40973 12.908 1.21799C12.4802 1 11.9201 1 10.8 1H9.2C8.07989 1 7.51984 1 7.09202 1.21799C6.71569 1.40973 6.40973 1.71569 6.21799 2.09202C6 2.51984 6 3.0799 6 4.2V5M8 10.5V15.5M12 10.5V15.5M1 5H19M17 5V16.2C17 17.8802 17 18.7202 16.673 19.362C16.3854 19.9265 15.9265 20.3854 15.362 20.673C14.7202 21 13.8802 21 12.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const EditIcon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1.87601 17.1156C1.92195 16.7021 1.94493 16.4954 2.00748 16.3022C2.06298 16.1307 2.1414 15.9676 2.24061 15.8171C2.35242 15.6475 2.49952 15.5005 2.7937 15.2063L16 2C17.1046 0.895427 18.8954 0.895428 20 2C21.1046 3.10457 21.1046 4.89543 20 6L6.7937 19.2063C6.49951 19.5005 6.35242 19.6475 6.18286 19.7594C6.03242 19.8586 5.86926 19.937 5.69782 19.9925C5.50457 20.055 5.29783 20.078 4.88434 20.124L1.49997 20.5L1.87601 17.1156Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const LogoutIcon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M14 15L19 10M19 10L14 5M19 10H7M7 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V14.2C1 15.8802 1 16.7202 1.32698 17.362C1.6146 17.9265 2.07354 18.3854 2.63803 18.673C3.27976 19 4.11984 19 5.8 19H7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const LoadingIcon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <svg aria-hidden="true" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
  );
};

export const MenuIcon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <svg
      className="w-6 h-6"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const iconMapper = {
  TasksIcon,
  Arrow,
  CloudIcon,
  HomeIcon,
  DotsVertical,
  PlusIcon,
  UserIcon,
  DashboardIcon,
  ProjectsIcon,
  ReportIcon,
  Logo,
  FilterIcon,
  SearchIcon,
  EditIcon,
  TrashIcon,
  LogoutIcon,
  LoadingIcon,
  MenuIcon,
};

export type IconNameType = keyof typeof iconMapper;

export const Icon = ({ name = 'HomeIcon', stroke = '#000000', ...props }: IconProps) => {
  const icon = iconMapper[name];

  if (typeof icon !== 'undefined') return React.createElement(icon, { stroke, ...props }, null);
  return React.createElement(iconMapper['HomeIcon'], { ...props }, null);
};
