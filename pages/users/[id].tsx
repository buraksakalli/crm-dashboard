import { useRouter } from 'next/router';
import Skeleton from 'react-iskelet';
import { Image } from '@/components';
import { useUserData } from 'src/hooks';

const UserId = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, data } = useUserData({ id: Number(id) });

  return (
    <section>
      <div className="w-full bg-black relative h-80 rounded-md">
        <Image objectFit="cover" layout="fill" src={'/timeline.jpg'} alt="timeline" className="rounded-sm" />
        <div className="absolute bottom-[-70px] flex ml-4 items-end">
          {!loading ? (
            <Image width={120} height={120} src={data!?.avatar} alt="profile" className="rounded-full" />
          ) : (
            <Skeleton type="avatar" />
          )}
          <div className="mt-2 flex items-center ml-4">
            <div className="flex w-full flex-col text-sm text-inverted">
              {!loading ? (
                <>
                  <span className="font-semibold text-3xl">
                    {data?.first_name} {data?.last_name}
                  </span>
                  <span className="font-light text-base">{`@${data?.first_name?.toLowerCase()}${data?.last_name?.toLowerCase()}`}</span>
                </>
              ) : (
                <Skeleton type="text" count={2} />
              )}
            </div>
          </div>
        </div>
      </div>

      <section className="grid grid-cols-12 gap-4 mt-20">
        <div className="grid col-span-12 md:col-span-4 border rounded-md border-tertiary py-6 px-8 shadow-sm">
          Hello
        </div>
      </section>
    </section>
  );
};

export default UserId;
