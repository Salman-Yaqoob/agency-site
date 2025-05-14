import TeamCards from "./TeamCards";

const teamMembers = [
  {
    id: 1,
    name: "John",
    role: "Marketing Expert",
    photo: "/profile/pro.jpg",
  },
  {
    id: 2,
    name: "Mike",
    role: "Digital Marketer",
    photo: "/profile/pro1.jpg",
  },
  {
    id: 3,
    name: "David",
    role: "Creative Designer",
    photo: "/profile/pro2.jpg",
  },
  {
    id: 4,
    name: "Alex",
    role: "SEO Expert",
    photo: "/profile/pro3.jpg",
  },
];

function TeamSection() {
  return (
    <div
      className="dark:bg-secondry-bg mt-10 mb-10 bg-slate-100 py-3"
      id="about"
    >
      <div className="sec-container flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-primary mb-4 text-lg font-bold">
            Our Team Members
          </h2>
          <h4 className="text-4xl font-extrabold tracking-wide">
            Our Creative Team
          </h4>
          <p className="text-tx-medium w-9/12 text-center text-base font-medium">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-7 lg:grid-cols-4 lg:gap-10">
          {teamMembers.map((data, idx) => (
            <TeamCards
              key={idx}
              name={data.name}
              role={data.role}
              photo={data.photo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
