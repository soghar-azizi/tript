<Swiper
  onSwiper={setSwiper}
  modules={[Navigation]}
  spaceBetween={15}
  slidesPerView={1}
  breakpoints={{
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  }}
>
  {slidesData.map((data) => (
    <SwiperSlide key={data.id}>
      <DealsCard
        bgImage={data.image}
        rating={data.rating}
        review={data.review}
        viewers={data.viewers}
        name={data.name}
        location={data.location}
        pricePerNight={data.pricePerNight}
        oldPrice={data.oldPrice}
        totalPrice={data.totalPrice}
      />
    </SwiperSlide>
  ))}
</Swiper>;
