import { Icon } from '@/components';

export const Loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Icon name="LoadingIcon" className="mr-2 w-8 h-8 animate-spin fill-primary" />
    </div>
  );
};
