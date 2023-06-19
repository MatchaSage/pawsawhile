import React from "react";

export default function PawsTestimonials() {
  return (
    <div className="paws-testimonials d-flex flex-column p-5 text-light">
      <h1 className="align-self-center mb-4">Testimonials</h1>
      <div className="testimonial-container d-flex flex-column flex-md-row">
        <div className="testimonial-inner-container d-flex flex-column">
          <p className="testimonial">
            "With sincere gratitude and appreciation for all you do for our
            pets. We love them and know they are in loving, good care when we
            gave them to you. Thanks for all you did for our little Kara Bear,
            gone too soon."
          </p>
          <span>-David and Laura Binkles</span>
        </div>
        <div className="testimonial-inner-container d-flex flex-column">
          <p className="testimonial">
            "We wanted you to know how much we appreciated the thoughtful way in
            which you presented our dog Slider back to use. It was done in a
            beautiful way & it meant so much to us to know that you knew he was
            a very important member of our family and not just a pet. We greatly
            appreciate your kindness. Thank you for your thoughtfulness and
            caring."
          </p>
          <span>-The Sanders Family</span>
        </div>
        <div className="testimonial-inner-container d-flex flex-column">
          <p className="testimonial">
            "Thank you for your kindness at such a difficult time for me. You
            not only took such good care of Bailey for me, but also of me. I
            miss her terribly, she really was my princess."
          </p>
          <span>-Debbie Snyder</span>
        </div>
      </div>
    </div>
  );
}
