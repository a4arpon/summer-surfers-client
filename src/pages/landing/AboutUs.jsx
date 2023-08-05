import WhoWeAre from '../../components/others/WhoWeAre'

const AboutUs = () => {
  const who_us = [
    {
      id: 1,
      img: 'https://i.pinimg.com/564x/60/1c/08/601c0874f6548ba61e2c37eb9b0a0ada.jpg',
      title: 'Harly Kay',
      position: 'Sr. Photographer',
      where: 'Butterfly Weeds And Events',
    },
    {
      id: 2,
      img: 'https://i.pinimg.com/564x/2f/b8/9d/2fb89daea3ef5b860c4daeb68932bb96.jpg',
      title: 'Riva Syline',
      position: 'Jr. Photographer',
      where: 'Sedona News And Times',
    },
    {
      id: 3,
      img: 'https://i.pinimg.com/564x/f3/b3/06/f3b3067eee5a4790d061cc7e822a45c1.jpg',
      title: 'Silvia Aman',
      position: 'Passionate Photographer',
      where: "Silvia's Collections",
    },
    {
      id: 4,
      img: 'https://i.pinimg.com/564x/bd/44/00/bd4400b1116bd2ed160672986b20ecdb.jpg',
      title: 'Zandalee Smit',
      position: 'Jr. Model and Photographer',
      where: "Rubi's Fashion Collection",
    },
    {
      id: 5,
      img: 'https://i.pinimg.com/564x/93/05/49/930549720389bcc2d7aea7f6f4de459b.jpg',
      title: 'WESTON BOUCHÉR',
      position: 'Photographer And Songwriter',
      where: 'San Diego Brothers',
    },
    {
      id: 6,
      img: 'https://i.pinimg.com/564x/3f/75/6f/3f756fe4ce439e72bd4fa36c63ea6e6b.jpg',
      title: 'Zaddy Freed',
      position: 'Photographer',
      where: 'Cannon Beach',
    },
    {
      id: 7,
      img: 'https://i.pinimg.com/564x/0d/3b/b0/0d3bb05588b9c5860200a56c03b51100.jpg',
      title: 'Watson Ben',
      position: 'Jr. Reporter',
      where: 'NewYork Times',
    },
    {
      id: 8,
      img: 'https://i.pinimg.com/564x/bb/b2/4b/bbb24b1b787af32c90b3024b3d72aadc.jpg',
      title: 'Alen',
      position: 'Passionate Photographer',
      where: 'Washington DC.',
    },
  ]
  return (
    <div className="border-2 p-3 rounded-lg my-20">
      <h2 className="mb-10 text-3xl border-b-2 pb-2 text-center">
        Our Greatest Student Of All Time
      </h2>
      <div className="grid lg:grid-cols-4 gap-x-3 gap-y-5">
        {who_us?.map((student) => (
          <WhoWeAre about={student} key={student.id} />
        ))}
      </div>
    </div>
  )
}

export default AboutUs
