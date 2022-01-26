function Main(props){
  return (
    <section className="container activity-section flex">
      {
        props.activityList.map(activity => {
          return (
            <article key={activity.activity} className="activity">
              <div className="activity-info-container flex">
                <h3 className="activity-heading">{activity.activity}</h3>
                <p className="month">{activity.month}</p>
              </div>
              <ul className="dates-menu flex">
                {
                  activity.days.map(day => {
                    return <li onClick={(event) => props.markDate(activity, event)} key={day.id} className={day.isDone ? "date-box active" : "date-box"}>{day.id}</li>
                  })
                }
              </ul>
              <button onClick={() => props.deleteActivity(activity)} className="delete">X</button>
            </article>
          )
        })
      }
    </section>
  )
}
export default Main;


/*
<article className="activity">
        <div className="activity-info-container flex">
          <h3 className="activity-heading">Activity_One</h3>
          <p className="month">January</p>
        </div>
        <ul className="dates-menu flex">
          <li className="date-box">1</li>
          <li className="date-box">2</li>
          <li className="date-box">3</li>
          <li className="date-box">4</li>
          <li className="date-box">5</li>
          <li className="date-box">6</li>
          <li className="date-box">7</li>
          <li className="date-box">8</li>
          <li className="date-box">9</li>
          <li className="date-box">10</li>
          <li className="date-box">11</li>
          <li className="date-box">12</li>
          <li className="date-box">13</li>
          <li className="date-box">14</li>
          <li className="date-box">15</li>
          <li className="date-box">16</li>
          <li className="date-box">17</li>
          <li className="date-box">18</li>
          <li className="date-box">19</li>
          <li className="date-box">20</li>
          <li className="date-box">21</li>
          <li className="date-box">22</li>
          <li className="date-box">23</li>
          <li className="date-box">24</li>
          <li className="date-box">25</li>
          <li className="date-box">26</li>
          <li className="date-box">27</li>
          <li className="date-box">28</li>
          <li className="date-box">29</li>
          <li className="date-box">30</li>
          <li className="date-box">31</li>
        </ul>
      </article>

      {
        props.activityList.map(activity => (
          <article key={activity.activity} className="activity">
            <div className="activity-info-container flex">
              <h3 className="activity-heading">{activity.activity}</h3>
              <p className="month">{activity.month}</p>
            </div>
            <ul className="dates-menu flex">
              {
                Object.keys(activity.days).map((day,index) => {
                  let idx = index + 1;
                  return <li onClick={(event) => props.markDate(activity, event)} key={day} className="date-box">{idx}</li>
                })
              }
            </ul>
          </article>
        ))
      }
*/