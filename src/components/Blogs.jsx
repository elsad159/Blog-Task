import Chart from './ui-components/Chart'
import Range from './ui-components/Range'
import MyPieChart from './ui-components/MyPieChart'

const Blogs = () => {
  return (
    <div style={{ "display": "flex", "alignItems": "center", justifyContent: "space-between" }}>
      <MyPieChart />
      <Chart />
      <Range />
    </div>
  )
}

export default Blogs