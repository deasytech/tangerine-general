interface Props {
  name: string;
  desc: string;
}

const AvailableRidersCard = ({ name, desc }: Props) => {
  return (
    <div className="rounded-2xl space-y-4">
      <p className="text-2xl text-orange-base">{name}</p>
      <div className="text-base text-generic-950 font-gilroy-regular space-y-3 list" dangerouslySetInnerHTML={{ __html: desc }} />
    </div>
  )
}

export default AvailableRidersCard