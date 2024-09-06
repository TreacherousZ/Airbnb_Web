import React, { memo, useEffect } from 'react';
import { HomeWrapper } from './style';
import HomeBanner from './c-cpns/home-banner';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchHomeDataAction } from '@/store/modules/home';
import SectionHeader from '@/components/selection-header';

const Home = memo(() => {
  const { goodPriceInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomeDataAction('xxx'));
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className='good-price'>
          <SectionHeader title={goodPriceInfo.title} />
          {/* 确保 goodPriceInfo 和 list 已经定义 */}
          <ul>
            {goodPriceInfo?.list?.length > 0 ? (
              goodPriceInfo.list.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))
            ) : (
              <li>No items available</li>
            )}
          </ul>
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
