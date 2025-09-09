import React from 'react';

const TeamMemberCard = ({ name, role, image, description, email, phone }) => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between border-t border-gray-300 py-8">
      
      {/* Text Section */}
      <div className="md:w-9/12">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-gray-700 mt-4 max-w-3xl">{description}</p>
        <div className="mt-6 text-sm text-gray-600">
          <p>{email}</p>
          <p>{phone}</p>
        </div>
      </div>

      {/* Role and Image */}
      <div className="md:w-3/12 flex flex-col items-end justify-between mt-6 md:mt-0 text-right">
        <p className="text-md font-medium text-gray-800 mb-4">{role}</p>
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-full object-cover border-2 border-gray-300 shadow"
        />
      </div>
    </div>
  );
};

const AboutTeamLayout = () => {
  const members = [
    {
      name: 'John Doe',
      role: 'CEO',
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
      description:
        'John Doe, our CEO, leads with a vision to revolutionize the way readers interact with eBooks. His strategic guidance ensures T. Hartman remains at the forefront of the digital reading landscape.',
      email: 'info@mysite.com',
      phone: '123-456-7890',
    },
    {
      name: 'Jane Smith',
      role: 'Head of Content Curation',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      description:
        'As the Head of Content Curation, Jane Smith meticulously selects eBooks to create engaging thematic collections. Her expertise ensures a diverse and enriching reading experience for all users.',
      email: 'info@mysite.com',
      phone: '123-456-7890',
    },
  ];

  return (
    <div className="bg-[#faf9f6] px-6 md:px-16 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet the Team</h1>
      <div className="divide-y divide-gray-300">
        {members.map((member, idx) => (
          <TeamMemberCard key={idx} {...member} />
        ))}
      </div>
    </div>
  );
};

export default AboutTeamLayout;
