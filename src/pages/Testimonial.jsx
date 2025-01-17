import Slider from 'react-slick';

const testimonials = [
  {
    name: "John Doe",
    role: "Event Organizer",
    quote: "The Own Your Mic program transformed my public speaking skills completely.",
  },
  {
    name: "Jane Smith",
    role: "Coaching Alumni",
    quote: "Kalekye’s hosting skills brought life to our corporate event.",
  },
  {
    name: "James Bond",
    role: "Podcast Listener",
    quote: "Kalekye’s hosting skills brought life to our corporate event.",
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
        },
      },
    ],
  };

  return (
    <section className="py-12 bg-gray-50 border border-solid shadow-md m-8" aria-labelledby="testimonials-section">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-8" id="testimonials-section">
          What People Are Saying
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <p className="text-xl italic text-gray-700 mb-4">&quot;{testimonial.quote}&quot;</p>
              <p className="font-semibold text-gray-800">{testimonial.name}</p>
              <p className="text-gray-600">{testimonial.role}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSlider;
