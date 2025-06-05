import InfoMovie from "@/components/InfoMovie";
const Movie = async ({params}) => {
      const {id} = await params;
  return (
     <InfoMovie id={id}/>
  )
}

export default Movie;