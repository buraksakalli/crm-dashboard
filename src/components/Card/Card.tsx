import { Arrow, DotsVertical } from '../Icon';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  value: number;
  increase?: number;
  decrease?: number;
}

export const Card: React.FC<CardProps> = ({ title, value, increase, decrease }) => {
  return (
    <div className="grid col-span-12 md:col-span-4 border rounded-md border-tertiary py-6 px-8 shadow-sm">
      <div className="flex justify-between">
        <span className="text-xl text-muted">{title}</span>
        <DotsVertical stroke="#E5E5E9" className="cursor-pointer h-4" />
      </div>
      <div className="flex justify-between mt-2 items-end">
        <span className="text-4xl font-medium">{value.toLocaleString()}</span>
        {(increase || decrease) && (
          <div>
            <span
              className={`rounded-3xl ${
                increase ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
              } px-4 py-1 text-sm flex items-center gap-2`}
            >
              <Arrow className={`${increase ? 'stroke-green-600 rotate-0' : 'stroke-red-600 rotate-180'} w-2`} />
              {increase ?? decrease}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
