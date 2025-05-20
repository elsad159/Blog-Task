import Chart from './ui-components/Chart'
import Range from './ui-components/Range'
import PieChart from './ui-components/PieChart'

const Blogs = () => {
  return (
    <div style={{ "display": "flex", "alignItems": "center", justifyContent: "space-between" }}>
      <PieChart />
      <Chart />
      <Range />
    </div>
  )
}

export default Blogs