import useAuth from '../../../../hooks/useAuth'

const LeaderBoard = () => {
  const { user } = useAuth()
  return (
    <div className="overflow-x-auto mt-20">
      <h1 className="text-3xl divider">Leaderboard</h1>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>120</th>
            <td>Cy Ganderton</td>
            <td>370.0</td>
          </tr>
          <tr className="bg-base-200">
            <th>121</th>
            <td>{user?.displayName}</td>
            <td>369.5</td>
          </tr>
          <tr>
            <th>123</th>
            <td>Brice Swyre</td>
            <td>369.2</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default LeaderBoard
