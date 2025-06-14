import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Oniel",
      text: "Gatewise Plc helped me out when I needed it most. The process was super fast and easy!",
    },
    {
      name: "James Leatherson",
      text: "As a small business owner, I really appreciate the flexibility and support I received.",
    },
    {
      name: "Amina Kentral",
      text: "The team was responsive and professional. I’d definitely recommend Gatewise Plc to others.",
    },
    {
      name: "Lukas Meier",
      text: "The entire loan process was quick and hassle-free. I truly appreciate Gatewise Plc's efficiency.",
    },
    {
      name: "Greta Jankauskaitė",
      text: "I received my loan approval the same day. Clear terms and excellent communication throughout.",
    },
    {
      name: "Jonas Becker",
      text: "Gatewise Plc was professional and transparent. I’d recommend them to anyone needing financial support.",
    },
    {
      name: "Eglė Petrauskienė",
      text: "Very helpful staff and a smooth online application process. Everything was clear from the start.",
    },
    {
      name: "Fabian Schuster",
      text: "I’ve dealt with other lenders before, but Gatewise Plc stands out for its honesty and speed.",
    },
    {
      name: "Aistė Kavaliauskaitė",
      text: "Friendly service and no hidden surprises. I felt safe using Gatewise Plc.",
    },
    {
      name: "Tobias Neumann",
      text: "Quick decisions, fair interest rates, and great customer care. What more could I ask for?",
    },
    {
      name: "Mantas Žukauskas",
      text: "The process was surprisingly easy. Gatewise Plc delivered exactly what they promised.",
    },

    {
      name: "Katrin Müller",
      text: "I felt well-informed and supported throughout the process. Gatewise Plc is a service I trust.",
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl md:text-4xl text-green-800 font-bold mb-8">What Our Clients Say</h2>
      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-3">
        {reviews.map((review, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <p className="italic text-gray-700 mb-4">“{review.text}”</p>
            <h4 className="font-semibold text-green-800 text-sm">{review.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
