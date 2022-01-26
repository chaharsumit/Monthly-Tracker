function Form(props){
  return (
    <div className="container">
      <form onSubmit={props.handleSubmit}>
        <input value={props.inputVal} onChange={props.handleInput} name="activity" type="text" id="activity" placeholder="Enter Activity" className="form-control" />
        <button className="btn-form" type="submit">Add Activity</button>
      </form>
    </div>
  )
}

export default Form;