import TeamCard from "@/components/cards/TeamCard"
import { DIRECTORS, MANAGEMENT } from "@/constants/general"

const LeadershipTeamPage = () => {
  return (
    <>
      <section className="max-container padding-container mt-36">
        <p className="text-generic-500 uppercase font-gilroy-semibold mb-2">Leadership</p>
        <h2 className="bold-48 text-orange-base mb-6">Board of Directors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {DIRECTORS.map((team) =>
            <TeamCard
              key={team.name}
              image={team.image}
              name={team.name}
              position={team.position}
              width={384}
              height={372}
            />
          )}
        </div>
      </section>
      <section className="max-container padding-container mt-32">
        <h1 className="bold-48 text-orange-base mb-6">Management Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {MANAGEMENT.map((team) =>
            <TeamCard
              key={team.name}
              image={team.image}
              name={team.name}
              position={team.position}
            />
          )}
        </div>
      </section>
    </>
  )
}

export default LeadershipTeamPage